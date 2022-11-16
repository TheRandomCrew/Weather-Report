import { Fragment, useContext } from 'react';
import { kelvinToOthers } from '../lib/converter';
import TemperatureUnitContext from '../context/TemperatureUnit';
import TemperatureSwitch from './TemperatureSwitch';
import styles from '../styles/MainInfo.module.css';

const MainInfo = ({ data }) => {
  const { isCelsius } = useContext(TemperatureUnitContext);
  const { description, icon } = data.weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const { feels_like: feelsLike, temp } = data.main;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1 className={styles.city}>{data?.name}</h1>
          <h1 className={styles.country}>{data?.sys?.country}</h1>
          <p className={styles.icon}>
            <img src={iconUrl} alt={`${description} icon`} />
            {description
              .toUpperCase()
              .split(' ')
              .map((part, i) => (
                <Fragment key={i}>
                  {part}
                  <br />
                </Fragment>
              ))}
          </p>
          <div className="flex">
            <div className="my-6">
              <p className="font-light md:text-3xl text-2xl leading-6">
                Latitude
              </p>
              <p className="font-medium md:text-3xl text-2xl">
                {data?.coord?.lat}
              </p>
            </div>
            <div className="my-6 ml-4">
              <p className="font-light md:text-3xl text-2xl leading-6">
                Longitude
              </p>
              <p className="font-medium md:text-3xl text-2xl">
                {data?.coord?.lon}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          {isCelsius ? (
            <h1 className={styles.temperature}>
              {kelvinToOthers(temp).celsius}
              <span className={styles.temperatureUnit}>°C</span>
            </h1>
          ) : (
            <h1 className={styles.temperature}>
              {kelvinToOthers(temp).fahrenheit}
              <span className={styles.temperatureUnit}>°F</span>
            </h1>
          )}

          <h1 className={styles.feels}>Feels like</h1>

          {isCelsius ? (
            <h1 className={styles.temp}>
              {kelvinToOthers(feelsLike).celsius}
              <span className={styles.tempUnit}>°C</span>
            </h1>
          ) : (
            <h1 className={styles.temp}>
              {kelvinToOthers(feelsLike).fahrenheit}
              <span className={styles.tempUnit}>°F</span>
            </h1>
          )}
          <br />
          <TemperatureSwitch />
        </div>
      </div>
    </>
  );
};

export default MainInfo;
