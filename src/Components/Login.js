import React, { useContext, useState } from "react";
import progressBar from "../utils/Images/progress bar.png";
import celebrationBg from "../utils/Images/Celebrations(Bg).png";
import asset from "../utils/Images/Asset 1.png";
import yellowTone from "../utils/Images/Yellow tone.png";
import OtpPopup from "./Popup";
import UserContext from "../utils/userContext";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric input
    const numericInput = inputValue.replace(/\D/g, "");

    // Limit to 10 digits
    const limitedInput = numericInput.slice(0, 10);

    setPhoneNumber(limitedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center">
        <img
          className="pt-6 w-3/5 md:w-auto"
          src={progressBar}
          alt="progress-bar"
        />
        <img
          className="md:mt-[-75px] mt-[-65px] md:h-auto w-auto"
          src={celebrationBg}
          alt="celebration-bg"
        />
        <h1 className="text-white md:text-lg text-2xl md:font-bold font-extrabold md:mt-[-75px] mt-[-65px]">
          Register to create
        </h1>
        <form className="flex-col md:mt-2 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handleInputChange}
            className="md:p-2 p-4 my-2 md:w-full w-5/6 ml-10 md:ml-0 md:pl-5 pl-8 bg-white rounded-full"
            required
          />

          <input
            type="text"
            placeholder="Full Name"
            className="md:p-2 p-4 my-2 md:w-full w-5/6 ml-10 md:ml-0 md:pl-5 pl-8 bg-white rounded-full"
            required
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email ID"
            className="md:p-2 p-4 my-2 md:w-full w-5/6 ml-10 md:ml-0 md:pl-5 pl-8 bg-White rounded-full"
            required
          />

          <div className="flex flex-col md:ml-8 ml-14">
            <div className="flex items-center">
              <input
                className="md:w-5 w-7 md:h-5 h-7 flex self-center"
                type="radio"
                required
                name="termsAndConditions"
              />
              <div className="ml-4 mt-2">
                <label className="text-white md:p-4 text-sm font-medium">
                  I accept Terms & Conditions and
                </label>
                <br />
                <label className="text-white md:p-4 text-sm font-medium">
                  Privacy Policy of Mondelez(Cadbury)
                </label>
              </div>
            </div>

            <div className="flex items-center md:mt-0 -mt-2">
              <input
                className="md:w-5 w-7 md:h-5 h-7 flex self-center"
                type="radio"
              />
              <div className="ml-4">
                <label className="text-white md:px-4 text-sm font-medium">
                  I would like to receive promotional
                </label>
                <br />
                <label className="text-white md:px-4 text-sm font-medium">
                  communication from Mondelez(Cadbury)
                </label>
                <br />
                <label className="text-white md:px-4 text-sm font-medium">
                  about its products and offers.
                </label>
              </div>
              <img
                className="h-16 w-auto md:mt-8 mt-14 md:ml-6 ml-3"
                src={yellowTone}
                alt="yellow-tone"
              />
            </div>
          </div>
          <img className="overflow-hidden -mt-6" src={asset} alt="asset" />
          <div className="flex justify-center -mt-20 ml-10 md:ml-0">
            <button
              className="md:p-2 p-4 md:px-12 md:mt-6 px-12 bg-yellow-500 hover:bg-yellow-600 md:rounded-xl rounded-2xl md:text-lg text-2xl text-blue-900 md:font-bold font-extrabold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {showPopup && <OtpPopup />}
      </div>
    </>
  );
};

export default Login;
