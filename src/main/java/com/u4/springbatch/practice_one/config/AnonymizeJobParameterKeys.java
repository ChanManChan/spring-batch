package com.u4.springbatch.practice_one.config;

public interface AnonymizeJobParameterKeys {
    String INPUT_PATH = "inputPath";
    String OUTPUT_PATH = "outputPath";

    String INPUT_PATH_REFERENCE = "#{jobParameters['" + INPUT_PATH + "']}";
    String OUTPUT_PATH_REFERENCE = "#{jobParameters['" + OUTPUT_PATH + "']}";
}
