document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '9b81fce71f04ce093604da193534dfe2'; // Ваш API ключ
    const city = 'Hurghada'; // Назва міста
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => processWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
});

function processWeatherData(data) {
    const weatherRow = document.querySelector('.weatherRow');
    const monthRow = document.querySelector('.monthRow');

    const weatherData = data.list.slice(0, 6).map(entry => ({
        temp: Math.round(entry.main.temp),
    }));

    const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

    weatherRow.innerHTML = weatherData.map(data =>
        `
<div class="weatherItem">           
            ${data.temp}°C
        </div>`
    ).join('');

    monthRow.innerHTML = months.map(month => `<div class="monthItem">${month}</div>`).join('');
}
