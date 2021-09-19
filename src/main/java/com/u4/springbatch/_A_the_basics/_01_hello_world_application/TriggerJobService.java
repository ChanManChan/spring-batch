package com.u4.springbatch._A_the_basics._01_hello_world_application;

import com.u4.springbatch._A_the_basics._01_hello_world_application.jobconfig.MyJob;
import org.springframework.batch.core.*;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.stereotype.Component;

@Component
public class TriggerJobService {

    private final JobLauncher jobLauncher;
    private final Job job;

    public TriggerJobService(JobLauncher jobLauncher, @MyJob Job job) {
        this.jobLauncher = jobLauncher;
        this.job = job;
    }

    public void runJob() throws JobInstanceAlreadyCompleteException,
            JobExecutionAlreadyRunningException,
            JobParametersInvalidException,
            JobRestartException, InterruptedException {
        JobParameters jobParameters = new JobParametersBuilder()
                .addParameter("outputText", new JobParameter("My first spring boot batch app"))
                .toJobParameters();
        jobLauncher.run(job, jobParameters);

        Thread.sleep(3000);

        JobParameters jobParameters2 = new JobParametersBuilder()
                .addParameter("outputText", new JobParameter("Second run"))
                .toJobParameters();

        jobLauncher.run(job, jobParameters2);
    }
}
