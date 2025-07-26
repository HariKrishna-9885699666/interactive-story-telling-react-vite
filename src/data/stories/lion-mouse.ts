import { StoryData } from '../storyData';

const lionMouse: StoryData = {
  id: "lion-mouse",
  title: "The Lion and the Mouse",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-large-golden-lion-and-tiny-gray-mouse-showing-friendship-between-big-and-small-jungle-background?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🦁 The Sleeping Lion",
      subtitle: "A peaceful nap interrupted",
      story:
        "One day, a lion was sleeping. A mouse ran over his paw. The lion woke up and caught it.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/large-golden-cartoon-lion-sleeping-peacefully-under-tree-in-jungle-with-tiny-gray-mouse-accidentally-running-over-lion-paw?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-300/80 via-brown-300/80 to-green-400/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/large-cartoon-golden-lion-with-mane-waking-up-surprised-catching-tiny-mouse-in-paw-just-awakened-expression?width=200&height=200",
          name: "Awakened Lion",
          position: { left: "45%", top: "35%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-caught-in-lion-paw-scared-frightened-expression-very-small-compared-to-lion?width=200&height=200",
          name: "Caught Mouse",
          position: { left: "55%", top: "45%" },
          delay: 1000,
        },
      ],
    },
    // ...remaining slides from storyData.ts...
  ],
};

export default lionMouse;
