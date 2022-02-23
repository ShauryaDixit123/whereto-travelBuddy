import React, { useEffect, useState } from "react";
import "./displayWeather.css";
import WeatherChart from "./WeatherChart";
import PredictTemp from "./pastFuture";

function DisplayWeather({ data }) {
  if (!data?.current?.weather) {
    return <h1>Loading...</h1>;
  }
  // const temp = data.
  const temp = data.current.temp;
  const feelsLike = data.current.feels_like;
  const hourlyData = data.hourly;
  const lat = data.lat;
  const lon = data.lon;
  console.log(data);
  return (
    <div className="large icon">
      <div className="temp-div">
        <img
          src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
        />
        <span className="temp">{temp} ℃</span>
      </div>
      <div>
        Feels Like : {feelsLike},{data.current.weather[0].description},
        <div> WindSpeed:{data.current.wind_speed}</div>
      </div>
      <div>Humidity : {data.current.humidity}</div>
      <hr />
      <div className="weather-chart" style={{ marginTop: "20px" }}>
        <h3>Hourly ForCast for 48hours:</h3>
        <WeatherChart hourlyData={hourlyData} />
      </div>
      <div className="predictions">
        <PredictTemp lat={lat} lon={lon} />
      </div>
    </div>
  );
}
export default DisplayWeather;
