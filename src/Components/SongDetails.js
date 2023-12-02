import React, { useContext } from "react";
import Header from "./Header";
import progressBarTwo from "../utils/Images/progress bar2.png";
import headPhone from "../utils/Images/Headphone.png";
import purpleMusic from "../utils/Images/Purple Music Tone.png";
import balloon from "../utils/Images/Balloon2.png";
import "../App.css";
import happyEmoji from "../utils/Images/Happy.png";
import romanticEmoji from "../utils/Images/Romantic.png";
import funnyEmoji from "../utils/Images/Funny.png";
import motivationalEmoji from "../utils/Images/Motivational.png";
import calmEmoji from "../utils/Images/Calm.png";
import rapMusic from "../utils/Images/Rap.png";
import rockMusic from "../utils/Images/Rock.png";
import popMusic from "../utils/Images/Pop.png";
import desiMusic from "../utils/Images/Desi.png";
import edmMusic from "../utils/Images/EDM.png";
import maleAnimation from "../utils/Images/MAle.png";
import femaleAnimation from "../utils/Images/Female.png";
import asset from "../utils/Images/Asset 1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../utils/userContext";
import openai from "../utils/openAI";

const SongDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedGender = searchParams.get("gender");

  const { loggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  const moods = [
    { emoji: happyEmoji, label: "Happy" },
    { emoji: romanticEmoji, label: "Romantic" },
    { emoji: funnyEmoji, label: "Funny" },
    { emoji: motivationalEmoji, label: "Motivational" },
    { emoji: calmEmoji, label: "Calm" },
  ];

  const music = [
    { instrument: rapMusic, label: "Rap" },
    { instrument: rockMusic, label: "Rock" },
    { instrument: popMusic, label: "Pop" },
    { instrument: desiMusic, label: "Desi" },
    { instrument: edmMusic, label: "EDM" },
  ];

  const singerVoice = [
    { animation: maleAnimation, gender: "Male" },
    { animation: femaleAnimation, gender: "Female" },
  ];

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
      <div className="relative flex justify-center m-6 md:ml-0 ml-24">
        <div className="flex flex-col">
          <img
            className="md:m-2 w-5/6"
            src={progressBarTwo}
            alt="progress-bar2"
          />
          <h1 className="text-white font-semibold text-2xl md:w-5/6 w-full md:ml-0 -ml-8 text-center mt-2">
            What would you like their song's vibe to be?
          </h1>

          <div className="flex flex-row justify-between ml-20">
            <img
              className="md:h-20 h-8 md:w-20 md:mt-36 mt-48 -ml-40"
              src={purpleMusic}
              alt="purpleMusic"
            />
            <img className="-mt-6" src={headPhone} alt="headPhone" />
            <img className="md:h-24 h-16 md:ml-0 -ml-4 md:mr-0 mr-6 w-auto mt-16" src={balloon} alt="balloon" />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row -mt-[72px]">
        <div className="relative border-2 h-[153px] md:w-2/6 w-5/6 border-green-600 rounded-2xl">
          <div className="p-2 bg-green-600 rounded-t-xl">
            <h2 className="text-center text-violet-900 text-xl font-bodyFont font-extrabold">
              Mood
            </h2>
          </div>

          <div className="flex flex-row h-16 m-2 justify-between">
            {moods.map((mood, index) => (
              <img key={index} src={mood.emoji} alt="emoji" />
            ))}
          </div>

          <div className="flex flex-row h-16 m-[10px] p-2 -mt-4 justify-between">
            {moods.map((mood, index) => (
              <span key={index} className="text-white text-center font-medium">
                {mood.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row mt-8">
        <div className="relative border-2 h-[153px] md:w-2/6 w-5/6 border-green-600 rounded-2xl">
          <div className="p-2 bg-green-600 rounded-t-xl">
            <h2 className="text-center text-violet-900 text-xl font-bodyFont font-extrabold">
              Genre
            </h2>
          </div>

          <div className="flex flex-row h-16 m-2 justify-between">
            {music.map((mood, index) => (
              <img key={index} src={mood.instrument} alt="emoji" />
            ))}
          </div>

          <div className="flex flex-row h-16 m-[10px] p-2 -mt-4 justify-between">
            {music.map((mood, index) => (
              <span key={index} className="text-white text-center font-medium">
                {mood.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row mt-8">
        <div className="relative border-2 h-[153px] md:w-2/6 w-5/6 border-green-600 rounded-2xl">
          <div className="p-2 bg-green-600 rounded-t-xl">
            <h2 className="text-center text-violet-900 text-xl font-bodyFont font-extrabold">
              Singer's voice
            </h2>
          </div>

          <div className="flex flex-row h-16 m-2 justify-evenly">
            {singerVoice.map((singer, index) => (
              <img key={index} src={singer.animation} alt="emoji" />
            ))}
          </div>

          <div className="flex flex-row h-16 m-[10px] p-2 -mt-4 justify-evenly">
            <span className="text-white text-center font-medium ml-[19px]">
              {singerVoice[0].gender}
            </span>
            <span className="text-white text-center font-medium ml-14">
              {singerVoice[1].gender}
            </span>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row-reverse">
        <img className="h-12 w-10 bottom-7 fixed" src={asset} alt="asset" />
      </div>
      <div className="relative flex w-4/5 justify-center shadow-lg">
        {
          <Link to={"/details1/song-details/lyrics"}>
            <button
              className="p-2 px-8 md:ml-[76px] -ml-6 bottom-7 fixed bg-green-500 hover:bg-green-600 rounded-xl text-lg text-blue-800 font-bold"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </Link>
        }
      </div>
    </>
  );
};

export default SongDetails;
