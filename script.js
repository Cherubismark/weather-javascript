
const apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=2e65ec2382ca464dac1191857242801&q=Nairobi&days=1&aqi=no&alerts=no";

const container = document.getElementById('weatherContainer');

fetch(apiUrl)
  .then(res => res.json()) // convert response to JSON
  .then(data => {
    
    // Getting the forecast object
    const forecastObject = data.forecast;

    const forecastDaysArray = forecastObject.forecastday;

    const todayForecast = forecastDaysArray[0];

    const hourlyForecast = todayForecast.hour;

    const hours = hourlyForecast;

    hours.forEach(hour => {
      const card = document.createElement("div");
      card.className = "weather-card";

      // Filling the card
      card.innerHTML = `
        <strong>${hour.time.slice(11)}</strong><br>
        Temp: ${hour.temp_c} °C<br>
        Cloud: ${hour.cloud} %<br>
        Wind: ${hour.wind_kph} kph<br>
        Dir: ${hour.wind_dir}
      `;

      container.appendChild(card);
    });
  });
