import React from "react";
import getWeather from "../fake_api/weather_webfake";
import {WeatherItem} from "./weatheritem"
import {WeatherList} from "./weatherlist"
import { JsxElement } from "typescript";
import { NavBar } from "./navbar"

type BodyPaddingProps = {
    children?: React.ReactNode
}

const FooterField = ({children}: BodyPaddingProps) => {
    return(
    <div style={{margin: "30px", padding: "40px", borderStyle: "dashed", borderWidth: "5px" }}
        >{children}
    </div>
    )
}



export const WeatherFooter = () => {
    return(
        <FooterField />
    )
}