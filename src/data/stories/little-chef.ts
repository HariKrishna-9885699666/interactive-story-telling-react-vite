import { StoryData } from '../storyData';

const littleChef: StoryData = {
  id: "little-chef",
  title: "The Little Chef",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-boy-cooking-kitchen-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👦 Cooking with Mom",
      subtitle: "Learning New Things",
      story:
        "One evening, a little boy wanted to help his mom cook dinner.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-cooking-mom?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-green-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-cooking?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-mom-cooking?width=200&height=200",
          name: "Mom",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "🍳 Making Mistakes",
      subtitle: "Learning",
      story:
        "He spilled some flour and broke an egg, but his mom encouraged him to keep trying.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-mistake-cooking?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-mistake-cooking?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-mom-encouraging?width=200&height=200",
          name: "Mom",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "🍲 Dinner is Ready",
      subtitle: "Success",
      story:
        "With practice, the little chef helped make a delicious dinner for the family.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-cooking-success?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-cooking-happy?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-mom-happy?width=200&height=200",
          name: "Mom",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Keep Trying",
      story: "Moral: Practice and patience help us learn new things!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-mom-cooking-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-mom-happy-cooking?width=200&height=200",
          name: "Boy & Mom",
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

export default littleChef;
