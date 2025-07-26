import { StoryData } from '../storyData';

const foxAndGrapes: StoryData = {
  id: "fox-and-grapes",
  title: "The Fox and the Grapes",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-fox-looking-up-at-bunch-of-grapes-hanging-above-beyond-reach-vivid-forest?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🦊 Fox Spots Juicy Grapes",
      subtitle: "Out of Reach",
      story:
        "A hungry fox saw some juicy grapes hanging high on a vine. He wanted them very much.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-fox-in-forest-looking-up-longing-at-cluster-of-grapes-on-high-vine-colorful?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-green-500/70 via-teal-400/70 to-emerald-800/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-fox-looking-hopeful-standing-below-grapes-in-forest?width=200&height=200",
          name: "Eager Fox",
          position: { left: "45%", top: "55%" },
          delay: 600,
        },
        {
          emoji: "🍇",
          name: "Grapes",
          position: { left: "50%", top: "25%" },
          delay: 900,
        },
      ],
    },
    {
      id: 1,
      title: "🦊 Jumps and Misses",
      subtitle: "Try and Try",
      story:
        "He jumped high, again and again. But the grapes were too high! He couldn’t get them.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-fox-leaping-repeatedly-towards-high-grapes-looking-frustrated-forest-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-400/70 via-green-300/70 to-blue-800/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-fox-in-air-trying-to-catch-grapes-tongue-out-funny-frustrated?width=200&height=200",
          name: "Frustrated Fox",
          position: { left: "47%", top: "50%" },
          delay: 600,
        },
      ],
    },
    {
      id: 2,
      title: "😤 Gives Up",
      subtitle: "Sour Grapes",
      story:
        "The fox finally gave up. He walked away, saying 'I bet those grapes are sour anyway!'",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-fox-walking-away-looking-back-disappointed-thought-bubble-sour-grapes-forest?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-purple-400/70 via-blue-300/70 to-blue-900/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-fox-looking-back-over-shoulder-grumpy-thought-bubble-grapes-sour?width=200&height=200",
          name: "Grumpy Fox",
          position: { left: "53%", top: "48%" },
          delay: 650,
        },
      ],
    },
    {
      id: 3,
      title: "🍇 Still Hanging Grapes",
      subtitle: "Out of Reach",
      story:
        "The grapes stayed on the vine, waiting for someone patient or tall enough to reach them.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-grapes-hanging-from-vine-high-above-ground-fox-in-distance-forest-scene?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-lime-400/70 via-green-200/70 to-purple-400/70",
      characters: [
        {
          emoji: "🍇",
          name: "Grapes",
          position: { left: "55%", top: "30%" },
          delay: 700,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Don't Be a Sore Loser",
      story: "Moral: It’s easy to despise what you cannot have.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-fox-sitting-disappointed-thinking-about-grapes-learned-lesson-sunset-forest?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-200/70 via-orange-200/70 to-purple-200/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-fox-sitting-alone-thinking-about-sour-grapes-lesson-sunset-forest?width=200&height=200",
          name: "Thoughtful Fox",
          position: { left: "40%", top: "50%" },
          delay: 550,
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

export default foxAndGrapes;
