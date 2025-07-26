import { StoryData } from '../storyData';

const lostDuckling: StoryData = {
  id: "lost-duckling",
  title: "The Lost Duckling",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-lost-duckling-pond-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🦆 Lost in the Pond",
      subtitle: "A Scary Moment",
      story:
        "One day, a little duckling got separated from its family in a big pond.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-duckling-lost-pond?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-green-200/70 to-yellow-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-duckling-lost?width=200&height=200",
          name: "Duckling",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🦢 A Kind Swan",
      subtitle: "A New Friend",
      story:
        "A kind swan saw the duckling and helped it find its way back home.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-swan-helping-duckling?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-white-100/70 via-blue-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-swan-helping?width=200&height=200",
          name: "Swan",
          position: { left: "60%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🏡 Home Again",
      subtitle: "Family Reunion",
      story:
        "The duckling was reunited with its family and everyone was happy!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-duckling-family-reunion?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-duckling-happy?width=200&height=200",
          name: "Duckling",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-duck-family-happy?width=200&height=200",
          name: "Duck Family",
          position: { left: "60%", top: "60%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Kindness Matters",
      story: "Moral: Kindness and friendship help us find our way!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-duckling-swan-happy-pond?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-duckling-swan-happy?width=200&height=200",
          name: "Duckling & Swan",
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

export default lostDuckling;
