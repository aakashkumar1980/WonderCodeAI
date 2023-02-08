package com.java.aadityadesigners.chatgpt.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;;

public class Components {
    @JsonInclude(Include.NON_NULL)
    private String entity;

    private String service;
    private String unitTest;

    @JsonInclude(Include.NON_NULL)
    private String model;
    @JsonInclude(Include.NON_NULL)
    private String component;


    // getters and setters
    public String getEntity() { return entity; }
    public void setEntity(String entity) { this.entity = entity; }

    public String getService() { return service; }
    public void setService(String service) { this.service = service; }

    public String getUnitTest() { return unitTest; }
    public void setUnitTest(String unitTest) { this.unitTest = unitTest; }    


    public String getComponent() { return component; }
    public void setComponent(String component) { this.component = component; }
    
    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

}