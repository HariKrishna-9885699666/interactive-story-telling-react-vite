import { StoryData } from '../storyData';

const frogInTheWell: StoryData = {
  id: "frog-in-the-well",
  title: "The Frog in the Well",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-style-small-green-frog-sitting-in-a-dark-old-stone?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐸 The Frog in the Well",
      subtitle: "A Small Frog's World",
      story:
        "Once upon a time, a small frog lived in a deep, dark well. He thought the well was the whole world. He had never seen anything beyond it.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/inside-view-of-old-deep-stone-well-dark-moist-stone-walls-light-shining-from-above-frog-at-bottom-photorealistic-style?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-900/80 via-gray-700/80 to-black/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-frog-with-big-eyes-sitting-on-wet-rock-inside-a-stone-well-curious-expression?width=200&height=200",
          name: "Frog",
          position: { left: "45%", top: "50%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🌞 A Visitor from Outside",
      subtitle: "A New Friend Arrives",
      story:
        "One day, a big frog from the pond outside jumped into the well. He told stories of the wide world beyond the stones.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/big-green-cartoon-frog-jumping-into-old-stone-well-small-frog-listening-curious?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/80 via-blue-200/80 to-yellow-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/big-green-cartoon-frog-jumping-into-old-stone-well-small-frog-listening-curious?width=200&height=200",
          name: "Big Frog",
          position: { left: "60%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-green-frog-with-big-eyes-looking-curious-listening-well?width=200&height=200",
          name: "Well Frog",
          position: { left: "45%", top: "50%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 2,
      title: "😲 The World is Big!",
      subtitle: "Amazed by New Ideas",
      story:
        "The little frog was amazed. He had never imagined a world so big and bright. He wanted to see it for himself!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/small-green-cartoon-frog-looking-up-out-of-well-sunlight-shining-in-curious-expression?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-blue-200/80 to-green-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/small-green-cartoon-frog-looking-up-out-of-well-sunlight-shining-in-curious-expression?width=200&height=200",
          name: "Curious Frog",
          position: { left: "50%", top: "50%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "💪 The Leap of Courage",
      subtitle: "A Brave Escape",
      story:
        "With a big jump, the little frog climbed out of the well and saw the beautiful world for the first time!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/small-green-cartoon-frog-leaping-out-of-old-stone-well-bright-sunlight-happy-expression?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/80 via-green-200/80 to-yellow-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/small-green-cartoon-frog-leaping-out-of-old-stone-well-bright-sunlight-happy-expression?width=200&height=200",
          name: "Brave Frog",
          position: { left: "55%", top: "45%" },
          delay: 700,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "See the World!",
      story:
        "Moral: Don’t think your world is the whole world. Be brave and explore!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/small-green-cartoon-frog-sitting-on-pond-lily-pad-looking-happy-sunset-wide-world-moral-lesson?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-green-200/80 to-blue-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/small-green-cartoon-frog-sitting-on-pond-lily-pad-looking-happy-sunset-wide-world-moral-lesson?width=200&height=200",
          name: "Happy Frog",
          position: { left: "50%", top: "50%" },
          delay: 700,
        },
        {
          emoji: "🌟",
          name: "Moral",
          position: { left: "70%", top: "25%" },
          delay: 1200,
        },
      ],
    },
  ],
};

export default frogInTheWell;
