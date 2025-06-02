import React from "react";
import getWeather from "../fake_api/weather_webfake";
import {WeatherItem} from "./weatheritem"
import {WeatherList} from "./weatherlist"
import { JsxElement } from "typescript";
import { NavBar } from "./navbar"
import { WeatherHeader } from "./weatherheader";
import { WeatherFooter } from "./weatherfooter"
import { BodyPaddingProps, PaddingProps } from "../settings/default";



export const BodyPadding = ({children}: BodyPaddingProps) => {
    return(
    <div style={{margin: "30px", padding: "40px", borderStyle: "dashed", borderWidth: "5px", }}
        >{children}
    </div>
    )
}

export const WeatherForm = () => {
    return(
        <>
            <NavBar />
            <WeatherHeader />
            <BodyPadding>
                <WeatherList>Germany</WeatherList>
                <WeatherList>Canada</WeatherList>
                <WeatherList>US of A</WeatherList>
                <WeatherList>Spain</WeatherList>
                <WeatherList>Poland</WeatherList>
                <WeatherList>Poland</WeatherList>
                <WeatherList>Poland</WeatherList>
                <WeatherList>Poland</WeatherList>
            </BodyPadding>
            <WeatherFooter />
        </>
    )
}