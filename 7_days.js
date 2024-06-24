document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'c7bf7c34503190dee3876f0c25773f2f';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`;

    axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        const weatherData = response.data;
        const weatherInfo = `
            <h2>Weather in ${weatherData.city.name}, ${weatherData.city.country}</h2>
            ${weatherData.list.map(item => `
                <div class="weather-card">
                    <p><strong>Date:</strong> ${new Date(item.dt * 1000).toLocaleString()}</p>
                    <p><strong>Temperature:</strong> ${(item.main.temp - 273.15).toFixed(2)} °C</p>
                    <p><strong>Feels Like:</strong> ${(item.main.feels_like - 273.15).toFixed(2)} °C</p>
                    <p><strong>Weather:</strong> ${item.weather[0].main} (${item.weather[0].description})</p>
                    <p><strong>Humidity:</strong> ${item.main.humidity} %</p>
                    <p><strong>Wind Speed:</strong> ${item.wind.speed} m/s</p>
                    <p><strong>Cloudiness:</strong> ${item.clouds.all} %</p>
                </div>
            `).join('')}
        `;
        document.getElementById('weather-7_days').innerHTML = weatherInfo;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('weather-7_days').textContent = 'Error fetching data';
    });
});
