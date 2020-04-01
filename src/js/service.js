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
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;
    const res = await useFetch(url);
    data = {
      main: res.weather[0].main,
      description: res.weather[0].description,
      icon: res.weather[0].icon,
      date: res.dt,
      clouds: res.clouds.all,
      rain: res.rain,
      humidity: res.main.humidity,
      pressure: res.main.pressure,
      wind: res.wind,
      temp: {
        feels_like: res.main.feels_like,
        temp: res.main.temp,
        temp_max: res.main.temp_max,
        temp_min: res.main.temp_min,
      },
      sunrise: res.sys.sunrise,
      sunset: res.sys.sunset,
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
