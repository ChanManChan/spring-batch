package com.u4.springbatch.practice_one.config;

import com.u4.springbatch.practice_one.model.Person;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.json.JsonFileItemWriter;
import org.springframework.batch.item.json.JsonItemReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JobConfiguration {

    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ProcessorConfiguration processorConfiguration;
    private final JsonItemReader<Person> itemReader;
    private final JsonFileItemWriter<Person> itemWriter;

    public JobConfiguration(JobBuilderFactory jobBuilderFactory, StepBuilderFactory stepBuilderFactory,
                            ProcessorConfiguration processorConfiguration, JsonItemReader<Person> itemReader, JsonFileItemWriter<Person> itemWriter) {
        this.jobBuilderFactory = jobBuilderFactory;
        this.stepBuilderFactory = stepBuilderFactory;
        this.processorConfiguration = processorConfiguration;
        this.itemReader = itemReader;
        this.itemWriter = itemWriter;
    }

    @Bean
    public Job job(ItemReader<Person> reader, ItemWriter<Person> writer) {
        return jobBuilderFactory.get("anonymizeJob")
                .start(step(reader, writer))
                .validator(new AnonymizeJobParameterValidator())
                .build();
    }

    @Bean
    @JobScope
    public Step step(ItemReader<Person> reader, ItemWriter<Person> writer) {
        return stepBuilderFactory.get("anonymizeStep")
                .<Person, Person>chunk(1)
                .reader(itemReader)
                .processor(processorConfiguration)
                .writer(itemWriter)
                .build();
    }
}