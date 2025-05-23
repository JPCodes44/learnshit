import React from "react";
import { PaddingProps } from "../settings/default";
import { ListProps } from "../settings/default";


export const WeatherList = ({children}: ListProps) => {
    return (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"}}>
          <li
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              padding: "16px",
              marginBottom: "12px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
              
            }}
          >
            {children}
          </li>
        </ul>
      );
    }