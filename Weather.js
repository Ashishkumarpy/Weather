const apiKey= "79111b9293281d393de0965a9a18a97b";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeatherData(city){
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "/Weather/images/clouds.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "/Weather/images/rain.png";
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "/Weather/images/clear.png";
        }
        else if(data.weather[0].main == 'Snow'){
            weatherIcon.src = "/Weather/images/snow.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "/Weather/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/Weather/images/mist.png";
        }
        else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "/Weather/images/wind.png";
        }
        else if(data.weather[0].main == "Humidity"){
            weatherIcon.src = "/Weather/images/humidity.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
      
    }
    
    if(data.sys.country == "IN"){
        document.querySelector(".country").innerHTML = "India";
    }
    else if(data.sys.country == "US"){
        document.querySelector(".country").innerHTML = "United States";
    }
    else if(data.sys.country == "GB"){
        document.querySelector(".country").innerHTML = "United Kingdom";
    }
    else if(data.sys.country == "CA"){
        document.querySelector(".country").innerHTML = "Canada";
    }
    else if(data.sys.country == "AU"){
        document.querySelector(".country").innerHTML = "Australia";
    }
    else if(data.sys.country == "JP"){
        document.querySelector(".country").innerHTML = "Japan";
    }
    else if(data.sys.country == "FR"){  
        document.querySelector(".country").innerHTML = "France";
    }
    else if(data.sys.country == "DE"){  
        document.querySelector(".country").innerHTML = "Germany";
    }

    document.querySelector(".date").innerHTML = new Date().toDateString().toLocaleUpperCase();

    document.querySelector(".description").innerHTML = data.weather[0].description;
    

}


searchBtn.addEventListener("click", ()=>{
    getWeatherData(searchInput.value);
});

searchInput.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        getWeatherData(searchInput.value);
    }
});

searchInput.addEventListener("focus", ()=>{
    searchInput.value = "";
});


getWeatherData();

// Path: Weather/images/clouds.png
// Path: Weather/images/rain.png
// Path: Weather/images/clear.png
// Path: Weather/images/snow.png
// Path: Weather/images/drizzle.png
// Path: Weather/images/mist.png
// Path: Weather/images/wind.png
// Path: Weather/images/humidity.png
