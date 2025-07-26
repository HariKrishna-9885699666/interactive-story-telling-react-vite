import { StoryData } from '../storyData';

const elephantAnt: StoryData = {
  id: "elephant-ant",
  title: "The Elephant and the Ant",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-large-gray-elephant-and-tiny-black-ant-facing-each-other-in-green-forest-david-vs-goliath-scene-friendship-theme?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐘 The Proud Elephant",
      subtitle: "Big and mighty, but not kind",
      story:
        "An elephant was big and proud. He walked in the forest, kicking small animals.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-walking-proudly-through-dense-green-forest-with-small-animals-running-away-scared-arrogant-expression-sunlight-filtering-through-trees?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-400/80 via-brown-300/80 to-gray-500/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-large-gray-elephant-with-proud-arrogant-expression-trunk-raised-high-walking-through-forest-intimidating-posture?width=200&height=200",
          name: "Proud Elephant",
          position: { left: "45%", top: "35%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/small-forest-animals-rabbits-squirrels-running-away-scared-from-large-elephant-frightened-expressions?width=200&height=200",
          name: "Scared Animals",
          position: { left: "70%", top: "45%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 1,
      title: "🐜 The Brave Ant",
      subtitle: "Standing Up to the Bully",
      story:
        "One day, a tiny ant stood in the elephant's path. 'Please don't hurt us,' said the ant. The elephant laughed and splashed water on the ant.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/tiny-black-cartoon-ant-standing-bravely-in-front-of-large-elephant-elephant-laughing-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-brown-200/80 via-green-300/80 to-gray-400/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/tiny-black-cartoon-ant-standing-bravely-large-elephant-laughing-jungle?width=200&height=200",
          name: "Brave Ant",
          position: { left: "60%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-laughing-splashing-water-on-ant-jungle?width=200&height=200",
          name: "Laughing Elephant",
          position: { left: "45%", top: "35%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 2,
      title: "😠 The Ants Fight Back",
      subtitle: "Small but Strong Together",
      story:
        "The ant called her friends. Soon, hundreds of ants crawled up the elephant's trunk and tickled him! The elephant cried, 'Stop! I'm sorry!'",
      backgroundImage:
        "https://image.pollinations.ai/prompt/hundreds-of-cartoon-ants-crawling-on-large-elephant-elephant-looking-surprised-tickled-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-brown-300/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/hundreds-of-cartoon-ants-crawling-on-large-elephant-elephant-looking-surprised-tickled-jungle?width=200&height=200",
          name: "Tickling Ants",
          position: { left: "60%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-looking-surprised-tickled-by-ants-jungle?width=200&height=200",
          name: "Surprised Elephant",
          position: { left: "45%", top: "35%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 3,
      title: "🤝 A Lesson Learned",
      subtitle: "Kindness Wins",
      story:
        "The elephant promised never to hurt small animals again. The ant forgave him, and they became friends.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-and-tiny-ant-smiling-shaking-hands-jungle-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-green-200/80 to-brown-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-and-tiny-ant-smiling-shaking-hands-jungle-sunset?width=200&height=200",
          name: "Friends",
          position: { left: "50%", top: "50%" },
          delay: 700,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Never underestimate the small",
      story:
        "Moral: Even the smallest can be powerful together. Be kind to everyone!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-and-tiny-ant-sitting-together-smiling-jungle-sunset-moral-lesson?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-orange-200/80 to-green-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-and-tiny-ant-sitting-together-smiling-jungle-sunset?width=200&height=200",
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
    }
  ],
};

export default elephantAnt;
