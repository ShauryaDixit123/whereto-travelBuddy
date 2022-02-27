import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import { MapContainer } from "./RenderMap";
import DisplayWeather from "./DisplayWeather";
import NewsCountry from "./NewsCountry";

function WeatherRender({ city, setLatieandLong }) {
  // states are defined below, used for fetching data from the city entered!
  // first is to get co-ordinates of the city ie. latitude and longitude ;
  // second is to fetch the data for the weather of that city as its params require lati and longi of that place!

  const [result, setresult] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const coordUrl = "http://api.openweathermap.org/geo/1.0/direct?";
  const WeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?";
  const apiKey = "66a7f418666e3343bf74a4eb230b25ff";

  const getCoords = async () => {
    const { data } = await axios.get(`${coordUrl}`, {
      params: {
        q: city,
        limit: 1,
        appid: apiKey,
      },
    });
    setresult(data);
  };

  const getWeather = async () => {
    const { data } = await axios.get(`${WeatherUrl}`, {
      params: {
        lat: lat,
        lon: lon,
        exclude: "minutely",
        appid: apiKey,
        units: "metric",
      },
    });
    setWeatherData(data);
  };

  useEffect(() => {
    const resultId = setTimeout(() => {
      getCoords();
    }, 1000);
    return () => {
      clearTimeout(resultId);
    };
  }, [city]);

  // values extracted from the fetched data!

  const info = result[0];
  const lat = info?.lat;
  const lon = info?.lon;
  const nameHin = info?.local_names?.hi;

  useEffect(() => {
    getWeather();
    setLatieandLong(lat, lon);
  }, [lat, lon]);
  if (weatherData !== null) {
    document.querySelector(".weather-window")?.classList.remove("hidden");
  }
  // data to be passed as props to different components.

  return (
    <div className="weather-window hidden">
      <h1>
        {info?.name}, {info?.country}
        <i className={`large ${info?.country.toLowerCase()} flag`} />
      </h1>
      <div className="othernames ">
        (<span className="name-hin ">Hindi: {nameHin}</span>
        <span className="name-es ">Local Name: {info?.local_names?.es}</span>)
      </div>
      <DisplayWeather data={weatherData} />
      <NewsCountry city={info?.name} country={info?.country} />
    </div>
  );
}
export default WeatherRender;
