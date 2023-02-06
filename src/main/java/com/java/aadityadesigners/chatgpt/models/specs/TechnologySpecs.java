package com.java.aadityadesigners.chatgpt.models.specs;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TechnologySpecs {
    @JsonProperty("technology-spec")
    public Specs[] technologySpec;
    
    // getters and setters
    public Specs[] getSpecs() { return technologySpec; }
    public void setSpecs(Specs[] technologySpec) { this.technologySpec = technologySpec; }
   
}