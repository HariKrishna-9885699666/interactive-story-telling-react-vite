import { StoryData } from "../storyData";

const catAndBell: StoryData = {
  id: "cat-and-bell",
  title: "The Cat and the Bell",
  coverImage:
    "https://image.pollinations.ai/prompt/cute-cartoon-mice-having-a-meeting-discussing-cat-idea-of-tying-bell-to-cat-colorful-fun-style?width=600&height=400",
  slides: [
    {
      id: 0,
      title: "🐭 The Mice Are Afraid",
      subtitle: "Fear of the Cat",
      story:
        "The mice were very scared of the cat. Whenever the cat came, they ran in all directions.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-cat-sneaking-around-corner-mice-looking-scared-in-hole-warm-farmhouse-setting?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-gray-800/80 via-slate-600/80 to-black/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-cat-with-sharp-eyes-sneaking-around-house-looking-hungry?width=200&height=200",
          name: "Sneaky Cat",
          position: { left: "50%", top: "40%" },
          delay: 600,
        },
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-mouse-peeking-from-hole-looking-scared-of-cat-inside-room?width=200&height=200",
          name: "Scared Mouse",
          position: { left: "30%", top: "60%" },
          delay: 800,
        },
      ],
    },
    {
      id: 1,
      title: "💡 A Clever Idea",
      subtitle: "The Bell Plan",
      story:
        "One mouse said, 'Let’s tie a bell to the cat!' All the mice clapped. It sounded like a great idea.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-mice-holding-meeting-discussing-idea-of-tying-bell-to-cat-light-bulb-idea-overhead-happy-expressions?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-yellow-400/70 via-orange-300/70 to-red-400/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-mouse-raising-hand-sharing-idea-in-group-of-mice-discussion-lightbulb-overhead?width=200&height=200",
          name: "Smart Mouse",
          position: { left: "40%", top: "50%" },
          delay: 600,
        },
        {
          emoji: "🔔",
          name: "Bell Idea",
          position: { left: "70%", top: "25%" },
          delay: 900,
        },
      ],
    },
    {
      id: 2,
      title: "🤔 But Who Will Do It?",
      subtitle: "Problem with the Plan",
      story:
        "Then one mouse asked, 'Who will tie the bell?' No one spoke. Everyone was silent and scared.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-mice-looking-awkward-and-scared-silent-after-being-asked-who-will-tie-the-bell-serious-moment?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-blue-700/70 via-indigo-600/70 to-gray-700/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-group-of-mice-looking-nervous-and-silent-after-difficult-question-who-will-tie-bell?width=200&height=200",
          name: "Silent Mice",
          position: { left: "45%", top: "55%" },
          delay: 600,
        },
      ],
    },
    {
      id: 3,
      title: "😱 The Cat Returns",
      subtitle: "Everyone Runs",
      story:
        "Suddenly, the cat came. All the mice ran away! No one had tied the bell.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-cat-leaping-into-room-scattering-mice-in-panic-action-scene-house-setting?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-red-700/80 via-gray-800/80 to-black/80",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cartoon-cat-pouncing-mice-running-away-in-all-directions-chaotic-scene?width=200&height=200",
          name: "Scared Mice",
          position: { left: "60%", top: "40%" },
          delay: 600,
        },
        {
          emoji: "🏃‍♂️",
          name: "Escape",
          position: { left: "30%", top: "20%" },
          delay: 900,
        },
      ],
    },
    {
      id: 4,
      title: "🌟 Moral",
      subtitle: "Ideas vs Action",
      story:
        "Everyone had a great idea, but no one could do it. 🌟 Moral: Ideas are easy. Doing them is hard.",
      backgroundImage:
        "https://image.pollinations.ai/prompt/cartoon-mouse-thinking-deeply-looking-out-of-hole-cat-bell-on-floor-moral-lesson-background?width=1920&height=1080",
      backgroundClass:
        "bg-gradient-to-br from-orange-300/70 via-yellow-200/70 to-lime-400/70",
      characters: [
        {
          image:
            "https://image.pollinations.ai/prompt/cute-cartoon-mouse-thinking-about-lesson-looking-wise-sitting-in-corner-light-on-face?width=200&height=200",
          name: "Wise Mouse",
          position: { left: "50%", top: "50%" },
          delay: 600,
        },
        {
          emoji: "🧠",
          name: "Idea",
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

export default catAndBell;
