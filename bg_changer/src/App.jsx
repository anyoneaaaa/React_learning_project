import { useState } from "react";

function App() {
  const [colour, set_colour] = useState("olive");

  return (
    <div className=" w-full h-screen" style={{ backgroundColor: colour }}>
      <div className="fixed gap-5 bg-white rounded-full w-fit py-3 flex flex-wrap items-center justify-center top-12 inset-x-0 px-5">
        <div className="flex  flex-wrap justify-center gap-5 shadow-xl bg-red-600 px-5 py-3 rounded-full">
          <button onClick={()=>set_colour("red")} className=" outline-none px-4 capitalize text-white">
            red
          </button>
        </div>
        <div className="flex  flex-wrap justify-center gap-5 shadow-xl bg-green-600 px-5 py-3 rounded-full">
          <button onClick={()=>set_colour("green")} className=" outline-none px-4 capitalize text-white">
            green
          </button>
        </div>
        <div className="flex  flex-wrap justify-center gap-5 shadow-xl bg-blue-600 px-5 py-3 rounded-full">
          <button onClick={()=>set_colour("blue")} className=" outline-none px-4 capitalize text-white">
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
