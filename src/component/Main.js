import React from 'react'

function Main(props) {
    const {setCity,fetchWeather}=props
    return (
       <>
            <div className="mainContener">
            <h1>Weather App</h1>
                <input type="search" autoFocus="true" placeholder="Enter Your CityName / Zip" onChange={(e)=>{setCity(e.target.value)}}/>
                <button type="submit" onClick={fetchWeather}>Click</button>
            </div>
       </>
    )
}

export default Main
