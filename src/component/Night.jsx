import LocationIcon from "./Location-icon";
import HomeIcon from "./Home-Icon";
import HeartIcon from "./Heart-Icon";
import UserIcon from "./User-Icon";
import { useState, useEffect } from "react";
import { WEATHER_TYPES } from "./typesV";

const Night = (props) => {
  const { selectedCity } = props;
  const [temp, setDayTemp] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");

  const API_KEY = "f9703c47bec948389f382511251501";

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}&aqi=yes`
      );
      const result = await response.json();
      setDayTemp(result.forecast.forecastday[0].hour[0].temp_c);
      setCondition(result.forecast.forecastday[0].hour[0].condition.text);
      setCity(result.location.name);

      console.log("Weather API Result:", result);

      const weatherCode = result.forecast.forecastday[0].hour[0].condition.text.trim(); // Ensure no trailing/leading spaces
      
      if (WEATHER_TYPES.sun.includes(weatherCode)) {
        setIcon("moon"); // Sun
      } else if (WEATHER_TYPES.clouds.includes(weatherCode)) {
        setIcon("night2"); // Clouds
      } else if (WEATHER_TYPES.wind.includes(weatherCode)) {
        setIcon("night3"); // Wind
      } else if (WEATHER_TYPES.rain.includes(weatherCode)) {
        setIcon("night4"); // Rain
      } else if (WEATHER_TYPES.snow.includes(weatherCode)) {
        setIcon("night5"); // Snow
      } else if (WEATHER_TYPES.thunder.includes(weatherCode)) {
        setIcon("night6"); // Thunder
      } else {
        setIcon("defaultMood"); // Fallback icon
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <div className="w-1/2 h-full bg-slate-900 rounded-tr-3xl rounded-br-3xl flex justify-center items-center">
      <div className="absolute mt-[40%] mr-[-25%] w-[176px] h-[176px] rounded-[50%] bg-[#6E72C9]"></div>
      <div className="w-1/2 h-3/4 backdrop-blur-md shadow-xl rounded-3xl flex flex-col items-center gap-10">
        <div className="flex justify-between py-12 w-9/12">
          <div>
            <p className="text-gray-400">{new Date().toDateString()}</p>
            <p className="font-extrabold text-white text-5xl">{city}</p>
          </div>
          <LocationIcon />
        </div>
        <img src={`/${icon}.png`} className="w-64" alt="Weather Icon" />
        <div>
          <p className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-white to-black">
            {temp}°
          </p>
        </div>
        <div className="w-9/12">
          <p className="font-extrabold text-[#777CCE]">{condition}</p>
        </div>
        <div className="w-9/12 flex justify-between">
          <HomeIcon color="white" />
          <LocationIcon />
          <HeartIcon />
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Night;
