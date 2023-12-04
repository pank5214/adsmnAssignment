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
        <h1 className="font-extrabold md:text-2xl text-3xl mb-4 text-center text-blue-900">
          Enter OTP
        </h1>
        <form id="popup" className="" onSubmit={handleSubmit}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-[52px] h-14 mx-1 text-2xl text-center font-extrabold border border-solid border-gray-300 rounded-xl bg-blue-900 focus:outline-none focus:border-blue-500 text-white"
              required
              value={digit}
              onChange={(e) => {
                const input = e.target.value;
                const numericInput = input.replace(/\D/g, "");
                const singleDigit = numericInput.charAt(0);
                handleChange(index, singleDigit);
              }}
            />
          ))}

          <h2 className="text-right text-sm mt-2 font-extrabold underline text-blue-900 ">
            Resend OTP
          </h2>
          <div className="flex justify-center mt-4">
            <button
               className="md:p-2 p-4 md:px-12 px-12 bg-yellow-500 hover:bg-yellow-600 md:rounded-xl rounded-2xl md:text-lg text-xl text-blue-900 md:font-bold font-extrabold"
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
