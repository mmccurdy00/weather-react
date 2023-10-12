import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form id="search-form">
        <label for="Search">What's the weather in...</label>
        <input
          id="city-input"
          type="search"
          placeholder="Search"
          autocomplete="off"
        />
        <input id="search" type="submit" />
      </form>
      <h2>The Weather In</h2>
      <h1>~Tokyo~</h1>
      <div>
        <div class="row align-items-start">
          <div class="col">
            <h4>Last Updated: Tuesday 12:34 PM</h4>
            <h4>Description: Clear Skies</h4>
          </div>
          <div class="col">
            <h3>°C | °F</h3>
          </div>
          <div class="col">
            <h4>
              Humidity: 28%
              <br />
              Wind: 13 km/hr
            </h4>
          </div>
        </div>
      </div>
      <div>
        <a href="https://github.com/mmccurdy00/weather-react">
          Open-source code
        </a>{" "}
        by <strong>Merrick McCurdy</strong>
      </div>
    </div>
  );
}
