import { StoryData } from '../storyData';

const theLionAndTheCrow: StoryData = {
  id: "the-lion-and-the-crow",
  title: "The Lion and the Crow",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-lion-crow-jungle-friendship-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🦁 The Trapped Lion",
      subtitle: "A Call for Help",
      story:
        "Once upon a time, a lion was caught in a hunter's net. He roared for help, but no animal dared to come near.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-lion-trapped-net-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-green-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-lion-trapped-net?width=200&height=200",
          name: "Lion",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🐦 The Clever Crow",
      subtitle: "A Plan",
      story:
        "A clever crow saw the lion and flew to help. He pecked at the net and called his friends.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-crow-helping-lion-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-green-100/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-helping-lion?width=200&height=200",
          name: "Crow",
          position: { left: "55%", top: "56%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🦁🐦 Teamwork",
      subtitle: "Breaking Free",
      story:
        "With the help of the crow and his friends, the lion was freed from the net.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-lion-crow-friends-breaking-net?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-lion-happy-freed?width=200&height=200",
          name: "Lion",
          position: { left: "48%", top: "48%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-crow-happy-friend?width=200&height=200",
          name: "Crow",
          position: { left: "58%", top: "48%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Friends Help Each Other",
      story: "Moral: True friends help each other in times of need!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-lion-crow-friends-jungle-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-lion-crow-happy-friends?width=200&height=200",
          name: "Lion & Crow",
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

export default theLionAndTheCrow;
