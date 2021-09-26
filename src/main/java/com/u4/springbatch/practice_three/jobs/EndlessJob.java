package com.u4.springbatch.practice_three.jobs;

import org.springframework.beans.factory.annotation.Qualifier;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@Inherited()
@Qualifier("EndlessJob")
public @interface EndlessJob {
}