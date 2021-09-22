package com.u4.springbatch.practice_one;

import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@EnableAutoConfiguration
@Configuration
@ComponentScan(basePackageClasses = JobServerApplication.class)
@EntityScan(basePackageClasses = JobServerApplication.class)
@PropertySource("/context/practice_one.properties")
@EnableBatchProcessing
public class JobServerApplication {

    public static void main(String[] args) throws JobInstanceAlreadyCompleteException,
            JobExecutionAlreadyRunningException, JobParametersInvalidException, JobRestartException {
        ConfigurableApplicationContext context = SpringApplication.run(JobServerApplication.class, args);
        Anonymizer anonymizer = context.getBean(Anonymizer.class);
        anonymizer.runAnonymizationJob();
    }
}