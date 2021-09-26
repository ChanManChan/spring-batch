package com.u4.springbatch.practice_two;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;

@EnableAutoConfiguration
@ComponentScan(basePackageClasses = ProjectTwoApplication.class)
@PropertySource("/context/practice_two.properties")
@EnableBatchProcessing
public class ProjectTwoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectTwoApplication.class);
    }
}