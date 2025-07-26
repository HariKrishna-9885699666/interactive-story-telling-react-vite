import { StoryData } from '../storyData';

const dogAndReflection: StoryData = {
  id: "dog-and-reflection",
  title: "The Dog and His Reflection",
  coverImage:
    "https://image.pollinations.ai/prompt/funny-cartoon-dog-walking-with-bone-in-mouth-crossing-bridge-sees-own-reflection-in-water-daylight?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐶 Dog Finds a Bone",
      subtitle: "A Lucky Find",
      story:
        "A dog found a big, tasty bone. He carried it proudly across a bridge over a stream.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-dog-walking-on-wooden-bridge-holding-bone-in-mouth-stream-in-background?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-brown-300/70 via-tan-200/70 to-blue-400/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-smiling-carrying-large-bone-in-mouth-bridge?width=200&height=200",
          name: "Proud Dog",
          position: { left: "53%", top: "56%" },
          delay: 700,
        },
        {
          emoji: "🦴",
          name: "Bone",
          position: { left: "44%", top: "40%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "🌊 Sees Another Dog",
      subtitle: "Reflection",
      story:
        "He looked into the water and saw his reflection, but thought it was another dog with another bone.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-dog-looking-in-water-seeing-own-reflection-bone-in-both-mouths-bridge?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-tan-300/70 to-brown-300/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-looking-down-at-own-reflection-in-stream-confused-bone-in-mouth?width=200&height=200",
          name: "Confused Dog",
          position: { left: "51%", top: "53%" },
          delay: 750,
        },
      ],
    },
    {
      id: 2,
      title: "😱 Drops the Bone",
      subtitle: "Greedy Mistake",
      story:
        "The greedy dog barked at the 'other dog' to grab his bone too. His bone fell into the water!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-dog-barking-at-water-bone-slipping-from-mouth-splash-bridge-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-500/70 via-brown-300/70 to-blue-700/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-shocked-bone-falling-into-water-bridge?width=200&height=200",
          name: "Shocked Dog",
          position: { left: "52%", top: "56%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "💧 Bone Lost",
      subtitle: "Empty Mouth",
      story:
        "He lost his bone. Now he had nothing! The stream carried it away.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-dog-looking-sad-bone-floating-away-in-water-under-bridge?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-300/70 via-gray-200/70 to-brown-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-sitting-on-bridge-sadly-watching-bone-float-away-water?width=200&height=200",
          name: "Sad Dog",
          position: { left: "53%", top: "56%" },
          delay: 800,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Greed Loses All",
      story: "Moral: Don’t be greedy; you may lose what you have.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-dog-sitting-alone-bridge-thinking-about-lost-bone-moral-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-300/70 via-brown-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-looking-thoughtful-on-bridge-thinking-about-greed-lost-bone-sunset?width=200&height=200",
          name: "Wise Dog",
          position: { left: "42%", top: "57%" },
          delay: 600,
        },
        {
          emoji: "🌟",
          name: "Moral",
          position: { left: "70%", top: "20%" },
          delay: 1200,
        },
      ],
    },
  ],
};

export default dogAndReflection;
