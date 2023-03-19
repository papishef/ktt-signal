import React from "react";
import "./Buttons.css"


export const BlueGradientBtn = props => {
    return <input type="submit" value={props.title} className="BlueGradientBtn" />
}

export const GreenButton = props => {
    return <input type="submit" value={props.title} className="GreenBtn" />
}

export const BlueGradientCurvedBtn = props => {
    return <input type="submit" value={props.title} className="BlueGradientCurvedBtn" />
}
