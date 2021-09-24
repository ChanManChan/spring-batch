package com.u4.springbatch.practice_one;

import org.springframework.batch.core.*;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.stereotype.Service;

import java.io.File;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.INPUT_PATH;
import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.OUTPUT_PATH;

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
                .addParameter(INPUT_PATH, new JobParameter("classpath:files/practice_one/persons.json"))
                .addParameter(OUTPUT_PATH, new JobParameter("output/output.json"))
                .toJobParameters();

        jobLauncher.run(job, jobParameters);
    }

    public void runAnonymizationJob(File file) {

    }
}
