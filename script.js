// const card = document.querySelector('.card');

const searchEl = document.querySelector("#search");
const btnEl = document.querySelector(".btn");
const tempEl = document.querySelector(".temp");
const temp_des = document.querySelector(".temp_des");
const humidityEl = document.querySelector(".hum_percent");
const wind_speed = document.querySelector(".wind_speed");

async function checkWeather(city) {
  const api_key = "a3ff2fb880074eb1b4d114241242205";
  const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;

 
    const weather_data = await fetch(`${url}`).then((response) =>
      response.json() );

    console.log(weather_data);

    // if invalid city nameis entered
    if (weather_data.error) {
      console.log("error");
      tempEl.innerHTML = "N/A";
      temp_des.innerHTML = "N/A";
      humidityEl.innerHTML = "N/A";
      wind_speed.innerHTML = "N/A";
      return;
    }
else{
    tempEl.innerHTML = `${weather_data.current.temp_c}℃`;
    temp_des.innerHTML = `${weather_data.current.condition.text}`;

    humidityEl.innerHTML = `${weather_data.current.humidity}%`;
    wind_speed.innerHTML = `${weather_data.current.wind_kph}km/h`;


    console.log(weather_data);
    console.log(weather_data.current.temp_c);
}
}
//console.log(checkWeather("Delhi"));
// console.log(weather_data)
// console.log(weather_data.current.condition.temp_c);

btnEl.addEventListener("click", () => {
  checkWeather(searchEl.value);
});
