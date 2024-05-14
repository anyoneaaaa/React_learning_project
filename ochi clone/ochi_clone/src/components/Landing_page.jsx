// import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing_page() {
  return (
    <div className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-52 px-20">
        {["we create", "eye-Opening", "presentation"].map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (<div className="w-[7.5vw] h-[5vw] bg-red-400 relative mr-[1vw] rounded-md"></div>)}
                <h1 className="uppercase text-[7vw] leading-[5.8vw] tracking-tighter font-semibold font-['Founders_Grotesk_X-Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center px-20  py-5 font-['Neue_Montreal']">
        {[
          "For public and private companies",
          "from first pitch to last pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md capitalize font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2 ">
          <div className="px-5 py-2 border-[1px] font-light text-md capitalize rounded-full border-zinc100">start the project</div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-zinc-100 border-[1px]">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
