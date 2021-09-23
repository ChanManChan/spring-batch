package com.u4.springbatch.practice_one.config;

import com.u4.springbatch.practice_one.model.Person;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.json.JacksonJsonObjectReader;
import org.springframework.batch.item.json.JsonItemReader;
import org.springframework.batch.item.json.builder.JsonItemReaderBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import static com.u4.springbatch.practice_one.utils.CourseUtils.getFileResource;

@Configuration
public class ReaderConfiguration {

    @Bean("jsonItemReader")
    @StepScope
    public JsonItemReader<Person> reader(@Value("#{jobParameters['inputPath']}") String inputPath) {
        Resource inputResource = getFileResource(inputPath);
        return new JsonItemReaderBuilder<Person>()
                .jsonObjectReader(new JacksonJsonObjectReader<>(Person.class))
                .resource(inputResource)
                .name("jsonItemReader")
                .build();
    }
}
