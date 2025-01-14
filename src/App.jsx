import { useState } from "react";
import countriesData from "./data";

function App() {
  console.log(countriesData);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-400 rounded-3xl">
      <div className="w-[100px] h-[100px] bg-[red] z-50 rounded-[50%] absolute"></div>
        <div className="w-full h-full rounded-3xl flex bg-neatral-100 relative">
          {/*White*/}
          <div className="w-1/2 h-full bg-neutral-100 flex justify-center items-center ">
            <div className="w-[414px] h-[828px] bg-[#f3f4f6] rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
              <div className="w-[414px] h-[514px] p-[56px_40px] rounded-3xl">
                <div className="flex flex justify-between">
                  <div className="w-[290px] h-[80px]">
                    <p className="text-left text-[16px] text-[#808080] ">
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
          {/*Black*/}
          <div className="w-1/2 h-full bg-[#0f141e] flex justify-center items-center ">
            <div className="w-[414px] h-[828px] bg-[#0f141e] rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
              <div className="w-[414px] h-[514px] p-[56px_40px] rounded-3xl">
                <div className="flex flex justify-between">
                  <div className="w-[290px] h-[80px]">
                    <p className="text-left text-[16px] text-[#808080] ">
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
      </div>
    </>
  );
}

export default App;

//startswith
