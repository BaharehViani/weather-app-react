import { useContext } from "react";
import { UnitContext } from "./UnitContext";

export default function WeatherTemperature(props) {
  const { unit, toggleUnit } = useContext(UnitContext);

  function showFahrenheit(event) {
    event.preventDefault();
    toggleUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    toggleUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {unit === "celsius" ? Math.round(props.celsius) : Math.round(fahrenheit())}
      </span>
      <span className="unit">
        <a
          href="/"
          onClick={showCelsius}
          className={unit === "celsius" ? "active" : ""}
        >
          °C
        </a>{" "}
        |{" "}
        <a
          href="/"
          onClick={showFahrenheit}
          className={unit === "fahrenheit" ? "active" : ""}
        >
          °F
        </a>
      </span>
    </div>
  );
}