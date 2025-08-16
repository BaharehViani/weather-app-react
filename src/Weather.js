import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { UnitProvider } from "./UnitContext";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const popularCities = [
    "London",
    "New York",
    "Tokyo",
    "Dubai",
    "Sydney",
    "Paris",
  ];

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(selectedCity) {
    const cityToSearch = selectedCity || city;
    const apiKey = "4bada4e2ef8cba4745bcdtf450236obd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityToSearch}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("City not found. Please try again.");
    });
  }

  if (weatherData.ready) {
    return (
      <UnitProvider>
        <div className="Weather">
          <div className="popular-cities">
            {popularCities.map((popularCity) => (
              <button
                key={popularCity}
                className="btn btn-outline-secondary me-2 mb-2"
                onClick={() => search(popularCity)}
              >
                {popularCity}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </div>
      </UnitProvider>
    );
  } else {
    search();
    return "Loading...";
  }
}
