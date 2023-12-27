import React, { useState } from "react";

const HomeScreen = () => {
  const [Money, setMoney] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [Year, setYear] = useState("");
  const [Intrest, setIntrest] = useState(0);

  const intrestCalculator = (e) => {
    e.preventDefault();

    if (!Money || !Percentage || !Year) {
      alert("Please enter a values");
    } else {
      setIntrest((Money * Percentage * Year) / 100);
    }
  };

  const ResetForm = () => {
    setMoney("");
    setPercentage("");
    setYear("");
    setIntrest(0);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-black h-auto w-96 bg-opacity-80 rounded-2xl flex flex-col items-center justify-center py-3 pb-5 shadow-5xl shadow-blue-950">
          <div className="font-bold text-2xl text-white pt-3 pb-4">
            Intrest Calculator
          </div>
          <div className="bg-gray-400 bg-opacity-20 rounded-2xl flex flex-col items-center justify-center w-80 shadow-2xl shadow-red-900">
            <div className="font-bold text-green-700 text-4xl">₹ {Intrest}</div>
            <p className="text-lg text-red-500 font-bold pt-3">
              Calculate Your Simple Interest Easily
            </p>
          </div>
          <form onSubmit={intrestCalculator}>
            <div className="pb-4"></div>
            <div>
              <label
                for="Money"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ₹ Amount
              </label>
              <input
                value={Money || ""}
                onChange={(e) => setMoney(e.target.value)}
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="₹ Amount"
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
                value={Percentage}
                onChange={(e) => setPercentage(e.target.value)}
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
                value={Year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rate of Interest (P.A)%"
                required
              />
            </div>
            <div className="pt-5 flex flex-row">
              <button className="calc-btn">Calculate</button>
              <div className="pl-3">
                <button className="reset-btn" onClick={ResetForm}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
