// Shimmer.jsx
import React from "react";
import Header from "./Header";
import progressBarFour from "../utils/Images/progress bar4.png";

const Shimmer = () => {
  return (
    <>
      <Header />
      <div className="relative flex justify-center m-6">
        <div className="flex flex-col">
          <img
            className="m-2 w-5/6"
            src={progressBarFour}
            alt="progress-bar4"
          />
          <h1 className="text-white font-semibold text-2xl w-5/6 text-center mt-2">
            Your song's lyrics are ready!
          </h1>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-gray-500 border-2 h-[60vh] md:w-2/6 w-4/6 md:mr-12 rounded-3xl overflow-y-auto relative"></div>
      </div>
    </>
  );
};

export default Shimmer;
