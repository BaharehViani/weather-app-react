import { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setWeather(response.data);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!city.trim()) {
      return;
    }
    axios.get(apiUrl).then(showWeather);
  }

  const apiKey = "4bada4e2ef8cba4745bcdtf450236obd";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      {weather && (
        <ul>
          <li>Temperature: {Math.round(weather.temperature.current)}°C</li>
          <li>Description: {weather.condition.description}</li>
          <li>Humidity: {weather.temperature.humidity}%</li>
          <li>Wind: {weather.wind.speed} km/h</li>
          <li>
            <img
              src={weather.condition.icon_url}
              alt={weather.condition.icon}
            />
          </li>
        </ul>
      )}
    </div>
  );
}