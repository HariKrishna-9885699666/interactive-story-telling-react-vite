import { StoryData } from '../storyData';

const theLittleRedHen: StoryData = {
  id: "the-little-red-hen",
  title: "The Little Red Hen",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-little-red-hen-baking-bread-farmyard-animals-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🌾 Finding the Wheat",
      subtitle: "A New Discovery",
      story:
        "One day, the Little Red Hen found some grains of wheat. She asked her friends, 'Who will help me plant this wheat?'",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-little-red-hen-finding-wheat-farmyard-animals?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-green-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-little-red-hen-holding-wheat?width=200&height=200",
          name: "Little Red Hen",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
      ],
    },
    {
      id: 1,
      title: "🐷 No One Helps",
      subtitle: "Lazy Friends",
      story:
        "'Not I,' said the Dog. 'Not I,' said the Cat. 'Not I,' said the Duck. So the Little Red Hen planted the wheat herself.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-farmyard-animals-saying-no-little-red-hen-planting-wheat?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-100/70 to-brown-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-saying-no-farmyard?width=200&height=200",
          name: "Dog",
          position: { left: "35%", top: "60%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-cat-saying-no-farmyard?width=200&height=200",
          name: "Cat",
          position: { left: "55%", top: "60%" },
          delay: 900,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-duck-saying-no-farmyard?width=200&height=200",
          name: "Duck",
          position: { left: "65%", top: "60%" },
          delay: 1100,
        },
      ],
    },
    {
      id: 2,
      title: "🌱 Growing Wheat",
      subtitle: "Hard Work",
      story:
        "The Little Red Hen watered and cared for the wheat all by herself. It grew tall and golden.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-little-red-hen-watering-wheat-field?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-little-red-hen-watering-wheat?width=200&height=200",
          name: "Little Red Hen",
          position: { left: "50%", top: "55%" },
          delay: 700,
        },
      ],
    },
    {
      id: 3,
      title: "🍞 Baking Bread",
      subtitle: "A Delicious Reward",
      story:
        "When the bread was ready, the Little Red Hen asked, 'Who will help me eat this bread?' Now everyone wanted to help!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-little-red-hen-baking-bread-farmyard-animals-wanting-bread?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-orange-200/70 via-yellow-200/70 to-brown-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-little-red-hen-holding-bread?width=200&height=200",
          name: "Little Red Hen",
          position: { left: "48%", top: "48%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-dog-wanting-bread-farmyard?width=200&height=200",
          name: "Dog",
          position: { left: "35%", top: "60%" },
          delay: 900,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-cat-wanting-bread-farmyard?width=200&height=200",
          name: "Cat",
          position: { left: "55%", top: "60%" },
          delay: 1100,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-duck-wanting-bread-farmyard?width=200&height=200",
          name: "Duck",
          position: { left: "65%", top: "60%" },
          delay: 1300,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Hard Work Pays Off",
      story: "Moral: Those who do the work deserve the reward!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-little-red-hen-looking-wise-farmyard-animals-in-background?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-little-red-hen-looking-wise?width=200&height=200",
          name: "Wise Little Red Hen",
          position: { left: "40%", top: "50%" },
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

export default theLittleRedHen;
