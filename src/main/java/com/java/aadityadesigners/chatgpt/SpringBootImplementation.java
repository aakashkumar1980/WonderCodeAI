package com.java.aadityadesigners.chatgpt;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.java.aadityadesigners.chatgpt.models.Components;
import com.java.aadityadesigners.chatgpt.models.specs.TechnologySpecs;
import com.java.aadityadesigners.chatgpt.models.templates.SpringBootTemplate;

@Service
public class SpringBootImplementation {
    Logger LOGGER = LogManager.getLogger(SpringBootImplementation.class);

    public void implementApplicationCode(
            SpringBootTemplate tpl, TechnologySpecs technologySpecs,
            String STAGING_AREA, String stagingSeperator, ObjectMapper mapper) throws Exception {

        File stagingAreaWithPackagePath = (StringUtils.isNotBlank(stagingSeperator))
                ? (new File((STAGING_AREA + "/" + stagingSeperator) + "/"
                        + StringUtils.replace(tpl.getApplicationComponents().getBasePackage(), ".", "/")))
                : (new File(STAGING_AREA + "/"
                        + StringUtils.replace(tpl.getApplicationComponents().getBasePackage(), ".", "/")));
        if (!stagingAreaWithPackagePath.exists())
            FileUtils.forceMkdir(stagingAreaWithPackagePath);

        String requestJsonTemplate = "{\"model\": \"text-davinci-003\", \"prompt\": \"$chatGptCommand\", \"temperature\": 1, \"max_tokens\": 3000}";
        String classPackage = "package " + tpl.getApplicationComponents().getBasePackage() + ";\r\n";

        Components techSpecComponents = Utils.getTechnologySpecComponents(technologySpecs, tpl.TAG);
        /** ********* **/
        /** 1. Entity **/
        /** ********* **/
        if (tpl.getApplicationComponents().getEntity() != null) {
            for (int index = 0; index < tpl.getApplicationComponents().getEntity().length; index++) {
                String entity = mapper.writeValueAsString(tpl.getApplicationComponents().getEntity()[index]);
                String chatGptCommand = mapper.writeValueAsString(techSpecComponents.getEntity()) + " "
                        + Utils.skipQuotes(entity);
                String requestJson = StringUtils.replace(requestJsonTemplate, "$chatGptCommand",
                        Utils.skipQuotes(chatGptCommand));

                try {
                    String fileName = tpl.getApplicationComponents().getEntity()[index].getName().concat(".java");
                    File file = new File(stagingAreaWithPackagePath + "/" + fileName);
                    if (file.exists())
                        continue;

                    LOGGER.debug("\n requestJson-> " + requestJson);
                    LOGGER.info("Calling ChatGPT API for " + fileName + "\n");
                    Utils.restAPICall(requestJson, classPackage, file);
                } catch (Exception e) {
                    LOGGER.error(e.getMessage());
                    throw new Exception("Error! Retry later");
                }

            }
        }
        /** ********** **/
        /** 2. Service **/
        /** ********** **/
        if (tpl.getApplicationComponents().getService() != null) {
            for (int index = 0; index < tpl.getApplicationComponents().getService().length; index++) {
                for (int index2 = 0; index2 < tpl.getApplicationComponents().getService()[index]
                        .getFunction().length; index2++) {
                    String method = "(class=" + tpl.getApplicationComponents().getService()[index].getName() + ") "
                            + mapper.writeValueAsString(
                                    tpl.getApplicationComponents().getService()[index].getFunction()[index2]);
                    String chatGptCommand = mapper.writeValueAsString(techSpecComponents.getService()) + " "
                            + Utils.skipQuotes(method);
                    String requestJson = StringUtils.replace(requestJsonTemplate, "$chatGptCommand",
                            Utils.skipQuotes(chatGptCommand));

                    try {
                        String fileName = tpl.getApplicationComponents().getService()[index].getName()
                                .concat("" + index2)
                                .concat(".java");
                        String methodName = (tpl.getApplicationComponents().getService()[index].getFunction()[index2])
                                .getName();
                        File file = new File(stagingAreaWithPackagePath + "/" + fileName);
                        if (file.exists())
                            continue;

                        LOGGER.debug("\n requestJson-> " + requestJson);
                        LOGGER.info("Calling ChatGPT API for " + fileName + " (" + methodName + ")\n");
                        Utils.restAPICall(requestJson, classPackage, file);
                    } catch (Exception e) {
                        LOGGER.error(e.getMessage());
                        throw new Exception("Error! Retry later");
                    }
                }

            }
        }
        /** ************* **/
        /** 3. UnitTest **/
        /** ************* **/
        if (tpl.getApplicationComponents().getService() != null) {
            for (int index = 0; index < tpl.getApplicationComponents().getService().length; index++) {
                for (int index2 = 0; index2 < tpl.getApplicationComponents().getService()[index]
                        .getFunction().length; index2++) {

                    String methodName = (tpl.getApplicationComponents().getService()[index].getFunction()[index2])
                            .getName();

                    String method = "(class=" + tpl.getApplicationComponents().getService()[index].getName()+"Test"+ ") "
                            + methodName;
                    String chatGptCommand = mapper.writeValueAsString(techSpecComponents.getUnitTest()) + " "
                            + Utils.skipQuotes(method);
                    String requestJson = StringUtils.replace(requestJsonTemplate, "$chatGptCommand",
                            Utils.skipQuotes(chatGptCommand));

                    try {
                        String fileName = tpl.getApplicationComponents().getService()[index].getName()
                                .concat("Test" + index2)
                                .concat(".java");

                        File file = new File(stagingAreaWithPackagePath + "/" + fileName);
                        if (file.exists())
                            continue;

                        LOGGER.debug("\n requestJson-> " + requestJson);
                        LOGGER.info("Calling ChatGPT API for " + fileName + " (" + methodName + ")\n");
                        Utils.restAPICall(requestJson, classPackage, file);
                    } catch (Exception e) {
                        LOGGER.error(e.getMessage());
                        throw new Exception("Error! Retry later");
                    }
                }

            }
        }

    }
}
