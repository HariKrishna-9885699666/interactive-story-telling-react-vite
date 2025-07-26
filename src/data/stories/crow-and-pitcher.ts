import { StoryData } from '../storyData';

const crowAndPitcher: StoryData = {
  id: "crow-and-pitcher",
  title: "The Crow and the Pitcher",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-crow-looking-at-pitcher-almost-empty-water-garden-clever-solution-fun-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐦 Thirsty Crow",
      subtitle: "No Water",
      story:
        "One hot day, a thirsty crow found a pitcher with a little water in it. But his beak couldn’t reach.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-crow-standing-by-tall-pitcher-looking-in-dry-garden-hot-day?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-400/70 via-gray-300/70 to-yellow-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-peering-into-tall-pitcher-empty-garden-thirsty?width=200&height=200",
          name: "Crow",
          position: { left: "43%", top: "45%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "💡 Clever Crow",
      subtitle: "Idea",
      story:
        "He got an idea! The crow began dropping small stones into the pitcher.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-crow-dropping-pebbles-into-pitcher-closeup-intelligent-face?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-gray-200/70 via-green-100/70 to-brown-300/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-holding-pebble-in-beak-hovering-over-tall-pitcher-smiling?width=200&height=200",
          name: "Smart Crow",
          position: { left: "45%", top: "48%" },
          delay: 640,
        },
      ],
    },
    {
      id: 2,
      title: "💧 Water Rises",
      subtitle: "Success",
      story:
        "With each pebble, the water rose. Soon the crow could drink easily!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-pitcher-closeup-water-level-rising-crow-smiling-thirst-quenching?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-green-200/70 to-brown-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-happy-drinking-water-from-tall-pitcher-crowd-by-side?width=200&height=200",
          name: "Happy Crow",
          position: { left: "45%", top: "45%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "😊 Satisfied Crow",
      subtitle: "Well Done",
      story: "The crow drank the cool water and flew away cheerfully.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-crow-flying-away-looking-happy-pitcher-empty-of-water-garden-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-300/70 via-green-200/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-flying-away-smiling-over-pitcher-clear-sky?width=200&height=200",
          name: "Satisfied Crow",
          position: { left: "48%", top: "40%" },
          delay: 700,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Work Smart",
      story: "Moral: Where there’s a will, there’s a way.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-crow-looking-wise-sitting-on-branch-thinking-about-solution-moral-garden-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-gray-200/70 to-blue-300/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-sitting-on-tree-branch-looking-thoughtful-garden-sunset?width=200&height=200",
          name: "Wise Crow",
          position: { left: "35%", top: "52%" },
          delay: 600,
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

export default crowAndPitcher;
