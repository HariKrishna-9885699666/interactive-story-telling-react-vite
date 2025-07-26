import { StoryData } from '../storyData';

const antAndGrasshopper: StoryData = {
  id: "ant-and-grasshopper",
  title: "The Ant and the Grasshopper",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-ant-carrying-grain-working-grasshopper-singing-relaxing-sunny-meadow-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐜 Busy Ant",
      subtitle: "Working Hard",
      story:
        "All summer, the ant worked hard gathering food for winter. The grasshopper sang and played.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-ant-carrying-heavy-grain-grasshopper-playing-fiddle-sunny-meadow?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-300/70 via-yellow-200/70 to-blue-300/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-ant-carrying-seed-looking-focused-meadow?width=200&height=200",
          name: "Ant",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-grasshopper-playing-music-chilling-in-grass-meadow-summer?width=200&height=200",
          name: "Grasshopper",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "❄ Winter Arrives",
      subtitle: "No Food!",
      story:
        "Winter came. The ground was covered with snow. The grasshopper was hungry—he had nothing to eat.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-meadow-covered-in-snow-shivering-grasshopper-snowflakes-falling-cold-day?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-white/80 via-blue-300/70 to-gray-400/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-grasshopper-shivering-looking-sad-winter-snow-meadow?width=200&height=200",
          name: "Cold Grasshopper",
          position: { left: "51%", top: "62%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🐜 Ant’s Warm House",
      subtitle: "Plenty to Eat",
      story:
        "The ant stayed warm and happy in his house with plenty of food.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-ant-in-cozy-house-eating-winter-food-happy-warm-decoration?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-orange-200/70 via-red-200/70 to-yellow-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-ant-eating-smiling-warm-inside-house-winter-outside?width=200&height=200",
          name: "Happy Ant",
          position: { left: "48%", top: "48%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🙇 Hungry Grasshopper",
      subtitle: "Regret",
      story:
        "The grasshopper asked the ant for food, but the ant reminded him about not working when he could.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-ant-refusing-shivering-grasshopper-winter-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-gray-300/70 to-brown-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-ant-looking-strict-grasshopper-sad-begging-winter?width=200&height=200",
          name: "Tough Ant",
          position: { left: "45%", top: "56%" },
          delay: 800,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Work Brings Reward",
      story: "Moral: Always be prepared—hard work pays off!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-ant-looking-wise-winter-background-grasshopper-in-distance-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-ant-looking-thoughtful-lesson-learned-winter-evening?width=200&height=200",
          name: "Wise Ant",
          position: { left: "40%", top: "50%" },
          delay: 600,
        },
        {
          emoji: "🌟",
          name: "Moral",
          position: { left: "65%", top: "25%" },
          delay: 1200,
        },
      ],
    },
  ],
};

export default antAndGrasshopper;
