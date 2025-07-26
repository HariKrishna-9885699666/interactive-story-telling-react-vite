import { StoryData } from '../storyData';

const caringElephantFamily: StoryData = {
  id: "caring-elephant-family",
  title: "The Caring Elephant Family",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-elephant-family-caring-jungle-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐘 A New Baby",
      subtitle: "Welcome to the Family",
      story:
        "Once upon a time, a baby elephant was born in the jungle. The whole elephant family gathered to welcome the little one.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-elephant-family-baby-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-green-200/70 to-yellow-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-baby-elephant-cute?width=200&height=200",
          name: "Baby Elephant",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-elephant-mother?width=200&height=200",
          name: "Mother Elephant",
          position: { left: "40%", top: "60%" },
          delay: 800,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-elephant-father?width=200&height=200",
          name: "Father Elephant",
          position: { left: "60%", top: "60%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 1,
      title: "🌳 Learning Together",
      subtitle: "Family Lessons",
      story:
        "The baby elephant learned to walk, play, and find food with help from the whole family.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-elephant-family-learning-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-baby-elephant-learning?width=200&height=200",
          name: "Baby Elephant",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "💧 Helping Each Other",
      subtitle: "Family Support",
      story:
        "When the river dried up, the elephant family worked together to find water for everyone.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-elephant-family-helping-water?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-green-200/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-elephant-family-helping?width=200&height=200",
          name: "Elephant Family",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Family is Strength",
      story: "Moral: Family members care for and help each other!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-elephant-family-happy-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-elephant-family-happy?width=200&height=200",
          name: "Elephant Family",
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

export default caringElephantFamily;
