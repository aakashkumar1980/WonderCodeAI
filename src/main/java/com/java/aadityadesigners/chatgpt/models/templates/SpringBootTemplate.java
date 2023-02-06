package com.java.aadityadesigners.chatgpt.models.templates;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SpringBootTemplate extends Templates {
    public static final String TAG = "spring-boot";
    
    @JsonProperty("application-components")
    public SpringBootApplicationComponents applicatioComponents;

    // getters and setters
    public SpringBootApplicationComponents getApplicationComponents() { return applicatioComponents; }
    public void setApplicationComponents(SpringBootApplicationComponents value) { this.applicatioComponents = value; }

}
