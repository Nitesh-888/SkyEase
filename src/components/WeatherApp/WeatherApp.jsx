import SearchBox from "../SearchBox/SearchBox";
import InfoBox from "../InfoBox/InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] =  useState({
        city : "",
        temp : "",
        tempMin : "",
        tempMax : "",
        feelsLike : "",
        humidity : "",
        desc : "",
        icon : ""
    });

    return (
        <div className="flex justify-evenly items-center">
            <SearchBox setWeatherInfo={setWeatherInfo}/>
            <InfoBox weatherInfo = {weatherInfo}/>
        </div>
    )
}