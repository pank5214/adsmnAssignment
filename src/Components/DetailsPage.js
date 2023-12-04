import React, { useContext, useState } from "react";
import Header from "./Header";
import progressBarOne from "../utils/Images/progress bar1.png";
import capGift from "../utils/Images/Cap&Gift.png";
import asset from "../utils/Images/Asset 1.png";
import balloon from "../utils/Images/Balloon.png";
import purpleTone from "../utils/Images/Purple tone.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const DetailsPage = () => {
  const { loggedInUser } = useContext(UserContext);
  const [selectedGender, setSelectedGender] = useState("");
  const [age, setAge] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    setIsFormValid(loggedInUser !== "" && age !== "" && selectedGender !== "");
  };

  const handleAgeChange = (e) => {
    const inputAge = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setAge(inputAge);
    validateForm();
  };

  const incrementAge = () => {
    setAge((prevAge) =>
      prevAge === "" ? "1" : String(parseInt(prevAge, 10) + 1)
    );
    console.log("clicked", age);
  };

  const decrementAge = () => {
    setAge((prevAge) =>
      prevAge === "" || prevAge <= 1 ? "" : String(parseInt(prevAge, 10) - 1)
    );
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
    validateForm();
  };

  return (
    <>
      <Header />
      <div className="relative flex justify-center md:m-6 m-4 md:mt-0 mt-4">
        <div className="flex flex-col md:w-auto">
          <img
            className="md:m-2 md:w-5/6 w-4/6 self-center"
            src={progressBarOne}
            alt="progress-bar1"
          />
          <h1 className="text-white md:font-bold font-extrabold text-xl text-center md:mt-4 mt-8">
            Tell us about your loved one...
          </h1>

          <div className="flex flex-row md:justify-between md:ml-20 md:w-auto w-9/12 h-60">
            <img
              className="h-20 w-16 md:mt-32 mt-28 md:-ml-36"
              src={asset}
              alt="asset"
            />
            <img className="" src={capGift} alt="cap-gift" />
            <img
              className="md:h-24 h-10 w-auto mt-20 -ml-4"
              src={balloon}
              alt="balloon"
            />
          </div>
          <form className="" id="userDetails" onSubmit={handleSubmitEvent}>
            <div className="md:-mt-12 -mt-8 md:w-auto">
              <h1 className="text-white text-center md:font-bold font-extrabold text-xl md:w-5/6">
                Their name
              </h1>
              <input
                className="w-full md:-ml-4 mt-4 rounded-full md:p-3 p-4 md:pl-0 pl-8 md:pr-8 bg-white text-blue-600 font-extrabold md:text-center md:text-lg text-2xl"
                type="text"
                value={loggedInUser}
                disabled
                required
              />
            </div>

            <div className="">
              <h1 className="text-white text-center md:font-bold font-extrabold text-xl md:w-5/6 md:my-5 my-4">
                How old they'll be this birthday
              </h1>

              <input
                className="w-full md:-ml-4 md:m-2 rounded-full md:p-3 p-4 md:pl-6 pl-8 text-blue-600 font-extrabold md:text-lg text-2xl"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                value={age}
                onChange={handleAgeChange}
                required
              />
              {age && (
                <span className="absolute md:mt-5 mt-4 md:ml-56 md:left-96 left-[75px] text-blue-600 font-extrabold md:text-lg text-2xl">
                  Years
                </span>
              )}

              <div className="absolute flex md:w-5/12 md:end-2 end-6 -mt-12 cursor-pointer z-0">
                <svg
                  className="w-6 h-6 mr-2 text-blue-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={decrementAge}
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>

                <svg
                  className="w-6 h-6 text-blue-700 cursor-pointer z-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={incrementAge}
                >
                  <path d="M5 15l7-7 7 7"></path>
                </svg>
              </div>
            </div>

            <div className="">
              <h1 className="text-white text-center md:font-bold font-extrabold text-xl  md:w-5/6 my-3">
                Gender
              </h1>
              <div className="relative">
                <select
                  className="w-full md:-ml-4 md:m-2 md:pl-6 pl-8 text-blue-600 font-extrabold md:text-lg text-2xl rounded-full md:p-3 p-4 appearance-none"
                  required
                  onChange={handleGenderChange}
                >
                  <option value="" disabled selected hidden>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-6 h-6 inline-block md:mr-8 mr-4 text-blue-700"
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
              <img
                className="md:h-16 h-20 m-2 md:mt-8 mt-16 md:ml-0 ml-8"
                src={purpleTone}
                alt="purple-tone"
              />

              <div className="flex justify-center w-full md:mr-24 mr-12">
                {
                  <Link
                    to={{
                      pathname: "/details1/song-details",
                      search: `?gender=${selectedGender}`,
                    }}
                  >
                    <button
                      className={`md:p-2 p-4 md:px-12 px-12 mt-12 bg-yellow-500 hover:bg-yellow-600 md:rounded-xl rounded-2xl md:text-lg text-2xl text-blue-900 md:font-bold font-extrabold ${
                        isFormValid ? "" : "opacity-50 cursor-not-allowed"
                      }`}
                      type="submit"
                      disabled={!isFormValid}
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
export default DetailsPage;
