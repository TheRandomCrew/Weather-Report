import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import MainInfo from '../components/MainInfo';
import SearchInput from '../components/SearchInput';
import Sidebar from '../components/Sidebar';
import { DEFAULT_CITY_ID } from '../constants';
import weatherTypes from '../data/weatherTypes';
import { getWeatherByCityId, getWeatherByCoords } from '../services/api';
import style from '../styles/Home.module.css';

const Home = () => {
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
        <div className={style[background]}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <div className={style.main}>
                <div className={style.titleContainer}>
                  <h1 className={style.title}>Weather Report</h1>
                  <h3 className={style.caption}>
                    Check the weather easier than ever
                  </h3>
                </div>
                <div className={style.info}>
                  <SearchInput onSearch={onSearch} />
                </div>

                <div className={style.mainContainer}>
                  <MainInfo data={weatherData} />
                </div>
              </div>
              <div className={style.sidebar}>
                <Sidebar data={weatherData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
