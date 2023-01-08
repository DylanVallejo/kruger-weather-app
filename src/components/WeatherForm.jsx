import { useState } from "react";
import Input from '@mui/material/Input';

import styles from "./WeatherForm.module.css"
const ariaLabel = { 'aria-label': 'description' };


    const  WeatherForm = ({onChangeCity}) => {
        
        const [city, setCity] = useState('')
        
        const  handleChange = ( e ) => {
  
            if (e !== "") setCity(e.target.value);
        }
        
        const handleSubmit = async ( e ) => {
            e.preventDefault();
            await  onChangeCity(  city );
        }
        
        return (
            <form  className={styles.formContainer} onSubmit={handleSubmit}> 
                {/* <input type="text" placeholder="City" onChange={ handleChange } /> */}
                <p >Ingrese una ciudad: </p>
                <Input type="text" placeholder="City" inputProps={ariaLabel}  onChange={ handleChange } />
            </form>
        )
    }

export default WeatherForm;