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
  let current = 4119617;

  const setData = async (cityId = current) => {
    const apiKey = 'eb504485b53831c5ccf317ca5d440582';
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
    const res = await useFetch(url);
    data = {
      main: res.weather[0].main,
      description: res.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
      date: Date(res.dt),
      hour: Date(res.dt).toString().split(' ')[4].split(':')[0] % 12,
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
      sunrise: Date(res.sys.sunrise),
      sunset: Date(res.sys.sunset),
      city: res.name,
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
