import { StoryData } from '../storyData';

const theHonestWoodcutter: StoryData = {
  id: "the-honest-woodcutter",
  title: "The Honest Woodcutter",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-woodcutter-axe-river-gold-silver-axe-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🪓 The Lost Axe",
      subtitle: "A Sad Woodcutter",
      story:
        "One day, a woodcutter accidentally dropped his axe into a deep river. He was very sad and worried.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-woodcutter-sad-axe-river?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-green-200/70 to-brown-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-woodcutter-sad?width=200&height=200",
          name: "Woodcutter",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🧚 The River Fairy",
      subtitle: "A Magical Test",
      story:
        "A fairy appeared and offered him a golden axe. The woodcutter said it was not his.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-fairy-golden-axe-river?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-blue-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-fairy-golden-axe?width=200&height=200",
          name: "Fairy",
          position: { left: "55%", top: "56%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🪓 The Honest Answer",
      subtitle: "Truthfulness",
      story:
        "The fairy then offered a silver axe. Again, the woodcutter said it was not his. Finally, she gave him his own axe, and he was happy!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-fairy-silver-axe-woodcutter?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-green-200/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-woodcutter-happy?width=200&height=200",
          name: "Woodcutter",
          position: { left: "48%", top: "48%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-fairy-happy?width=200&height=200",
          name: "Fairy",
          position: { left: "58%", top: "48%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Honesty is Rewarded",
      story: "Moral: Honesty is always the best policy!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-woodcutter-fairy-happy-river?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-woodcutter-fairy-happy?width=200&height=200",
          name: "Woodcutter & Fairy",
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

export default theHonestWoodcutter;
