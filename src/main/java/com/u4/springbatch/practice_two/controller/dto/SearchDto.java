package com.u4.springbatch.practice_two.controller.dto;

import com.u4.springbatch.practice_two.model.Airport;

import java.time.LocalDate;

public class SearchDto {

    public LocalDate flightDate;
    public Airport departureAirport;
    public Airport arrivalAirport;
}