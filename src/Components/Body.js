import React, { useEffect, useState } from "react";
import RegistrationPage from "./RegistrationPage";
import LandingPage from "./LandingPage";

const Body = () => {
  const [showRegistrationPage, setShowRegistrationPage] = useState(false);
// Initially LandinPage rendered after 2 sec RegistrationPage rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRegistrationPage(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="">
        <div>
          {showRegistrationPage ? <RegistrationPage /> : <LandingPage />}
        </div>
      </div>
  );
};

export default Body;
