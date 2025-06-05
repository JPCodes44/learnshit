import React from "react";
import { BodyPaddingProps } from "../../settings/default";

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