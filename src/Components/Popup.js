import React from "react";

const OtpPopup = ({ onSubmitOTP }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-lg font-bold mb-4">Enter OTP</h2>
        <input type="text" placeholder="Enter OTP" className="p-2 mb-4" />
        <button
          className="bg-green-500 hover:bg-green-600 rounded-xl text-lg text-blue-800 font-bold p-2 px-8"
          onClick={onSubmitOTP}
        >
          Submit
        </button>
        
      </div>
    </div>
  );
};

export default OtpPopup;
