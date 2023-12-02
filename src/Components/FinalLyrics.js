import React from "react";
import Header from "./Header";
import progressBarFour from "../utils/Images/progress bar4.png";
import { useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";

const FinalLyrics = () => {
  const location = useLocation();
  const { lyrics } = location.state || {};

  if (!lyrics)
    return (
      <Shimmer
        title="Your song's lyrics are ready!"
        message="Your Birthday Tune is in Progress, Please wait..."
      />
    );

  return (
    <>
      <Header />
      <div className="relative flex justify-center m-6">
        <div className="flex flex-col">
          <img
            className="md:m-2 md:w-5/6 w-4/6 md:ml-0 ml-[72px]"
            src={progressBarFour}
            alt="progress-bar4"
          />
          <h1 className="text-white font-semibold text-2xl md:w-5/6 w-full text-center mt-6">
            Your song's lyrics are ready!
          </h1>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-white border-2 h-[60vh] md:w-2/6 w-5/6 md:mr-12 rounded-3xl overflow-y-auto">
          <div className="m-4 p-2 text-left self-center">
            <span className="shimmer-text">{lyrics}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalLyrics;
