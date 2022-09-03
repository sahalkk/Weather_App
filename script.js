console.log('hi')
let weather = {
    apiKey : "1b0ac5363763de443cc03a609ae0aa51",
    featchWeather : function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=1b0ac5363763de443cc03a609ae0aa51")
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
        // const{ name } = data;
        // const{ icon, description } = data.weather;
        // const{ temp, humidity } = data.main;
        // const{ speed } = data.wind;
        // console.log(name,icon,description,temp,humidity,speed)
        // .catch((err) => {
        //     console.log('type error', err);
        // })    
        // console.log( 'sugu' + JSON.stringify(data));
        // console.log( document.getElementById('tempValue').innerHTML);
        document.getElementById('tempValue').innerHTML = data.main.temp;
        document.getElementsByClassName('description')[0].innerHTML = data.weather[0].description
        document.getElementById('humidVal').innerHTML = data.main.humidity
        // document.getElementById('humidVal')[0].innerHTML = data.main.humidity
        // document.getElementsById('description').innerHTML = data.weather.description;
        // console.log('fff', document.getElementsByClassName('description')[0].innerHTML);
        console.log('sa', document.getElementById('windVal').innerHTML = data.wind.speed);
        
        // console.log('fu', document.getElementById('humidVal').innerHTML = data.main.humidity)
        // document.getElementsByClassName('humidity').innerHTML = data.main.humidity;
        
    }

    
     
    
}


weather.featchWeather()