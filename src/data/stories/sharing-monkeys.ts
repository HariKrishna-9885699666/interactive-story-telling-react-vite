import { StoryData } from '../storyData';

const sharingMonkeys: StoryData = {
  id: "sharing-monkeys",
  title: "The Sharing Monkeys",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-monkeys-sharing-bananas-jungle-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐒 Bananas for All",
      subtitle: "A Jungle Feast",
      story:
        "One day in the jungle, a group of monkeys found a big bunch of bananas. Some monkeys wanted more, but others had none.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkeys-bananas-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-green-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-monkey-happy-banana?width=200&height=200",
          name: "Monkey",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🙈 Some Go Hungry",
      subtitle: "A Problem",
      story:
        "Some monkeys were sad because they didn’t get any bananas.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkey-sad-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-yellow-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-monkey-sad?width=200&height=200",
          name: "Sad Monkey",
          position: { left: "60%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🍌 Sharing is Caring",
      subtitle: "A Solution",
      story:
        "The monkeys decided to share the bananas so everyone could eat and be happy.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkeys-sharing-happy?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-monkey-sharing?width=200&height=200",
          name: "Sharing Monkey",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Sharing Brings Joy",
      story: "Moral: Sharing with others makes everyone happy!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkeys-happy-sharing-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-monkeys-happy-sharing?width=200&height=200",
          name: "Happy Monkeys",
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

export default sharingMonkeys;
