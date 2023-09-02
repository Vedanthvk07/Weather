const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'API_KEY',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function getWeather(city){
    cities.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct  
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humid.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp1.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        windspeed.innerHTML = response.wind_speed
    })

    .catch(err => console.error(err));
}
Submit.addEventListener('click',(e)=>{
   e.preventDefault();
   getWeather(city.value)
})
del.addEventListener('click',(e)=>{
    getWeather('Delhi');
})
mum.addEventListener('click',(e)=>{
    getWeather('Mumbai');
})
new1.addEventListener('click',(e)=>{
    getWeather('New York');
})
getWeather('Mangaluru');


