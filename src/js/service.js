const useFetch = async (url) => {
  try {
    return await fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('API Error');
        return res;
      })
      .then(res => res.json())
      .catch(error => error.message);
  } catch (error) {
    return error.message;
  }
};

function weatherAPI() {
  let data = {};
  let current = 3686540;

  const setData = async (cityId = current) => {
    const apiKey = 'eb504485b53831c5ccf317ca5d440582';
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
    const res = await useFetch(url);
    data = {
      main: res.weather[0].main,
      description: res.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
      date: new Date(res.dt * 1000),
      hour: (new Date(res.dt * 100)).getHours() % 12,
      clouds: `${res.clouds.all}%`,
      rain: res.rain ? `${res.rain['1h']} mm` : '<i class="wi wi-na"></i>',
      humidity: `${res.main.humidity}%`,
      pressure: `${res.main.pressure} hPa`,
      wind: {
        speed: `${res.wind.speed} meter/sec`,
        deg: res.wind.deg,
      },
      temp: {
        feels_like: res.main.feels_like,
        temp: res.main.temp,
      },
      sunrise: new Date(res.sys.sunrise * 1000),
      sunset: new Date(res.sys.sunset * 1000),
      city: res.name,
      country: res.sys.country,
    };
    current = cityId;
    return data;
  };

  const getData = cityId => {
    if (cityId !== current) return setData(cityId);
    return data;
  };
  return {
    getData,
    setData,
  };
}

export default weatherAPI;
