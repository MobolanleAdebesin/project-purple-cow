import { React, useEffect, useState } from 'react';

import "./HitButton.css"

const HitButton = (props) => {
    return (
        <div className="HitButton-Container">
            <button className="HitButton-Button" name={props.type} onClick={props.onClick}>{props.type === "hit" ? "Click Me" : "Reset"}</button>
        </div>
    )
}

export default HitButton