// import { useEffect, useState } from "react";
import "./App.css";
import { Inputs, TimeAndLocation, TopButton } from "./Components";
import Forecast from "./Components/Forecast";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
// import getFormattedWeatherData from "./services/WeatherService";
// import getFormattedWeatherData from "./services/WeatherService";

function App() {
  // const [query, setQuery] = useState({ q: "berlin" });
  // const [units, setUnits] = useState("metric");
  // const [weather, setWeather] = useState("");

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     await getFormattedWeatherData({ ...query, units })
  //     .then((data) => {
  //       setWeather(data);
  //       console.log(data);
  //     });
  //   };

  //   fetchWeather();
  // }, [query, units]);


  // const fetchWeather = async () => {
  //   const data  = await getFormattedWeatherData({ q : "london"})
  //   console.log(data);
  // }
  // fetchWeather();

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 p-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
    <TopButton />
        <Inputs />
        <TemperatureAndDetails  />
        <TimeAndLocation  />
      
        <Forecast title={"hourly forecast"} />
        <Forecast title={"daily forecast"} />

        {/* { weather && (
          <div>
          </div>
        )} */}
      </div>
    </>
  );
}

export default App;
