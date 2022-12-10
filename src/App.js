import './App.css';
import HitButton from './components/HitButton'

import { React, useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(null);

  // Set Constants 
  const API_KEY = process.env.REACT_APP_COUNT_KEY
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const info = encodeURI(`${BASE_URL}/info/bolaadebesin/${API_KEY}`)
  const hitUrl = encodeURI(`${BASE_URL}/hit/bolaadebesin/${API_KEY}`)
  const resetUrl = encodeURI(`${BASE_URL}/set/bolaadebesin/${API_KEY}?value=0`)
  const style = {
    height: `${30 * count || 30}px`,
    width: `${30 * count || 30}px`,
    backgroundColor: "#5c3977",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    margin: "1rem"
  }

  // Mount Component with initial count/hit value
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


  // onClick function fetches data from countapi
  let onClick = async (e) => {
    e.preventDefault();
    let url
    switch (e.target.name) {
      case "hit":
        url = hitUrl
        break;
      case "reset":
        url = resetUrl
        break;
    }

    let response = await fetch(url)
    if (!response.ok) {
      throw Error(`${response.status}: ${response.statusText}`)
    }
    let data = await response.json()
    setCount(data.value)
  }

  return (
    <div className="App">
      <div className="App-Count-Container">
        <div className="shadow" style={style}>{count}</div>
      </div>
      <HitButton type="hit" onClick={(e) => onClick(e)}></HitButton>
      <HitButton type="reset" onClick={(e) => onClick(e)}></HitButton>

    </div>
  );
}

export default App;
