import React from "react";
import { moods, music, singerVoice } from "../utils/constants";

const SongDetailsSelection = ({
  selectedMood,
  selectedGenre,
  selectedVoice,
  handleMoodClick,
  handleGenreClick,
  handleVoiceClick,
}) => {
  return (
    <>
      <div className="flex justify-center flex-row md:-mt-[72px] -mt-14">
        <div className="relative md:border-2 border-[1px] md:h-[153px] h-36 md:w-2/6 w-5/6 border-yellow-400 rounded-2xl">
          <div className="md:p-2 p-1 bg-yellow-400 rounded-t-xl">
            <h2 className="text-center text-violet-900 text-xl font-bodyFont font-extrabold">
              Mood
            </h2>
          </div>

          <div className="flex flex-row md:h-8 h-9 md:m-5 mt-5 justify-around">
            {moods.map((mood, index) => (
              <img
                className={`${
                  selectedMood === index
                    ? `cursor-pointer bg-yellow-400 rounded-full ring-8 ring-yellow-400`
                    : `cursor-pointer bg-white rounded-full ring-8 ring-white`
                }`}
                key={index}
                src={mood.emoji}
                alt="emoji"
                onClick={() => handleMoodClick(index)}
              />
            ))}
          </div>

          <div className="flex flex-row md:h-16 p-2 justify-around">
            {moods.map((mood, index) => (
              <span
                key={index}
                className="md:-mt-3 mt-2 text-white text-[10px] md:text-base md:font-medium font-bold"
              >
                {mood.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row mt-8">
        <div className="relative md:border-2 border-[1px] md:h-[153px] h-36 md:w-2/6 w-5/6 border-yellow-400 rounded-2xl">
          <div className="md:p-2 p-1 bg-yellow-400 rounded-t-xl">
            <h2 className="text-center text-violet-900 text-xl font-bodyFont font-extrabold">
              Genre
            </h2>
          </div>

          <div className="flex flex-row md:h-16 h-12 md:m-2 m-4 justify-around">
            {music.map((instruemnts, index) => (
              <img
                className={`${
                  selectedGenre === index
                    ? `cursor-pointer bg-yellow-400 rounded-full ring-8 ring-yellow-400`
                    : `cursor-pointer bg-white rounded-full ring-4 ring-white`
                }`}
                key={index}
                src={instruemnts.instrumentName}
                alt="emoji"
                onClick={() => handleGenreClick(index)}
              />
            ))}
          </div>

          <div className="flex flex-row md:h-16 p-2 -mt-4 justify-around">
            {music.map((instruemnts, index) => (
              <span
                key={index}
                className="md:mt-2 mt-1 text-white text-center text-xs md:text-base md:font-medium font-bold"
              >
                {instruemnts.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-row mt-8">
        <div className="relative md:border-2 border-[1px] md:h-[153px] h-40 md:w-2/6 w-5/6 border-yellow-400 rounded-2xl">
          <div className="md:p-2 p-1 bg-yellow-400 rounded-t-xl">
            <h2 className="text-center text-violet-900 text-xl font-bodyFont font-extrabold">
              Singer's voice
            </h2>
          </div>

          <div className="flex flex-row h-16 md:m-2 m-4 justify-evenly">
            {singerVoice.map((singersVoice, index) => (
              <img
                className={`${
                  selectedVoice === index
                    ? `cursor-pointer bg-yellow-400 rounded-sm ring-8 ring-yellow-400`
                    : `cursor-pointer bg-white rounded-sm ring-8 ring-white`
                }`}
                key={index}
                src={singersVoice.animation}
                alt="emoji"
                onClick={() => handleVoiceClick(index)}
              />
            ))}
          </div>

          <div className="flex flex-row h-16 p-2 md:-mt-2 -mt-4 ml-3 justify-evenly">
            <span className="mt-1 text-white text-xs md:text-base md:font-medium font-bold md:mr-0">
              {singerVoice[0].gender}
            </span>
            <span className="mt-1 text-white text-center text-xs md:text-base md:font-medium font-bold">
              {singerVoice[1].gender}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongDetailsSelection;
