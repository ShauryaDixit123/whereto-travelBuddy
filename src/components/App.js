import React, { useState } from "react";
import "./App.css";
import WeatherRender from "./Weather";

function App() {
  const [term, setTerm] = useState("");

  const onChangeCall = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(term);
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
      <div>
        <WeatherRender city={term} />
      </div>
    </>
  );
}
export default App;
