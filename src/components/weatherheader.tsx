import React, { MouseEventHandler, useState } from "react";
import getWeather from "../fake_api/weather_webfake";
import {WeatherItem} from "./weatheritem"
import {WeatherList} from "./weatherlist"
import { JsxElement } from "typescript";
import { NavBar } from "./navbar"
import { ButtonProps, ListOfWeathers, PaddingProps } from "../settings/default";



const HeaderField = ({children}: PaddingProps) => {
    const [label, setLabel] = useState<string>("")



    const WeatherButton = ({children}: ButtonProps) => {

        const handleCLick = async (): Promise<void> => {
            const x = await getWeather(ListOfWeathers)
            setLabel(x)
        }


        return(
            <button
                onClick={handleCLick}
                style={{font: "Comic sans"
                }}>
                <span>{children}</span>
                
            </button>
        )
    }

    return(
        <div style={{margin: "30px", padding: "40px", borderStyle: "dashed", borderWidth: "5px", display: "flex", justifyContent: "center", }}
            >
            <div style={{display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column"}}>
                {children}            
                <WeatherButton >Generate the weather</WeatherButton>
                <h1>{label}</h1>
        </div>
        
    </div>
    )
}



export const WeatherHeader = () => {
    return(
        <HeaderField />
    )
}