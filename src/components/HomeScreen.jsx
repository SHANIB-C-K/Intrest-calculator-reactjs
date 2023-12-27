import React from "react";

const HomeScreen = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white h-96 w-96 bg-opacity-30 rounded-2xl flex flex-col items-center justify-center">
          <div className="font-bold text-2xl text-white">
            Intrest Calculator
          </div>
          <div className="font-bold text-black text-4xl">₹ 50</div>
          <div className="pb-4"></div>
          <div className="w-72">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                type="number"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-bold text-1xl outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-12 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-xl px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 border-white"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-bold text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-900 font-bold gap2 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Enter your Money
              </label>
            </div>
          </div>
          <div className="pb-4"></div>
          <div className="w-72">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                type="number"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-bold text-1xl outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-12 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-xl px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 border-white"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-bold text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-900 font-bold gap2 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Enter your Rate of Interest (P.A)%
              </label>
            </div>
          </div>
          <div className="pb-4"></div>
          <div className="w-72">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                type="number"
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-bold text-1xl outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-12 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-xl px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 border-white"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-bold text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-green-900 font-bold gap2 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Time Period (Year)
              </label>
            </div>
          </div>
          <div className="pt-5 flex flex-row">
            <button className="calc-btn">Calculate</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
