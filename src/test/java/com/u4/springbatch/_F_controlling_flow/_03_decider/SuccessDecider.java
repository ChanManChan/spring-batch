package com.u4.springbatch._F_controlling_flow._03_decider;

import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.job.flow.FlowExecutionStatus;
import org.springframework.batch.core.job.flow.JobExecutionDecider;

public class SuccessDecider implements JobExecutionDecider {

    @Override
    public FlowExecutionStatus decide(JobExecution jobExecution, StepExecution stepExecution) {
        Boolean succeeded = (Boolean) (stepExecution != null ? stepExecution.getExecutionContext().get("succeeded") : null);
        if (Boolean.TRUE.equals(succeeded)) {
            return new FlowExecutionStatus("YES");
        }
        return new FlowExecutionStatus("NO");
    }
}
