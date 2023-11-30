import React, { useState } from "react";
import progressBar from "../utils/Images/progress bar.png";
import celebrationBg from "../utils/Images/Celebrations(Bg).png";
import asset from "../utils/Images/Asset 1.png";
import yellowTone from "../utils/Images/Yellow tone.png";
import OtpPopup from "./Popup";

const Login = () => {
  const [showOTP, setShowOTP] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleOTPSubmit = (enteredOTP) => {
    // Add logic to validate OTP
    if (enteredOTP === "1234") {
      setShowOTP(false);
    } else {
      // Show an error message or handle invalid OTP
      // For simplicity, we'll just hide the OTP popup
      setShowOTP(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center">
        <img className="pt-6" src={progressBar} alt="progress-bar" />
        <img className="mt-[-75px]" src={celebrationBg} alt="celebration-bg" />
        <h1 className="text-white text-lg font-bold mt-[-75px]">
          Register to create
        </h1>
        <form className="flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="10"
            placeholder="Phone Number"
            className="p-2 my-2 w-full pl-5 bg-white rounded-full"
            required
          />

          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full pl-5 bg-white rounded-full"
            required
          />

          <input
            type="email"
            placeholder="Email ID"
            className="p-2 my-2 w-full pl-5 bg-White rounded-full"
            required
          />

          <div className="flex flex-col ml-8">
            <div className="flex items-center">
              <input
                className="w-5 h-5 flex self-center"
                type="radio"
                required
              />
              <div className="ml-4">
                <label className="text-white p-4 text-sm font-medium">
                  I accept Terms & Conditions and
                </label>
                <br />
                <label className="text-white p-4 text-sm font-medium">
                  Privacy Policy of Mondelez(Cadbury)
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <input
                className="w-5 h-5 flex self-center"
                type="radio"
                name="status"
              />
              <div className="ml-4">
                <label className="text-white px-4 text-sm font-medium">
                  I would like to receive promotional
                </label>
                <br />
                <label className="text-white px-4 text-sm font-medium">
                  communication from Mondelez(Cadbury)
                </label>
                <br />
                <label className="text-white px-4 text-sm font-medium">
                  about its products and offers.
                </label>
              </div>
              <img
                className="h-16 w-auto mt-8 ml-6"
                src={yellowTone}
                alt="asset"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-green-500 hover:bg-green-600 rounded-xl text-lg text-blue-800 font-bold p-2 px-8"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {showOTP && <OtpPopup onSubmitOTP={handleOTPSubmit} />}

      <div className="relative">
        <img className="ml-80 -mt-14 overflow-hidden" src={asset} alt="asset" />
      </div>
    </>
  );
};

export default Login;
