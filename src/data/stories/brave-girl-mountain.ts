import { StoryData } from '../storyData';

const braveGirlMountain: StoryData = {
  id: "brave-girl-mountain",
  title: "The Brave Girl and the Mountain",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-girl-brave-mountain-adventure-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👧 The Tall Mountain",
      subtitle: "A Challenge",
      story:
        "Once upon a time, a brave girl wanted to climb the tallest mountain in her village.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-mountain-challenge?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-gray-200/70 to-green-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-brave?width=200&height=200",
          name: "Girl",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "⛰️ The Climb",
      subtitle: "Courage",
      story:
        "She faced wind and rain, but she kept going, remembering her family’s encouragement.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-climbing-mountain?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-gray-100/70 via-blue-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-climbing?width=200&height=200",
          name: "Girl",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🏔️ The View",
      subtitle: "Success",
      story:
        "She reached the top and saw the beautiful world below. She felt proud and strong.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-mountain-view?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-green-200/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-happy-mountain?width=200&height=200",
          name: "Girl",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Be Brave",
      story: "Moral: Courage helps us reach new heights!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-girl-brave-mountain-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-girl-brave-happy?width=200&height=200",
          name: "Brave Girl",
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

export default braveGirlMountain;
