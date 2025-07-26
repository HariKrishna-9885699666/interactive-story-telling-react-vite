import { StoryData } from '../storyData';

const siblingsSecretGarden: StoryData = {
  id: "siblings-secret-garden",
  title: "The Siblings and the Secret Garden",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-siblings-secret-garden-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👦👧 The Discovery",
      subtitle: "A Hidden Place",
      story:
        "One day, a brother and sister found a hidden garden behind their house.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-siblings-find-secret-garden?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/70 via-yellow-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-garden?width=200&height=200",
          name: "Brother",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-garden?width=200&height=200",
          name: "Sister",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "🌱 Planting Together",
      subtitle: "Cooperation",
      story:
        "They worked together to plant seeds and water the plants.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-siblings-planting-garden?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-planting?width=200&height=200",
          name: "Brother",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-planting?width=200&height=200",
          name: "Sister",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "🌸 The Garden Blooms",
      subtitle: "Success",
      story:
        "The garden grew full of flowers and vegetables. The siblings were proud of their teamwork.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-siblings-garden-bloom?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-happy-garden?width=200&height=200",
          name: "Brother",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-happy-garden?width=200&height=200",
          name: "Sister",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Cooperation",
      story: "Moral: Working together brings great results!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-siblings-garden-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-siblings-happy-garden?width=200&height=200",
          name: "Happy Siblings",
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

export default siblingsSecretGarden;
