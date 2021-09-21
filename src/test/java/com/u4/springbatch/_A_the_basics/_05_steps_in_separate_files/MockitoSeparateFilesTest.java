package com.u4.springbatch._A_the_basics._05_steps_in_separate_files;

import com.u4.springbatch._A_the_basics._05_steps_in_separate_files.config.BatchConfig;
import com.u4.springbatch._A_the_basics._05_steps_in_separate_files.dto.InputData;
import com.u4.springbatch._A_the_basics._05_steps_in_separate_files.processor.UpperCaseJsonProcessor;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {BatchConfig.class, UpperCaseJsonProcessor.class, MockitoSeparateFilesTest.TestConfig.class})
@EnableBatchProcessing
class MockitoSeparateFilesTest {

    @Autowired
    private Job job;

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @MockBean
    private ItemReader<InputData> itemReader;

    @Test
    void testJob() throws Exception {
        InputData inputData = new InputData();
        inputData.value = "My test data with mockito and in memory reader";

        when(itemReader.read()).thenReturn(inputData).thenReturn(null);

        JobParameters jobParams = new JobParametersBuilder().addParameter("outputPath", new JobParameter("output/output.json")).toJobParameters();
        JobExecution jobExecution = jobLauncherTestUtils.launchJob(jobParams);
        BatchStatus status = jobExecution.getStatus();
        assertThat(status).isEqualTo(BatchStatus.COMPLETED);
    }

    @Configuration
    static class TestConfig {

        @Bean
        public JobLauncherTestUtils jobLauncherTestUtils() {
            return new JobLauncherTestUtils();
        }

    }
}
