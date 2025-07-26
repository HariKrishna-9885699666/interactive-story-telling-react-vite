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
      "https://image.pollinations.ai/prompt/beautiful-sparkling-lake-with-crystal-clear-water-surrounded-by-green-trees-peaceful-nature-scene-realistic-photography-style?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐟 The Wise Little Fish",
        subtitle: "Three Friends in a Sparkling Lake",
        story: "In a quiet, sparkling lake lived three fish—Speedy, Sleepy, and Smarty. They were best friends but very different. Speedy loved to swim fast, Sleepy always napped, and Smarty loved to think ahead.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/beautiful-sparkling-lake-with-crystal-clear-water-surrounded-by-green-trees-peaceful-nature-scene-realistic-photography-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-500/80 via-cyan-600/80 to-teal-700/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fast-swimming-fish-orange-color-energetic-happy-expression-underwater-scene?width=200&height=200",
            name: "Speedy",
            position: { left: "20%", top: "30%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-sleepy-fish-blue-color-tired-eyes-yawning-peaceful-expression-underwater?width=200&height=200",
            name: "Sleepy",
            position: { left: "50%", top: "40%" },
            delay: 1000,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-smart-fish-purple-color-wise-expression-thinking-glasses-underwater-scene?width=200&height=200",
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
          "https://image.pollinations.ai/prompt/fishermen-by-a-lake-with-fishing-rods-and-nets-warning-danger-scene-dramatic-lighting-realistic-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-orange-600/70 via-yellow-500/70 to-red-600/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-smart-fish-purple-color-worried-alarmed-expression-warning-gesture-underwater?width=200&height=200",
            name: "Worried Smarty",
            position: { left: "40%", top: "35%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-fishermen-silhouettes-with-fishing-nets-and-rods-threatening-dark-figures?width=200&height=200",
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
          "https://image.pollinations.ai/prompt/underwater-scene-with-fish-making-decisions-secret-stream-pathway-mystical-underwater-world-realistic-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-purple-600/70 via-indigo-600/70 to-blue-700/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fast-fish-orange-color-confident-speaking-expression-underwater-scene?width=200&height=200",
            name: "Confident Speedy",
            position: { left: "25%", top: "40%" },
            delay: 400,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-sleepy-fish-blue-color-yawning-tired-lazy-expression-underwater?width=200&height=200",
            name: "Sleepy Fish",
            position: { left: "50%", top: "45%" },
            delay: 800,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-smart-fish-purple-color-swimming-away-determined-expression-escaping-underwater?width=200&height=200",
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
          "https://image.pollinations.ai/prompt/fishing-nets-in-water-catching-fish-dramatic-scene-underwater-view-dark-dangerous-atmosphere-realistic-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-red-700/80 via-gray-600/80 to-black/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-fishing-net-trap-dark-threatening-underwater-scene-dangerous-web?width=200&height=200",
            name: "Net Trap",
            position: { left: "30%", top: "25%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-fish-orange-color-scared-trapped-panicked-expression-caught-in-net-underwater?width=200&height=200",
            name: "Caught Speedy",
            position: { left: "35%", top: "40%" },
            delay: 900,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-sleepy-fish-blue-color-still-sleeping-unaware-danger-peaceful-expression?width=200&height=200",
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
          "https://image.pollinations.ai/prompt/peaceful-pond-with-safe-fish-swimming-freely-beautiful-nature-scene-wisdom-and-success-theme-golden-hour-lighting-realistic-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-500/70 via-emerald-600/70 to-teal-700/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-smart-fish-purple-color-happy-wise-successful-expression-safe-in-pond?width=200&height=200",
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
    coverImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-flying-above-trees-sunny-day-hopeful-expression-realistic-style?width=600&height=400',
    slides: [
      {
        id: 0,
        title: '🐦 The Thirsty Bird',
        subtitle: 'A hot day, a little bird, and a big problem',
        story: 'One hot day, a little bird was very thirsty. She flew here and there, looking for water.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-flying-in-hot-sunny-sky-looking-for-water-dry-landscape-realistic-style?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-yellow-200/80 via-orange-200/80 to-amber-400/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-yellow-thirsty-expression-flying-sky?width=200&height=200',
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
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-finds-pot-under-tree-hopeful-expression-sunny-day-realistic-style?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-brown-400/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-yellow-landing-near-pot-under-tree?width=200&height=200',
            name: 'Bird Landing',
            position: { left: '45%', top: '40%' },
            delay: 700
          },
          {
            emoji: '🪣',
            name: 'Pot',
            position: { left: '60%', top: '50%' },
            delay: 1100
          }
        ]
      },
      {
        id: 2,
        title: '😢 Too Low!',
        subtitle: 'A sad moment',
        story: 'But the water was very low. Her beak could not reach it. She was sad.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-sad-looking-into-pot-water-too-low-realistic-style?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-blue-200/80 via-gray-200/80 to-brown-300/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-yellow-sad-expression-looking-into-pot?width=200&height=200',
            name: 'Sad Bird',
            position: { left: '50%', top: '45%' },
            delay: 700
          },
          {
            emoji: '💧',
            name: 'Low Water',
            position: { left: '60%', top: '60%' },
            delay: 1100
          }
        ]
      },
      {
        id: 3,
        title: '💡 The Clever Idea',
        subtitle: 'Thinking smart',
        story: 'Then, she had an idea. She picked small stones and dropped them into the pot. One by one, the water came up.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-dropping-stones-into-pot-water-rising-clever-idea-realistic-style?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-yellow-300/80 via-gray-200/80 to-blue-200/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-yellow-dropping-stone-into-pot-clever-expression?width=200&height=200',
            name: 'Clever Bird',
            position: { left: '55%', top: '40%' },
            delay: 700
          },
          {
            emoji: '🪨',
            name: 'Stone',
            position: { left: '65%', top: '55%' },
            delay: 1100
          }
        ]
      },
      {
        id: 4,
        title: '� Success!',
        subtitle: 'A happy ending',
        story: 'The bird drank the water. She was happy and flew away.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-drinking-water-from-pot-happy-flying-away-realistic-style?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-blue-200/80 via-green-200/80 to-yellow-200/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-yellow-happy-drinking-water-flying-away?width=200&height=200',
            name: 'Happy Bird',
            position: { left: '50%', top: '35%' },
            delay: 700
          },
          {
            emoji: '�',
            name: 'Success',
            position: { left: '70%', top: '20%' },
            delay: 1100
          }
        ]
      },
      {
        id: 5,
        title: '🌟 Moral',
        subtitle: 'A lesson to remember',
        story: 'Think smart. Use your mind to solve problems.',
        backgroundImage: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-thinking-lightbulb-above-head-moral-lesson-realistic-style?width=1920&height=1080',
        backgroundClass: 'bg-gradient-to-br from-yellow-200/80 via-blue-200/80 to-green-200/80',
        characters: [
          {
            image: 'https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-yellow-thinking-lightbulb-above-head?width=200&height=200',
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
