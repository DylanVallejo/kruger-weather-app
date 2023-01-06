import { useState } from "react"
import WeatherForm from "./WeatherForm"


const  Weather = () => {

    const [weather, setWeather] = useState(null)
    
    
    const loadInfo = async ( city  = 'london') => {
        console.log(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
        try {
            // const request = await fetch(`${process.env.REACT_APP_URL}$key=${process.env.REACT_APP_KEY}&q=${city}`)
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            const json = await request.json();
            console.log(request)  
            
            console.log(json)  
            console.log('json')   
        } catch (error) {
            // console.log(error)
            console.log('errors')
            
        }
    }
    
    
    const handleChangeCity = (city) => {
        setWeather(null)
        loadInfo(city);
    }
    console.log(weather)
    console.log('weather')
    
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>
                {process.env.REACT_APP_URL} variable
                info
                {/* {weather.current.condition.text} */}
            </div>
        </div>
    )
}

export default Weather;