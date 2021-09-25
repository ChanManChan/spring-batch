package com.u4.springbatch.practice_one;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.stereotype.Component;

import java.io.File;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.*;
import static com.u4.springbatch.practice_one.utils.CourseUtils.deleteFile;
import static com.u4.springbatch.practice_one.utils.CourseUtils.moveFileToDirectory;

@Component
public class FileHandlingJobExecutionListenerImpl implements FileHandlingJobExecutionListener {
    @Override
    public void beforeJob(JobExecution jobExecution) {
        JobParameters jobParameters = jobExecution.getJobParameters();
        // upload path is public/upload dir
        String uploadedFile = jobParameters.getString(UPLOAD_PATH);
        // input path is private/processing dir
        String inputFile = jobParameters.getString(INPUT_PATH);
        // move the file from upload dir to processing dir to start anonymization (to start processing)
        moveFileToDirectory(new File(uploadedFile), new File(inputFile).getParent());
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        JobParameters jobParameters = jobExecution.getJobParameters();
        // input path is private/processing dir
        String inputFile = jobParameters.getString(INPUT_PATH);

        if (jobExecution.getStatus().equals(BatchStatus.COMPLETED)) {
            // if job is completed, delete the file from private/processing dir
            deleteFile(inputFile);
        } else {
            String errorFile = jobParameters.getString(ERROR_PATH);
            // if job is not completed, move the file from private/processing dir to public/error dir
            moveFileToDirectory(new File(inputFile), new File(errorFile).getParent());
        }
    }
}
