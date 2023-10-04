const apikey = "a870f88d96a241067c3485a79a60c45f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


const searchBox =document.querySelector('.search input');
const searchBtn =document.querySelector('.search button');
const weatherIcon =document.querySelector('.weather-icon');



async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apikey}`);
    var data = await response.json();
    document.querySelector('.Weather').style.display="flex"


document.querySelector(".city").innerHTML= data.name;
document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+"°C";
document.querySelector('.humidity').innerHTML= data.main.humidity+"%"+"Humidity";
document.querySelector('.wind').innerHTML= data.wind.speed+"km/h"+"Wind Speed";



if(data.weather[0].main == "Clouds"){
    weatherIcon.src="clouds.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src="rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src="mist.png"
}
}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})