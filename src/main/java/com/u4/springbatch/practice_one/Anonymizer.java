package com.u4.springbatch.practice_one;

import org.springframework.batch.core.*;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.stereotype.Service;

@Service
public class Anonymizer {

    private final Job job;
    private final JobLauncher jobLauncher;

    public Anonymizer(Job job, JobLauncher jobLauncher) {
        this.job = job;
        this.jobLauncher = jobLauncher;
    }

    public void runAnonymizationJob() throws JobInstanceAlreadyCompleteException,
            JobExecutionAlreadyRunningException, JobParametersInvalidException, JobRestartException {
        JobParameters jobParameters = new JobParametersBuilder()
                .addParameter("inputPath", new JobParameter("classpath:files/practice_one/persons.json"))
                .addParameter("outputPath", new JobParameter("output/output.json"))
                .toJobParameters();

        jobLauncher.run(job, jobParameters);
    }
}
