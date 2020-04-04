const weatherTemplate = data => `
  <div class="humidity flex">
    <div class="humidityIcon">
    <i class="wi wi-humidity"></i><span class="title">Humidity:</span>
    </div>
    <div class="humidityNumber value">${data.humidity}</div>
  </div>
  <div class="date">
    <i class="wi wi-time-${data.hour}"></i><span class="title">At:</span>
    <div class="dayName">${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(data.date)}</div>
    <div class="dayNumber">
${data.date.getDate()}/${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(data.date)}/${
  data.date.getFullYear()
}@${data.date.getHours()}:${data.date.getMinutes()}
    </div>
  </div>
  <div class="place">
    <div class="city">${data.city}</div>
    <div class="country">${data.country}</div>
  </div>
  <div class="temperatures">
    <div class="info">      
      <div class="title"><i class="wi wi-thermometer" style="color: #054A58;"></i>Temperature</div>
      <div class="flex">
        <span id="temp">${data.temp.temp}</span><span class="wi wi-celsius" id="temp-icon"></span>
        <p>Feels like <b id="feels">${data.temp.feels_like}</b><b class="wi wi-celsius" id="feels-icon"></b></p>
      </div>
    </div>
    <div class="mid">
      <label class="rocker rocker-small">
        <input type="checkbox" id="metrics">
        <span class="switch-left"><i class="wi wi-fahrenheit"></i></span>
        <span class="switch-right"><i class="wi wi-celsius"></i></span>
      </label>
    </div>
  </div>
  <div class="cloudiness">
    <span class="title">Sky: </span>
    <p><b>${data.description.toUpperCase()}</b></p>
    <div class="flex">
      <img src=${data.icon} alt=${data.main}>
      <div>
        <p>Cloudiness:</p>
        <span class="value">${data.clouds}</span>
      </div
    </div>
  </div>
  <div class="moreInfo">
    <details>
      <summary>More info</summary>
      <div>
      <span class="title">Wind: </span>${data.wind.speed} 
<i class="wi wi-wind towards-${
  data.wind.deg
}-deg">
        </i>${data.wind.deg}°
      </div>
      <p>
        <i class="wi wi-sunrise"></i><span class="title">Sunrise:</span> ${data.sunrise}
      </p>
      <p>
        <i class="wi wi-sunset"></i><span class="title">Sunset:</span> ${data.sunset}
      </p>
      <p>
        <i class="wi wi-barometer"></i> <span class="title">Pressure:</span> ${data.pressure}
      </p>
${
  data.rain
    ? `<p><i class="wi wi-umbrella"></i><span class="title">Rain:</span> ${data.rain}</p>`
    : ''
}
    </details> 
  </div>
`;

export default weatherTemplate;
