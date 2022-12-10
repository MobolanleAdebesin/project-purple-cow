import { React, useState } from 'react';

import "./HitButton.css"

const HitButton = (props) => {
    const [count, setCount] = useState(null);

    return (
        <div className="HitButton-Container">
            <button className="HitButton-Button" onClick={() => console.log("This works")}>Click Me</button>
        </div>
    )
}

export default HitButton