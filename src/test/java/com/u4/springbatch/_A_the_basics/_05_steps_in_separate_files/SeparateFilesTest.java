package com.u4.springbatch._A_the_basics._05_steps_in_separate_files;

import com.u4.springbatch._A_the_basics._05_steps_in_separate_files.config.BatchConfig;
import com.u4.springbatch._A_the_basics._05_steps_in_separate_files.dto.InputData;
import com.u4.springbatch._A_the_basics._05_steps_in_separate_files.processor.UpperCaseJsonProcessor;
import org.junit.jupiter.api.Test;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedList;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = {BatchConfig.class, UpperCaseJsonProcessor.class, SeparateFilesTest.TestConfig.class})
@EnableBatchProcessing
class SeparateFilesTest {

    @Autowired
    private Job job;

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @Test
    void testJob() throws Exception {
        InputData inputData = new InputData();
        inputData.value = "My test data with in memory reader";
        TestConfig.inputData.clear();
        TestConfig.inputData.add(inputData);

        JobParameters jobParams = new JobParametersBuilder().addParameter("outputPath", new JobParameter("output/output.json")).toJobParameters();
        JobExecution jobExecution = jobLauncherTestUtils.launchJob(jobParams);
        BatchStatus status = jobExecution.getStatus();
        assertThat(status).isEqualTo(BatchStatus.COMPLETED);
    }

    @Configuration
    static class TestConfig {

        static LinkedList<InputData> inputData = new LinkedList<>();

        @Bean
        public JobLauncherTestUtils jobLauncherTestUtils() {
            return new JobLauncherTestUtils();
        }

        @Bean
        public ItemReader<InputData> itemReader() {
            return () -> inputData.pollFirst();
        }
    }
}
