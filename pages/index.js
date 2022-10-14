import { Container } from 'postcss';
import { useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import SearchInput from '../components/SearchInput';
import Sidebar from '../components/Sidebar';
import Principal from '../components/Principal';
import { DEFAULT_CITY_ID } from '../constants';
import TemperatureUnitContext from '../context/TemperatureUnit';
import weatherTypes from '../data/weatherTypes';
import { kelvinToOthers } from '../lib/converter';
import { getWeatherByCityId, getWeatherByCoords } from '../services/api';
import style from '../styles/Home.module.css';


const Home = () => {
  const { temperatureUnit } = useContext(TemperatureUnitContext);
  const [weatherData, setWeatherData] = useState({});
  const [background, setBackground] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { data } = await getWeatherByCoords(
          position.coords.latitude,
          position.coords.longitude,
        );
        setWeatherData(data);
        setBackground(weatherTypes[data.weather[0].icon]);
        setLoading(false);
      },
      async () => {
        const { data } = await getWeatherByCityId(DEFAULT_CITY_ID);
        setWeatherData(data);
        setBackground(weatherTypes[data.weather[0].icon]);
        setLoading(false);
      },
    );
  }, []);

  const onSearch = async (cityId) => {
    const { data } = await getWeatherByCityId(cityId);
    setWeatherData(data);
    setBackground(weatherTypes[data?.weather[0].icon]);
  };

  return (
    <div className={style.app}>
      {loading ? (
        <Loading />
      ) : (
        <div className={`${style.card} ${style[background]}`}>
          <div className={style.info}>
            <SearchInput onSearch={onSearch} />
            <h1 className="text-3xl">{weatherData.name}</h1>
          </div>
          <div className={style.titulo}> <h1>Weather Report</h1></div>

          <div className={style.Principal}>
            <h1>{kelvinToOthers(weatherData?.main?.temp)[temperatureUnit]}C°</h1>
            <Principal data={weatherData} />
          </div>
          
          <div className={style.sidebar}>
            <Sidebar data={weatherData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
