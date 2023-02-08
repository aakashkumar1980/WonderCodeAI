package com.java.aadityadesigners.chatgpt;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.java.aadityadesigners.chatgpt.models.Components;
import com.java.aadityadesigners.chatgpt.models.specs.Specs;
import com.java.aadityadesigners.chatgpt.models.specs.TechnologySpecs;
import com.java.aadityadesigners.chatgpt.models.templates.Templates;

public class Utils {

    private static String sanatizeData(String text) {
      // skip other garbage characters
      text = StringUtils.replace(text, "}\",", "}");
      return text.trim();
    }
    public static String skipQuotes(String input) {
        return StringUtils.replace(input, "\"", "");
    }
    public static String formatNewLine(String input) {
        return StringUtils.replace(input, "\\n", "\r\n");
    }
    public static String formatTab(String input) {
        return StringUtils.replace(input, "\\t", "    ");
    }
    public static String escapeBackslashInQuotes(String input) {
        return StringUtils.replace(input, "\\\"", "\"");
    }
    public static String correctJavaXImport(String input) {
        return StringUtils.replace(input, "javax.", "jakarta.");
    }

    @Deprecated
    /* Use API instead 
    public static Templates loadTemplate(File template) throws IOException {
        ObjectMapper mapper = new ObjectMapper(new JsonFactory());
        
        String fileContents = FileUtils.readFileToString(template, Charset.defaultCharset());
        String technologySpec = StringUtils.substringBetween(fileContents, "\"technology-spec\":", "\"application-components\":");
        technologySpec = StringUtils.replaceEachRepeatedly(technologySpec, new String[]{"\n","\"",","," "}, new String[]{"","","",""});

        if(StringUtils.contains(technologySpec, SpringBootTemplate.TAG)) {
            return  mapper.readValue(FileUtils.openInputStream(template), SpringBootTemplate.class);
        } else {
            System.err.println(String.format(
                "<!> WARNING: No support exists for %s. Please contact Technical team for implementation if needed.",
                technologySpec
            ));
            return null;
        }
    }
    */

    public static Boolean isTechnologySpecsDefined(TechnologySpecs technologySpecs, Templates tpl) {
        for (int index = 0; index < technologySpecs.getSpecs().length; index++) {
            Specs spec = technologySpecs.getSpecs()[index];
            
            if(StringUtils.equals(spec.getName(), tpl.getTechnologySpec())) 
                return Boolean.TRUE;
        }

        return Boolean.FALSE;
    }

    public static Components getTechnologySpecComponents(TechnologySpecs technologySpecs, String templateTag) {
        for (int index = 0; index < technologySpecs.getSpecs().length; index++) {
            Specs spec = technologySpecs.getSpecs()[index];
            if(StringUtils.equals(spec.getName(), templateTag)) {
                return spec.getComponents();
            }
        }

        return null;
    }




    /** 
     * This method is used to make ChatGPT API calls.
     * REST API Calls
     * 
    */
    private final static String CHATGPT_API_KEY = "";
    private final static String CHATGPT_API = "https://api.openai.com/v1/completions";

    public static void restAPICall(String requestJson, String classPackage, File file) throws Exception {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        final HttpPost httpPost = new HttpPost(CHATGPT_API);
        final StringEntity entity = new StringEntity(requestJson);
        httpPost.setEntity(entity);
        httpPost.setHeader("Content-type", "application/json");
        httpPost.setHeader("Authorization", "Bearer "+CHATGPT_API_KEY);

        BufferedReader reader= null;
        try {
            CloseableHttpResponse httpResponse = httpClient.execute(httpPost);
            String response = IOUtils.toString(httpResponse.getEntity().getContent(), Charset.defaultCharset());

            int statusCode= httpResponse.getStatusLine().getStatusCode();
            if(statusCode!= 200) {
                String error = StringUtils.substringBetween(response, "\"message\":", "\"type\"");
                throw new Exception("ERROR: "+error);
            }
            
            String classData = StringUtils.substringBetween(response, "\"text\":\"", "\"index\"");
            classData = Utils.correctJavaXImport(
                Utils.escapeBackslashInQuotes(
                    Utils.formatTab(
                        Utils.formatNewLine(
                            Utils.sanatizeData(classData)
                        )
                    )
                )
            );
            FileUtils.writeStringToFile(file, (classPackage + classData), Charset.defaultCharset(), Boolean.TRUE);

        } catch (Exception e) {
            throw e;
        } finally {
            if(reader!=null) reader.close();
            httpClient.close();
        }
    }


}
