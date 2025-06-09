import React from "react";
import { BodyPaddingProps } from "../../settings/default";
import { weatherTheme } from "../../../theme/defaulttheme";

const FooterField = ({children}: BodyPaddingProps) => {
    return(
    <div style={{
        margin: weatherTheme.spacings.xl,
        padding: weatherTheme.spacings.xxl,
        borderStyle: weatherTheme.borders.styles.dashed,
        borderWidth: weatherTheme.borders.widths.thick
    }}
        >{children}
    </div>
    )
}



export const WeatherFooter = () => {
    return(
        <FooterField />
    )
}