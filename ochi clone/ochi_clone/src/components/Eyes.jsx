// import React from 'react'

import { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousey = e.clientY;
      let mousex = e.clientX;
      let deltax = mousex - window.innerWidth / 2;
      let deltay = mousey - window.innerHeight / 2;

      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);

      setrotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="w-full relative bg-cover bg-center h-full bg-[url('src\assets\eyes_image.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" w-[15vw] flex items-center h-[15vw] bg-white rounded-full justify-center">
            <div className=" w-2/3 h-2/3 bg-black relative rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className=" w-10 h-10 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
          <div className=" w-[15vw] flex items-center h-[15vw] bg-white rounded-full justify-center">
            <div className=" w-2/3 h-2/3 bg-black relative rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg) ` }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className=" w-10 h-10 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
