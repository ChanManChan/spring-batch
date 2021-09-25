package com.u4.springbatch.practice_two;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@EnableAutoConfiguration
@Configuration
@ComponentScan(basePackageClasses = Application.class)
@EntityScan(basePackageClasses = Application.class)
@PropertySource("/context/practice_two.properties")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }
}