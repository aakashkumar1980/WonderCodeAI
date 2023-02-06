package com.java.aadityadesigners;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.java.aadityadesigners"})
public class ApplicationBootstrap {

	public static void main(String[] args){
		SpringApplication.run(ApplicationBootstrap.class, args);
	}
	
}
