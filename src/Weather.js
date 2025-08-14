import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {

  // const apiKey = "4bada4e2ef8cba4745bcdtf450236obd";
  // const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 14:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt=""></img>
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 15%</li>
            <li>Humidity: 50%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}