import React, { useEffect, useState } from 'react'
import Main from './component/Main'
import Weather from './component/Weather'
import axios from 'axios'

const Api_Key="aaa2f82a69c06ab16be84cc35449b6f2"

function App() {
  
  const [city, setCity] = useState("odisha")
  const [weather, setWeather] = useState()

  //api Call
  let GetData=  () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_Key}`)
    .then((response)=>{
      setWeather(response.data);
      // console.log(weather);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  useEffect(()=>{
    GetData()
  },[])

  return (
    <div className="appContener">
      <Main  setCity={setCity} fetchWeather={GetData}/>
      {
        weather ? (
          <Weather weather={weather}/>
        ) :(
          <h1>Data Not Fond</h1>
        )
      }
    </div>
  )
}

export default App
