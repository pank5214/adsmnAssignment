import React from "react";
import Header from "./Header";
import progressBarOne from "../utils/Images/progress bar1.png";
import capGift from "../utils/Images/Cap&Gift.png";
import asset from "../utils/Images/Asset 1.png";
import balloon from "../utils/Images/Balloon.png";
import purpleTone from "../utils/Images/Purple tone.png";
import { Link } from "react-router-dom";
import { useFullNameContext } from "../utils/userContext";

const Details = () => {
  const { fullName } = useFullNameContext();
  alert("allllll", fullName);
  console.log("fulll:", fullName);

  return (
    <>
      <Header />
      <div className="relative flex justify-center m-6">
        <div className="flex flex-col">
          <img className="m-2 w-5/6" src={progressBarOne} alt="progress-bar1" />
          <h1 className="text-white font-semibold text-xl w-5/6 text-center mt-4">
            Tell us about your loved one...
          </h1>

          <div className="flex flex-row justify-between ml-20">
            <img className="h-20 w-20 mt-32 -ml-36" src={asset} alt="asset" />
            <img className="" src={capGift} alt="cap-gift" />
            <img className="h-24 w-auto mt-20" src={balloon} alt="balloon" />
          </div>
          <form action="">
            <div className="-mt-12">
              <h1 className="text-white text-center font-bold text-xl w-5/6">
                Their name
              </h1>
              <input
                className="w-full -ml-4 m-2 rounded-full p-3 pr-8 font-bold text-white text-center text-xl"
                type="text"
                value={fullName}
                disabled
              />
            </div>

            <div className="">
              <h1 className="text-white text-center font-bold m-2 text-xl w-5/6">
                How old they'll be this birthday
              </h1>
              <input
                className="w-full -ml-4 m-2 rounded-full p-3 pl-6 text-blue-600 font-extrabold text-lg"
                type="text"
              />
              <div className="absolute flex ml-[330px] -mt-12 pointer-events-none">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>

                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 15l7-7 7 7"></path>
                </svg>
              </div>
            </div>

            <div className="">
              <h1 className="text-white text-center font-bold text-xl w-5/6">
                Gender
              </h1>
              <div className="relative">
                <select className="w-full -ml-4 m-2 pl-6 text-blue-600 font-extrabold text-lg rounded-full p-3 appearance-none">
                  <option value="" disabled selected hidden>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-6 h-6 inline-block mr-8 text-blue-700"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path className="" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <img className="h-16 m-2" src={purpleTone} alt="purple-tone" />

              <div className="flex self-center justify-center">
                {
                  <Link to={"/details1/song-details"}>
                    <button
                      className="p-2 px-8 ml-14 bg-green-500 hover:bg-green-600 rounded-xl text-lg text-blue-800 font-bold"
                      type="submit"
                    >
                      Proceed
                    </button>
                  </Link>
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
