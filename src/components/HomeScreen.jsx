import React, { useState } from "react";

const HomeScreen = () => {
  const [Money, setMoney] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [Year, setYear] = useState("");
  const [Intrest, setIntrest] = useState(0);

  const intrestCalculator = (e) => {
    e.preventDefault();
    if (!Money) {
      alert("Please enter the amount of money you want to invest");
    } else {
      setIntrest((Money * Percentage * Year) / 100);
    }
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white h-96 w-96 bg-opacity-30 rounded-2xl flex flex-col items-center justify-center">
          <div className="font-bold text-2xl text-white">
            Intrest Calculator
          </div>
          <div className="font-bold text-black text-4xl">₹ {Intrest}</div>
          <form onSubmit={intrestCalculator}>
            <div className="pb-4"></div>
            <div>
              <label
                for="Money"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ₹ Principle Amount
              </label>
              <input
                type="₹ Principle Amount"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Money"
                required
              />
            </div>
            <div className="pb-4"></div>
            <div>
              <label
                for="Rate of Interest (P.A)%"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rate of Interest (P.A)%
              </label>
              <input
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rate of Interest (P.A)%"
                required
              />
            </div>
            <div className="pb-4"></div>
            <div>
              <label
                for="Time Period (Year)"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time Period (Year)
              </label>
              <input
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rate of Interest (P.A)%"
                required
              />
            </div>
            <div className="pt-5 flex flex-row">
              <button className="calc-btn">Calculate</button>
              <button>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
