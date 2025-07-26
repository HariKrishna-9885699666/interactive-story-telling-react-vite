import wiseFish from './stories/wise-fish';
import helpfulBoyLostPuppy from './stories/helpful-boy-lost-puppy';
import braveGirlMountain from './stories/brave-girl-mountain';
import familyPicnicAdventure from './stories/family-picnic-adventure';
import boySharedLunch from './stories/boy-shared-lunch';
import girlMagicPaintbrush from './stories/girl-magic-paintbrush';
import siblingsSecretGarden from './stories/siblings-secret-garden';
import littleChef from './stories/little-chef';
import girlPlantedTree from './stories/girl-planted-tree';
import familyStormyNight from './stories/family-stormy-night';
import boyBrokenToy from './stories/boy-broken-toy';
import caringElephantFamily from './stories/caring-elephant-family';
import braveLittleSquirrel from './stories/brave-little-squirrel';
import helpfulHoneybee from './stories/helpful-honeybee';
import lostDuckling from './stories/lost-duckling';
import sharingMonkeys from './stories/sharing-monkeys';
import theLionAndTheCrow from './stories/the-lion-and-the-crow';
import theHonestWoodcutter from './stories/the-honest-woodcutter';
import theLittleRedHen from './stories/the-little-red-hen';
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
  theLittleRedHen,
  theLionAndTheCrow,
  theHonestWoodcutter,
  caringElephantFamily,
  braveLittleSquirrel,
  helpfulHoneybee,
  lostDuckling,
  sharingMonkeys,
  helpfulBoyLostPuppy,
  braveGirlMountain,
  familyPicnicAdventure,
  boySharedLunch,
  girlMagicPaintbrush,
  siblingsSecretGarden,
  littleChef,
  girlPlantedTree,
  familyStormyNight,
  boyBrokenToy,
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
