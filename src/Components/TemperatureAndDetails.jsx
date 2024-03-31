import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunride,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="w-20 "
          alt=""
        />
        <p className="text-5xl">34</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1 " />
            Real fell :<span className=" font-medium ml-1 ">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1 " />
            Humidity :<span className=" font-medium ml-1 ">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1 " />
            Wind speed :<span className=" font-medium ml-1 ">11 Km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-grow items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light ">
          Rise :<span className=" font-medium ml-1">06:45 AM</span>{" "}
        </p>
        <p className=" font-light">|</p>
        <UilSunset />
        <p className="font-light ">
          Set :<span className=" font-medium ml-1">07:35 AM</span>{" "}
        </p>
        <p className=" font-light">|</p>
        <UilSun />
        <p className="font-light ">
          High :<span className=" font-medium ml-1">32°</span>{" "}
        </p>
        <p className=" font-light">|</p>
        <UilSun />
        <p className="font-light ">
          Low :<span className=" font-medium ml-1">25°</span>{" "}
        </p>
        <p className=" font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
