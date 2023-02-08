package com.java.aadityadesigners.chatgpt.models.templates.springboot;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.java.aadityadesigners.chatgpt.models.templates.Templates;

public class SpringBootTemplate extends Templates {
    public static final String TAG = "spring-boot";
    
    @JsonProperty("application-components")
    public SpringBootApplicationComponents applicatioComponents;

    // getters and setters
    public SpringBootApplicationComponents getApplicationComponents() { return applicatioComponents; }
    public void setApplicationComponents(SpringBootApplicationComponents value) { this.applicatioComponents = value; }

}
