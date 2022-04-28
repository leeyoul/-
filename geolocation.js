const geo = document.querySelector("#geo");
const API_Key ="15057754ab06a648d8e2f8ff4eeadf1c";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weathername = data.name
        geo.innerHTML =  `오늘은 <b>${data.weather[0].main}</b><br>${data.main.temp}°, ${data.name}`;
    
    });
}



function onGeoError(){
    geo.innerText = "Can't find your GEO"
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)