package com.u4.springbatch.practice_one.config;

import org.junit.jupiter.api.Test;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.File;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.INPUT_PATH;
import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.OUTPUT_PATH;
import static org.assertj.core.api.Assertions.*;

@SpringBootTest(classes = {JobConfigurationTest.TestConfig.class, JobConfiguration.class, ProcessorConfiguration.class, ReaderConfiguration.class, WriterConfiguration.class})
class JobConfigurationTest {

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @Test
    void happyCaseTest() throws Exception {
        JobParameters jobParameters = new JobParametersBuilder()
                .addString(INPUT_PATH, "classpath:practice_one/persons.json")
                .addString(OUTPUT_PATH, "output/unitTestOutput.json")
                .toJobParameters();

        JobExecution jobExecution = jobLauncherTestUtils.launchJob(jobParameters);
        assertThat(jobExecution.getStatus()).isEqualTo(BatchStatus.COMPLETED);
        String outputContent = contentOf(new File("output/unitTestOutput.json"));
        assertThat(outputContent).contains("Wei Lang").doesNotContain("Daliah Shah");
    }

    @Test
    void testInvalidParametersThrowsException() throws Exception {
        assertThatThrownBy(() -> jobLauncherTestUtils.launchJob(new JobParameters()))
                .isInstanceOf(JobParametersInvalidException.class)
                .hasMessageContaining("The JobParameters do not contain required keys: [inputPath, outputPath]");
    }

    @Configuration
    @EnableBatchProcessing
    static class TestConfig {
        @Bean
        public JobLauncherTestUtils jobLauncherTestUtils() {
            return new JobLauncherTestUtils();
        }
    }
}