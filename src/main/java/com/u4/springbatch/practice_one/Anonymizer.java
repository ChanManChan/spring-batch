package com.u4.springbatch.practice_one;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.*;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.stereotype.Service;

import java.io.File;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.*;
import static com.u4.springbatch.practice_one.utils.CourseUtils.getFilePathForDifferentDirectory;
import static com.u4.springbatch.practice_one.utils.CourseUtils.getWorkDirSubDirectory;

@Service
public class Anonymizer {

    private final Job job;
    private final JobLauncher jobLauncher;
    private final Logger logger = LoggerFactory.getLogger(Anonymizer.class);

    public Anonymizer(Job job, JobLauncher jobLauncher) {
        this.job = job;
        this.jobLauncher = jobLauncher;
    }

    public void runAnonymizationJob(File uploadedFile) {
        // public/upload dir
        String uploadedFilePath = uploadedFile.getAbsolutePath();

        String completedDirectory = getWorkDirSubDirectory("public/completed");
        String errorDirectory = getWorkDirSubDirectory("public/error");
        String processingDirectory = getWorkDirSubDirectory("private/processing");

        // construct output, error and processing paths from provided filename from the public/upload directory
        // public/completed
        String outputPath = getFilePathForDifferentDirectory(uploadedFile, completedDirectory);
        // public/error
        String errorPath = getFilePathForDifferentDirectory(uploadedFile, errorDirectory);
        // private/processing (input path for the application)
        String processingPath = getFilePathForDifferentDirectory(uploadedFile, processingDirectory);

        JobParameters jobParameters = new JobParametersBuilder()
                .addString(INPUT_PATH, processingPath)
                .addString(OUTPUT_PATH, outputPath)
                .addString(ERROR_PATH, errorPath)
                .addString(UPLOAD_PATH, uploadedFilePath)
                .addString(ANONYMIZE, "true")
                .toJobParameters();

        try {
            jobLauncher.run(job, jobParameters);
        } catch (JobExecutionAlreadyRunningException e) {
            logger.error("Job is already running", e);
        } catch (JobRestartException e) {
            logger.error("Job cannot be restarted", e);
        } catch (JobInstanceAlreadyCompleteException e) {
            logger.warn("Job is already completed", e);
        } catch (JobParametersInvalidException e) {
            logger.error("Job parameters are invalid", e);
        }
    }
}
