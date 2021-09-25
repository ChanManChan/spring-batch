package com.u4.springbatch.practice_one.config;

import com.u4.springbatch.practice_one.FileHandlingJobExecutionListenerImpl;
import org.junit.jupiter.api.Test;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.File;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.*;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.verify;

@SpringBootTest(classes = {JobConfigurationTest.TestConfig.class, JobConfiguration.class,
        ProcessorConfiguration.class, ReaderConfiguration.class, WriterConfiguration.class})
class JobConfigurationTest {

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @MockBean
    private FileHandlingJobExecutionListenerImpl fileHandlingJobExecutionListener;

    @Test
    void happyCaseTest() throws Exception {
        JobParameters jobParameters = new JobParametersBuilder()
                .addString(INPUT_PATH, "classpath:practice_one/persons.json")
                .addString(OUTPUT_PATH, "output/unitTestOutput.json")
                .addString(UPLOAD_PATH, "ignored")
                .addString(ERROR_PATH, "ignored")
                .toJobParameters();

        JobExecution jobExecution = jobLauncherTestUtils.launchJob(jobParameters);
        assertThat(jobExecution.getStatus()).isEqualTo(BatchStatus.COMPLETED);
        String outputContent = contentOf(new File("output/unitTestOutput.json"));
        assertThat(outputContent).contains("Wei Lang").doesNotContain("Daliah Shah");
        verify(fileHandlingJobExecutionListener).beforeJob(jobExecution);
        verify(fileHandlingJobExecutionListener).afterJob(jobExecution);
    }

    @Test
    void testInvalidParametersThrowsException() throws Exception {
        assertThatThrownBy(() -> jobLauncherTestUtils.launchJob(new JobParameters()))
                .isInstanceOf(JobParametersInvalidException.class)
                .hasMessageContaining("The JobParameters do not contain required keys: [inputPath, outputPath, uploadPath, errorPath]");
    }

    @Test
    void anonymizeTest() throws Exception {
        JobParameters jobParameters = new JobParametersBuilder()
                .addString(INPUT_PATH, "classpath:practice_one/persons.json")
                .addString(OUTPUT_PATH, "output/unitTestOutput.json")
                .addString(UPLOAD_PATH, "ignored")
                .addString(ERROR_PATH, "ignored")
                .addString(ANONYMIZE, "true")
                .toJobParameters();

        JobExecution jobExecution = jobLauncherTestUtils.launchJob(jobParameters);
        assertThat(jobExecution.getStatus()).isEqualTo(BatchStatus.COMPLETED);
        String outputContent = contentOf(new File("output/unitTestOutput.json"));
        assertThat(outputContent)
                .doesNotContain("Wei Lang")
                .doesNotContain("Wei.Lang@domain.xyz")
                .doesNotContain("Daliah Shah")
                .doesNotContain("Daliah.Shah@domain.xyz")
                .contains("John Doe");
        verify(fileHandlingJobExecutionListener).beforeJob(jobExecution);
        verify(fileHandlingJobExecutionListener).afterJob(jobExecution);
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