import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import './SearchBox.css'
export default function SearchBox({updateInfo}){
    let [city, setcity] = useState("");
    let [Error,setError]=useState(false);
      const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // ✅ free API
      const API_KEY = "44b75de5df75a4cc3d453441111424e2";
      
      let getWeatherInfo = async () => {
        try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
           throw err;
        }
      };
    
      let handleChange = (evt) => {
        setcity(evt.target.value);
      };
    
      let handleSubmit = async(evt) => {
        try{
              evt.preventDefault();
        console.log(city);
         setcity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
             setError(true);
        }
      
      };
    
    return( 
       <div>
    
     <div className="SearchBox">
      
      <form onSubmit={handleSubmit}>
        <TextField 
          id="City" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city} 
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
        { Error && <p style={{color:"red"}}> No such place in our API </p>}
      </form>
        </div>
        </div>
    )
}