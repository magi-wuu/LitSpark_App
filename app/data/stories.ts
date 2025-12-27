import { Story } from '../types/story';

export const stories: Story[] = [
  {
    id: '1',
    title: 'The Morning Coffee',
    difficulty: 'Beginner',
    readingTime: 6,
    progress: 0,
    content: `Every morning, Maria walks to the small café near her apartment. The owner, Mr. Chen, knows her order by heart. "Good morning, Maria! The usual?" he asks with a warm smile.

Maria nods and sits by the window. She likes to watch people pass by while sipping her cappuccino. Today, she notices a little girl feeding pigeons in the square. The girl's laugh fills the air with joy, blending with the gentle hum of early morning conversations and the distant sound of a street musician playing a violin.

Mr. Chen brings her coffee with a small cookie. "On the house," he says. Maria thanks him and takes a sip. The coffee is perfect, as always. She feels grateful for these simple moments that make her day special. The aroma of freshly baked pastries and the rich scent of coffee create a comforting cocoon around her.

Outside, the city is waking up. Shopkeepers open their doors, buses arrive at stops, and the morning sun paints everything golden. Maria notices the man who always jogs past the café, waving at familiar faces, and the elderly woman who feeds the stray cats near the fountain. Each tiny interaction reminds her that life is full of small, meaningful moments.

As she finishes her cappuccino, Maria reflects on her plans for the day: a meeting with her team at work, a quick stop at the library to return a book, and maybe a walk through the park in the afternoon. She smiles at the thought of these simple, pleasant routines. Waving goodbye to Mr. Chen, she steps out into the beautiful day ahead, feeling ready to face whatever comes her way with a calm and happy heart.`,

    questions: [
      { id: 'q1', question: 'Where does Maria go every morning?', options: ['To a restaurant', 'To a café', 'To the park', 'To work'], correctAnswer: 1 },
      { id: 'q2', question: 'What does Mr. Chen give Maria for free?', options: ['A sandwich', 'A cookie', 'A newspaper', 'A flower'], correctAnswer: 1 },
      { id: 'q3', question: 'What is the little girl doing in the square?', options: ['Playing ball', 'Reading a book', 'Feeding pigeons', 'Drawing'], correctAnswer: 2 },
      { id: 'q4', question: 'What instrument does the street musician play?', options: ['Guitar', 'Violin', 'Piano', 'Flute'], correctAnswer: 1 },
      { id: 'q5', question: 'What does Maria plan to do after leaving the café?', options: ['Go jogging', 'Attend a meeting', 'Go shopping', 'Sleep'], correctAnswer: 1 },
      { id: 'q6', question: 'Who does Maria notice jogging past the café?', options: ['Mr. Chen', 'A man waving at faces', 'Her colleague', 'A delivery person'], correctAnswer: 1 },
      { id: 'q7', question: 'How does Maria feel while drinking her coffee?', options: ['Stressed', 'Grateful', 'Bored', 'Hungry'], correctAnswer: 1 },
      { id: 'q8', question: 'What color is the morning sun described as?', options: ['Red', 'Blue', 'Golden', 'Silver'], correctAnswer: 2 },
      { id: 'q9', question: 'Who does the elderly woman feed near the fountain?', options: ['Dogs', 'Birds', 'Cats', 'Squirrels'], correctAnswer: 2 },
      { id: 'q10', question: 'What does Maria reflect on before leaving?', options: ['Her future travel plans', 'Her work and daily routines', 'Her favorite movies', 'Her childhood memories'], correctAnswer: 1 }
    ]
  },

  {
    id: '2',
    title: 'The Lost Umbrella',
    difficulty: 'Beginner',
    readingTime: 6,
    progress: 0,
    content: `It was raining heavily when Tom left the library. He opened his blue umbrella and started walking home. The streets were wet and shiny, reflecting the colorful lights of the shops and the occasional neon sign flickering in the rain. Puddles splashed under the wheels of passing bicycles, and the sound of raindrops hitting the umbrella was a steady rhythm that kept him company.

Halfway home, Tom stopped at a bookstore. He closed his umbrella and went inside to look at the new books. The store was warm and cozy, filled with the smell of fresh paper, ink, and coffee from the small café in the corner. The friendly owner greeted him and mentioned a new mystery section that had just arrived. Tom wandered through the aisles, flipping through pages and reading intriguing first lines.

Tom spent almost an hour browsing through the shelves. He found an interesting mystery novel about a detective solving a crime in a small town and decided to buy it. As he paid, the rain stopped, and sunlight broke through the clouds, creating a beautiful rainbow that arched across the city sky. Children ran outside to splash in puddles while parents smiled and watched, capturing the moment with their phones.

Tom walked out of the store, excited to read his new book. Only when he got home did he realize—he had left his blue umbrella at the bookstore! He laughed at himself and decided to pick it up tomorrow. At least he had a good reason to visit the bookstore again. That evening, he made a cup of hot chocolate, curled up by the window, and imagined the adventures of the detective, feeling content and cozy as the day ended.`,

    questions: [
      { id: 'q1', question: 'What color is Tom\'s umbrella?', options: ['Red', 'Blue', 'Yellow', 'Green'], correctAnswer: 1 },
      { id: 'q2', question: 'What did Tom buy at the bookstore?', options: ['A coffee', 'A newspaper', 'A mystery novel', 'A magazine'], correctAnswer: 2 },
      { id: 'q3', question: 'What appeared in the sky when the rain stopped?', options: ['Stars', 'A rainbow', 'Birds', 'An airplane'], correctAnswer: 1 },
      { id: 'q4', question: 'Where did Tom stop on his way home?', options: ['Library', 'Bookstore', 'Café', 'School'], correctAnswer: 1 },
      { id: 'q5', question: 'What smells filled the bookstore?', options: ['Fresh paint', 'Fresh paper and coffee', 'Flowers', 'Bread'], correctAnswer: 1 },
      { id: 'q6', question: 'What is the detective novel about?', options: ['Cooking', 'Crime', 'Travel', 'History'], correctAnswer: 1 },
      { id: 'q7', question: 'How did Tom feel after realizing he forgot his umbrella?', options: ['Angry', 'Sad', 'Amused', 'Scared'], correctAnswer: 2 },
      { id: 'q8', question: 'What did children do after the rain?', options: ['Slept', 'Ran in puddles', 'Read books', 'Watched TV'], correctAnswer: 1 },
      { id: 'q9', question: 'What drink did Tom enjoy at home?', options: ['Coffee', 'Tea', 'Hot chocolate', 'Juice'], correctAnswer: 2 },
      { id: 'q10', question: 'Why was leaving the umbrella not too bad for Tom?', options: ['He hated it', 'He had a reason to return', 'He bought another', 'It broke'], correctAnswer: 1 }
    ]
  },

  {
    id: '3',
    title: 'The Garden Visitor',
    difficulty: 'Intermediate',
    readingTime: 7,
    progress: 0,
    content: `Elena had spent months nurturing her garden, carefully tending to each plant and flower. The roses were her pride and joy, blooming in vibrant shades of red, pink, and white. Every evening, she would water them, prune branches, and check for any signs of pests or disease. Bees buzzed happily around the flowers, and butterflies occasionally landed on the petals, adding life to her sanctuary.

One morning, Elena discovered something unusual. A small orange cat had made itself comfortable among the rose bushes. It looked thin and hungry, with matted fur and tired eyes. Elena's first instinct was to shoo it away—after all, cats could damage her precious plants. But something about the way it looked at her made her hesitate. There was a quiet intelligence and vulnerability in its eyes that Elena could not ignore.

Instead, she went inside and brought out a bowl of milk and some leftover fish. The cat approached cautiously, sniffed the food, and began to eat. Elena watched from a distance, noticing how the cat's tail started to relax and curl contentedly. Each day, the cat returned, and Elena started leaving small treats and toys to encourage its visits.

Days passed, and Elena found herself looking forward to these encounters. She named him Marmalade because of his orange coat and gentle demeanor. Gradually, she realized that her garden had become more than just a collection of plants—it had become a place of connection, comfort, and joy. The cat's presence reminded her that sometimes the most beautiful growth is not only in plants, but in bonds formed unexpectedly. Elena even started sketching Marmalade in her journal, documenting his antics and the ways he interacted with the flowers, capturing the gentle harmony of her garden and its newest resident.`,

    questions: [
      { id: 'q1', question: 'What was Elena\'s initial reaction to finding the cat?', options: ['She immediately adopted it', 'She wanted to chase it away', 'She called animal control', 'She ignored it'], correctAnswer: 1 },
      { id: 'q2', question: 'What did Elena name the cat?', options: ['Orange', 'Ginger', 'Marmalade', 'Sunset'], correctAnswer: 2 },
      { id: 'q3', question: 'What did Elena realize her garden had become?', options: ['A business opportunity', 'A sanctuary', 'Too much work', 'A tourist attraction'], correctAnswer: 1 },
      { id: 'q4', question: 'What did Elena feed the cat?', options: ['Milk and fish', 'Bread', 'Water', 'Cheese'], correctAnswer: 0 },
      { id: 'q5', question: 'How did the cat react to food?', options: ['Ignored it', 'Ate happily', 'Ran away', 'Scratched Elena'], correctAnswer: 1 },
      { id: 'q6', question: 'What did Elena do to encourage the cat?', options: ['Built a shelter', 'Left treats and toys', 'Called a vet', 'Closed the garden'], correctAnswer: 1 },
      { id: 'q7', question: 'What insects visited the garden?', options: ['Mosquitoes', 'Bees', 'Ants', 'Flies'], correctAnswer: 1 },
      { id: 'q8', question: 'Why did Elena start sketching Marmalade?', options: ['To sell the drawings', 'To document his antics', 'To make a gift', 'For school'], correctAnswer: 1 },
      { id: 'q9', question: 'What colors were the roses?', options: ['Red, pink, white', 'Yellow, orange', 'Blue, purple', 'Green, white'], correctAnswer: 0 },
      { id: 'q10', question: 'What lesson did Elena learn from Marmalade?', options: ['Unexpected connections are valuable', 'Plants are easy to care for', 'Cats are destructive', 'Gardens need no care'], correctAnswer: 0 }
    ]
  },

  {
    id: '4',
    title: 'The Digital Detox',
    difficulty: 'Advanced',
    readingTime: 8,
    progress: 0,
    content: `Marcus had been a software engineer for fifteen years, spending most of his waking hours staring at screens. His phone was the first thing he reached for in the morning and the last thing he checked at night. Email notifications, social media updates, and news alerts created a constant buzz of digital noise that he had learned to tune out—or so he thought.

It wasn't until his daughter asked him to help build a treehouse that Marcus realized how disconnected he had become. As they worked together, measuring wood and hammering nails, he kept instinctively reaching for his pocket, checking for phantom vibrations. His daughter noticed. "Dad, you're not really here," she said quietly, and those words cut deeper than any criticism from his boss ever had.

That weekend, Marcus made a decision. He would try a week without his smartphone. His colleagues thought he was crazy. "What if there's an emergency?" they asked. Marcus simply smiled and said he'd be reachable via his old landline—a device his daughter had only seen in museums.

The first two days were excruciating. Marcus felt phantom limb syndrome for his phone. He caught himself reaching for it dozens of times, only to remember it was locked in a drawer. But by the third day, something shifted. He noticed things: the way morning light filtered through his kitchen window, the rhythm of rain on the roof, the actual taste of his coffee instead of just gulping it down while scrolling.

He started journaling each evening, reflecting on how he spent his time and how he felt about real-world interactions. He noticed conversations with his family were more meaningful, without interruptions from notifications. Even mundane activities, like walking to the mailbox or watering the plants, became moments of mindfulness.

By the end of the week, Marcus had finished the treehouse, read two novels, and had real conversations with his family—the kind where everyone's eyes stayed on each other rather than drifting to screens. When he finally unlocked the drawer and picked up his phone, it felt heavy in his hand, like a burden he wasn't eager to carry again. He realized that in disconnecting, he had finally found a way to truly connect, appreciating both the digital and the real world in balance.`,

    questions: [
      { id: 'q1', question: 'What profession does Marcus have?', options: ['Teacher', 'Software engineer', 'Carpenter', 'Doctor'], correctAnswer: 1 },
      { id: 'q2', question: 'What made Marcus realize he was disconnected?', options: ['His boss complained', 'He missed an important meeting', 'His daughter\'s comment', 'He read an article'], correctAnswer: 2 },
      { id: 'q3', question: 'How long did Marcus decide to go without his smartphone?', options: ['Three days', 'A week', 'A month', 'Two weeks'], correctAnswer: 1 },
      { id: 'q4', question: 'What project did Marcus complete during his digital detox?', options: ['A garden', 'A treehouse', 'A website', 'A book'], correctAnswer: 1 },
      { id: 'q5', question: 'What symptom did Marcus feel when he first gave up his phone?', options: ['Headache', 'Phantom vibrations', 'Dizziness', 'Sleepiness'], correctAnswer: 1 },
      { id: 'q6', question: 'What activity became more enjoyable for Marcus?', options: ['Scrolling social media', 'Mindful walking', 'Playing video games', 'Watching TV'], correctAnswer: 1 },
      { id: 'q7', question: 'How many novels did Marcus read during the detox?', options: ['One', 'Two', 'Three', 'None'], correctAnswer: 1 },
      { id: 'q8', question: 'What did Marcus journal about?', options: ['His work tasks', 'Time and interactions', 'Movies', 'Food'], correctAnswer: 1 },
      { id: 'q9', question: 'What did Marcus notice about his family conversations?', options: ['They were shorter', 'They were deeper', 'They were more interrupted', 'They were boring'], correctAnswer: 1 },
      { id: 'q10', question: 'What lesson did Marcus learn from the detox?', options: ['Disconnecting helps appreciate real life', 'Technology is useless', 'Phones are harmful', 'Work is unnecessary'], correctAnswer: 0 }
    ]
  }
];
