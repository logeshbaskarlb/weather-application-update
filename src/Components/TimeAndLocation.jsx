// import { formatToLocalTime } from "../services/WeatherService";

const TimeAndLocation = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
            12:34 PM      
            {/* {formatToLocalTime(dt, timezone)} */}
         
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
        Derlin,BE
          {/* {`${name}, ${country}`} */}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
