import { useContext } from 'react';
import { kelvinToOthers } from '../lib/converter';
import TemperatureUnitContext from '../context/TemperatureUnit';
import styles from '../styles/MainInfo.module.css';

const MainInfo = ({ data }) => {
  const { isCelsius } = useContext(TemperatureUnitContext);
  const iconUrl = `${'http://openweathermap.org/img/wn/'}${data.weather[0].icon}.png`;
  return (

    <>
      <h1 className={styles.city}> {(data?.name)}</h1>
      <h1 className={styles.country}> {(data?.sys?.country)}</h1>

      {isCelsius ? (
      <h1 className={styles.temperature}> {kelvinToOthers(data?.main?.temp).celsius}C°</h1>
      ) : (
        <h1 className={styles.temperature}> {kelvinToOthers(data?.main?.temp).fahrenheit}F°</h1>
      )}

      <h1 className={styles.feels} >feels like</h1>

      {isCelsius ? (
        <h1 className={styles.temp}> {kelvinToOthers(data?.main?.feels_like).celsius}C°</h1>
      ) : (
        <h1 className={styles.temp}> {kelvinToOthers(data?.main?.feels_like).fahrenheit}F°</h1>
      )}

      <p className={styles.Clouds}><img src={iconUrl} alt="icon" />{data.weather[0].description}</p>
    </>
  );
};

export default MainInfo;
