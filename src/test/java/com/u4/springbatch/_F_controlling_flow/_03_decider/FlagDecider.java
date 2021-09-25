package com.u4.springbatch._F_controlling_flow._03_decider;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.job.flow.FlowExecutionStatus;
import org.springframework.batch.core.job.flow.JobExecutionDecider;

public class FlagDecider implements JobExecutionDecider {

    @Override
    public FlowExecutionStatus decide(JobExecution jobExecution, StepExecution stepExecution) {
        Object flag = stepExecution != null ? stepExecution.getExecutionContext().get("FLAG") : null;
        return new FlowExecutionStatus(String.valueOf(flag));
    }
}
