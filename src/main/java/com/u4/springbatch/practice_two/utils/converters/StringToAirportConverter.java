package com.u4.springbatch.practice_two.utils.converters;

import com.u4.springbatch.practice_two.model.Airport;
import org.springframework.core.convert.converter.Converter;

public class StringToAirportConverter implements Converter<String, Airport> {

    @Override
    public Airport convert(String source) {
        return Airport.valueOf(source);
    }
}