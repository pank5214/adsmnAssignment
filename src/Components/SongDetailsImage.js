import React from "react";
import progressBarTwo from "../utils/Images/progress bar2.png";
import headPhone from "../utils/Images/Headphone.png";
import purpleMusic from "../utils/Images/Purple Music Tone.png";
import balloon from "../utils/Images/Balloon2.png";

const SongDetailsImage = () => {
  return (
    <>
      <div className="relative flex justify-center m-6 md:ml-0 ml-24">
        <div className="flex flex-col">
          <img
            className="md:m-2 w-5/6"
            src={progressBarTwo}
            alt="progress-bar2"
          />
          <h1 className="text-white md:font-semibold font-bold md:text-xl text-lg md:w-5/6 w-full md:ml-0 -ml-8 text-center md:mt-2 mt-4">
            What would you like their song's <br /> vibe to be?
          </h1>

          <div className="flex flex-row justify-between ml-20 md:mt-0 -mt-4">
            <img
              className="md:h-20 h-8 md:w-20 md:mt-36 mt-48 -ml-40"
              src={purpleMusic}
              alt="purpleMusic"
            />
            <img
              className="md:-mt-6 md:mb-2 mb-4 md:h-auto h-64"
              src={headPhone}
              alt="headPhone"
            />
            <img
              className="md:h-24 h-12 md:ml-0 md:mr-0 w-auto md:mt-16 mt-12"
              src={balloon}
              alt="balloon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongDetailsImage;
