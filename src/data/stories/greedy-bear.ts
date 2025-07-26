import { StoryData } from '../storyData';

const greedyBear: StoryData = {
  id: "greedy-bear",
  title: "The Greedy Bear",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-brown-bear-looking-at-honey-jar-with-greedy-expression-forest-background-moral-story-theme?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🍯 Finding Honey",
      subtitle: "A sweet discovery",
      story:
        'A bear found a jar of honey. He licked it and said, "I want more!"',
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-bear-discovering-large-honey-jar-in-forest-clearing-excited-happy-expression-golden-honey-visible?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-amber-300/80 to-brown-300/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-brown-bear-licking-honey-from-large-glass-jar-with-excited-greedy-expression-golden-honey-on-tongue?width=200&height=200",
          name: "Happy Bear",
          position: { left: "45%", top: "40%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/large-glass-honey-jar-filled-with-golden-honey-sitting-in-forest-clearing-delicious-looking-sweet-treasure?width=200&height=200",
          name: "Honey Jar",
          position: { left: "65%", top: "50%" },
          delay: 1000,
        },
      ],
    },
    // ...remaining slides from storyData.ts...
  ],
};

export default greedyBear;
