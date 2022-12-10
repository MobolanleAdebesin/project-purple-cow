import { React, useEffect, useState } from 'react';

import "./HitButton.css"

const HitButton = (props) => {
    // Initialize State
    const [count, setCount] = useState(null);

    // Set Constants 
    const API_KEY = process.env.REACT_APP_COUNT_KEY
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const info = encodeURI(`${BASE_URL}/info/bolaadebesin/${API_KEY}`)
    const url = encodeURI(`${BASE_URL}/hit/bolaadebesin/${API_KEY}`)

    // Mount Componentl with initial count/hit value
    useEffect(() => {

        fetch(info)
            .then(res => {
                if (res.ok) return res.json()
                throw Error(`${res.status}: ${res.statusText}`)
            })
            .then(data => {
                setCount(data.value)
            })
    }, [])

    let onClick = async (e) => {
        e.preventDefault();
        let response = await fetch(url)
        if (!response.ok) {
            throw Error(`${response.status}: ${response.statusText}`)
        }
        let data = await response.json()
        setCount(data.value)
    }

    return (
        <div className="HitButton-Container">
            <div>{count}</div>
            <button className="HitButton-Button" onClick={onClick}>Click Me</button>
        </div>
    )
}

export default HitButton