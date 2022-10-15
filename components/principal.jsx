import react from 'react';
import Infoprincipal from './Infoprincipal';
import { kelvinToOthers } from '../lib/converter';
import { useContext, useEffect, useState } from 'react';
import TemperatureUnitContext from '../context/TemperatureUnit';
import styles from '../styles/Principal.module.css';


const Principal = ({data}) => {
  const { isCelsius } = useContext(TemperatureUnitContext);
  return (
   
  <>
  <h1 className={styles.ciudad}>{(data?.name)}</h1>
  <h1 className={styles.indicativo}>{(data?.sys?.country)}</h1>
    {isCelsius ? (
      
      <h1 className={styles.temperatura} >{kelvinToOthers(data?.main?.temp).celsius}C°</h1>
    ) : (
      <h1 className={styles.temperatura} >{kelvinToOthers(data?.main?.temp).fahrenheit}F°</h1>
    )}

     <h1 className={styles.felss} >feels like</h1>

{isCelsius ? (
      
      <h1 className={styles.like} > {kelvinToOthers(data?.main?.feels_like).celsius}C°</h1>
    ) : (
      <h1 className={styles.like}>{kelvinToOthers(data?.main?.feels_like).fahrenheit}F°</h1>
    )}

    
    <img className={styles.ima} src="http://openweathermap.org/img/wn/04n@4x.png" alt="Clouds"></img>

    <h1 className={styles.over} >OVERCAST </h1>
    <h1 className={styles.claus} > CLOUSD</h1>
   
  </>

);
};


 

export default Principal;