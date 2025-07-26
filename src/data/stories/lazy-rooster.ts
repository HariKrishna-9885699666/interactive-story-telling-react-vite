import { StoryData } from '../storyData';

const lazyRooster: StoryData = {
    id: "lazy-rooster",
    title: "The Lazy Rooster",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-rooster-sleeping-on-a-fence-while-sun-rises-other-animals-working-farm-background-humorous-style?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐓 The Lazy Rooster",
        subtitle: "Too Tired to Wake",
        story:
          "Once upon a time, there was a lazy rooster who never woke up early. He liked to sleep while others started their day.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-rooster-sleeping-on-hay-bale-as-sun-rises-in-background-other-animals-active-farm-scene?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-slate-600/70 via-yellow-400/70 to-sky-500/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-rooster-sleeping-soundly-on-farm-hay-pile-sunrise-background?width=200&height=200",
            name: "Lazy Rooster",
            position: { left: "45%", top: "55%" },
            delay: 600,
          },
        ],
      },
      {
        id: 1,
        title: "⏰ Missed Everything",
        subtitle: "No Food Left!",
        story:
          "One day, he overslept and missed his food. The other animals ate and went to work. The rooster was left hungry and alone.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-rooster-looking-sad-empty-food-bowl-other-animals-eating-farm-background-sunny-day?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-300/70 via-orange-400/70 to-red-500/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-rooster-looking-hungry-and-sad-empty-trough-other-animals-in-background-eating?width=200&height=200",
            name: "Hungry Rooster",
            position: { left: "50%", top: "50%" },
            delay: 700,
          },
          {
            emoji: "🍽️",
            name: "No Food",
            position: { left: "30%", top: "25%" },
            delay: 900,
          },
        ],
      },
      {
        id: 2,
        title: "🌅 A New Start",
        subtitle: "He Learns a Lesson",
        story:
          "The next day, the rooster woke up early and crowed loudly, 'Cock-a-doodle-doo!' He was ready to start fresh.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-rooster-standing-on-rooftop-crowing-at-sunrise-bright-energetic-morning-farm-scenery?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-orange-400/70 via-yellow-300/70 to-lime-400/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-rooster-crowing-loudly-on-farm-rooftop-at-sunrise-proud-and-energized?width=200&height=200",
            name: "Happy Rooster",
            position: { left: "45%", top: "40%" },
            delay: 600,
          },
          {
            emoji: "🌞",
            name: "Morning",
            position: { left: "65%", top: "20%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 3,
        title: "🌟 Moral",
        subtitle: "Early Bird Gets the Worm",
        story:
          "From then on, the rooster woke up early every day. 🌟 Moral: Wake up early and do your work on time.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-rooster-standing-proud-on-farm-sunrise-happy-and-determined-early-start-successful-day?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-lime-400/70 via-green-500/70 to-teal-600/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-rooster-looking-happy-standing-on-fence-at-sunrise-motivated-expression?width=200&height=200",
            name: "Early Rooster",
            position: { left: "40%", top: "50%" },
            delay: 600,
          },
          {
            emoji: "⏰",
            name: "Time",
            position: { left: "25%", top: "25%" },
            delay: 900,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "60%", top: "30%" },
            delay: 1100,
          },
        ],
      },
    ],
}

export default lazyRooster;