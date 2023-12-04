import happyEmoji from "./Images/Happy.png";
import romanticEmoji from "./Images/Romantic.png";
import funnyEmoji from "./Images/Funny.png";
import motivationalEmoji from "./Images/Motivational.png";
import calmEmoji from "./Images/Calm.png";
import rapMusic from "./Images/Rap.png";
import rockMusic from "./Images/Rock.png";
import popMusic from "./Images/Pop.png";
import desiMusic from "./Images/Desi.png";
import edmMusic from "./Images/EDM.png";
import maleAnimation from "./Images/MAle.png";
import femaleAnimation from "./Images/Female.png";
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

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
