import React, { useState } from "react";

const OtpPopup = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp === "1234") {
      window.location.href = "/details1";
    } else {
      alert("Please Enter Correct OTP");
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl">
        <h1 className="font-bold mb-4 text-center text-blue-900 text-xl">
          Enter OTP
        </h1>
        <form id="popup" className="" onSubmit={handleSubmit}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 mx-1 text-2xl text-center border border-solid border-gray-300 rounded-lg bg-blue-900 focus:outline-none focus:border-blue-500"
              required
              value={digit}
              onChange={(e) => {
                handleChange(index, e.target.value);
              }}
            />
          ))}

          <h2 className="ml-24 font-semibold underline text-blue-900 ">
            Resend OTP
          </h2>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 rounded-xl text-lg text-blue-800 font-bold p-2 px-8"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPopup;
