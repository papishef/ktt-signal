import React from "react";
import { Link } from "@mui/material";
import "./Blob.css"


const Blob = (props) => {
    return (
        <div className="circle">
            <Link className="welcome-links" href={props.link}>
                {props.bgImage && <img src={props.bgImage} alt={props.altText} title={'Enter ' + props.title} />}
                {props.children && <div className="prop-children">{props.children}</div>}
            </Link>
        </div>
    )
}

export default Blob;