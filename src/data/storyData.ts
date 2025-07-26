export interface StorySlideData {
  id: number;
  title: string;
  subtitle: string;
  story: string;
  backgroundImage: string;
  backgroundClass: string;
  characters: {
    emoji?: string;
    image?: string;
    name: string;
    position: { left: string; top: string };
    delay: number;
  }[];
}

export interface StoryData {
  id: string;
  title: string;
  coverImage: string;
  slides: StorySlideData[];
}

export const stories: StoryData[] = [
  {
    id: "wise-fish",
    title: "The Wise Little Fish",
    coverImage:
      "https://image.pollinations.ai/prompt/beautiful-crystal-clear-sparkling-lake-surrounded-by-tall-green-trees-mountains-in-background-peaceful-serene-nature-scene-bright-daylight-photorealistic-style?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐟 The Wise Little Fish",
        subtitle: "Three Friends in a Sparkling Lake",
        story: "In a quiet, sparkling lake lived three fish—Speedy, Sleepy, and Smarty. They were best friends but very different. Speedy loved to swim fast, Sleepy always napped, and Smarty loved to think ahead.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/underwater-view-of-crystal-clear-sparkling-lake-with-sunlight-filtering-through-water-creating-beautiful-light-rays-peaceful-aquatic-environment-with-water-plants-and-rocks-photorealistic-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-500/80 via-cyan-600/80 to-teal-700/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-bright-orange-color-with-energetic-happy-expression-swimming-fast-with-motion-lines-underwater-scene-friendly-appearance?width=200&height=200",
            name: "Speedy",
            position: { left: "20%", top: "30%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-soft-blue-color-with-sleepy-tired-eyes-yawning-mouth-peaceful-drowsy-expression-floating-slowly-underwater?width=200&height=200",
            name: "Sleepy",
            position: { left: "50%", top: "40%" },
            delay: 1000,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-purple-color-wearing-small-round-glasses-wise-thoughtful-expression-looking-intelligent-underwater-scene?width=200&height=200",
            name: "Smarty",
            position: { left: "75%", top: "25%" },
            delay: 1400,
          },
        ],
      },
      {
        id: 1,
        title: "⚠️ The Warning",
        subtitle: "Danger approaches the peaceful lake",
        story:
          "One sunny morning, Smarty overheard fishermen saying, This lake is full of fish! Let's bring big nets tomorrow. Smarty rushed back and warned her friends. 'We must leave tonight!' she said.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/lakeside-scene-with-two-fishermen-standing-on-shore-holding-large-fishing-nets-and-fishing-rods-threatening-atmosphere-dramatic-orange-sunset-lighting-danger-approaching?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-orange-600/70 via-yellow-500/70 to-red-600/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-purple-color-with-glasses-looking-very-worried-and-alarmed-mouth-open-shouting-warning-gesture-with-fins-underwater?width=200&height=200",
            name: "Worried Smarty",
            position: { left: "40%", top: "35%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/silhouettes-of-two-fishermen-holding-large-fishing-nets-and-rods-dark-threatening-figures-against-bright-sky-menacing-appearance?width=200&height=200",
            name: "Fishermen",
            position: { left: "70%", top: "15%" },
            delay: 900,
          },
          {
            emoji: "⚠️",
            name: "Warning",
            position: { left: "25%", top: "20%" },
            delay: 1300,
          },
        ],
      },
      {
        id: 2,
        title: "🤔 Different Choices",
        subtitle: "Three friends, three decisions",
        story:
          "Speedy said, 'Maybe I'll escape quickly if they come.' Sleepy yawned, 'I'll think tomorrow. I'm too tired now.' But Smarty didn't wait. She quietly swam through a secret stream to a nearby pond.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/underwater-scene-showing-a-narrow-secret-stream-pathway-connecting-lake-to-small-pond-mysterious-underwater-tunnel-with-flowing-water-current-mystical-blue-green-lighting?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-purple-600/70 via-indigo-600/70 to-blue-700/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-orange-color-with-confident-proud-expression-fin-pointed-upward-speaking-boldly-underwater-scene?width=200&height=200",
            name: "Confident Speedy",
            position: { left: "25%", top: "40%" },
            delay: 400,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-blue-color-with-very-sleepy-tired-expression-yawning-widely-eyes-half-closed-floating-lazily-underwater?width=200&height=200",
            name: "Sleepy Fish",
            position: { left: "50%", top: "45%" },
            delay: 800,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-purple-color-with-glasses-swimming-quickly-toward-narrow-stream-opening-determined-wise-expression-escaping-underwater?width=200&height=200",
            name: "Smarty Escaping",
            position: { left: "75%", top: "30%" },
            delay: 1200,
          },
        ],
      },
      {
        id: 3,
        title: "🕸️ The Trap",
        subtitle: "The fishermen arrive with nets",
        story:
          "The next day, the fishermen came with huge nets. Speedy tried to swim fast but got caught. Sleepy didn't even wake up in time! Only Smarty was safe and free.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/underwater-view-of-large-fishing-nets-being-cast-into-water-dark-threatening-mesh-nets-sinking-down-dramatic-dangerous-atmosphere-murky-water-trapped-fish-visible?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-red-700/80 via-gray-600/80 to-black/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-dark-fishing-net-mesh-spreading-underwater-threatening-web-like-trap-sinking-into-lake-menacing-appearance?width=200&height=200",
            name: "Net Trap",
            position: { left: "30%", top: "25%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-orange-color-with-scared-panicked-expression-eyes-wide-open-mouth-agape-trapped-inside-fishing-net-mesh-underwater?width=200&height=200",
            name: "Caught Speedy",
            position: { left: "35%", top: "40%" },
            delay: 900,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-blue-color-still-sleeping-peacefully-with-closed-eyes-completely-unaware-of-danger-floating-near-fishing-net-underwater?width=200&height=200",
            name: "Sleeping Fish",
            position: { left: "60%", top: "45%" },
            delay: 1300,
          },
        ],
      },
      {
        id: 4,
        title: "🌟 Wisdom Wins",
        subtitle: "The power of thinking ahead",
        story:
          "Only Smarty was safe in her new pond. The moral of the story: Always think ahead and act wisely at the right time! Wisdom and preparation can save you from danger.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/beautiful-small-peaceful-pond-with-crystal-clear-water-surrounded-by-lily-pads-and-flowers-safe-haven-golden-hour-warm-sunlight-serene-nature-paradise?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-500/70 via-emerald-600/70 to-teal-700/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-purple-color-with-glasses-looking-very-happy-and-relieved-safe-in-beautiful-pond-wise-successful-expression-swimming-freely?width=200&height=200",
            name: "Wise Smarty",
            position: { left: "45%", top: "35%" },
            delay: 600,
          },
          {
            emoji: "🌟",
            name: "Wisdom",
            position: { left: "30%", top: "20%" },
            delay: 1000,
          },
          {
            emoji: "🏆",
            name: "Success",
            position: { left: "65%", top: "25%" },
            delay: 1400,
          },
        ],
      },
    ],
  },
  {
    id: 'clever-bird',
    title: 'The Clever Little Bird',
    coverImage: 'https://image.pollinations.ai/prompt/cute-cartoon-small-bird-with-blue-and-yellow-feathers-flying-above-green-trees-on-sunny-bright-day-hopeful-determined-expression-clear-blue-sky-background?width=600&height=400',
    slides: [
      {
        id: 0,
        title: '🐦 The Thirsty Bird',
        subtitle: 'A hot day, a little bird, and a big problem',
        story: 'One hot day, a little bird was very thirsty. She flew here and there, looking for water.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-small-bird-with-blue-and-yellow-feathers-flying-desperately-in-very-hot-sunny-sky-with-bright-sun-dry-cracked-landscape-below-no-water-visible-desert-like-environment?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-yellow-200/80 via-orange-200/80 to-amber-400/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-small-bird-blue-and-yellow-feathers-with-very-thirsty-desperate-expression-beak-open-panting-flying-in-hot-sky?width=200&height=200',
            name: 'Little Bird',
            position: { left: '40%', top: '30%' },
            delay: 600
          },
          {
            emoji: '🌞',
            name: 'Sun',
            position: { left: '70%', top: '20%' },
            delay: 1000
          }
        ]
      },
      {
        id: 1,
        title: '🪣 The Pot Under the Tree',
        subtitle: 'A hopeful discovery',
        story: 'At last, she saw a pot under a tree. She flew down to drink.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-discovering-clay-pot-sitting-under-large-green-tree-bird-flying-down-with-hopeful-excited-expression-sunny-day-with-shade-under-tree?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-brown-400/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-landing-near-clay-pot-under-tree-with-excited-hopeful-expression-wings-spread-for-landing?width=200&height=200',
            name: 'Bird Landing',
            position: { left: '45%', top: '40%' },
            delay: 700
          },
          {
            image: 'https://image.pollinations.ai/prompt/simple-clay-pot-sitting-under-tree-shade-brown-earthenware-container-realistic-style?width=200&height=200',
            name: 'Clay Pot',
            position: { left: '60%', top: '50%' },
            delay: 1100
          }
        ]
      },
      {
        id: 2,
        title: '😢 Too Low!',
        subtitle: 'A sad disappointing moment',
        story: 'But the water was very low. Her beak could not reach it. She was sad.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-looking-sadly-into-clay-pot-with-water-level-very-low-at-bottom-bird-cannot-reach-water-with-beak-disappointed-sad-scene-under-tree?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-blue-200/80 via-gray-200/80 to-brown-300/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-with-very-sad-disappointed-expression-head-drooping-looking-into-pot-unable-to-reach-water?width=200&height=200',
            name: 'Sad Bird',
            position: { left: '50%', top: '45%' },
            delay: 700
          },
          {
            image: 'https://image.pollinations.ai/prompt/clay-pot-with-very-little-water-at-bottom-water-level-extremely-low-almost-empty-showing-the-problem-clearly?width=200&height=200',
            name: 'Low Water Pot',
            position: { left: '60%', top: '60%' },
            delay: 1100
          }
        ]
      },
      {
        id: 3,
        title: '💡 The Clever Idea',
        subtitle: 'Thinking smart and taking action',
        story: 'Then, she had an idea. She picked small stones and dropped them into the pot. One by one, the water came up.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-dropping-small-stones-into-clay-pot-water-level-rising-slowly-bird-has-clever-excited-expression-lightbulb-moment-under-tree?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-yellow-300/80 via-gray-200/80 to-blue-200/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-holding-small-stone-in-beak-dropping-it-into-pot-with-clever-smart-expression-lightbulb-above-head?width=200&height=200',
            name: 'Clever Bird',
            position: { left: '55%', top: '40%' },
            delay: 700
          },
          {
            image: 'https://image.pollinations.ai/prompt/small-gray-stones-falling-into-clay-pot-with-water-level-rising-displacement-effect-visible-stones-splashing-into-water?width=200&height=200',
            name: 'Stones in Pot',
            position: { left: '65%', top: '55%' },
            delay: 1100
          }
        ]
      },
      {
        id: 4,
        title: '💧 Success!',
        subtitle: 'A happy ending with refreshing water',
        story: 'The bird drank the water. She was happy and flew away.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-successfully-drinking-water-from-clay-pot-with-raised-water-level-bird-looking-very-happy-satisfied-ready-to-fly-away-under-tree?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-blue-200/80 via-green-200/80 to-yellow-200/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-drinking-water-from-pot-with-very-happy-satisfied-expression-wings-slightly-spread-ready-to-fly?width=200&height=200',
            name: 'Happy Bird',
            position: { left: '50%', top: '35%' },
            delay: 700
          },
          {
            image: 'https://image.pollinations.ai/prompt/clay-pot-filled-with-stones-and-water-at-perfect-drinking-level-successful-solution-visible?width=200&height=200',
            name: 'Success Pot',
            position: { left: '70%', top: '50%' },
            delay: 1100
          }
        ]
      },
      {
        id: 5,
        title: '🌟 Moral',
        subtitle: 'A lesson to remember forever',
        story: 'Think smart. Use your mind to solve problems.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-with-lightbulb-glowing-above-head-representing-wisdom-and-clever-thinking-moral-lesson-scene-bright-inspiring-background?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-yellow-200/80 via-blue-200/80 to-green-200/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-with-wise-thoughtful-expression-glowing-lightbulb-above-head-representing-intelligence-and-problem-solving?width=200&height=200',
            name: 'Thinking Bird',
            position: { left: '55%', top: '40%' },
            delay: 700
          },
          {
            emoji: '🌟',
            name: 'Moral',
            position: { left: '70%', top: '20%' },
            delay: 1100
          }
        ]
      }
    ]
  }
];