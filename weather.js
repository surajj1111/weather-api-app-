let inputbox = document.querySelector(".inputbox");
const searchbtn = document.getElementById('search-icon');
const weatherimg = document.querySelector('.weathericon');

const api_key = '87d4f52bed6a71df6f97e8c94068b4cb';                            //api key 
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';            // api url

async function checkweather(City){
    const response = await fetch(url + City +`&appid=${api_key}`);
    var weatherdata = await response.json();
    console.log(weatherdata);

    document.querySelector(".City").innerHTML = weatherdata.name;
    document.querySelector(".temp").innerHTML = Math.round(weatherdata.main.temp) +"°C";
    document.querySelector(".humidity1").innerHTML = weatherdata.main.humidity+"%";
    document.querySelector(".wind1").innerHTML = weatherdata.wind.speed+"km/h";
    
}
searchbtn.addEventListener("click",()=>{
    checkweather(inputbox.value);
});