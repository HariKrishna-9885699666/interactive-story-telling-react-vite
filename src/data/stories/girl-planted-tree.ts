import { StoryData } from '../storyData';

const girlPlantedTree: StoryData = {
  id: "girl-planted-tree",
  title: "The Girl Who Planted a Tree",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-girl-planting-tree-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👧 Planting a Seed",
      subtitle: "A Green Dream",
      story:
        "One bright morning, a little girl wanted to make the world greener, so she planted a seed in her yard.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-planting-seed?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/70 via-yellow-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-planting?width=200&height=200",
          name: "Girl",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🌱 Watching it Grow",
      subtitle: "Patience",
      story:
        "She watered the seed every day and watched it grow into a small tree.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-watering-tree?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-watering?width=200&height=200",
          name: "Girl",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🌳 A Big Tree",
      subtitle: "Success",
      story:
        "The tree grew tall and strong, giving shade and fruit to everyone.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-tree-grown?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-happy-tree?width=200&height=200",
          name: "Girl",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Care for Nature",
      story: "Moral: Small actions can make a big difference!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-tree-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-happy-tree?width=200&height=200",
          name: "Happy Girl",
          position: { left: "50%", top: "50%" },
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

export default girlPlantedTree;
