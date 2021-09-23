package com.u4.springbatch.practice_one.config;

import com.u4.springbatch.practice_one.model.Person;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.stereotype.Component;

@Component
@StepScope
public class ProcessorConfiguration implements ItemProcessor<Person, Person> {
    @Override
    public Person process(Person person) throws Exception {
        if (Boolean.TRUE.equals(person.getIsCustomer())) {
            return person;
        } else {
            return null;
        }
    }
}
