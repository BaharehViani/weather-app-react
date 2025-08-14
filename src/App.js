import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York"/>
        <footer><a href="https://github.com/BaharehViani/weather-app-react">open-source</a> code, by <a href="https://github.com/BaharehViani">Bahareh Viani</a></footer>
      </div>
    </div>
  );
}

export default App;
