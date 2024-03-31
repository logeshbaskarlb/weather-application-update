import { useEffect, useState } from "react";
import "./App.css";
import { Inputs, TimeAndLocation, TopButton } from "./Components";
import Forecast from "./Components/Forecast";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/WeatherService";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  console.log(weather);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
      });
      console.log(fetchWeather);
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 p-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
        <TopButton />
        <Inputs />

        { weather && (
          <div>
            <TemperatureAndDetails weather={weather} />
            <TimeAndLocation weather={weather} />
          
            <Forecast title={"hourly forecast"} />
            <Forecast title={"daily forecast"} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
