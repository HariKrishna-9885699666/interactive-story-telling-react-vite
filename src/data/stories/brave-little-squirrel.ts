import { StoryData } from '../storyData';

const braveLittleSquirrel: StoryData = {
  id: "brave-little-squirrel",
  title: "The Brave Little Squirrel",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-brave-squirrel-tree-forest-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐿️ A Stormy Night",
      subtitle: "Alone in the Tree",
      story:
        "One stormy night, a little squirrel was caught in a storm. The wind howled and the tree shook.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-squirrel-storm-tree?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-200/70 via-gray-200/70 to-black/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-squirrel-scared?width=200&height=200",
          name: "Little Squirrel",
          position: { left: "50%", top: "60%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🌲 Facing Fears",
      subtitle: "Bravery",
      story:
        "The squirrel held tight and remembered what his mother taught him: 'Be brave, and you’ll get through.'",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-squirrel-brave-tree?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-blue-100/70 to-yellow-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-squirrel-brave?width=200&height=200",
          name: "Little Squirrel",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 2,
      title: "🌤️ A New Day",
      subtitle: "Safe and Sound",
      story:
        "The storm passed. The little squirrel was safe and proud of his bravery.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-squirrel-happy-tree?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-squirrel-happy?width=200&height=200",
          name: "Little Squirrel",
          position: { left: "50%", top: "60%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Be Brave",
      story: "Moral: Bravery helps us overcome tough times!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-squirrel-brave-sunrise?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-squirrel-brave-happy?width=200&height=200",
          name: "Little Squirrel",
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

export default braveLittleSquirrel;
