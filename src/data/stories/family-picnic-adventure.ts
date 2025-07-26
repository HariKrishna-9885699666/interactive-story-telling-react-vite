import { StoryData } from '../storyData';

const familyPicnicAdventure: StoryData = {
  id: "family-picnic-adventure",
  title: "The Family Picnic Adventure",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-family-picnic-park-adventure-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👨‍👩‍👧‍👦 Off to the Park",
      subtitle: "A Family Day",
      story:
        "One sunny morning, a family packed a basket and went to the park for a picnic adventure.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-picnic-park?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/70 via-yellow-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-picnic?width=200&height=200",
          name: "Family",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🧺 The Lost Basket",
      subtitle: "A Problem",
      story:
        "They realized they forgot the picnic basket at home! The kids worked together to solve the problem.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-forgot-basket?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-thinking?width=200&height=200",
          name: "Family",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🍎 Picnic Time",
      subtitle: "Teamwork",
      story:
        "They found snacks in their bags and shared with each other. The picnic was a success!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-sharing-snacks?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-happy-picnic?width=200&height=200",
          name: "Family",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Teamwork Wins",
      story: "Moral: Working together solves problems!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-family-picnic-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-family-happy-sunset?width=200&height=200",
          name: "Family",
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

export default familyPicnicAdventure;
