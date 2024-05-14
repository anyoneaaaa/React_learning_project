// import React from 'react'

function Features() {
  return (
    <div className=" w-full py-10">
      <div className=" w-full px-10  border-b-[1px] border-zinc-800 pb-10">
        <h1 className=" text-6xl font-extralight tracking-tight font-['Neue_Montreal']">
          Featured Projects
        </h1>
      </div>
      <div className=" px-10">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer w-1/2 h-[70vh] relative">
            <h1 className=" absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-lime-600 z-50 text-7xl leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="src\assets\alexander-london-mJaD10XeD7w-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[70vh] relative">
            <h1 className=" absolute right-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-lime-600 z-50 text-7xl leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="src\assets\alexander-london-mJaD10XeD7w-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
