package com.java.aadityadesigners.chatgpt.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Function {
    private String name;

    @JsonInclude(Include.NON_NULL)
    @JsonProperty("processing-logic")
    private String processingLogic;

    // getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getProcessingLogic() { return processingLogic; }
    public void setProcessingLogic(String processingLogic) { this.processingLogic = processingLogic; }    
}
