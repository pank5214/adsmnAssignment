import React, { useContext, useState } from "react";
import Header from "./Header";
import "../App.css";
import asset from "../utils/Images/Asset 1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../utils/userContext";
import openai from "../utils/openAI";
import SongDetailsImage from "./SongDetailsImage";
import SongDetailsSelection from "./SongDetailsSelection";

const SongDetailsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedGender = searchParams.get("gender");

  const { loggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const handleMoodClick = (index) => {
    setSelectedMood(index);
  };

  const handleGenreClick = (index) => {
    setSelectedGenre(index);
  };

  const handleVoiceClick = (index) => {
    setSelectedVoice(index);
  };

  // Check if all selections are made
  const isButtonEnabled =
    selectedMood !== null && selectedGenre !== null && selectedVoice !== null;

  // OpenAI created Happy Birthday tune, by follow the condition which are provided in prompt Variable
  const handleProceed = async () => {
    const prompt = `Wishing a happy birthday to ${loggedInUser}.
      Ensure that "Happy birthday" is mentioned at least twice,
      and it should rhyme. The lyrics should use simple, short,
      and easy to pronounce words as much as possible.

      Using the above information, please write 16 lines of
      <genre> lyrics that I can dedicate to ${
        selectedGender === "Male" ? "him" : "her"
      } 
      for ${selectedGender === "Male" ? "his" : "her"} birthday. 
      Each line can have maximum of 8 words or 40 characters.

      The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.`;

    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      const generatedLyrics = completion?.choices?.[0]?.message?.content;
      navigate("/details1/song-details/lyrics", {
        state: { lyrics: generatedLyrics },
      });
    } catch (error) {
      console.error("Error generating lyrics:", error);
    }
  };
  return (
    <>
      <Header />
      <SongDetailsImage />
      <SongDetailsSelection
        selectedMood={selectedMood}
        selectedGenre={selectedGenre}
        selectedVoice={selectedVoice}
        handleMoodClick={handleMoodClick}
        handleGenreClick={handleGenreClick}
        handleVoiceClick={handleVoiceClick}
      />

      <div className="relative flex flex-row-reverse">
        <img className="h-12 w-10 bottom-7 fixed" src={asset} alt="asset" />
      </div>
      <div className="relative flex md:w-full md:mt-28 mt-40 w-3/5 justify-center shadow-lg">
        {
          <Link to={"/details1/song-details/lyrics"}>
            <button
              className={`md:p-2 p-4 md:px-12 md:mt-6 px-12 md:-ml-20 md:bottom-7 bottom-16 fixed bg-yellow-400 hover:bg-yellow-500 md:rounded-xl rounded-2xl md:text-lg text-2xl text-blue-900 md:font-bold font-extrabold ${
                isButtonEnabled ? "" : "opacity-80 cursor-not-allowed"
              }`}
              onClick={handleProceed}
              disabled={!isButtonEnabled}
            >
              Proceed
            </button>
          </Link>
        }
      </div>
    </>
  );
};

export default SongDetailsPage;
