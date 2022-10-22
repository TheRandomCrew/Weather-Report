import { useContext } from 'react';
import { kelvinToOthers } from '../lib/converter';
import TemperatureUnitContext from '../context/TemperatureUnit';
import styles from '../styles/MainInfo.module.css';

const MainInfo = ({ data }) => {
  const { isCelsius } = useContext(TemperatureUnitContext);
  const iconUrl = `${'http://openweathermap.org/img/wn/'}${data.weather[0].icon}@4x.png`;
  const { description } = data.weather[0];
  const { feels_like: feelsLike, temp } = data.main;
  return (

    <>
      <div className={styles.container}>
        <h1 className={styles.city}>{(data?.name)}</h1>
        {isCelsius ? (
          <h1 className={styles.temperature}>{kelvinToOthers(temp).celsius}
            <span className={styles.temperatureNumber}>°C</span>
          </h1>
        ) : (
          <h1 className={styles.temperature}>{kelvinToOthers(temp).fahrenheit}
            <span className={styles.temperatureNumber}>°F</span></h1>
        )}
      </div>

      <div className={styles.container}>
        <h1 className={styles.country}>{(data?.sys?.country)}</h1>
        <h1 className={styles.feels} >Feels like</h1>
      </div>

      {isCelsius ? (
        <h1 className={styles.temp}>{kelvinToOthers(feelsLike).celsius}
          <span className={styles.tempNumber}>°C</span></h1>
      ) : (
        <h1 className={styles.temp}>{kelvinToOthers(feelsLike).fahrenheit}
          <span className={styles.tempNumber}>°F</span></h1>
      )}
      <p className={styles.clouds}><img src={iconUrl} alt="icon" />{description.toUpperCase()}</p>
    </>
  );
};

export default MainInfo;
