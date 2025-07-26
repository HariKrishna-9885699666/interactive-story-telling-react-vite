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
    // ...remaining slides from storyData.ts...
  ],
};

export default elephantAnt;
