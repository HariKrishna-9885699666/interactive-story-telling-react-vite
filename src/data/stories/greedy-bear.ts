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
    {
      id: 1,
      title: "🧸 Wants More",
      subtitle: "Never Enough",
      story:
        'The bear finished the honey and wanted more. He searched the forest and found another jar high up in a tree.',
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-bear-looking-up-at-honey-jar-in-tree-forest-greedy-expression?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-300/80 via-brown-200/80 to-green-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-bear-looking-up-at-honey-jar-in-tree-greedy-expression-forest?width=200&height=200",
          name: "Greedy Bear",
          position: { left: "55%", top: "45%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/honey-jar-high-in-tree-forest-background?width=200&height=200",
          name: "High Honey Jar",
          position: { left: "70%", top: "30%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 2,
      title: "😬 Trouble Strikes",
      subtitle: "A Sticky Situation",
      story:
        'The bear climbed the tree, but the branch broke! He fell and spilled all the honey. Now he had nothing.',
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-bear-falling-from-tree-honey-spilling-everywhere-forest-funny-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-brown-300/80 via-yellow-200/80 to-orange-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-bear-falling-from-tree-honey-spilling-everywhere-forest-funny-scene?width=200&height=200",
          name: "Falling Bear",
          position: { left: "60%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/honey-spilled-on-ground-forest-background?width=200&height=200",
          name: "Spilled Honey",
          position: { left: "45%", top: "35%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 3,
      title: "😢 Regret",
      subtitle: "Nothing Left",
      story:
        'The bear sat sadly with an empty tummy. He wished he hadn’t been so greedy.',
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-bear-sitting-sad-empty-honey-jar-forest-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-brown-200/80 to-orange-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-bear-sitting-sad-empty-honey-jar-forest-sunset?width=200&height=200",
          name: "Sad Bear",
          position: { left: "50%", top: "50%" },
          delay: 700,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Don’t Be Greedy",
      story:
        'Moral: Don’t be greedy. Be happy with what you have!',
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-brown-bear-looking-content-small-honey-jar-forest-moral-lesson?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/80 via-green-200/80 to-brown-200/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-brown-bear-looking-content-small-honey-jar-forest-moral-lesson?width=200&height=200",
          name: "Content Bear",
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

export default greedyBear;
