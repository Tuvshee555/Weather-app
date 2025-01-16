import { use } from "react";
import Circels from "./component/CircelLogo"
import Day from "./component/Day"
import Night from "./component/Night"
import { useState } from "react";

import SearchBar from "./component/SearchBar";
function App() {
  const [selectedCity, SetSelctedCity] = useState("Ulaanbaator, Mongolia");
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-400">
        <Circels />
        <div className="w-full h-full rounded-3xl flex bg-neatral-100">
        
          <Day selectedCity={selectedCity} />
          <Night selectedCity={selectedCity}/>
          <SearchBar selectedCity={selectedCity} SetSelctedCity={SetSelctedCity} />
        </div>
      </div>
    </>
  );
}

export default App;