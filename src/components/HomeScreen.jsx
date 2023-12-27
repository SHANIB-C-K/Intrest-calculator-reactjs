import React from "react";

const HomeScreen = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white h-96 w-96 bg-opacity-30 rounded-2xl flex flex-col items-center justify-center">
            <div className="in">
                <input type="text" placeholder="Enter your place" />
            </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
