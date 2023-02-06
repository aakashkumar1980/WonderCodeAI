package com.java.aadityadesigners.chatgpt.models;


public class Dto {
    private String name;
    private DtoAttribute[] attributes;

    // getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public DtoAttribute[] getAttributes() { return attributes; }
    public void setAttributes(DtoAttribute[] attributes) { this.attributes = attributes; }    
}
