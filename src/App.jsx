import { useState } from "react";
import countriesData from "./data";

function App() {
  // console.log(countriesData);

  // const [searchValue, setSearchValue] = useState("")
  // const [isLoading, setIsLoading] = useState(false)
  // const [filteredData, setFilteredData] = useState([])

  // const onChange = (e) => {
  //   setSearchValue(e.target.value)
  // }
  
  // const data = countriesData

  // useEffect(() => {
  //   setIsLoading(true)
  //   if (!searchValue) {
  //     setFilteredData([])
  //   } else {
  //     const filtered = data.filter((el) => startsWith(searchValue))
  //     setFilteredData(filtered)
  //   }
  //   setIsLoading(false)
  // }, [searchValue])

  // if (isLoading) {
  //   return <div>is loading...</div>
  // }
  // return (
  //   <div className="text-red-400 p-[100px]">

  //   </div>
  // )

  return (
    <>
      <div className="w-full rounded-3xl flex bg-neutral-100 relative h-[100vh]">
        <div className=" flex justify-center items-center">
          {/* Centering the circles */}
          <div className="w-[100px] h-[100px] border-[#a7acb2] z-50 rounded-full border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[340px] h-[340px] border-[#a7acb2] z-40 rounded-full border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[540px] h-[540px] border-[#a7acb2] z-30 rounded-full border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-[940px] h-[940px] border-[#a7acb2] z-20 rounded-full border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        {/* White */}
        <div className="w-1/2 h-full bg-neutral-100 flex justify-center items-center z-[7]">
          <div className="w-[414px] h-[828px] bg-[#f3f4f6] rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
            <div className="w-[414px] h-[514px] p-[56px_40px] rounded-3xl">
              <div className="flex justify-between">
                <div className="w-[290px] h-[80px]">
                  <p className="text-left text-[16px] text-[#808080]">
                    {new Date().toDateString()}
                  </p>
                  <p className="text-[#101827] text-[48px] mt-[5px] p-[0px] h-[48px] w-[290px]">
                    Ulaanbator
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img src="./location.png" className="h-[32px] w-[32px]" />
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="./sun.png"
                  className="h-[274px] w-[274px] mt-[48px]"
                />
              </div>
            </div>
            <div className="h-[269px] w-[414px] pl-[48px] pr-[48px]">
              <h1 className="h-[165px] w-[318px] text-[110px] m-[0] text-transparent bg-gradient-to-b from-black to-white bg-clip-text">
                -16.7°
              </h1>
              <p className="text-[16px] mb-[40px] text-[#777cce]">Sunny</p>
              <div className="flex justify-between">
                <img src="./Home.png" className="h-[32px] w-[32px]" />
                <img src="./Pin.png" className="h-[32px] w-[32px]" />
                <img src="./Heart.png" className="h-[32px] w-[32px]" />
                <img src="./User.svg" className="h-[32px] w-[32px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Black */}
        <div className="w-1/2 h-full bg-[#0f141e] flex justify-center items-center">
          <div className="w-[414px] h-[828px] bg-[#0f141e] rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
            <div className="w-[414px] h-[514px] p-[56px_40px] rounded-3xl">
              <div className="flex justify-between">
                <div className="w-[290px] h-[80px]">
                  <p className="text-left text-[16px] text-[#808080]">
                    {new Date().toDateString()}
                  </p>
                  <p className="text-[white] text-[48px] mt-[5px] p-[0px] h-[48px] w-[290px]">
                    Ulaanbator
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img src="./location.png" className="h-[32px] w-[32px]" />
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="./moon.png"
                  className="h-[274px] w-[274px] mt-[48px]"
                />
              </div>
            </div>
            <div className="h-[269px] w-[414px] pl-[48px] pr-[48px]">
              <h1 className="h-[165px] w-[318px] text-[110px] m-[0] text-transparent bg-gradient-to-b from-white to-black bg-clip-text">
                -16.7°
              </h1>

              <p className="text-[16px] mb-[40px] text-[#ffa500]">Sunny</p>
              <div className="flex justify-between">
                <img src="./Home.png" className="h-[32px] w-[32px]" />
                <img src="./Pin.png" className="h-[32px] w-[32px]" />
                <img src="./Heart.png" className="h-[32px] w-[32px]" />
                <img src="./User.svg" className="h-[32px] w-[32px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
