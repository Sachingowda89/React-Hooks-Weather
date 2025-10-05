import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"WonderLand",
        feelslike:24.82,
        temp:25.05,
        tempMin:25.05,
        tempMax:35.05,
        humidity:47,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
      setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}