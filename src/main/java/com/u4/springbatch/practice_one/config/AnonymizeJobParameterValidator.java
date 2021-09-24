package com.u4.springbatch.practice_one.config;

import org.apache.commons.io.FilenameUtils;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.job.DefaultJobParametersValidator;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.INPUT_PATH;
import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.OUTPUT_PATH;

public class AnonymizeJobParameterValidator extends DefaultJobParametersValidator {
    private static final String[] REQUIRED_KEYS = {INPUT_PATH, OUTPUT_PATH};
    private static final String[] OPTIONAL_KEYS = {};

    public AnonymizeJobParameterValidator() {
        super(REQUIRED_KEYS, OPTIONAL_KEYS);
    }

    @Override
    public void validate(JobParameters parameters) throws JobParametersInvalidException {
        super.validate(parameters);
        String inputPath = parameters.getString(INPUT_PATH);
        String extension = FilenameUtils.getExtension(inputPath);
        if (extension == null || !extension.equals("json")) {
            throw new JobParametersInvalidException("Input file must be in JSON format");
        }
    }
}
