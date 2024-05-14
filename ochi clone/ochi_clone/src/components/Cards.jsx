// import React from 'react'

function Cards() {
  return (
    <div className=" w-full h-screen px-32 bg-zinc-800 flex gap-3 items-center">
      <div className="cardconatainter h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full h-full bg-green-800 rounded-xl">
          <img className=" w-32" src="src\assets\logo001.svg" />
          <button className=" absolute left-6 bottom-4 px-3 py-1 border-2 rounded-3xl border-yellow-300 text-yellow-300">
            &copy; 2009-2010
          </button>
        </div>
      </div>
      <div className="cardconatainter flex gap-3 h-[50vh] w-1/2">
        <div className="card relative w-1/2 h-full bg-zinc-500 rounded-xl flex items-center justify-center">
          <img className=" w-32" src="src\assets\logo001.svg" />
          <button className=" absolute left-6 bottom-4 px-3 py-1 border-2 rounded-3xl border-yellow-300 text-yellow-300">
            &copy; 2009-2010
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-zinc-500 rounded-xl flex items-center justify-center">
          <img className=" w-32" src="src\assets\logo001.svg" />
          <button className=" absolute left-6 bottom-4 px-3 py-1 border-2 rounded-3xl border-yellow-300 text-yellow-300">
            &copy; 2009-2010
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
