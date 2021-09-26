package com.u4.springbatch.practice_three;

import com.u4.springbatch.practice_one.JobServerApplication;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableAutoConfiguration
@Configuration
@EnableScheduling
@ComponentScan(basePackageClasses = JobServerApplication.class)
@EntityScan(basePackageClasses = JobServerApplication.class)
@PropertySource("/context/practice_three.properties")
@EnableBatchProcessing
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}