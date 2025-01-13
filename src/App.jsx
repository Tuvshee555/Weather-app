import { useState } from "react";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-400">
        <div className="w-full h-full rounded-3xl flex bg-neatral-100">
          <div className="w-1/2 h-full bg-neutral-100 flex justify-center items-center ">
            <div className="w-1/2 h-3/4 bg-red-500 rounded-3xl"></div>
          </div>
          <div className="w-1/2 h-full bg-slate-900 flex justify-center items-center ">
            <div className="w-1/2 h-3/4 bg-green-500 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
