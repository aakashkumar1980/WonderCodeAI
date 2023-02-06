package com.java.aadityadesigners.chatgpt.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntityAttribute {
    private String name;
    private String type;

    @JsonInclude(Include.NON_NULL)
    private String mappingType;

    // getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }    

        public String getMappingType() { return mappingType; }
    public void setMappingType(String mappingType) { this.mappingType = mappingType; } 
}
