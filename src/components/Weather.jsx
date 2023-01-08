
import { useState,useEffect } from "react"
import Loading from "./Loading";
import WeatherForm from "./WeatherForm"
import WeatherMainInfo from "./WeatherMainInfo";


const  Weather = () => {

    const [weather, setWeather] = useState(null)
    
    useEffect(() => {
        loadInfo();
    }, []);
    
    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`;
    }
    , [weather]);
        

    const loadInfo = async ( city  = 'london') => {
        console.log(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            const json = await request.json();
            console.log(json)
            setWeather(json);
        } catch (error) {
            console.log(error)        
        }
    }
    
    
    const handleChangeCity = (city) => {
        loadInfo(city);
        setWeather(null)
    }
    
    console.log(weather)
    console.log('weather')
    
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather= {weather} /> : <Loading/>}
        </div>
    )
}

export default Weather;