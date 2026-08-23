const apikey="c2189e6b059fbc5e17f3c4341b80e082";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");

async function checkweather(city) {
    
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = data.main.temp+"°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML = data.wind.speed+"km/h";
}

searchbutton.addEventListener("click",()=>{
    checkweather(searchbox.value);
    searchbox.value = "";
})
 


