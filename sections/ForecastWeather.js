function displayForecastWeather(city) {
  const forecastWeatherEndpoint = getForecastEndpoint(city);
  console.log(forecastWeatherEndpoint);
  fetch(forecastWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      let forecastList = data.list;

      let predictionsPerDayObj = {};

      forecastList.forEach((forecast) => {
        let { dt } = forecast;
        const day = getDayOfTheWeek(dt);

        if (predictionsPerDayObj[day]) {
          predictionsPerDayObj[day].push(forecast);
        } else {
          predictionsPerDayObj[day] = [forecast];
        }
      });
      let forecastWeatherContainer =
        document.querySelector(".weather-forecast");
      forecastWeatherContainer.innerHTML = "";

      for (let key in predictionsPerDayObj) {
        forecastWeatherContainer.innerHTML += `<h2>${key}</h2>`;

        let forecastList = predictionsPerDayObj[key];

        forecastList.forEach((forecast) => {
          let { dt, main, weather } = forecast;
          let day = getDayOfTheWeek(dt);
          let hour = getHour(dt);
          let iconSrc = getWeatherIcon(weather[0].icon);
          let temp = Math.round(main.temp);
          let description = weather[0].description;
          let realFeel = Math.round(main.feels_like);

          let forecastWeatherContainer =
            document.querySelector(".weather-forecast");

          forecastWeatherContainer.innerHTML += `
            <div class="weather-forecast w-100 d-flex justify-content-between align-items-center border rounded p-4 mb-3 text-align-center">
            <div>${hour}</div>
            <div><img src="${iconSrc}"></div>
            <div><strong class="fs-1">${temp} °C</strong></div>
            <div>${description}</div>
            <div>real feel: <strong>${realFeel} °C</strong> </div>
            </div>
            `;
        });
      }
    });
}
