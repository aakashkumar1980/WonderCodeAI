package com.java.aadityadesigners.chatgpt.models.templates.angular;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.java.aadityadesigners.chatgpt.models.templates.Templates;

public class AngularTemplate extends Templates {
    public static final String TAG = "angular";
    
    @JsonProperty("application-components")
    public AngularApplicationComponents applicatioComponents;

    // getters and setters
    public AngularApplicationComponents getApplicationComponents() { return applicatioComponents; }
    public void setApplicationComponents(AngularApplicationComponents applicatioComponents) { this.applicatioComponents = applicatioComponents; }

}
