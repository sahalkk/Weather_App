console.log('hi')
let weather = {
    apiKey : "1b0ac5363763de443cc03a609ae0aa51",
    fetchWeather : function (cityName) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1b0ac5363763de443cc03a609ae0aa51")
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1b0ac5363763de443cc03a609ae0aa51`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.displayWeather(data)
        })
        .catch((err) => {
            console.log('type error',err );
        })
    },
    displayWeather : function(data) { 
        document.getElementById('tempValue').innerHTML = (data.main.temp - 273.15).toFixed(2);
        document.getElementsByClassName('description')[0].innerHTML = data.weather[0].description;
        document.getElementById('humidVal').innerHTML = data.main.humidity;
        document.getElementById('windVal').innerHTML = data.wind.speed;
    }
};


function btnFunction(){
    let cityName = document.getElementById('search').value 
    weather.fetchWeather(cityName) 
    document.getElementById('searchCity').innerText = cityName; 
    if(cityName == ''){
        alert("Please Enter the City name");
        let myStyle = `display : none;`
        let afterSearch = document.getElementById('weather')
        afterSearch.style.cssText = myStyle ;
        
    }
    
    else{
        let myStyle = `display : block;
        text-transform : capitalize`
        let afterSearch = document.getElementById('weather')
        afterSearch.style.cssText = myStyle ;
    }
}

