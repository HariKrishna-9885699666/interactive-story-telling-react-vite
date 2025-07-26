import { StoryData } from '../storyData';

const boySharedLunch: StoryData = {
  id: "boy-shared-lunch",
  title: "The Boy Who Shared His Lunch",
  coverImage:
    "https://image.pollinations.ai/prompt/cartoon-boy-sharing-lunch-school-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "👦 Lunch at School",
      subtitle: "A Generous Boy",
      story:
        "One day at school, a boy noticed his friend didn’t have any lunch at school.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-lunch-school?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-green-200/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-lunch?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-friend-sad?width=200&height=200",
          name: "Friend",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "🥪 Sharing Lunch",
      subtitle: "Kindness",
      story:
        "The boy shared his sandwich and fruit with his friend.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-sharing-lunch?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-100/70 via-yellow-100/70 to-blue-100/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-sharing?width=200&height=200",
          name: "Boy",
          position: { left: "45%", top: "56%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-friend-happy?width=200&height=200",
          name: "Friend",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "😊 Happy Friends",
      subtitle: "Gratitude",
      story:
        "Both friends enjoyed their lunch and felt happy together.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-friends-happy?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-100/70 via-green-200/70 to-blue-100/70",
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
            "https://image.pollinations.ai/prompt/cartoon-boy-friend-happy?width=200&height=200",
          name: "Friend",
          position: { left: "55%", top: "56%" },
          delay: 900,
        },
      ],
    },
    {
      id: 3,
      title: "🌟 Moral",
      subtitle: "Sharing is Caring",
      story: "Moral: Sharing with others brings happiness!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-friends-happy-sunset?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-white/70 to-blue-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-boy-friends-happy-sharing?width=200&height=200",
          name: "Happy Friends",
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

export default boySharedLunch;
