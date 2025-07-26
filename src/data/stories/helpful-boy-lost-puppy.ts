import { StoryData } from '../storyData';

const helpfulBoyLostPuppy: StoryData = {
  id: "helpful-boy-lost-puppy",
  title: "The Helpful Boy and the Lost Puppy",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-boy-helping-lost-puppy-park-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👦 A Lost Puppy",
      subtitle: "A Boy Finds a Friend",
      story:
        "One sunny day, a young boy found a lost puppy in the park. The puppy looked scared and hungry.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-finds-lost-puppy-park?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-200/70 via-yellow-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-helping-puppy?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-lost-puppy?width=200&height=200",
          name: "Puppy",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "🍞 Sharing Food",
      subtitle: "Kindness",
      story:
        "The boy shared his sandwich with the puppy and gave it water.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-sharing-food-puppy?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-sharing-food?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-puppy-eating?width=200&height=200",
          name: "Puppy",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "🏡 Reunited",
      subtitle: "A Happy Ending",
      story:
        "The boy found the puppy’s owner and helped them reunite. Everyone was happy!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-puppy-reunited-owner?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-100/70 via-yellow-100/70 to-green-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-happy?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-puppy-happy?width=200&height=200",
          name: "Puppy",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-puppy-owner-happy?width=200&height=200",
          name: "Owner",
          position: { left: "65%", top: "56%" },
          delay: 1100,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Kindness Matters",
      story: "Moral: Helping others brings happiness to everyone!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-puppy-happy-park?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-puppy-happy?width=200&height=200",
          name: "Boy & Puppy",
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

export default helpfulBoyLostPuppy;
