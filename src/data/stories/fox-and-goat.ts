import { StoryData } from '../storyData';

const foxAndGoat: StoryData = {
    id: "fox-and-goat",
    title: "The Fox and the Goat",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-fox-and-goat-looking-down-into-a-deep-well-country-setting-daylight-light-hearted-style?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🦊 The Fox in the Well",
        subtitle: "Trouble Begins",
        story:
          "A fox fell into a deep well and could not get out. He looked around for help, but there was no one nearby.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-style-fox-trapped-inside-stone-well-looking-up-worried-expression-light-from-above?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-700/80 via-slate-700/80 to-black/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-orange-fox-with-worried-expression-inside-a-well-looking-up?width=200&height=200",
            name: "Fox",
            position: { left: "50%", top: "55%" },
            delay: 600,
          },
        ],
      },
      {
        id: 1,
        title: "🐐 A Visitor Appears",
        subtitle: "The Goat Arrives",
        story:
          "A goat came by and asked, 'Is the water good?' The fox smiled and said, 'Yes! Come in, it’s nice!'",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-scene-goat-looking-into-well-curious-expression-fox-looking-up-smiling-sunny-farm-background?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-400/70 via-sky-500/70 to-cyan-600/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-goat-leaning-over-well-looking-curious-sunny-day?width=200&height=200",
            name: "Goat",
            position: { left: "35%", top: "30%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fox-smiling-inside-well-looking-up-deceptively?width=200&height=200",
            name: "Clever Fox",
            position: { left: "55%", top: "60%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 2,
        title: "🚨 Now Both Are Stuck!",
        subtitle: "The Trick Revealed",
        story:
          "The goat jumped in. But now both were stuck! The fox tricked him just to get help out.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-fox-and-goat-both-inside-well-looking-confused-trapped-together-light-from-above?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-orange-500/70 via-yellow-400/70 to-red-600/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-fox-climbing-on-goat-inside-well-clever-expression-goat-looking-confused?width=200&height=200",
            name: "Tricky Fox",
            position: { left: "50%", top: "40%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-goat-looking-shocked-inside-well-after-being-tricked?width=200&height=200",
            name: "Goat",
            position: { left: "60%", top: "60%" },
            delay: 900,
          },
        ],
      },
      {
        id: 3,
        title: "🌟 Moral",
        subtitle: "Be Careful Whom You Trust",
        story:
          "The fox escaped by climbing on the goat, leaving the goat stuck inside. 🌟 Moral: Think before you act. Don’t trust everyone.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-fox-walking-away-from-well-smiling-victorious-goat-stuck-inside-well-moral-lesson-scene?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-red-600/70 via-orange-500/70 to-yellow-400/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fox-smiling-proudly-walking-away-from-well?width=200&height=200",
            name: "Fox Escaped",
            position: { left: "40%", top: "50%" },
            delay: 600,
          },
          {
            emoji: "⚠️",
            name: "Warning",
            position: { left: "25%", top: "25%" },
            delay: 900,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "65%", top: "25%" },
            delay: 1100,
          },
        ],
      },
    ],
}

export default foxAndGoat;