import { StoryData } from '../storyData';

const tortoiseHare: StoryData = {
  id: "tortoise-hare",
  title: "The Tortoise and the Hare",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-fast-brown-rabbit-and-slow-green-tortoise-at-race-starting-line-in-meadow-classic-fable-scene?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐰 The Fast Hare",
      subtitle: "Proud of his speed",
      story:
        'The hare ran fast. The tortoise walked slowly. The hare laughed, "You are too slow!" The tortoise said, "Let\'s race!"',
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-rabbit-running-very-fast-with-motion-blur-lines-next-to-slow-green-tortoise-walking-peacefully-in-sunny-meadow?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-blue-300/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-brown-rabbit-with-long-ears-laughing-mockingly-running-very-fast-with-motion-lines-arrogant-expression?width=200&height=200",
          name: "Fast Hare",
          position: { left: "35%", top: "35%" },
          delay: 500,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-with-shell-walking-very-slowly-but-determined-calm-patient-expression-steady-pace?width=200&height=200",
          name: "Slow Tortoise",
          position: { left: "65%", top: "45%" },
          delay: 900,
        },
        {
          emoji: "🏁",
          name: "Race Challenge",
          position: { left: "50%", top: "20%" },
          delay: 1300,
        },
      ],
    },
    // ...remaining slides from storyData.ts...
  ],
};

export default tortoiseHare;
