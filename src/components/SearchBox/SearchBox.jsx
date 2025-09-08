import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import "./SearchBox.css";
export default function SearchBox({setWeatherInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let getWeatherInfo = async () => {
        try{
            let responseJson = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let response = await responseJson.json();
            console.log(response);
            let data = {
                city : city,
                temp : response.main.temp,
                tempMin : response.main.temp_min,
                tempMax : response.main.temp_max,
                feelsLike : response.main.feels_like,
                humidity : response.main.humidity,
                desc : response.weather[0].description,
                icon : response.weather[0].icon
            };
            console.log(data);
            return data;
        }catch(err){
            throw (err);
            
        }
    }

    function handleChange(event){
        setCity(event.target.value);
        console.log(event.target.value);
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            setWeatherInfo(newInfo);
        }catch(err){
            setErr(true);
        }
    }
    return (
        <div id = "SearchBox" className='text-center'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city name" variant="outlined" value = {city} onChange={handleChange} required/>
                <br /> <br />
                <Button variant="contained" type='submit' >Search</Button>
            </form>
            {err && <p>No such place exits!</p>}
        </div>
    )
}