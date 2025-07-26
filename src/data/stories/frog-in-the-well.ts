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
        "A small frog lived in a deep, dark well. He thought the well was the whole world. He had never seen anything beyond it.",
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
    // ...remaining slides from storyData.ts...
  ],
};

export default frogInTheWell;
