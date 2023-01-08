import { useState } from "react";

    const  WeatherForm = ({onChangeCity}) => {
        
        const [city, setCity] = useState('')
        
        const  handleChange = ( e ) => {
            // const value = event.target.value;
            if (e !== "") setCity(e.target.value);
        }
        
        const handleSubmit = async ( e ) => {
            e.preventDefault();
            await  onChangeCity(  city );
        }
        
        return (
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="City" onChange={ handleChange } />
                
            </form>
        )
    }

export default WeatherForm;