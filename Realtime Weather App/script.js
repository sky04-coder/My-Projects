const apiKey = "7c608fd77dec9e86d0f3b62a2e2c79ca"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input" )
const searchBtn = document.querySelector(".search button" )
const city = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon")
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather(){
    const response = await fetch(apiUrl+ searchBox.value + `&appid=${apiKey}` )
    if (response.status === 404){
        document.querySelector(".error").style.display = "block";
    } else {var data = await response.json();
    console.log(data)
    
    document.querySelector(".error").style.display = "none";
    city.innerHTML = data.name; 
    temp.innerHTML = Math.round(data.main.temp)+ ` °C`;
    humidity.innerHTML = data.main.humidity+`%`;
    wind.innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main === "Humidity"){
        weatherIcon.src = "images/humidity.png"
    } else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main === "Wind"){
        weatherIcon.src = "images/wind.png"
    }

    document.querySelector(".weather").style.display = "block";}
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

