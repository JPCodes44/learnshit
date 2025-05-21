import React from "react";
import getWeather from "../fake_api/weather_webfake";
import {WeatherItem} from "./weatheritem"
import {WeatherList} from "./weatherlist"
import { JsxElement } from "typescript";
import { NavBar } from "./navbar"
import { PaddingProps } from "../settings/default";


const HeaderField = ({children}: PaddingProps) => {
    return(
    <div style={{margin: "30px", padding: "40px", borderStyle: "dashed", borderWidth: "5px" }}
        >{children}
    </div>
    )
}



export const WeatherHeader = () => {
    return(
        <HeaderField />
    )
}