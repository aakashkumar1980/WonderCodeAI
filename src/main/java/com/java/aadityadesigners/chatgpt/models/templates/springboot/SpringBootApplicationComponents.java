package com.java.aadityadesigners.chatgpt.models.templates.springboot;

import com.java.aadityadesigners.chatgpt.models.Controller;
import com.java.aadityadesigners.chatgpt.models.Entity;

public class SpringBootApplicationComponents {
    private String basePackage;
    private Entity[] entity;
    private Controller[] service;

    
    // getters and setters
    public String getBasePackage() { return basePackage; }
    public void setBasePackage(String basePackage) { this.basePackage = basePackage; }

    public Entity[] getEntity() { return entity; }
    public void setEntity(Entity[] entity) { this.entity = entity; }

    public Controller[] getService() { return service; }
    public void setService(Controller[] service) { this.service = service; }

}
