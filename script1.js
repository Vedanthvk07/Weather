const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a634ec9cbmsh78940babbebed4ap15c0fejsn1864ca812b41',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

function getAirQual(city){
fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+city, options1)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		COa.innerHTML=response.CO.concentration
		COb.innerHTML=response.CO.aqi
NO2a.innerHTML=response.NO2.concentration
NO2b.innerHTML=response.NO2.aqi
O3a.innerHTML=response.O3.concentration
O3b.innerHTML=response.O3.aqi
PM2a.innerHTML=response["PM2.5"].concentration
PM2b.innerHTML=response["PM2.5"].aqi
PM10a.innerHTML=response.PM10.concentration
PM10b.innerHTML=response.PM10.aqi
SO2a.innerHTML=response.SO2.concentration
SO2b.innerHTML=response.SO2.aqi
overall_aqi.innerHTML=response.overall_aqi
	})
	.catch(err => console.error(err));


}
    Submit.addEventListener('click',(e)=>{
        e.preventDefault();
        getAirQual(city.value)
     })

	 del.addEventListener('click',(e)=>{
		getAirQual('Delhi');
	})
	mum.addEventListener('click',(e)=>{
		getAirQual('Mumbai');
	})
	new1.addEventListener('click',(e)=>{
		getAirQual('New York');
	})
     getAirQual('Mangaluru')