package com.java.aadityadesigners.chatgpt.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Entity {
    private String name;
    private String table;

    @JsonInclude(Include.NON_NULL)
    private String commentsForChatGPT;
    
    private EntityAttribute[] attributes;
    
    // getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTable() { return table; }
    public void setTable(String table) { this.table = table; }

    public String getCommentsForChatGPT() { return commentsForChatGPT; }
    public void setCommentsForChatGPT(String commentsForChatGPT) { this.commentsForChatGPT = commentsForChatGPT; }

    public EntityAttribute[] getAttributes() { return attributes; }
    public void setAttributes(EntityAttribute[] attributes) { this.attributes = attributes; }    
}
