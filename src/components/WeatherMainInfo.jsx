import React from 'react'

const  WeatherMainInfo= ( {weather}) => {
    
    
    return (
    
        <div>
            <div>
                {weather?.location.name}
            </div>
            <div>
                {weather?.location.country}
            </div>
            <div>
                <div>
                    <img src={ `http:${weather?.current.condition.icon}`} width="128" alt = {weather?.current.condition.text} />    
                    
                </div>
                <div>
                    <div>
                        {weather?.current.condition.text}
                    </div>
                    <div>
                        {weather?.current.temp_c} celcius
                    </div>
                </div>
            </div>
            <iframe 
                title = 'mapa' 
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                // src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635439.4380385478!2d${weather?.location.lon}64!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses!2sec!4v1673134389320!5m2!1ses!2sec`}
                style={{marginRight: '10px', border:0}}
                width="300" 
                height="350" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
                
            </iframe>
        </div>
    )
}

export default WeatherMainInfo