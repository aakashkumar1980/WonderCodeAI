package com.java.aadityadesigners.chatgpt.api;

import java.io.File;
import java.nio.file.Paths;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.java.aadityadesigners.chatgpt.AngularImplementation;
import com.java.aadityadesigners.chatgpt.SpringBootImplementation;
import com.java.aadityadesigners.chatgpt.models.specs.TechnologySpecs;
import com.java.aadityadesigners.chatgpt.models.templates.angular.AngularTemplate;
import com.java.aadityadesigners.chatgpt.models.templates.springboot.SpringBootTemplate;

@RestController
public class WonderCodeAIController {

    Logger LOGGER = LogManager.getLogger(WonderCodeAIController.class);

    @GetMapping("/")
    public String welcome() {
        return "Welcome to WonderCodeAI, the tool for generating automated project codes using ChatGPT AI services";
    }

    /** PROCESS */
    private final static String PROJECT_PATH = Paths.get("").toAbsolutePath().toString() + "/";
    private final static String TECHNOLOGY_SPECS = PROJECT_PATH + "src/main/resources/templates/technology-specs.json";
    private final static String STAGING_AREA = PROJECT_PATH + "src/main/resources/staging/";

    ObjectMapper mapper = new ObjectMapper(new JsonFactory());

    @Autowired
    SpringBootImplementation springBootImplementation;

    @CrossOrigin(origins = "*")
    @PostMapping("/code-generate/spring-boot")
    public void generateSpringBootCode(@RequestBody SpringBootTemplate tpl) throws Exception {
        TechnologySpecs technologySpecs = mapper.readValue(FileUtils.openInputStream(new File(TECHNOLOGY_SPECS)),
                TechnologySpecs.class);

        springBootImplementation.implementApplicationCode((SpringBootTemplate) tpl, technologySpecs, STAGING_AREA,
                null, mapper);
    }

    @Autowired
    AngularImplementation angularImplementation;

    @CrossOrigin(origins = "*")
    @PostMapping("/code-generate/angular")
    public void generateAngularCode(@RequestBody AngularTemplate tpl) throws Exception {
        TechnologySpecs technologySpecs = mapper.readValue(FileUtils.openInputStream(new File(TECHNOLOGY_SPECS)),
                TechnologySpecs.class);

        angularImplementation.implementApplicationCode((AngularTemplate) tpl, technologySpecs, STAGING_AREA,
                null, mapper);
    }
}
