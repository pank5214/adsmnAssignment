import React from "react";
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
import { Link } from "react-router-dom";
import { useFullNameContext } from "../utils/userContext";
// import openai from "../utils/openAI";

const SongDetails = () => {
  const { fullName } = useFullNameContext();
  console.log("songdetails:", fullName);
  
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
  // const generateBirthdayLyrics = async (selectedMood, selectedGenre, selectedVoice) => {
  //   const prompt = `Wishing a happy birthday to ${name}.
  //     Ensure that "Happy birthday" is mentioned at least twice,
  //     and it should rhyme. The lyrics should use simple, short,
  //     and easy to pronounce words as much as possible.

  //     Using the above information, please write 16 lines of ${selectedGenre} lyrics
  //     that I can dedicate to him/her for his/her birthday.
  //     Each line can have a maximum of 8 words or 40 characters.

  //     The lyrics generated should be completely unique and never written before
  //     every single time and should not infringe on any trademarks/copyrights or
  //     any other rights of any individual or entity anywhere in the world.`;

  //   try {
  //     const response = await openai.complete({
  //       engine: 'text-davinci-003',  // You can choose a different engine if needed
  //       prompt,
  //       max_tokens: 400,  // Adjust as needed
  //     });

  //     const lyrics = response.data.choices[0].text;
  //     console.log(lyrics);

  //     // Optionally, you can redirect to the lyrics page or display them in your component
  //     // window.location.href = "/details1/song-details/lyrics";
  //   } catch (error) {
  //     console.error('Error generating lyrics:', error);
  //   }
  // };
  const handleProceed = () => {
    // generateBirthdayLyrics(selectedMood, selectedGenre, selectedVoice);
    console.log("Hello");
  };

  return (
    <>
      <Header />
      <div className="relative flex justify-center m-6">
        <div className="flex flex-col">
          <img className="m-2 w-5/6" src={progressBarTwo} alt="progress-bar2" />
          <h1 className="text-white font-semibold text-2xl w-5/6 text-center mt-2">
            What would you like their song's vibe to be?
          </h1>

          <div className="flex flex-row justify-between ml-20">
            <img
              className="h-20 w-20 mt-36 -ml-40"
              src={purpleMusic}
              alt="purpleMusic"
            />
            <img className="-mt-6" src={headPhone} alt="headPhone" />
            <img className="h-24 w-auto mt-16" src={balloon} alt="balloon" />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row -mt-[72px]">
        <div className="relative border-2 h-[153px] w-2/6 border-green-600 rounded-2xl">
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
        <div className="relative border-2 h-[153px] w-2/6 border-green-600 rounded-2xl">
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
        <div className="relative border-2 h-[153px] w-2/6 border-green-600 rounded-2xl">
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
        <img className="bottom-7 fixed" src={asset} alt="asset" />
      </div>
      <div className="relative flex w-4/5 justify-center shadow-lg">
        {
          <Link to={"/details1/song-details/lyrics"} onClick={handleProceed}>
            <button className="p-2 px-8 ml-[76px] bottom-7 fixed bg-green-500 hover:bg-green-600 rounded-xl text-lg text-blue-800 font-bold">
              Proceed
            </button>
          </Link>
        }
      </div>
    </>
  );
};

export default SongDetails;
