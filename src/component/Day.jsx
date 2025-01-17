// Import the Conditions array
import { Conditions } from './setPhoto'; // Adjust the path if needed

import HomeIcon from "./Home-Icon";
import LocationIcon from "./Location-icon";
import HeartIcon from "./Heart-Icon";
import UserIcon from "./User-Icon";
import { useEffect, useState } from "react";

const Day = (props) => {
  const [dayTemp, setDayTemp] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const { selectedCity } = props;
  const API_KEY = "f9703c47bec948389f382511251501";

  // Get the weather data
  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}`
      );
      const result = await response.json();
      setDayTemp(result.forecast.forecastday[0].hour[5].temp_c);
      setCondition(result.forecast.forecastday[0].day.condition.text);
      setCity(result.location.name);

      // Check the condition code and map it to the Conditions array
      const weatherCode = result.forecast.forecastday[0].day.condition.code;
      const matchedCondition = Conditions.find(
        (condition) => condition.code === weatherCode
      );
      if (matchedCondition) {
        setIcon(sunny); // You can use the icon here or display the day/night condition
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <div className="w-1/2 h-full min-w-[567px] bg-neutral-100 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center items-center">
      <div className="mt-[-40%] ml-[-25%] absolute w-[176px] h-[176px] rounded-[50%] bg-[#FF8E27]"></div>

      <div className="w-1/2 h-3/4 backdrop-brightness-20 shadow-lg backdrop-blur-[2px] rounded-3xl flex flex-col items-center gap-10">
        <div className="flex justify-between py-12 w-9/12">
          <div>
            <p className="text-gray-400">{new Date().toDateString()}</p>
            <p className="font-extrabold text-gray-900 text-5xl ">{city}</p>
          </div>
          <LocationIcon />
        </div>

        {/* You can display the icon here */}
        <img src={`iconPath/${icon}.png`} className="w-64" alt="Weather Icon" />
        
        <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
          {dayTemp}°
        </div>
        <div className="w-9/12">
          <p className="text-[#FF8E27] font-extrabold h-6">{condition}</p>
        </div>
        <div className="w-9/12 flex justify-between">
          <HomeIcon color="black" />
          <LocationIcon />
          <HeartIcon />
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Day;
