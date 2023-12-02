// Shimmer.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import progressBarFour from "../utils/Images/progress bar4.png";

const Shimmer = ({ title, message }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="relative flex justify-center m-6">
        <div className="flex flex-col">
          {loading ? (
            <img
              className="md:m-2 md:w-5/6 w-4/6 md:ml-0 ml-[72px] animate-pulse"
              src={progressBarFour}
              alt="progress-bar4"
            />
          ) : (
            <h1 className="text-white font-semibold text-2xl w-full text-center mt-6">
              {title}
            </h1>
          )}
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="flex justify-center items-center bg-gray-400 h-[60vh] md:w-2/6 w-5/6 md:mr-2 rounded-3xl overflow-y-auto">
          <h1 className="text-center text-blue-800 font-extrabold md:text-2xl text-xl md:mx-2 mx-4 mb-10">
            {loading ? "Loading..." : message}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
