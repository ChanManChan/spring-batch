package com.u4.springbatch.practice_one.config;

import com.u4.springbatch.practice_one.model.Person;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import static com.u4.springbatch.practice_one.config.AnonymizeJobParameterKeys.ANONYMIZE_REFERENCE;

@Component
@StepScope
public class ProcessorConfiguration implements ItemProcessor<Person, Person> {

    @Value(ANONYMIZE_REFERENCE)
    private String anonymize;

    @Override
    public Person process(Person person) throws Exception {
        if (Boolean.TRUE.equals(person.getIsCustomer())) {
            Person anonymizePerson = new Person();
            anonymizePerson.setEmail(person.getEmail());
            anonymizePerson.setName(person.getName());
            anonymizePerson.setBirthday(person.getBirthday());
            anonymizePerson.setRevenue(person.getRevenue());
            anonymizePerson.setIsCustomer(person.getIsCustomer());
            if (anonymize != null && anonymize.equals("true")) {
                anonymizePerson.setEmail("");
                anonymizePerson.setName("John Doe");
            }
            return anonymizePerson;
        }
        return null;
    }
}
