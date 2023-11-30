import React, { useEffect, useState } from "react";
import backgroundImage from "../utils/Images/BG.jpg";
import RegistrationPage from "./RegistrationPage";
import LandingPage from "./LandingPage";

const Body = () => {
  const [showRegistrationPage, setShowRegistrationPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRegistrationPage(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="">
        <img
          className="h-screen w-screen fixed"
          src={backgroundImage}
          alt="background"
        />
        <div>
          {showRegistrationPage ? <RegistrationPage /> : <LandingPage />}
        </div>
      </div>
  );
};

export default Body;
