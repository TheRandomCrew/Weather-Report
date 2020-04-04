// const images = {
//   sky: {
//     "01d": 'http://openweathermap.org/img/wn/10d@2x.png',
//   }
// }

const weatherTemplate = data => `
  <div class="humidity">
    <div class="humidityIcon">
    <i class="wi wi-humidity"></i>
    </div>
    <div class="humidityNumber">${data.humidity}</div>
  </div>
  <div class="date">
    <i class="wi wi-time-${data.hour}"></i>
    <div class="dayName">${data.date.split(' ')[0]}</div>
    <div class="dayNumber">
${data.date.split(' ')[1]}/${data.date.split(' ')[2]}/${
  data.date.split(' ')[3]
}@${data.date.split(' ')[4]}
    </div>
  </div>
  <div class="place">
    <div class="city">${data.city}</div>
  </div>
  <div class="temperatures">
    <img src="src/img/hot.png" alt="hot">
    <span>${data.temp.temp}</span>
    <p>Feels like <b>${data.temp.feels_like}</b></p>
  </div>
  <div class="cloudiness">
    <img src=${data.icon} alt=${data.main}> ${data.clouds}
  </div>
  <div class="moreInfo">
    <details>
      <summary>More info</summary>
      <div>
        Wind ${data.wind.speed} 
<i class="wi wi-wind towards-${
  data.wind.deg
}-deg">
        </i>${data.wind.deg}°
      </div>
      <p>
        Sunrise <i class="wi wi-sunrise"></i> ${data.sunrise}
      </p>
      <p>
        Sunset <i class="wi wi-sunset"></i> ${data.sunset}
      </p>
      <p>
        Pressure <i class="wi wi-barometer"></i> ${data.pressure}
      </p>
${
  data.rain
    ? `<p>Rain <i class="wi wi-umbrella"></i>${data.rain}</p>`
    : ''
}
      <p>All content and graphics on this web site are the property of its owners</p>
    </details> 
  </div>
`;

export default weatherTemplate;
