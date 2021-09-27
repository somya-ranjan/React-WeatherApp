import React, { useEffect, useState } from 'react'
function Weather(props) {
    const {weather}=props;
    // // second to min convert
    let sunriseSec=weather.sys.sunrise;
    let sunrise=new Date(sunriseSec * 1000);
    let timeSunrise=`${sunrise.getHours()}:${sunrise.getMinutes()}`

    let sunsetSec=weather.sys.sunset;
    let sunset=new Date(sunsetSec * 1000);
    let timeSunset=`${sunset.getHours()}:${sunset.getMinutes()}`
    
    // cloud img
    let weatherMode=weather.weather[0].main
    const [mode, setMode] = useState()
    useEffect(()=>{
        if(weatherMode){
            switch(weatherMode){
                case "Clear":
                    setMode("wi-day-sunny");
                    break;
                case "Clouds":
                    setMode("wi-day-cloudy");
                    break;
                case "Haze":
                    setMode("wi-fog");
                    break;
                case "Rain":
                    setMode("wi-day-thunderstorm");
                    break;
                default:
                    setMode("wi-cloud");
            }
        }
    },[weatherMode])
    return (
        <>
            <div className="weatherContener">
                <div className="topSection">
                    <h2><i className="fas fa-thermometer-half"></i>{weather.main.temp}&deg;C &nbsp;<span><i className={`wi ${mode}`}></i>{weatherMode}</span></h2>
                </div>
                <div className="location">
                    <h1><i className="fas fa-street-view"></i>{`${weather.name} , ${weather.sys.country}`}</h1>
                    <div className="date_time">
                        <h3>{new Date().toLocaleDateString()},</h3>
                        <h3>{new Date().toLocaleTimeString()}</h3>
                    </div>
                </div>
                <div className="weatherInfo">
                    <h3>Weather Info</h3>
                    <div className="fistRow">
                        <div className="firstColum">
                            <i className="wi wi-day-sunny"></i>
                            <div className="info">
                                <h4>{weather.main.temp_max}&deg;C</h4>
                                <p>max Temp</p>
                            </div>
                        </div>
                        <div className="secondColum">
                            <i className="wi wi-day-haze"></i>
                            <div className="info">
                                <h4>{weather.main.temp_min}&deg;C</h4>
                                <p>min Temp</p>
                            </div>
                        </div>
                        <div className="thirdColum">
                            <i className="wi wi-humidity"></i>
                            <div className="info">
                                <h4>{weather.main.humidity}</h4>
                                <p>humidity</p>
                            </div>
                        </div>
                    </div> <br /> <br />
                    <div className="secondRow">
                        <div className="firstColum">
                            <i className="wi wi-sunrise"></i>
                            <div className="info">
                                <h4>{timeSunrise} AM</h4>
                                <p>sunrise</p>
                            </div>
                        </div>
                        <div className="secondColum">
                            <i className="wi wi-sunset"></i>
                            <div className="info">
                                <h4>{timeSunset} PM</h4>
                                <p>sunset</p>
                            </div>
                        </div>
                        <div className="thirdColum">
                            <i className="wi wi-barometer"></i>
                            <div className="info">
                                <h4>{weather.wind.speed}</h4>
                                <p>wind</p>
                            </div>
                        </div>
                    </div> <br /> <br />
                    <div className="thirdRow">
                        <div className="firstColum">
                            <i className="wi wi-fog"></i>
                            <div className="info">
                                <h4>{weather.main.pressure}</h4>
                                <p>presure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
