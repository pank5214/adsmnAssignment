import happyEmoji from "./Images/Icons/Happy.png";
import romanticEmoji from "./Images/Icons/Romantic.png";
import funnyEmoji from "./Images/Icons/Funny.png";
import motivationalEmoji from "./Images/Icons/Motivational.png";
import calmEmoji from "./Images/Icons/Calm.png";
import rapMusic from "./Images/Icons/Rap.png";
import rockMusic from "./Images/Icons/Rock.png";
import popMusic from "./Images/Icons/Pop.png";
import desiMusic from "./Images/Icons/Desi.png";
import edmMusic from "./Images/Icons/EDM.png";
import maleAnimation from "./Images/Icons/Male.png";
import femaleAnimation from "./Images/Icons/Female.png";

export const moods = [
  { emoji: happyEmoji, label: "Happy" },
  { emoji: romanticEmoji, label: "Romantic" },
  { emoji: funnyEmoji, label: "Funny" },
  { emoji: motivationalEmoji, label: "Motivational" },
  { emoji: calmEmoji, label: "Calm" },
];

export const music = [
  { instrumentName: rapMusic, label: "Rap" },
  { instrumentName: rockMusic, label: "Rock" },
  { instrumentName: popMusic, label: "Pop" },
  { instrumentName: desiMusic, label: "Desi" },
  { instrumentName: edmMusic, label: "EDM" },
];

export const singerVoice = [
  { animation: maleAnimation, gender: "Male" },
  { animation: femaleAnimation, gender: "Female" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
