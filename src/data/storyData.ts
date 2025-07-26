import wiseFish from './stories/wise-fish';
import cleverBird from './stories/clever-bird';
import crowAndPitcher from './stories/crow-and-pitcher';
import antAndGrasshopper from './stories/ant-and-grasshopper';
import foxAndGrapes from './stories/fox-and-grapes';
import lionMouse from './stories/lion-mouse';
import dogAndReflection from './stories/dog-and-reflection';
import elephantAnt from './stories/elephant-ant';
import frogInTheWell from './stories/frog-in-the-well';
import greedyBear from './stories/greedy-bear';
import tortoiseHare from './stories/tortoise-hare';
import foxAndGoat from './stories/fox-and-goat';
import catAndBell from './stories/cat-and-bell';
import lazyRooster from './stories/lazy-rooster';
import monkeyAndPeanuts from './stories/monkey-and-peanuts';

export interface StorySlideData {
  id: number;
  title: string;
  subtitle: string;
  story: string;
  backgroundImage: string;
  backgroundClass: string;
  characters: {
    emoji?: string;
    image?: string;
    name: string;
    position: { left: string; top: string };
    delay: number;
  }[];
}

export interface StoryData {
  id: string;
  title: string;
  coverImage: string;
  slides: StorySlideData[];
}

export const stories: StoryData[] = [
  wiseFish,
  cleverBird,
  crowAndPitcher,
  antAndGrasshopper,
  foxAndGrapes,
  lionMouse,
  dogAndReflection,
  elephantAnt,
  frogInTheWell,
  greedyBear,
  tortoiseHare,
  foxAndGoat,
  catAndBell,
  lazyRooster,
  monkeyAndPeanuts,
];
