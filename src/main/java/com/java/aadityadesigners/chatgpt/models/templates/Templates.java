package com.java.aadityadesigners.chatgpt.models.templates;

import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class Templates {
    @JsonProperty("technology-spec")
    public String technologySpec;

    // getters and setters
    public String getTechnologySpec() { return technologySpec; }
    public void setTechnologySpec(String value) { this.technologySpec = value; }
    
}