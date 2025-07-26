import { StoryData } from '../storyData';

const helpfulHoneybee: StoryData = {
  id: "helpful-honeybee",
  title: "The Helpful Honeybee",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-honeybee-helpful-garden-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐝 Busy in the Garden",
      subtitle: "A Helpful Bee",
      story:
        "One sunny morning, a honeybee buzzed from flower to flower, helping plants grow by spreading pollen.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-honeybee-garden-flowers?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-green-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-honeybee-busy?width=200&height=200",
          name: "Honeybee",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🌸 Helping Friends",
      subtitle: "Teamwork",
      story:
        "The honeybee helped a wilting flower by bringing it pollen from a healthy plant.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-honeybee-helping-flower?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-pink-100/70 via-yellow-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-honeybee-helping?width=200&height=200",
          name: "Honeybee",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-flower-happy?width=200&height=200",
          name: "Happy Flower",
          position: { left: "60%", top: "60%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "🌻 A Beautiful Garden",
      subtitle: "Results of Kindness",
      story:
        "Thanks to the honeybee, the garden was full of colorful, healthy flowers.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-honeybee-garden-beautiful?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-honeybee-happy?width=200&height=200",
          name: "Honeybee",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Helping Others",
      story: "Moral: Helping others makes the world more beautiful!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-honeybee-garden-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-honeybee-happy-flying?width=200&height=200",
          name: "Honeybee",
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

export default helpfulHoneybee;
