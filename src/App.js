import React, { useState, useEffect } from "react";
import WeatherCard from "./wethercard/container";
import "./App.css";

function App() {
  const [initial, setInitial] = React.useState("Delhi");
  const [weather, setWeather] = React.useState({
    city: null,
    country: null,
    condition: null,
    temperature: null,
  });

  let inputData = async () => {
    let apiReq = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${initial}&units=metric&appid=b79831dd52a48fb5f781045b51467ca6`
    );
    let jsonReq = await apiReq.json();
    setWeather({
      city: jsonReq.name,
      country: jsonReq.sys.country,
      condition: jsonReq.weather[0].main,
      temperature: jsonReq.main.temp,
    });
  };

  const handlesearch = (e) => {
    e.preventDefault();
    inputData(initial);
  };

  useEffect(() => {
    inputData(initial);
  }, []);

  return (
    <div className="App">
      <WeatherCard
        city_name={weather.city}
        country_name={weather.country}
        weather_state={weather.condition}
        temp={weather.temperature}
      />
      <form>
        <input value={initial} onChange={(e) => setInitial(e.target.value)} />
        <button onClick={(e) => handlesearch(e)}>Search!</button>
      </form>
    </div>
  );
}
export default App;
