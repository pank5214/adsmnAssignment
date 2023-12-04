import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import FinalLyrics from "./Components/FinalLyrics";
import backgroundImage from "./utils/Images/BG.jpg";
import UserContext from "./utils/userContext";
import DetailsPage from "./Components/DetailsPage";
import SongDetailsPage from "./Components/SongDetailsPage";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if(name){
      setUserName(name);
    }
  }, []);
  
  useEffect(() => {localStorage.setItem('userName', userName)}, [userName])

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <img
          className="h-screen w-screen fixed"
          src={backgroundImage}
          alt="background"
        />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/details1/" element={<DetailsPage />} />
          <Route path="/details1/song-details" element={<SongDetailsPage />} />
          <Route
            path="/details1/song-details/lyrics"
            element={<FinalLyrics />}
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
