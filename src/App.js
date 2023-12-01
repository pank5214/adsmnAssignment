import "./App.css";
import Body from "./Components/Body";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";
import backgroundImage from "./utils/Images/BG.jpg";
import SongDetails from "./Components/SongDetails";
import FinalLyrics from "./Components/FinalLyrics";
import { FullNameProvider } from "./utils/userContext";

function App() {
  return (
    <FullNameProvider>
      <div>
        <img
          className="h-screen w-screen fixed"
          src={backgroundImage}
          alt="background"
        />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/details1/" element={<Details />} />
          <Route path="/details1/song-details" element={<SongDetails />} />
          <Route
            path="/details1/song-details/lyrics"
            element={<FinalLyrics />}
          />
        </Routes>
      </div>
    </FullNameProvider>
  );
}

export default App;
