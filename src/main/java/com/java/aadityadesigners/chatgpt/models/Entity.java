package com.java.aadityadesigners.chatgpt.models;


public class Entity {
    private String name;
    private String table;
    private EntityAttribute[] attributes;
    
    // getters and setters
    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public String getTable() { return table; }
    public void setTable(String value) { this.table = value; }

    public EntityAttribute[] getAttributes() { return attributes; }
    public void setAttributes(EntityAttribute[] value) { this.attributes = value; }    
}
