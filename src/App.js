import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Made with ❤️ by{" "}
          <a href="https://github.com/BaharehViani" target="_blank" rel="noreferrer">Bahareh Viani</a> |{" "}
          <a href="https://github.com/BaharehViani/weather-app-react" target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
