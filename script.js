function getWeather() {
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const cityInput = document.getElementById('cityInput');
  const weatherInfo = document.getElementById('weatherInfo');

  const cityName = cityInput.value.trim();

  if (!cityName) {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
      } else {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const resultHTML = `
          <h2>${cityName}</h2>
          <p>${description}</p>
          <p>${temperature}°C</p>
          <img src="http://openweathermap.org/img/w/${icon}.png" alt="weather icon">
        `;

        weatherInfo.innerHTML = resultHTML;
      }
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

