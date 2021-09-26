package com.u4.springbatch.practice_two.configuration;

import com.u4.springbatch.practice_two.model.Airport;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.job.flow.FlowExecutionStatus;
import org.springframework.batch.core.job.flow.JobExecutionDecider;

import java.util.Set;

import static com.u4.springbatch.practice_two.AirlineConfiguration.*;
import static com.u4.springbatch.practice_two.AirlineSearchService.JOB_KEY_ARRIVAL_AIRPORT;
import static com.u4.springbatch.practice_two.AirlineSearchService.JOB_KEY_DEPARTURE_AIRPORT;
import static com.u4.springbatch.practice_two.model.Airport.*;

public class ProviderDecider implements JobExecutionDecider {
    @Override
    public FlowExecutionStatus decide(JobExecution jobExecution, StepExecution stepExecution) {
        JobParameters jobParameters = jobExecution.getJobParameters();
        String departureAirport = jobParameters.getString(JOB_KEY_DEPARTURE_AIRPORT);
        String arrivalAirport = jobParameters.getString(JOB_KEY_ARRIVAL_AIRPORT);
        Airport departure = Airport.valueOf(departureAirport);
        Airport arrival = Airport.valueOf(arrivalAirport);
        Set<Airport> flightAirports = Set.of(departure, arrival);

        if (flightAirports.contains(DUBAI) && flightAirports.contains(AMSTERDAM)) {
            return new FlowExecutionStatus(DUBAI_AMSTERDAM_OFFER_TASKLET);
        }
        if (flightAirports.contains(NEWYORK) && flightAirports.contains(AMSTERDAM)) {
            return new FlowExecutionStatus(NEW_YORK_AMSTERDAM_OFFER_TASKLET);
        }
        return new FlowExecutionStatus(NO_OFFER_TASKLET);
    }
}