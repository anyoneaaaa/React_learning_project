// import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-lime-400 rounded-t-3xl text-black">
      <h1 className="text-[4vw] font-['Neue_Montreal'] tracking-tight leading-[3.6vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="border-t-[1px] border-lime-600 mt-16 flex pt-3">
        <div className="w-1/2">
          <h6>What can you expect:</h6>
        </div>
        <div className=" w-1/2 flex gap-10">
          <div className=" w-1/2">
            <h6 className=" mb-10">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </h6>
            <h6>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating
            </h6>
          </div>
          <div className=" w-1/2 relative ">
            <h6 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pb-5">Source</h6>
            <h6 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[5%] pt-5">Instagram</h6>
            <h6 className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] pt-5">Behance</h6>
            <h6 className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[100%] pt-5">linkedin</h6>
            <h6 className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[150%] pt-5">Facebook</h6>
          </div>
        </div>
      </div>
      <div className=" gap-5 flex pt-10 border-t-[1px] border-lime-600 mt-32">
        <div className="w-1/2">
          <h1 className=" capitalize text-6xl">our approach :</h1>
          <button className=" gap-10 uppercase px-10 mt-10 py-6 flex items-center bg-black text-white rounded-full">
            read more
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] bg-[url('src/assets/men_women.jpg')] bg-cover bg-center rounded-md"></div>
      </div>
    </div>
  );
}

export default About;
