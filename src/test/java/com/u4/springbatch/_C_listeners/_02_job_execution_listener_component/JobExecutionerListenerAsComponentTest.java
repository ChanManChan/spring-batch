package com.u4.springbatch._C_listeners._02_job_execution_listener_component;


import org.junit.jupiter.api.Test;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootTest(classes = {JobExecutionerListenerAsComponentTest.TestConfig.class, JobListenerAsComponent.class, StepResultHolder.class})
class JobExecutionerListenerAsComponentTest {

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @Test
    void test() throws Exception {
        JobParameters jobParameters = new JobParametersBuilder()
                .addParameter("outputText", new JobParameter("Hello Spring Batch"))
                .toJobParameters();
        jobLauncherTestUtils.launchJob(jobParameters);
    }

    @Configuration
    @EnableBatchProcessing
    static class TestConfig {

        @Autowired
        private JobBuilderFactory jobBuilderFactory;

        @Autowired
        private StepBuilderFactory stepBuilderFactory;

        @Autowired
        private JobListenerAsComponent jobListenerAsComponent;

        @Autowired
        private StepResultHolder stepResultHolder;

        @Bean
        public Job executionListenerJob(Step step) {
            return jobBuilderFactory.get("helloWorldJob")
                    .start(step)
                    .listener(jobListenerAsComponent)
                    .build();
        }

        @Bean
        @JobScope
        public Step step(StepResultHolder stepResultHolder) {
            return stepBuilderFactory.get("annotationListenerTest")
                    .tasklet((contribution, chunkContext) -> {
                        String result = "Tasklet result from step";
                        stepResultHolder.setResult(result);
                        return RepeatStatus.FINISHED;
                    }).build();
        }

        @Bean
        public JobLauncherTestUtils utils() {
            return new JobLauncherTestUtils();
        }
    }
}
