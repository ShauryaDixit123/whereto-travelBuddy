import axios from "axios";
import React, { useEffect, useState } from "react";

function PredictTemp({ lat, lon }) {
  const [data, setData] = useState([]);

  const apiKey = "66a7f418666e3343bf74a4eb230b25ff";
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const hrs = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  // https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
  const apiUrl =
    " https://api.openweathermap.org/data/2.5/onecall/timemachine?";
  function toTimestamp() {
    if (today.getDate() > 1) {
      const datum = new Date(Date.UTC(year, month, day - 2, hrs, min, sec));
      return datum.getTime() / 1000;
    } else {
      const datum = new Date(
        Date.UTC(year, month - 1, month + day - 1, hrs, min, sec)
      );
      return datum.getTime() / 1000;
    }
  }

  console.log("Today", Date.now());
  const getData = async () => {
    const { data } = await axios.get(`${apiUrl}`, {
      params: {
        lat: lat,
        lon: lon,
        appid: apiKey,
        dt: "1645302040",
        unit: "metric",
      },
    });
    setData(data);
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, [lat, lon]);

  return <div>Predicted Temp!</div>;
}
export default PredictTemp;
