import { useEffect, useState } from 'react';

import SearchInput from '../components/SearchInput';
import weatherTypes from '../data/weatherTypes';
import { getWeatherByCityId, getWeatherByCoords } from '../services/api';
import style from '../styles/Home.module.css';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [background, setBackground] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { data } = await getWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude,
      );
      setWeatherData(data);
      setBackground(weatherTypes[data.weather[0].icon]);
    }, console.error);
  }, []);

  const onSearch = async (cityId) => {
    const { data } = await getWeatherByCityId(cityId);
    setWeatherData(data);
    setBackground(weatherTypes[data?.weather[0].icon]);
  };

  return (
    <div className={style.app}>
      <div className={`${style.card} ${style[background]}`}>
        <div className={style.info}>
          <SearchInput onSearch={onSearch} />
          <h1 className="text-3xl">{weatherData.name}</h1>
        </div>
        <div className={style.sidebar}>
          <h1 className="text-3xl">More Info</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
