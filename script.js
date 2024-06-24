const apiKey = 'c7bf7c34503190dee3876f0c25773f2f';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;

axios.get(url, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    const weatherData = response.data;
    const weatherInfo = `
        <h2>Weather in ${weatherData.name}, ${weatherData.sys.country}</h2>
        <p><strong>Temperature:</strong> ${(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
        <p><strong>Feels Like:</strong> ${(weatherData.main.feels_like - 273.15).toFixed(2)} °C</p>
        <p><strong>Weather:</strong> ${weatherData.weather[0].main} (${weatherData.weather[0].description})</p>
        <p><strong>Humidity:</strong> ${weatherData.main.humidity} %</p>
        <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
        <p><strong>Cloudiness:</strong> ${weatherData.clouds.all} %</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
})
.catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('weather-info').textContent = 'Error fetching data';
});
