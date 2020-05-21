const getPosition=()=>{
    let long,lat;
    const temperature = document.querySelector('.temperature');
    const tz = document.querySelector('.time-zone');
    const precip = document.querySelector('.precipitation');
    const humi = document.querySelector('.humidity');
    const w = document.querySelector('.wind');
    const icon = document.querySelector('.icon');
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
           lat = position.coords.latitude;
           const api = `http://api.weatherapi.com/v1/current.json?key=9b8ff17636b342af9ac65300202105&q=${lat},${long}`;
           fetch(api)
           .then(res=>{
               return res.json();
           }).then(data=>{
               const tempInC = data.current.feelslike_c;
               const tempInF = data.current.feelslike_f;
               const timezone = data.location.tz_id;
               const precipitation = data.current.precip_mm;
               const humidity = data.current.humidity;
               const wind = data.current.wind_kph;
               const weather = data.current.condition.text;
               icon.innerHTML = weather + '!';
               temperature.innerHTML = tempInF + ' F';
               tz.innerHTML = timezone;
               precip.innerHTML = precipitation + ' mm';
               humi.innerHTML = humidity + ' %';
               w.innerHTML = wind + ' km/h';
               temperature.addEventListener('click',()=>{
                    temperature.innerHTML = tempInC + ' C';
               })
             })
           })
    } 
}
window.addEventListener('load',getPosition);
