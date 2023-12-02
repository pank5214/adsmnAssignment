import React from "react";
import Header from "./Header";
import progressBarFour from "../utils/Images/progress bar4.png";
import { useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";

const FinalLyrics = () => {
  const location = useLocation();
  const { lyrics } = location.state || {};

  if (!lyrics) return <Shimmer />;

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
        <div className="bg-white border-2 h-[60vh] md:w-2/6 w-4/6 md:mr-12 rounded-3xl overflow-y-auto">
          <div className="m-4 p-2 text-left self-center">
            <span className="shimmer-text">{lyrics}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalLyrics;
