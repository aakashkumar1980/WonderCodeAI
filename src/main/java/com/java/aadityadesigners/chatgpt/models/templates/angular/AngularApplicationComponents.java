package com.java.aadityadesigners.chatgpt.models.templates.angular;

import com.java.aadityadesigners.chatgpt.models.Controller;
import com.java.aadityadesigners.chatgpt.models.Model;

public class AngularApplicationComponents {
    private String basePackage;
    private Model[] model;
    private Controller[] service;

    
    // getters and setters
    public String getBasePackage() { return basePackage; }
    public void setBasePackage(String basePackage) { this.basePackage = basePackage; }

    public Model[] getModel() { return model; }
    public void setModel(Model[] model) { this.model = model; }

    public Controller[] getService() { return service; }
    public void setService(Controller[] service) { this.service = service; }

}
