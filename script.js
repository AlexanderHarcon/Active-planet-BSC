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

//carousel

$(document).ready(function () {
    $('.excursions .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            400: {
                items: 2,
                nav: true,
            },
            800: {
                items: 3,
                nav: true,
            },
            1040: {
                items: 4,
                nav: true,
            }
        }
    });
});

$(document).ready(function () {
    $('.reviews .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            400: {
                items: 2,
                nav: true,
            },
            800: {
                items: 3,
                nav: true,
            },
        }
    });
});$(document).ready(function () {
    $('.mayInterested .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            400: {
                items: 2,
                nav: true,
            },
            800: {
                items: 3,
                nav: true,
            },
        }
    });
});

