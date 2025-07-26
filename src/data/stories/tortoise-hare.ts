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
    {
      id: 1,
      title: "🏃‍♂️ The Race Begins",
      subtitle: "Hare Speeds Ahead",
      story:
        "The race started! The hare dashed far ahead, while the tortoise moved slowly and steadily.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-hare-running-far-ahead-green-tortoise-slowly-walking-meadow-race?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/80 via-green-200/80 to-yellow-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-hare-running-far-ahead-green-tortoise-slowly-walking-meadow-race?width=200&height=200",
          name: "Speedy Hare",
          position: { left: "40%", top: "35%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-walking-slowly-determined-meadow-race?width=200&height=200",
          name: "Steady Tortoise",
          position: { left: "60%", top: "45%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 2,
      title: "😴 The Hare Takes a Nap",
      subtitle: "Too Confident",
      story:
        "The hare was so far ahead, he decided to rest under a tree. He soon fell fast asleep! The tortoise kept going, slow and steady.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-hare-sleeping-under-tree-tortoise-walking-past-meadow-race?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-blue-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-hare-sleeping-under-tree-tortoise-walking-past-meadow-race?width=200&height=200",
          name: "Sleeping Hare",
          position: { left: "45%", top: "40%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-walking-past-sleeping-hare-meadow-race?width=200&height=200",
          name: "Focused Tortoise",
          position: { left: "60%", top: "45%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 3,
      title: "🏆 Slow and Steady Wins",
      subtitle: "A Surprising Finish",
      story:
        "The hare woke up and ran as fast as he could, but it was too late! The tortoise had already crossed the finish line and won the race.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-crossing-finish-line-hare-running-behind-meadow-race?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-green-200/80 to-blue-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-crossing-finish-line-hare-running-behind-meadow-race?width=200&height=200",
          name: "Victorious Tortoise",
          position: { left: "55%", top: "45%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-hare-running-behind-tortoise-finish-line-meadow-race?width=200&height=200",
          name: "Surprised Hare",
          position: { left: "40%", top: "35%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Slow and Steady Wins the Race",
      story:
        "Moral: Slow and steady wins the race. Never give up, even if others are faster!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-and-brown-hare-smiling-together-finish-line-meadow-moral-lesson?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-blue-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-and-brown-hare-smiling-together-finish-line-meadow-moral-lesson?width=200&height=200",
          name: "Friends",
          position: { left: "50%", top: "50%" },
          delay: 700,
        },
        {
          emoji: "🌟",
          name: "Moral",
          position: { left: "70%", top: "25%" },
          delay: 1200,
        },
      ],
    },
  ],
};

export default tortoiseHare;
