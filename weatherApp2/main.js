

const apiKey = '4206f1c9727e90878e60459134856fd1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const inputValue = document.getElementById("inputBox")
const searchBtn = document.getElementById("searchBtn")
const weatherImg = document.getElementById("weatherImg")

async function checkWeather(city){

    const response = await fetch(apiUrl+ `q=${city}` +  `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data);


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =  Math.round(data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr"



    if(data.weather[0].main == "Clear"){
        weatherImg.src = "./images/sun_1400361.png"

    }else if(data.weather[0].main == "Rain"){
        weatherImg.src = "./images/cloud-rain-icons-11052.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "./images/snowflake_615669.png"
    }else if(data.weather[0].main == "Clouds"){
         weatherImg.src = "./images/cloud-icon-12871.png"
    }
    


    document.querySelector('.display').style.display = "block"

}

searchBtn.addEventListener("click", (e) =>{
    checkWeather(inputValue.value)
})
