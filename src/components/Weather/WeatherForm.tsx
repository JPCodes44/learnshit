import React from "react";
import { WeatherList } from "./WeatherList";
import { NavBar } from "../Navbar/NavBar";
import { WeatherHeader } from "./WeatherHeader";
import { WeatherFooter } from "./WeatherFooter";
import { BodyPaddingProps } from "../../settings/default";


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