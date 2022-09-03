console.log('hi')
let weather = {
    apiKey : "1b0ac5363763de443cc03a609ae0aa51",
    fetchWeather : function (cityName) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1b0ac5363763de443cc03a609ae0aa51")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.displayWeather(data)
        })
        .catch((err) => {
            console.log('tyoe error',err );
        })
    },
    displayWeather : function(data) {
        document.getElementsByClassName('description')[0].innerHTML = data.weather[0].description;
        document.getElementById('humidVal').innerHTML = data.main.humidity;                
    }
};


function btnFunction(){
    console.log('hsfd')
    let cityName = document.getElementById('search').value 
    weather.fetchWeather(cityName) 
    document.getElementById('searchCity').innerText = cityName; 
}