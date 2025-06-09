import React from "react";
import { WeatherList } from "./WeatherList";
import { NavBar } from "../Navbar/NavBar";
import { WeatherHeader } from "./WeatherHeader";
import { WeatherFooter } from "./WeatherFooter";
import { BodyPaddingProps } from "../../settings/default";
import { weatherTheme } from "../../../theme/defaulttheme";



export const BodyPadding = ({children}: BodyPaddingProps) => {
    return(
    <div style={{
        margin: weatherTheme.spacings.xl,
        padding: weatherTheme.spacings.xxl,
        borderStyle: weatherTheme.borders.styles.dashed,
        borderWidth: weatherTheme.borders.widths.thick,
    }}
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