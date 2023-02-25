import React from "react";
import "./Buttons.css"


export const BlueGradientBtn = props => {
    return <input type="submit" value={props.title} className="BlueGradientBtn" />
}

export const BlueGradientCurvedBtn = props => {
    return <input type="submit" value={props.title} className="BlueGradientCurvedBtn" />
}
