import React, { useState } from "react";
import "./App.css";
import MapContainer from "./RenderMap";
import WeatherRender from "./Weather";
// import NewsCountry from "./NewsCountry";
import Notepad from "./Notepad";
import SetGoogleLogin from "./SetGoogleLogin";

function App() {
  const [term, setTerm] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  function toSetLatLon(lat, lon) {
    setLat(lat);
    setLon(lon);
    console.log(lat, lon);
  }

  const onChangeCall = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="ui inverted segment ">
        <form
          className="ui inverted transparent icon input"
          onSubmit={(e) => onFormSubmit(e)}
        >
          <input
            type="text"
            name="name"
            type="text"
            placeholder="Where do you wanna travel next!"
            className="searchquery"
            onChange={(e) => onChangeCall(e)}
            value={term}
          />
          <i className="search icon"></i>
        </form>
      </div>
      <div className="mapWeather">
        <div className="map">
          <MapContainer lat={lat} lon={lon} city={term} />
        </div>
        <div className="weather_info">
          <WeatherRender city={term} setLatieandLong={toSetLatLon} />
        </div>
        <div>
          <Notepad />
          {lat ? <SetGoogleLogin /> : null}
        </div>
      </div>
    </>
  );
}
export default App;
