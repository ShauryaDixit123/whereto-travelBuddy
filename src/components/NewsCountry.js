import React, { useState } from "react";
import axios from "axios";

function NewsCountry({ city, country }) {
  const [news, setNews] = useState([]);
  const apiKey = "246223c67a754943bd27f5fc3ec794cc";
  const newsUrl = "https://newsapi.org/v2/everything?";
  console.log(city);
  const getNews = async () => {
    const { data } = await axios.get(newsUrl, {
      params: {
        q: city,
        country: country.toLowerCase(),
        pageSize: 5,
        apiKey: apiKey,
        sortBy: "popularity",
      },
    });
    setNews(data);
  };

  getNews();
  return <div>NewsCountry</div>;
}
// from=2022-02-25&to=2022-02-25

export default NewsCountry;
