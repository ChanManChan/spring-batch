package com.u4.springbatch.practice_three;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableAutoConfiguration
@EnableScheduling
@ComponentScan(basePackageClasses = ProjectThreeApplication.class)
@PropertySource("/context/practice_three.properties")
public class ProjectThreeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectThreeApplication.class, args);
    }

}