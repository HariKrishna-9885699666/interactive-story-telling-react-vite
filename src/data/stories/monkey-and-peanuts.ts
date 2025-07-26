import { StoryData } from "../storyData";

const monkeyAndPeanuts: StoryData = {
  id: "monkey-and-peanuts",
  title: "The Monkey and the Peanuts",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-monkey-holding-bag-of-peanuts-looking-greedy-colorful-background-jungle-scene-fun-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐒 The Monkey Finds Peanuts",
      subtitle: "A Tasty Surprise",
      story:
        "A monkey found a bag full of peanuts. He was so excited! He quickly reached in to grab as many as he could.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkey-in-jungle-finding-bag-of-peanuts-looking-excited-holding-bag-colorful-nature-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-400/70 via-lime-500/70 to-emerald-600/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-monkey-looking-happy-and-excited-holding-open-peanut-bag-in-jungle?width=200&height=200",
          name: "Excited Monkey",
          position: { left: "45%", top: "50%" },
          delay: 600,
        },
        {
          emoji: "🥜",
          name: "Peanuts",
          position: { left: "30%", top: "20%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "😵 Stuck Hand!",
      subtitle: "Too Greedy",
      story:
        "He took a big handful of peanuts. But now, his hand got stuck in the bag! He wouldn’t let go.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkey-with-hand-stuck-in-small-bag-greedy-expression-worried-face-peanuts-spilling-out-jungle-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-300/70 via-orange-400/70 to-red-500/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-monkey-looking-worried-hand-stuck-in-bag-fist-full-of-peanuts?width=200&height=200",
          name: "Greedy Monkey",
          position: { left: "50%", top: "50%" },
          delay: 600,
        },
      ],
    },
    {
      id: 2,
      title: "🙈 Won’t Let Go",
      subtitle: "Holding On Too Tight",
      story:
        "The monkey refused to let go of the peanuts. Because of this, he couldn’t pull his hand out of the bag.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkey-sitting-on-ground-refusing-to-let-go-of-peanuts-struggling-with-stuck-hand-jungle-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-red-600/70 via-brown-400/70 to-orange-400/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-monkey-sitting-on-ground-looking-stubborn-holding-tight-to-peanuts-hand-stuck-in-bag?width=200&height=200",
          name: "Stubborn Monkey",
          position: { left: "45%", top: "55%" },
          delay: 600,
        },
      ],
    },
    {
      id: 3,
      title: "👦 The Boy Takes the Bag",
      subtitle: "Monkey Loses Everything",
      story:
        "A boy came by and took the whole bag. The monkey lost all the peanuts because he didn’t let go!",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-boy-picking-up-bag-of-peanuts-while-monkey-looks-sad-hand-stuck-still-jungle-setting?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-brown-500/70 via-yellow-400/70 to-amber-500/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-monkey-looking-sad-boy-walking-away-with-peanut-bag-jungle-scene?width=200&height=200",
          name: "Sad Monkey",
          position: { left: "55%", top: "45%" },
          delay: 700,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-boy-smiling-carrying-bag-of-peanuts-walking-away-jungle-path?width=200&height=200",
          name: "Boy",
          position: { left: "35%", top: "30%" },
          delay: 1000,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Let Go to Gain More",
      story:
        "The monkey learned too late: 🌟 Moral: Let go of a little to save a lot.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-monkey-sitting-alone-thinking-about-lesson-letting-go-of-greed-moral-scene-sunset-jungle?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-orange-300/70 via-yellow-200/70 to-teal-500/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-monkey-looking-thoughtful-alone-on-rock-jungle-background-sunset-mood?width=200&height=200",
          name: "Wise Monkey",
          position: { left: "40%", top: "50%" },
          delay: 600,
        },
        {
          emoji: "🥜",
          name: "Peanuts",
          position: { left: "25%", top: "30%" },
          delay: 900,
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

export default monkeyAndPeanuts;
