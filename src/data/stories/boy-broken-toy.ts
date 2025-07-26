import { StoryData } from '../storyData';

const boyBrokenToy: StoryData = {
  id: "boy-broken-toy",
  title: "The Boy and the Broken Toy",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-boy-broken-toy-fix-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👦 The Broken Toy",
      subtitle: "A Sad Moment",
      story:
        "One afternoon, a boy’s favorite toy broke while he was playing.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-broken-toy?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-blue-200/70 to-green-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-sad-toy?width=200&height=200",
          name: "Boy",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🛠️ Trying to Fix",
      subtitle: "Problem-Solving",
      story:
        "He tried to fix it himself but needed help from his dad.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-fixing-toy-dad?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-yellow-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-fixing-toy?width=200&height=200",
          name: "Boy",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dad-helping?width=200&height=200",
          name: "Dad",
          position: { left: "60%", top: "60%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "😊 Fixed and Happy",
      subtitle: "Success",
      story:
        "Together, they fixed the toy and the boy learned how to solve problems.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-happy-toy-fixed?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-happy-toy?width=200&height=200",
          name: "Boy",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dad-happy?width=200&height=200",
          name: "Dad",
          position: { left: "60%", top: "60%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Problem-Solving",
      story: "Moral: Asking for help and working together solves problems!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-dad-happy-toy?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-dad-happy-toy?width=200&height=200",
          name: "Boy & Dad",
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

export default boyBrokenToy;
