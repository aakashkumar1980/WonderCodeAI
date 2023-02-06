package com.java.aadityadesigners.chatgpt.models.templates;

import com.java.aadityadesigners.chatgpt.models.Controller;
import com.java.aadityadesigners.chatgpt.models.Dto;
import com.java.aadityadesigners.chatgpt.models.Entity;

public class SpringBootApplicationComponents {
    private String basePackage;
    private Entity[] entity;
    private Controller[] service;
    private Controller[] controller;
    
    // getters and setters
    public String getBasePackage() { return basePackage; }
    public void setBasePackage(String value) { this.basePackage = value; }

    public Entity[] getEntity() { return entity; }
    public void setEntity(Entity[] value) { this.entity = value; }

    public Controller[] getService() { return service; }
    public void setService(Controller[] value) { this.service = value; }

    public Controller[] getController() { return controller; }
    public void setController(Controller[] value) { this.controller = value; }

}
