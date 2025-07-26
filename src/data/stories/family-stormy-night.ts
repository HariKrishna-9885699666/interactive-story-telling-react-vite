import { StoryData } from '../storyData';

const familyStormyNight: StoryData = {
  id: "family-stormy-night",
  title: "The Family and the Stormy Night",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-family-stormy-night-home-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🌧️ The Storm Arrives",
      subtitle: "A Scary Night",
      story:
        "One stormy night, a family was at home when a big storm hit their town.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-stormy-night?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-gray-200/70 to-yellow-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-stormy?width=200&height=200",
          name: "Family",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🕯️ Together in the Dark",
      subtitle: "Support",
      story:
        "The lights went out, but the family stayed together and told stories to feel safe.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-dark-stories?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-gray-100/70 via-blue-100/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-together-dark?width=200&height=200",
          name: "Family",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🌤️ The Storm Passes",
      subtitle: "A New Day",
      story:
        "The storm ended, and the family was grateful for each other’s support.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-happy-after-storm?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-happy?width=200&height=200",
          name: "Family",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Family Support",
      story: "Moral: Family support helps us through tough times!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-support-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-happy-support?width=200&height=200",
          name: "Happy Family",
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

export default familyStormyNight;
