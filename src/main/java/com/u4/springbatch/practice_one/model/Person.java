package com.u4.springbatch.practice_one.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Person {

    @JsonProperty("name")
    private String name;
    @JsonProperty("birthday")
    private String birthday;
    @JsonProperty("email")
    private String email;
    @JsonProperty("revenue")
    private Double revenue;
    @JsonProperty("isCustomer")
    private Boolean isCustomer;

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("birthday")
    public String getBirthday() {
        return birthday;
    }

    @JsonProperty("birthday")
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    @JsonProperty("email")
    public String getEmail() {
        return email;
    }

    @JsonProperty("email")
    public void setEmail(String email) {
        this.email = email;
    }

    @JsonProperty("revenue")
    public Double getRevenue() {
        return revenue;
    }

    @JsonProperty("revenue")
    public void setRevenue(Double revenue) {
        this.revenue = revenue;
    }

    @JsonProperty("isCustomer")
    public Boolean getIsCustomer() {
        return isCustomer;
    }

    @JsonProperty("isCustomer")
    public void setIsCustomer(Boolean isCustomer) {
        this.isCustomer = isCustomer;
    }
}