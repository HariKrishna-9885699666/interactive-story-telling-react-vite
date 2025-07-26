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
        story:
          "In a quiet, sparkling lake lived three fish—Speedy, Sleepy, and Smarty. They were best friends but very different. Speedy loved to swim fast, Sleepy always napped, and Smarty loved to think ahead.",
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
    id: "clever-bird",
    title: "The Clever Little Bird",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-small-bird-with-blue-and-yellow-feathers-flying-above-green-trees-on-sunny-bright-day-hopeful-determined-expression-clear-blue-sky-background?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐦 The Thirsty Bird",
        subtitle: "A hot day, a little bird, and a big problem",
        story:
          "One hot day, a little bird was very thirsty. She flew here and there, looking for water.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cute-cartoon-small-bird-with-blue-and-yellow-feathers-flying-desperately-in-very-hot-sunny-sky-with-bright-sun-dry-cracked-landscape-below-no-water-visible-desert-like-environment?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-200/80 via-orange-200/80 to-amber-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-small-bird-blue-and-yellow-feathers-with-very-thirsty-desperate-expression-beak-open-panting-flying-in-hot-sky?width=200&height=200",
            name: "Little Bird",
            position: { left: "40%", top: "30%" },
            delay: 600,
          },
          {
            emoji: "🌞",
            name: "Sun",
            position: { left: "70%", top: "20%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 1,
        title: "🪣 The Pot Under the Tree",
        subtitle: "A hopeful discovery",
        story: "At last, she saw a pot under a tree. She flew down to drink.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cute-cartoon-bird-discovering-clay-pot-sitting-under-large-green-tree-bird-flying-down-with-hopeful-excited-expression-sunny-day-with-shade-under-tree?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-brown-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-landing-near-clay-pot-under-tree-with-excited-hopeful-expression-wings-spread-for-landing?width=200&height=200",
            name: "Bird Landing",
            position: { left: "45%", top: "40%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/simple-clay-pot-sitting-under-tree-shade-brown-earthenware-container-realistic-style?width=200&height=200",
            name: "Clay Pot",
            position: { left: "60%", top: "50%" },
            delay: 1100,
          },
        ],
      },
      {
        id: 2,
        title: "😢 Too Low!",
        subtitle: "A sad disappointing moment",
        story:
          "But the water was very low. Her beak could not reach it. She was sad.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cute-cartoon-bird-looking-sadly-into-clay-pot-with-water-level-very-low-at-bottom-bird-cannot-reach-water-with-beak-disappointed-sad-scene-under-tree?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-200/80 via-gray-200/80 to-brown-300/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-with-very-sad-disappointed-expression-head-drooping-looking-into-pot-unable-to-reach-water?width=200&height=200",
            name: "Sad Bird",
            position: { left: "50%", top: "45%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/clay-pot-with-very-little-water-at-bottom-water-level-extremely-low-almost-empty-showing-the-problem-clearly?width=200&height=200",
            name: "Low Water Pot",
            position: { left: "60%", top: "60%" },
            delay: 1100,
          },
        ],
      },
      {
        id: 3,
        title: "💡 The Clever Idea",
        subtitle: "Thinking smart and taking action",
        story:
          "Then, she had an idea. She picked small stones and dropped them into the pot. One by one, the water came up.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cute-cartoon-bird-dropping-small-stones-into-clay-pot-water-level-rising-slowly-bird-has-clever-excited-expression-lightbulb-moment-under-tree?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-300/80 via-gray-200/80 to-blue-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-holding-small-stone-in-beak-dropping-it-into-pot-with-clever-smart-expression-lightbulb-above-head?width=200&height=200",
            name: "Clever Bird",
            position: { left: "55%", top: "40%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/small-gray-stones-falling-into-clay-pot-with-water-level-rising-displacement-effect-visible-stones-splashing-into-water?width=200&height=200",
            name: "Stones in Pot",
            position: { left: "65%", top: "55%" },
            delay: 1100,
          },
        ],
      },
      {
        id: 4,
        title: "💧 Success!",
        subtitle: "A happy ending with refreshing water",
        story: "The bird drank the water. She was happy and flew away.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cute-cartoon-bird-successfully-drinking-water-from-clay-pot-with-raised-water-level-bird-looking-very-happy-satisfied-ready-to-fly-away-under-tree?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-200/80 via-green-200/80 to-yellow-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-drinking-water-from-pot-with-very-happy-satisfied-expression-wings-slightly-spread-ready-to-fly?width=200&height=200",
            name: "Happy Bird",
            position: { left: "50%", top: "35%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/clay-pot-filled-with-stones-and-water-at-perfect-drinking-level-successful-solution-visible?width=200&height=200",
            name: "Success Pot",
            position: { left: "70%", top: "50%" },
            delay: 1100,
          },
        ],
      },
      {
        id: 5,
        title: "🌟 Moral",
        subtitle: "A lesson to remember forever",
        story:
          "Moral of the story: Think smart. Use your mind to solve problems.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cute-cartoon-bird-with-lightbulb-glowing-above-head-representing-wisdom-and-clever-thinking-moral-lesson-scene-bright-inspiring-background?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-200/80 via-blue-200/80 to-green-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-bird-blue-and-yellow-feathers-with-wise-thoughtful-expression-glowing-lightbulb-above-head-representing-intelligence-and-problem-solving?width=200&height=200",
            name: "Thinking Bird",
            position: { left: "55%", top: "40%" },
            delay: 700,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "70%", top: "20%" },
            delay: 1100,
          },
        ],
      },
    ],
  },
  {
    id: "elephant-ant",
    title: "The Elephant and the Ant",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-large-gray-elephant-and-tiny-black-ant-facing-each-other-in-green-forest-david-vs-goliath-scene-friendship-theme?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐘 The Proud Elephant",
        subtitle: "Big and mighty, but not kind",
        story:
          "An elephant was big and proud. He walked in the forest, kicking small animals.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/large-gray-cartoon-elephant-walking-proudly-through-dense-green-forest-with-small-animals-running-away-scared-arrogant-expression-sunlight-filtering-through-trees?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-400/80 via-brown-300/80 to-gray-500/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-large-gray-elephant-with-proud-arrogant-expression-trunk-raised-high-walking-through-forest-intimidating-posture?width=200&height=200",
            name: "Proud Elephant",
            position: { left: "45%", top: "35%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/small-forest-animals-rabbits-squirrels-running-away-scared-from-large-elephant-frightened-expressions?width=200&height=200",
            name: "Scared Animals",
            position: { left: "70%", top: "45%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 1,
        title: "🏠 Kicking the Ant Hill",
        subtitle: "A cruel act of bullying",
        story:
          'One day, he kicked an ant hill. A small ant said, "Don\'t do that!" The elephant laughed, "You are too small to stop me!"',
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-elephant-kicking-large-brown-ant-hill-with-foot-ants-scattering-everywhere-destroyed-ant-home-forest-ground-scene?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-brown-400/80 via-red-300/80 to-orange-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-elephant-laughing-mockingly-with-foot-raised-kicking-ant-hill-cruel-arrogant-expression-trunk-curled-up?width=200&height=200",
            name: "Laughing Elephant",
            position: { left: "40%", top: "30%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/tiny-brave-black-ant-standing-up-to-large-elephant-angry-determined-expression-despite-small-size-heroic-pose?width=200&height=200",
            name: "Brave Ant",
            position: { left: "60%", top: "50%" },
            delay: 900,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/destroyed-brown-ant-hill-kicked-apart-with-ants-scattered-around-damaged-home-debris-everywhere?width=200&height=200",
            name: "Destroyed Hill",
            position: { left: "70%", top: "60%" },
            delay: 1300,
          },
        ],
      },
      {
        id: 2,
        title: "🐜 Army of Ants",
        subtitle: "Small but mighty together",
        story:
          "The ants called their friends. They crawled into the elephant's ears and bit him! The elephant cried and ran.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/hundreds-of-tiny-black-ants-marching-together-toward-large-gray-elephant-army-formation-teamwork-unity-forest-scene?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-black/60 via-red-400/80 to-gray-600/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-gray-elephant-crying-and-running-away-with-tiny-ants-crawling-in-ears-painful-expression-trunk-swinging-wildly?width=200&height=200",
            name: "Crying Elephant",
            position: { left: "50%", top: "35%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/army-of-tiny-black-ants-marching-in-formation-determined-angry-expressions-working-together-as-team?width=200&height=200",
            name: "Ant Army",
            position: { left: "30%", top: "45%" },
            delay: 1100,
          },
          {
            emoji: "⚡",
            name: "Power",
            position: { left: "70%", top: "25%" },
            delay: 1500,
          },
        ],
      },
      {
        id: 3,
        title: "🙏 Sorry and Kind",
        subtitle: "Learning to be humble",
        story:
          "Moral of the story: Even small ones can be strong when they work together.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-elephant-bowing-apologetically-to-group-of-ants-humble-sorry-expression-peaceful-forest-scene-friendship-and-forgiveness?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-300/80 via-blue-200/80 to-yellow-300/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-gray-elephant-bowing-head-down-humbly-with-sorry-ashamed-expression-trunk-touching-ground-apologetic-pose?width=200&height=200",
            name: "Sorry Elephant",
            position: { left: "45%", top: "40%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/group-of-small-black-ants-looking-up-at-elephant-forgiving-understanding-expressions-peaceful-resolution?width=200&height=200",
            name: "Forgiving Ants",
            position: { left: "65%", top: "55%" },
            delay: 1000,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "75%", top: "20%" },
            delay: 1400,
          },
        ],
      },
    ],
  },
  {
    id: "tortoise-hare",
    title: "The Tortoise and the Hare",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-fast-brown-rabbit-and-slow-green-tortoise-at-race-starting-line-in-meadow-classic-fable-scene?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐰 The Fast Hare",
        subtitle: "Proud of his speed",
        story:
          'The hare ran fast. The tortoise walked slowly. The hare laughed, "You are too slow!" The tortoise said, "Let\'s race!"',
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-brown-rabbit-running-very-fast-with-motion-blur-lines-next-to-slow-green-tortoise-walking-peacefully-in-sunny-meadow?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-200/80 via-yellow-200/80 to-blue-300/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-brown-rabbit-with-long-ears-laughing-mockingly-running-very-fast-with-motion-lines-arrogant-expression?width=200&height=200",
            name: "Fast Hare",
            position: { left: "35%", top: "35%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-green-tortoise-with-shell-walking-very-slowly-but-determined-calm-patient-expression-steady-pace?width=200&height=200",
            name: "Slow Tortoise",
            position: { left: "65%", top: "45%" },
            delay: 900,
          },
          {
            emoji: "🏁",
            name: "Race Challenge",
            position: { left: "50%", top: "20%" },
            delay: 1300,
          },
        ],
      },
      {
        id: 1,
        title: "🏃 The Race Begins",
        subtitle: "Off to a fast start",
        story:
          "The race began. The hare ran fast, then stopped to sleep. The tortoise walked slowly but didn't stop.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-race-scene-with-brown-rabbit-sleeping-under-tree-while-green-tortoise-continues-walking-steadily-on-race-path?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-300/80 via-green-300/80 to-yellow-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-brown-rabbit-sleeping-peacefully-under-tree-with-closed-eyes-snoring-lying-on-side-overconfident-nap?width=200&height=200",
            name: "Sleeping Hare",
            position: { left: "30%", top: "40%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-green-tortoise-walking-steadily-forward-on-race-path-never-stopping-determined-focused-expression-consistent-pace?width=200&height=200",
            name: "Steady Tortoise",
            position: { left: "70%", top: "45%" },
            delay: 1000,
          },
          {
            emoji: "💤",
            name: "Sleep",
            position: { left: "25%", top: "25%" },
            delay: 1400,
          },
        ],
      },
      {
        id: 2,
        title: "🏆 Tortoise Wins!",
        subtitle: "Slow and steady triumph",
        story:
          "At last, the tortoise reached the end. The hare woke up and was too late!",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-green-tortoise-crossing-finish-line-first-while-brown-rabbit-runs-desperately-behind-too-late-victory-scene?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-gold-300/80 via-green-400/80 to-blue-300/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-green-tortoise-crossing-finish-line-with-happy-victorious-expression-winner-celebration-slow-but-successful?width=200&height=200",
            name: "Winner Tortoise",
            position: { left: "55%", top: "40%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-brown-rabbit-running-desperately-with-shocked-panicked-expression-realizing-he-lost-the-race-too-late?width=200&height=200",
            name: "Late Hare",
            position: { left: "30%", top: "35%" },
            delay: 1100,
          },
          {
            emoji: "🏆",
            name: "Victory",
            position: { left: "70%", top: "20%" },
            delay: 1500,
          },
        ],
      },
      {
        id: 3,
        title: "🌟 Moral Lesson",
        subtitle: "The power of persistence",
        story: "Moral of the story: Slow and steady wins the race.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-tortoise-and-rabbit-shaking-hands-friendship-lesson-learned-moral-scene-with-inspirational-background?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-200/80 via-green-200/80 to-blue-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-green-tortoise-with-wise-humble-expression-teaching-moral-lesson-about-persistence-and-determination?width=200&height=200",
            name: "Wise Tortoise",
            position: { left: "50%", top: "40%" },
            delay: 600,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "70%", top: "25%" },
            delay: 1000,
          },
        ],
      },
    ],
  },
  {
    id: "lion-mouse",
    title: "The Lion and the Mouse",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-large-golden-lion-and-tiny-gray-mouse-showing-friendship-between-big-and-small-jungle-background?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🦁 The Sleeping Lion",
        subtitle: "A peaceful nap interrupted",
        story:
          "One day, a lion was sleeping. A mouse ran over his paw. The lion woke up and caught it.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/large-golden-cartoon-lion-sleeping-peacefully-under-tree-in-jungle-with-tiny-gray-mouse-accidentally-running-over-lion-paw?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-300/80 via-brown-300/80 to-green-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-cartoon-golden-lion-with-mane-waking-up-surprised-catching-tiny-mouse-in-paw-just-awakened-expression?width=200&height=200",
            name: "Awakened Lion",
            position: { left: "45%", top: "35%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/tiny-gray-cartoon-mouse-caught-in-lion-paw-scared-frightened-expression-very-small-compared-to-lion?width=200&height=200",
            name: "Caught Mouse",
            position: { left: "55%", top: "45%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 1,
        title: "🙏 The Mouse's Plea",
        subtitle: "A promise of future help",
        story:
          '"Don\'t eat me!" said the mouse. "I may help you one day." The lion laughed, but let it go.',
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-lion-laughing-kindly-while-releasing-tiny-mouse-who-is-pleading-with-grateful-expression-act-of-mercy?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-orange-200/80 via-yellow-300/80 to-green-300/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-cartoon-lion-laughing-kindly-with-amused-but-merciful-expression-releasing-mouse-from-paw-generous-gesture?width=200&height=200",
            name: "Merciful Lion",
            position: { left: "40%", top: "35%" },
            delay: 500,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/tiny-cartoon-mouse-with-pleading-grateful-expression-promising-to-help-despite-small-size-determined-look?width=200&height=200",
            name: "Promising Mouse",
            position: { left: "65%", top: "50%" },
            delay: 900,
          },
          {
            emoji: "🤝",
            name: "Promise",
            position: { left: "30%", top: "20%" },
            delay: 1300,
          },
        ],
      },
      {
        id: 2,
        title: "🕸️ The Trapped Lion",
        subtitle: "The mighty one needs help",
        story:
          "Later, the lion was trapped in a net. The mouse came and cut the ropes. The lion was free!",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-lion-trapped-in-large-rope-net-while-tiny-mouse-gnaws-and-cuts-through-rope-rescue-scene-in-jungle?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-brown-400/80 via-gray-400/80 to-green-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-cartoon-lion-trapped-helplessly-in-thick-rope-net-looking-sad-and-desperate-unable-to-escape?width=200&height=200",
            name: "Trapped Lion",
            position: { left: "45%", top: "40%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/tiny-cartoon-mouse-gnawing-and-cutting-through-thick-rope-with-teeth-heroic-determined-expression-saving-lion?width=200&height=200",
            name: "Heroic Mouse",
            position: { left: "60%", top: "50%" },
            delay: 1000,
          },
          {
            emoji: "✂️",
            name: "Cutting",
            position: { left: "70%", top: "35%" },
            delay: 1400,
          },
        ],
      },
      {
        id: 3,
        title: "🤝 Friendship Wins",
        subtitle: "Size doesn't matter",
        story: "Moral of the story: A small friend can be a big help.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-lion-and-mouse-celebrating-friendship-together-both-happy-and-grateful-true-friendship-between-different-sizes?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-gold-200/80 via-green-300/80 to-blue-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/large-cartoon-lion-looking-grateful-and-happy-with-tiny-mouse-friend-sitting-on-his-head-true-friendship?width=200&height=200",
            name: "Grateful Lion",
            position: { left: "50%", top: "35%" },
            delay: 700,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "70%", top: "20%" },
            delay: 1100,
          },
        ],
      },
    ],
  },
  {
    id: "greedy-bear",
    title: "The Greedy Bear",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-brown-bear-looking-at-honey-jar-with-greedy-expression-forest-background-moral-story-theme?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🍯 Finding Honey",
        subtitle: "A sweet discovery",
        story:
          'A bear found a jar of honey. He licked it and said, "I want more!"',
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-brown-bear-discovering-large-honey-jar-in-forest-clearing-excited-happy-expression-golden-honey-visible?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-200/80 via-amber-300/80 to-brown-300/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-brown-bear-licking-honey-from-large-glass-jar-with-excited-greedy-expression-golden-honey-on-tongue?width=200&height=200",
            name: "Happy Bear",
            position: { left: "45%", top: "40%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/large-glass-honey-jar-filled-with-golden-honey-sitting-in-forest-clearing-delicious-looking-sweet-treasure?width=200&height=200",
            name: "Honey Jar",
            position: { left: "65%", top: "50%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 1,
        title: "✋ Paw Gets Stuck",
        subtitle: "Greed leads to trouble",
        story:
          "He reached deep into the jar. His paw got stuck. He pulled hard, but it hurt.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-brown-bear-with-paw-stuck-deep-inside-honey-jar-struggling-to-pull-out-painful-frustrated-expression?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-red-300/80 via-orange-300/80 to-brown-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-brown-bear-with-paw-completely-stuck-inside-honey-jar-pulling-desperately-with-painful-frustrated-expression?width=200&height=200",
            name: "Stuck Bear",
            position: { left: "50%", top: "35%" },
            delay: 700,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/honey-jar-with-bear-paw-stuck-inside-showing-the-problem-clearly-paw-too-big-to-come-out-while-holding-honey?width=200&height=200",
            name: "Stuck Paw",
            position: { left: "60%", top: "50%" },
            delay: 1100,
          },
        ],
      },
      {
        id: 2,
        title: "🐰 Wise Advice",
        subtitle: "A friend offers help",
        story:
          'He didn\'t want to let go of the honey. A rabbit said, "Let go first, then try again." He did—and got his paw out.',
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-brown-bear-finally-letting-go-of-honey-and-pulling-paw-out-of-jar-while-wise-rabbit-gives-advice?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-300/80 via-blue-200/80 to-yellow-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-brown-bear-successfully-pulling-paw-out-of-honey-jar-with-relieved-grateful-expression-learned-lesson?width=200&height=200",
            name: "Free Bear",
            position: { left: "45%", top: "40%" },
            delay: 600,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/wise-cartoon-rabbit-giving-helpful-advice-with-kind-understanding-expression-pointing-toward-solution?width=200&height=200",
            name: "Wise Rabbit",
            position: { left: "70%", top: "45%" },
            delay: 1000,
          },
          {
            emoji: "💡",
            name: "Wisdom",
            position: { left: "25%", top: "25%" },
            delay: 1400,
          },
        ],
      },
      {
        id: 3,
        title: "🌟 Think First",
        subtitle: "Learning from mistakes",
        story: "Moral of the story: Don't be greedy. Think first.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-bear-and-rabbit-sharing-honey-properly-both-happy-lesson-learned-about-not-being-greedy-friendship?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-yellow-200/80 via-green-200/80 to-blue-200/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cartoon-brown-bear-with-wise-thoughtful-expression-having-learned-lesson-about-greed-and-thinking-first?width=200&height=200",
            name: "Wise Bear",
            position: { left: "50%", top: "40%" },
            delay: 700,
          },
          {
            emoji: "🌟",
            name: "Moral",
            position: { left: "70%", top: "25%" },
            delay: 1100,
          },
        ],
      },
    ],
  },
  {
    id: "frog-in-the-well",
    title: "The Frog in the Well",
    coverImage:
      "https://image.pollinations.ai/prompt/cute-cartoon-style-small-green-frog-sitting-in-a-dark-old-stone?width=600&height=400",
    slides: [
      {
        id: 0,
        title: "🐸 The Frog in the Well",
        subtitle: "A Small Frog's World",
        story:
          "A small frog lived in a deep, dark well. He thought the well was the whole world. He had never seen anything beyond it.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/inside-view-of-old-deep-stone-well-dark-moist-stone-walls-light-shining-from-above-frog-at-bottom-photorealistic-style?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-900/80 via-gray-700/80 to-black/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-green-frog-with-big-eyes-sitting-on-wet-rock-inside-a-stone-well-curious-expression?width=200&height=200",
            name: "Frog",
            position: { left: "45%", top: "50%" },
            delay: 600,
          },
        ],
      },
      {
        id: 1,
        title: "🕊️ A Visitor",
        subtitle: "The Bird Brings News",
        story:
          "One day, a bird flew down and told the frog, 'There’s a big sky and a big world out there!' But the frog laughed and said, 'No! This well is everything!'",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-scene-small-green-frog-looking-up-at-white-bird-hovering-over-old-stone-well-light-shining-through-top-blue-sky-visible?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-sky-400/70 via-blue-500/70 to-cyan-600/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-white-bird-with-outstretched-wings-talking-to-green-frog-smiling-cheerful-sky-background?width=200&height=200",
            name: "Bird",
            position: { left: "60%", top: "30%" },
            delay: 800,
          },
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-green-frog-looking-up-smirking-disbelieving-expression-sitting-in-well?width=200&height=200",
            name: "Skeptical Frog",
            position: { left: "30%", top: "60%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 2,
        title: "🌧️ The Rain Comes",
        subtitle: "The Well Overflows",
        story:
          "Later, it rained heavily. The well filled up with water. Slowly, the frog floated up, out of the well for the first time.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-style-heavy-rain-filling-old-well-water-rising-light-from-sky-frog-floating-on-water-surprised-expression?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-blue-600/70 via-indigo-700/70 to-slate-800/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-frog-floating-on-water-inside-well-looking-up-excited-and-wet-expression-rainfall?width=200&height=200",
            name: "Floating Frog",
            position: { left: "50%", top: "45%" },
            delay: 700,
          },
          {
            emoji: "🌧️",
            name: "Rain",
            position: { left: "70%", top: "20%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 3,
        title: "🌳 A New World",
        subtitle: "Discovery Beyond the Well",
        story:
          "As the frog emerged, he saw trees, rivers, birds, and the big blue sky. It was all so new and beautiful. He finally understood what the bird meant.",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-frog-hopping-on-grass-looking-at-big-blue-sky-green-trees-river-running-sunny-day-colorful-happy-nature-scene?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-green-500/80 via-sky-500/80 to-yellow-400/80",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-green-frog-looking-amazed-standing-on-grass-with-wide-eyes-looking-at-trees-and-sky?width=200&height=200",
            name: "Amazed Frog",
            position: { left: "45%", top: "55%" },
            delay: 600,
          },
          {
            emoji: "🌳",
            name: "Nature",
            position: { left: "30%", top: "20%" },
            delay: 1000,
          },
        ],
      },
      {
        id: 4,
        title: "🌟 Moral",
        subtitle: "Think Beyond What You See",
        story:
          "The frog learned something very important that day. 🌍 Don’t think you know everything. The world is big and full of wonders!",
        backgroundImage:
          "https://image.pollinations.ai/prompt/cartoon-scene-frog-sitting-on-rock-smiling-at-sunset-wide-scenic-view-of-world-around-happy-and-wise-expression?width=1920&height=1080",
        backgroundClass:
          "bg-gradient-to-br from-orange-400/70 via-yellow-300/70 to-pink-400/70",
        characters: [
          {
            image:
              "https://image.pollinations.ai/prompt/cute-cartoon-frog-smiling-sitting-on-stone-with-sunset-in-background-looking-wise-and-happy?width=200&height=200",
            name: "Wise Frog",
            position: { left: "40%", top: "50%" },
            delay: 500,
          },
          {
            emoji: "🌍",
            name: "Big World",
            position: { left: "65%", top: "25%" },
            delay: 1000,
          },
          {
            emoji: "💡",
            name: "Lesson",
            position: { left: "25%", top: "30%" },
            delay: 1300,
          },
        ],
      },
    ],
  },
  {
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
  },
  {
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
          "There was a lazy rooster who never woke up early. He liked to sleep while others started their day.",
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
  },
  {
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
  },
  {
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
  },
];
