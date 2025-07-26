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
    {
      id: 1,
      title: "🐭 The Mouse Begs",
      subtitle: "A Plea for Mercy",
      story:
        "The mouse squeaked, 'Please let me go, mighty Lion! Someday I might help you.' The lion laughed but let the mouse go.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-begging-large-lion-smiling-letting-go-jungle-clearing?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-300/80 via-yellow-200/80 to-brown-300/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-begging-hands-together-large-lion-smiling-jungle?width=200&height=200",
          name: "Begging Mouse",
          position: { left: "55%", top: "50%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/large-cartoon-lion-smiling-letting-mouse-go-jungle-clearing?width=200&height=200",
          name: "Kind Lion",
          position: { left: "45%", top: "35%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 2,
      title: "🪤 The Lion in Trouble",
      subtitle: "Caught in a Net",
      story:
        "Later, the lion was caught in a hunter's net. He roared for help, but no one came—except the little mouse!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/large-cartoon-lion-trapped-in-rope-net-jungle-mouse-approaching-to-help?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-brown-400/80 via-yellow-200/80 to-green-300/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/large-cartoon-lion-trapped-in-net-looking-worried-mouse-coming-to-help-jungle?width=200&height=200",
          name: "Trapped Lion",
          position: { left: "50%", top: "40%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-looking-determined-approaching-lion-in-net-jungle?width=200&height=200",
          name: "Brave Mouse",
          position: { left: "60%", top: "55%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 3,
      title: "🦷 The Mouse Saves the Day",
      subtitle: "Small but Mighty",
      story:
        "The mouse nibbled and nibbled the ropes until the lion was free! The lion thanked the little mouse for saving his life.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-chewing-through-rope-net-lion-smiling-grateful-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-green-300/80 to-brown-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-chewing-rope-lion-smiling-grateful-jungle?width=200&height=200",
          name: "Hero Mouse",
          position: { left: "60%", top: "55%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/large-cartoon-lion-smiling-grateful-freed-from-net-jungle?width=200&height=200",
          name: "Thankful Lion",
          position: { left: "50%", top: "40%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Kindness is never wasted",
      story:
        "Moral: Even the smallest friend can help the mightiest. Always be kind!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/large-cartoon-lion-and-tiny-mouse-sitting-together-smiling-jungle-sunset-moral-lesson?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-orange-200/80 to-green-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/large-cartoon-lion-and-tiny-mouse-sitting-together-smiling-jungle-sunset?width=200&height=200",
          name: "Friends",
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

export default lionMouse;
