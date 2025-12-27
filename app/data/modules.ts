export interface Question {
  id: string;
  type: 'multiple-choice' | 'sentence-building' | 'fix-sentence';
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  estimatedTime: string;
  questions: Question[];
}

export const modules: Module[] = [
  {
    id: 'small-talk',
    title: 'Small Talk',
    description: 'Learn to engage in casual, friendly conversations in social and professional settings.',
    icon: '💬',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'st1',
        type: 'multiple-choice',
        scenario: "You're waiting for a meeting to start and a colleague sits next to you.",
        question: "What's a good way to start a casual conversation?",
        options: [
          "Why are you here?",
          "Nice weather we're having, isn't it?",
          "I don't want to talk."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is a classic, friendly small talk opener. Option 1 sounds interrogative and rude. Option 3 shuts down conversation."
      },
      {
        id: 'st2',
        type: 'fix-sentence',
        scenario: "Someone mentions they went on vacation.",
        question: "Which response keeps the conversation flowing?",
        options: [
          "Okay.",
          "Oh, that sounds fun! Where did you go?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 shows genuine interest and asks a follow-up question. Option 1 is too short and kills the conversation."
      },
      {
        id: 'st3',
        type: 'multiple-choice',
        scenario: "At a networking event, someone asks 'What do you do?'",
        question: "What's the best response?",
        options: [
          "I work.",
          "Why do you want to know?",
          "I work in marketing. I help companies tell their stories. What about you?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is informative, adds context, and reciprocates. Option 1 is too vague. Option 2 sounds defensive."
      },
      {
        id: 'st4',
        type: 'sentence-building',
        scenario: "You want to ask someone about their weekend.",
        question: "Arrange these words to make a natural question:",
        options: ["any", "for", "plans", "you", "Do", "have", "weekend?", "the"],
        correctAnswer: "Do you have any plans for the weekend?",
        explanation: "This is a common, friendly way to show interest in someone's life outside of work."
      },
      {
        id: 'st5',
        type: 'multiple-choice',
        scenario: "A coworker mentions they're tired.",
        question: "What's an empathetic response?",
        options: [
          "Everyone is tired.",
          "That's not my problem.",
          "Oh no, long night? Hope you can rest soon!"
        ],
        correctAnswer: 2,
        explanation: "Option 3 shows empathy and care. Option 1 dismisses their feeling. Option 2 is rude and uncaring."
      },
      {
        id: 'st6',
        type: 'fix-sentence',
        scenario: "Someone compliments your outfit.",
        question: "Which response is more natural?",
        options: [
          "Yes, I know it looks good.",
          "Thanks! I got it on sale actually."
        ],
        correctAnswer: 1,
        explanation: "Option 2 accepts gracefully and adds a personal touch. Option 1 sounds arrogant."
      },
      {
        id: 'st7',
        type: 'multiple-choice',
        scenario: "You're in an elevator with your boss.",
        question: "What's appropriate small talk?",
        options: [
          "Are you going to fire anyone today?",
          "...",
          "How was your morning?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is light and appropriate. Option 1 is inappropriate. Option 2 (silence) can be awkward."
      },
      {
        id: 'st8',
        type: 'multiple-choice',
        scenario: "Someone asks 'How are you?' in passing.",
        question: "What's the most natural response?",
        options: [
          "I am doing very well, thank you for asking.",
          "Fine.",
          "Good, thanks! You?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is casual and reciprocates naturally. Option 1 is overly formal. Option 2 is too abrupt."
      },
      {
        id: 'st9',
        type: 'sentence-building',
        scenario: "You want to transition away from a conversation politely.",
        question: "Arrange these words to make a polite exit:",
        options: ["nice", "was", "It", "you!", "with", "chatting"],
        correctAnswer: "It was nice chatting with you!",
        explanation: "This phrase gracefully signals the end of a conversation while remaining friendly."
      },
      {
        id: 'st10',
        type: 'multiple-choice',
        scenario: "Someone mentions a hobby you don't know much about.",
        question: "What's a good way to respond?",
        options: [
          "I don't care about that.",
          "That sounds interesting! How did you get into that?",
          "That's weird."
        ],
        correctAnswer: 1,
        explanation: "Option 2 shows curiosity and keeps the conversation going. Options 1 and 3 are dismissive and rude."
      }
    ]
  },
  {
    id: 'asking-help',
    title: 'Asking for Help',
    description: 'Master polite ways to request assistance in various situations.',
    icon: '🙋',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'ah1',
        type: 'multiple-choice',
        scenario: "You're lost and need directions.",
        question: "What's the politest way to ask a stranger?",
        options: [
          "Where is the train station?",
          "Tell me where the train station is.",
          "Excuse me, could you help me find the train station?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 uses 'excuse me' and 'could you help,' which is polite. Option 1 is too direct. Option 2 sounds like a demand."
      },
      {
        id: 'ah2',
        type: 'fix-sentence',
        scenario: "You need to borrow a pen from a classmate.",
        question: "Which is more polite?",
        options: [
          "Give me your pen.",
          "Do you mind if I borrow a pen?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and asks for permission. Option 1 is a command and sounds rude."
      },
      {
        id: 'ah3',
        type: 'multiple-choice',
        scenario: "You need help understanding a work task.",
        question: "What's the best way to ask your manager?",
        options: [
          "I don't understand.",
          "Could you clarify what you'd like me to do here?",
          "This is confusing."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is professional and specific. Options 1 and 3 express frustration without asking for help constructively."
      },
      {
        id: 'ah4',
        type: 'sentence-building',
        scenario: "You want someone to repeat what they said.",
        question: "Arrange these words to make a polite request:",
        options: ["could", "Sorry,", "please?", "you", "that,", "repeat"],
        correctAnswer: "Sorry, could you repeat that, please?",
        explanation: "Starting with 'sorry' and using 'could you' makes this request polite and natural."
      },
      {
        id: 'ah5',
        type: 'multiple-choice',
        scenario: "You're at a store and can't find an item.",
        question: "How would you ask for help?",
        options: [
          "Where is coffee?",
          "Excuse me, could you help me find the coffee aisle?",
          "I can't find coffee."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and clear. Option 1 is too abrupt. Option 3 is a statement, not a request."
      },
      {
        id: 'ah6',
        type: 'fix-sentence',
        scenario: "You need someone to explain something again.",
        question: "Which sounds more natural?",
        options: [
          "I don't understand you. Explain again.",
          "I'm not quite following. Could you explain that differently?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is humble and polite. Option 1 sounds accusatory and demanding."
      },
      {
        id: 'ah7',
        type: 'multiple-choice',
        scenario: "You need to ask a coworker to cover your shift.",
        question: "What's the most polite approach?",
        options: [
          "Cover my shift Friday.",
          "You have to work for me Friday.",
          "Hey, would you be able to cover my shift on Friday? I'd really appreciate it."
        ],
        correctAnswer: 2,
        explanation: "Option 3 asks politely and expresses gratitude. Options 1 and 2 sound like demands."
      },
      {
        id: 'ah8',
        type: 'multiple-choice',
        scenario: "You're struggling with technology and need help.",
        question: "How would you ask IT for assistance?",
        options: [
          "My computer is broken. Fix it.",
          "Hi, I'm having trouble with my computer. Could you take a look when you have a moment?",
          "This thing doesn't work."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and respectful of their time. Options 1 and 3 are demanding."
      },
      {
        id: 'ah9',
        type: 'sentence-building',
        scenario: "You want to ask for more information.",
        question: "Arrange these words to make a polite question:",
        options: ["you", "details?", "Would", "more", "giving", "mind", "me"],
        correctAnswer: "Would you mind giving me more details?",
        explanation: "'Would you mind' is a very polite way to make a request in English."
      },
      {
        id: 'ah10',
        type: 'multiple-choice',
        scenario: "Someone helped you and you want to thank them.",
        question: "What's the most appreciative response?",
        options: [
          "Thanks.",
          "Thank you so much! I really appreciate your help.",
          "Okay."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is warm and shows genuine appreciation. Option 1 is minimal. Option 3 doesn't express thanks at all."
      }
    ]
  },
  {
    id: 'work-school',
    title: 'Work / School English',
    description: 'Navigate professional and academic conversations with confidence.',
    icon: '💼',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'ws1',
        type: 'multiple-choice',
        scenario: "You need to email your professor about a deadline extension.",
        question: "What's the most professional opening?",
        options: [
          "Hey Prof!",
          "I need an extension.",
          "Dear Professor Smith, I hope this email finds you well."
        ],
        correctAnswer: 2,
        explanation: "Option 3 is formal and respectful. Option 1 is too casual. Option 2 lacks a greeting entirely."
      },
      {
        id: 'ws2',
        type: 'fix-sentence',
        scenario: "You're late to a meeting.",
        question: "Which apology is more appropriate?",
        options: [
          "Sorry I'm late. Traffic was bad.",
          "I apologize for being late. Thank you for your patience."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is professional and takes responsibility. Option 1 makes an excuse."
      },
      {
        id: 'ws3',
        type: 'multiple-choice',
        scenario: "Your manager asks for your opinion on a project.",
        question: "What's a professional way to share your thoughts?",
        options: [
          "It's fine.",
          "I think we could improve it by adding more details to section two. What do you think?",
          "I don't like it."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is constructive and invites discussion. Option 1 is too vague. Option 3 is negative without solutions."
      },
      {
        id: 'ws4',
        type: 'sentence-building',
        scenario: "You want to schedule a meeting.",
        question: "Arrange these words to make a professional request:",
        options: ["be", "available", "to", "you", "Would", "meet", "tomorrow?"],
        correctAnswer: "Would you be available to meet tomorrow?",
        explanation: "'Would you be available' is a polite, professional way to propose a meeting time."
      },
      {
        id: 'ws5',
        type: 'multiple-choice',
        scenario: "You disagree with a colleague's idea in a meeting.",
        question: "What's the most diplomatic response?",
        options: [
          "That's wrong.",
          "No, I don't agree.",
          "That's an interesting point. I see it a bit differently though—what if we considered..."
        ],
        correctAnswer: 2,
        explanation: "Option 3 acknowledges their view and offers an alternative constructively. Options 1 and 2 are too blunt."
      },
      {
        id: 'ws6',
        type: 'fix-sentence',
        scenario: "You're ending a professional email.",
        question: "Which closing is more appropriate?",
        options: [
          "Bye!",
          "Best regards, [Your Name]"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is professional and appropriate for work emails. Option 1 is too casual."
      },
      {
        id: 'ws7',
        type: 'multiple-choice',
        scenario: "You need to decline a meeting invitation.",
        question: "What's the most professional response?",
        options: [
          "I can't come.",
          "Unfortunately, I have a conflict at that time. Could we reschedule?",
          "No."
        ],
        correctAnswer: 1,
        explanation: "Option 2 explains and offers an alternative. Options 1 and 3 are too abrupt for professional settings."
      },
      {
        id: 'ws8',
        type: 'multiple-choice',
        scenario: "You didn't understand your assignment instructions.",
        question: "How would you ask your teacher for clarification?",
        options: [
          "I don't get it.",
          "I want to make sure I understand correctly. Are we supposed to submit by Friday?",
          "What do you want?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is respectful and specific. Options 1 and 3 sound frustrated or rude."
      },
      {
        id: 'ws9',
        type: 'sentence-building',
        scenario: "You want to follow up on a previous email.",
        question: "Arrange these words to make a polite follow-up:",
        options: ["up", "I", "previous", "my", "wanted", "to", "follow", "email.", "on"],
        correctAnswer: "I wanted to follow up on my previous email.",
        explanation: "This is a standard, professional way to remind someone about an earlier message."
      },
      {
        id: 'ws10',
        type: 'multiple-choice',
        scenario: "You're presenting and need to buy time to think.",
        question: "What's a natural filler phrase?",
        options: [
          "I don't know.",
          "Um... uh...",
          "That's a great question. Let me think about that for a moment."
        ],
        correctAnswer: 2,
        explanation: "Option 3 is professional and buys time gracefully. Option 1 sounds unprepared. Option 2 is not articulate."
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping & Services',
    description: 'Communicate confidently in stores, banks, and service situations.',
    icon: '🛒',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'sh1',
        type: 'multiple-choice',
        scenario: "You want to try on clothes at a store.",
        question: "How would you ask the staff?",
        options: [
          "Where do I try this?",
          "Excuse me, could I try this on? Where are the fitting rooms?",
          "I want to try this."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and clear. Option 1 is too abrupt. Option 3 sounds like a statement, not a request."
      },
      {
        id: 'sh2',
        type: 'fix-sentence',
        scenario: "You want to ask about a return policy.",
        question: "Which is more natural?",
        options: [
          "Can I return? What are the rules?",
          "What's your return policy?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is concise and natural. Option 1 is choppy and awkward."
      },
      {
        id: 'sh3',
        type: 'multiple-choice',
        scenario: "A salesperson asks if you need help.",
        question: "What would you say if you're just browsing?",
        options: [
          "Leave me alone.",
          "No.",
          "Thanks, I'm just looking for now. I'll let you know if I need anything!"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and leaves the door open for help. Options 1 and 2 are rude."
      },
      {
        id: 'sh4',
        type: 'sentence-building',
        scenario: "You want to ask if something comes in a different size.",
        question: "Arrange these words to make a polite question:",
        options: ["this", "in", "medium?", "a", "have", "Do", "you"],
        correctAnswer: "Do you have this in a medium?",
        explanation: "This is a standard, polite way to ask about sizes in stores."
      },
      {
        id: 'sh5',
        type: 'multiple-choice',
        scenario: "You're at a bank and need to open an account.",
        question: "What's the best way to start?",
        options: [
          "I want an account.",
          "Give me the forms for an account.",
          "Hi, I'd like to open a new account. Could you help me with that?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and asks for assistance. Options 1 and 2 sound demanding."
      },
      {
        id: 'sh6',
        type: 'fix-sentence',
        scenario: "You want to ask about a product's price.",
        question: "Which sounds more natural?",
        options: [
          "What is the cost of this item?",
          "How much is this?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is natural everyday English. Option 1 is technically correct but overly formal for most stores."
      },
      {
        id: 'sh7',
        type: 'multiple-choice',
        scenario: "There's a problem with your receipt.",
        question: "How would you politely bring it up?",
        options: [
          "You made a mistake.",
          "Excuse me, I think there might be an error on my receipt. Could you check it?",
          "This is wrong."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and non-accusatory. Options 1 and 3 sound confrontational."
      },
      {
        id: 'sh8',
        type: 'multiple-choice',
        scenario: "You want to use a credit card but aren't sure if they accept it.",
        question: "How would you ask?",
        options: [
          "Credit card okay?",
          "Do you accept credit cards?",
          "I'm paying with credit card."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is a clear, complete question. Option 1 is too informal. Option 3 assumes without asking."
      },
      {
        id: 'sh9',
        type: 'sentence-building',
        scenario: "You want to ask where something is located in a store.",
        question: "Arrange these words to make a polite question:",
        options: ["where", "me", "tell", "you", "Could", "dairy", "section", "is?", "the"],
        correctAnswer: "Could you tell me where the dairy section is?",
        explanation: "'Could you tell me' is a polite way to ask for directions in a store."
      },
      {
        id: 'sh10',
        type: 'multiple-choice',
        scenario: "You're satisfied with the service and want to thank the staff.",
        question: "What's a warm way to express thanks?",
        options: [
          "Thanks.",
          "Bye.",
          "Thank you so much for your help today!"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is warm and specific. Option 1 is minimal. Option 2 doesn't express gratitude at all."
      }
    ]
  },
  {
    id: 'greetings',
    title: 'Greetings Practice',
    description: 'Master natural greetings and polite conversation starters in everyday situations.',
    icon: '👋',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'g1',
        type: 'multiple-choice',
        scenario: "You arrive at your friend's house for dinner. Their mother opens the door.",
        question: "What would you say?",
        options: [
          "Good evening. Where is your son?",
          "Hi! Thanks for inviting me.",
          "Hello. I am here now."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is warm and polite. It acknowledges the invitation and shows gratitude. Option 3 is too formal and abrupt. Option 1 skips the greeting entirely."
      },
      {
        id: 'g2',
        type: 'fix-sentence',
        scenario: "Your coworker asks how your weekend was.",
        question: "Which response sounds more natural?",
        options: [
          "My weekend was very good. And you?",
          "It was good, thanks! How was yours?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 uses contractions and reciprocates naturally. Option 1 is grammatically correct but sounds stiff in casual conversation."
      },
      {
        id: 'g3',
        type: 'sentence-building',
        scenario: "You're introducing yourself at a networking event.",
        question: "Arrange these words to make a natural introduction:",
        options: ["Nice", "to", "Hi,", "you!", "Sarah.", "meet", "I'm"],
        correctAnswer: "Hi, I'm Sarah. Nice to meet you!",
        explanation: "Start with a greeting, state your name, then express pleasure. This order feels natural and confident."
      },
      {
        id: 'g4',
        type: 'multiple-choice',
        scenario: "Someone says: 'How have you been?'",
        question: "What's the best reply?",
        options: [
          "I am fine.",
          "I've been great, thanks! How about you?",
          "Good. You?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is enthusiastic and reciprocates fully. Option 1 is too short and formal. Option 3 is casual but lacks warmth."
      },
      {
        id: 'g5',
        type: 'multiple-choice',
        scenario: "You need to leave a party early.",
        question: "Which is the most polite way to say goodbye?",
        options: [
          "I have to go now. Bye.",
          "I'm leaving. See you.",
          "Thanks so much for having me! I need to head out, but this was lovely."
        ],
        correctAnswer: 2,
        explanation: "Option 3 expresses gratitude and gives a reason without oversharing. It's warm and considerate."
      },
      {
        id: 'g6',
        type: 'multiple-choice',
        scenario: "You run into an old friend on the street.",
        question: "Which greeting is correct?",
        options: [
          "Long time not see! How are you?",
          "Long time didn't see! How are you?",
          "Long time no see! How are you?"
        ],
        correctAnswer: 2,
        explanation: "'Long time no see' is an idiomatic expression. Options 1 and 2 are direct translations that don't work in English."
      },
      {
        id: 'g7',
        type: 'multiple-choice',
        scenario: "You're answering the phone at work.",
        question: "What's the most professional greeting?",
        options: [
          "Hello?",
          "Yeah, who is this?",
          "Good morning, this is Alex. How can I help you?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is clear, professional, and helpful. Option 1 is too casual for work. Option 2 is rude."
      },
      {
        id: 'g8',
        type: 'fix-sentence',
        scenario: "Someone compliments your presentation.",
        question: "Which response is more natural?",
        options: [
          "Thank you very much for your kind words.",
          "Thank you! I'm glad it was helpful."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is warm and humble. Option 1 is overly formal and sounds scripted in casual settings."
      },
      {
        id: 'g9',
        type: 'multiple-choice',
        scenario: "Your neighbor says: 'Have a great day!'",
        question: "What's the best response?",
        options: [
          "Thank you. Same to you.",
          "Okay.",
          "You too!"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is friendly and natural. Option 1 is correct but formal. Option 2 sounds dismissive."
      },
      {
        id: 'g10',
        type: 'sentence-building',
        scenario: "You're leaving a voicemail for a client.",
        question: "Arrange these words to make a polite closing:",
        options: ["from", "you.", "forward", "to", "hearing", "Looking", "Thanks!"],
        correctAnswer: "Thanks! Looking forward to hearing from you.",
        explanation: "Start with gratitude, then express anticipation. This order feels professional and warm."
      }
    ]
  },
  {
    id: 'dining',
    title: 'Food & Dining Practice',
    description: 'Learn polite phrases and natural responses for restaurants and dining situations.',
    icon: '🍽️',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'd1',
        type: 'multiple-choice',
        scenario: "The waiter asks if you're ready to order.",
        question: "What would you say if you need more time?",
        options: [
          "Not yet. Come back later.",
          "No, I'm not ready.",
          "Could we have a few more minutes, please?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and clear. Option 1 is too direct. Option 2 is abrupt and lacks courtesy."
      },
      {
        id: 'd2',
        type: 'fix-sentence',
        scenario: "You want to ask for the check.",
        question: "Which is more polite?",
        options: [
          "Give me the check.",
          "Can I have the check, please?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 uses 'can I' and 'please,' making it a polite request. Option 1 sounds like a command."
      },
      {
        id: 'd3',
        type: 'multiple-choice',
        scenario: "The waiter says: 'How is everything?'",
        question: "What's the best response?",
        options: [
          "Good.",
          "It's delicious, thank you!",
          "The food is okay."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is enthusiastic and appreciative. Option 1 is too brief. Option 3 sounds lukewarm and might concern the waiter."
      },
      {
        id: 'd4',
        type: 'multiple-choice',
        scenario: "You want to order a coffee.",
        question: "Which is correct?",
        options: [
          "Give me a coffee.",
          "I want a coffee.",
          "I'd like a coffee, please."
        ],
        correctAnswer: 2,
        explanation: "'I'd like' is polite and common in service contexts. 'I want' is too direct. 'Give me' is rude."
      },
      {
        id: 'd5',
        type: 'sentence-building',
        scenario: "You're asking for a menu item.",
        question: "Arrange these words to make a polite request:",
        options: ["pasta,", "please?", "I", "Could", "the", "get"],
        correctAnswer: "Could I get the pasta, please?",
        explanation: "'Could I get' is a polite, natural way to order. Always end with 'please' in service contexts."
      },
      {
        id: 'd6',
        type: 'multiple-choice',
        scenario: "Your friend offers to split the bill.",
        question: "What would you say if you agree?",
        options: [
          "Okay, we split.",
          "Sure, that works for me!",
          "Yes, let's divide the money."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is casual and agreeable. Option 1 is grammatically awkward. Option 3 is overly formal and unnatural."
      },
      {
        id: 'd7',
        type: 'fix-sentence',
        scenario: "You want to ask about ingredients due to an allergy.",
        question: "Which is more natural?",
        options: [
          "Is there nuts in this dish?",
          "Does this have nuts in it?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 uses correct grammar ('does this have'). Option 1 has a subject-verb agreement error ('is there nuts')."
      },
      {
        id: 'd8',
        type: 'multiple-choice',
        scenario: "The waiter says: 'Enjoy your meal!'",
        question: "What's the best response?",
        options: [
          "You too!",
          "Okay.",
          "Thank you!"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and appropriate. Option 1 is a common mistake (the waiter isn't eating!). Option 2 sounds indifferent."
      },
      {
        id: 'd9',
        type: 'multiple-choice',
        scenario: "You want to ask for a refill of water.",
        question: "Which is the most polite way to ask?",
        options: [
          "More water.",
          "I need water.",
          "Could I get some more water, please?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and clear. Option 1 is too abrupt. Option 2 sounds demanding."
      },
      {
        id: 'd10',
        type: 'sentence-building',
        scenario: "You're making a reservation over the phone.",
        question: "Arrange these words to make a polite request:",
        options: ["make", "please.", "I'd", "like", "reservation", "two,", "a", "for", "to"],
        correctAnswer: "I'd like to make a reservation for two, please.",
        explanation: "This structure is standard for reservations. 'I'd like to' is polite, and ending with 'please' is courteous."
      }
    ]
  },
  {
    id: 'directions',
    title: 'Directions & Transportation',
    description: 'Navigate real-world transportation situations with confidence.',
    icon: '🚌',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'dir1',
        type: 'multiple-choice',
        scenario: "You're at a bus stop and unsure if this bus goes downtown.",
        question: "What's the best way to ask?",
        options: [
          "Where does this bus go?",
          "Downtown?",
          "Excuse me, does this bus go downtown?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and specific. Option 2 is too abrupt. Option 1 is a question but lacks politeness."
      },
      {
        id: 'dir2',
        type: 'fix-sentence',
        scenario: "Someone gives you directions and you didn't catch them.",
        question: "Which is more polite?",
        options: [
          "What? Say that again.",
          "Sorry, could you repeat that? I want to make sure I understood."
        ],
        correctAnswer: 1,
        explanation: "Option 2 apologizes and explains why you need repetition. Option 1 sounds demanding."
      },
      {
        id: 'dir3',
        type: 'multiple-choice',
        scenario: "You need to ask a stranger for directions to the train station.",
        question: "What's the most polite approach?",
        options: [
          "Where is the train station?",
          "I need to go to the train station.",
          "Excuse me, I'm a bit lost. Could you tell me how to get to the train station?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite, explains the situation, and asks for help. Options 1 and 2 are too direct."
      },
      {
        id: 'dir4',
        type: 'sentence-building',
        scenario: "You want to confirm you're on the right platform.",
        question: "Arrange these words to make a polite question:",
        options: ["for", "Is", "platform", "train?", "right", "this", "downtown", "the", "the"],
        correctAnswer: "Is this the right platform for the downtown train?",
        explanation: "This is a clear, polite way to confirm directions in a transit setting."
      },
      {
        id: 'dir5',
        type: 'multiple-choice',
        scenario: "Your Uber driver asks for confirmation of your destination.",
        question: "What's a natural response?",
        options: [
          "Yes.",
          "Yes, that's right! 123 Main Street.",
          "I already put it in the app."
        ],
        correctAnswer: 1,
        explanation: "Option 2 confirms and repeats the address for clarity. Option 1 is too brief. Option 3 sounds annoyed."
      },
      {
        id: 'dir6',
        type: 'fix-sentence',
        scenario: "You need to ask the bus driver where to get off.",
        question: "Which sounds more natural?",
        options: [
          "Tell me when Central Park.",
          "Could you let me know when we reach Central Park?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is a complete, polite request. Option 1 is incomplete and sounds demanding."
      },
      {
        id: 'dir7',
        type: 'multiple-choice',
        scenario: "Someone gives you directions: 'Go straight, then turn left at the light.'",
        question: "What's a good way to confirm you understood?",
        options: [
          "Okay.",
          "Got it—straight ahead, then left at the light. Thank you!",
          "Left at the light?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 repeats the key points to confirm understanding. Option 1 is too brief. Option 3 only confirms part of it."
      },
      {
        id: 'dir8',
        type: 'multiple-choice',
        scenario: "You're in a taxi and realize the driver is going the wrong way.",
        question: "What's the most polite way to address this?",
        options: [
          "This isn't right. Stop.",
          "Excuse me, I think we might have taken a wrong turn. The address is on Oak Street.",
          "You're going the wrong way!"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is diplomatic and provides the correct information. Options 1 and 3 sound accusatory."
      },
      {
        id: 'dir9',
        type: 'sentence-building',
        scenario: "You want to ask how long the journey will take.",
        question: "Arrange these words to make a polite question:",
        options: ["does", "it", "How", "long", "to", "there?", "get", "take"],
        correctAnswer: "How long does it take to get there?",
        explanation: "This is a standard, natural way to ask about travel time."
      },
      {
        id: 'dir10',
        type: 'multiple-choice',
        scenario: "You need to exit the subway but it's crowded.",
        question: "What would you say to pass through?",
        options: [
          "Move!",
          "Excuse me, coming through! Thank you.",
          "Let me out."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and acknowledges others. Options 1 and 3 are rude."
      }
    ]
  },
  {
    id: 'emotions',
    title: 'Emotions & Opinions',
    description: 'Express your feelings and opinions naturally and politely.',
    icon: '💭',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'emo1',
        type: 'multiple-choice',
        scenario: "Someone shares an idea you disagree with.",
        question: "What's the most diplomatic response?",
        options: [
          "I don't agree with that.",
          "That's wrong.",
          "I see your point, but I have a slightly different perspective."
        ],
        correctAnswer: 2,
        explanation: "Option 3 acknowledges their view while expressing disagreement politely. Options 1 and 2 are too blunt."
      },
      {
        id: 'emo2',
        type: 'fix-sentence',
        scenario: "Someone asks if you liked a movie you didn't enjoy.",
        question: "Which response is more polite?",
        options: [
          "I didn't like it. It was boring.",
          "It wasn't really my cup of tea, but I can see why others might like it."
        ],
        correctAnswer: 1,
        explanation: "Option 2 uses a softening idiom and acknowledges different tastes. Option 1 is too blunt."
      },
      {
        id: 'emo3',
        type: 'multiple-choice',
        scenario: "Your friend suggests a restaurant you don't want to go to.",
        question: "What's a polite way to decline?",
        options: [
          "No, let's go somewhere else.",
          "That sounds nice, but I'm not really in the mood for Italian. How about sushi instead?",
          "I don't want Italian."
        ],
        correctAnswer: 1,
        explanation: "Option 2 softens the rejection and offers an alternative. Options 1 and 3 are too direct."
      },
      {
        id: 'emo4',
        type: 'sentence-building',
        scenario: "You want to express that you prefer something else.",
        question: "Arrange these words to make a polite statement:",
        options: ["prefer", "the", "if", "that's", "one,", "actually", "blue", "okay.", "I'd"],
        correctAnswer: "I'd actually prefer the blue one, if that's okay.",
        explanation: "Using 'actually' and 'if that's okay' softens the preference and sounds considerate."
      },
      {
        id: 'emo5',
        type: 'multiple-choice',
        scenario: "Someone asks 'Don't you think this is great?'",
        question: "How do you politely disagree?",
        options: [
          "Not really.",
          "No, I don't think so.",
          "It's not bad, but I might lean toward something different."
        ],
        correctAnswer: 2,
        explanation: "Option 3 is diplomatic and doesn't shut down the conversation. Options 1 and 2 are too blunt."
      },
      {
        id: 'emo6',
        type: 'fix-sentence',
        scenario: "You want to agree enthusiastically with someone.",
        question: "Which sounds more natural?",
        options: [
          "Yes, I agree with what you said.",
          "Absolutely! I couldn't agree more."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is enthusiastic and natural. Option 1 is correct but sounds robotic."
      },
      {
        id: 'emo7',
        type: 'multiple-choice',
        scenario: "Your coworker asks for feedback on their presentation.",
        question: "What's a constructive response?",
        options: [
          "The data section was confusing.",
          "It was fine.",
          "It was really good! One small suggestion—maybe add more visuals to the data section?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 gives positive feedback first, then a gentle suggestion. Options 1 and 2 aren't constructive."
      },
      {
        id: 'emo8',
        type: 'multiple-choice',
        scenario: "Someone asks how you're feeling after a tough week.",
        question: "What's a natural response?",
        options: [
          "I am not feeling well this week.",
          "Honestly, it's been a rough week, but I'm hanging in there. Thanks for asking!",
          "Bad."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is honest, conversational, and appreciative. Option 1 sounds formal. Option 2 is too brief."
      },
      {
        id: 'emo9',
        type: 'sentence-building',
        scenario: "You want to soften a critical opinion.",
        question: "Arrange these words to make a diplomatic statement:",
        options: ["reconsider.", "we", "should", "be", "wrong,", "I", "might", "but", "think", "I"],
        correctAnswer: "I might be wrong, but I think we should reconsider.",
        explanation: "Starting with 'I might be wrong' softens the criticism and opens dialogue."
      },
      {
        id: 'emo10',
        type: 'multiple-choice',
        scenario: "Your friend is excited about something you're not interested in.",
        question: "What's a supportive response?",
        options: [
          "Cool.",
          "That's awesome! I'm happy for you, even if it's not really my thing.",
          "I don't care about that."
        ],
        correctAnswer: 1,
        explanation: "Option 2 supports their excitement while being honest. Option 1 is unenthusiastic. Option 3 is dismissive."
      }
    ]
  },
  {
    id: 'health',
    title: 'Health & Emergencies',
    description: 'Communicate effectively in medical situations and emergencies.',
    icon: '🏥',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'hlt1',
        type: 'multiple-choice',
        scenario: "You're at the doctor's office describing a headache.",
        question: "What's the clearest way to describe it?",
        options: [
          "My head hurts.",
          "I have pain.",
          "I've had a throbbing headache for about three days, mainly behind my eyes."
        ],
        correctAnswer: 2,
        explanation: "Option 3 gives specific details about duration, type, and location. Options 1 and 2 are too vague."
      },
      {
        id: 'hlt2',
        type: 'fix-sentence',
        scenario: "The pharmacist asks what symptoms you have.",
        question: "Which description is more helpful?",
        options: [
          "I'm sick.",
          "I've had a runny nose and sore throat since yesterday. No fever though."
        ],
        correctAnswer: 1,
        explanation: "Option 2 lists specific symptoms and timeline. Option 1 doesn't give the pharmacist enough information."
      },
      {
        id: 'hlt3',
        type: 'multiple-choice',
        scenario: "You need to call 911 for an emergency.",
        question: "What information should you give first?",
        options: [
          "Hello? Someone is hurt!",
          "Can you send help?",
          "There's been an accident at 123 Main Street. Someone is hurt and needs an ambulance."
        ],
        correctAnswer: 2,
        explanation: "Option 3 gives the location and nature of emergency immediately. Options 1 and 2 lack critical details."
      },
      {
        id: 'hlt4',
        type: 'sentence-building',
        scenario: "You want to describe when your symptoms started.",
        question: "Arrange these words to make a clear statement:",
        options: ["two", "days", "The", "ago.", "started", "symptoms", "about"],
        correctAnswer: "The symptoms started about two days ago.",
        explanation: "This clearly communicates the timeline, which is important for medical assessment."
      },
      {
        id: 'hlt5',
        type: 'multiple-choice',
        scenario: "You're allergic to a medication.",
        question: "What's the best way to tell a new doctor?",
        options: [
          "Be careful with my medications.",
          "I can't take some medicines.",
          "I should mention that I'm allergic to penicillin. I had a reaction last time."
        ],
        correctAnswer: 2,
        explanation: "Option 3 is specific and explains the allergy. Options 1 and 2 are too vague to be safe."
      },
      {
        id: 'hlt6',
        type: 'fix-sentence',
        scenario: "You need to ask how to take medication.",
        question: "Which question is clearer?",
        options: [
          "How do I take this?",
          "Should I take this with food, and how many times a day?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 asks specific, important questions. Option 1 is too general."
      },
      {
        id: 'hlt7',
        type: 'multiple-choice',
        scenario: "Someone faints near you and you need to get help.",
        question: "What should you say?",
        options: [
          "Hey, are you okay?",
          "Help! Someone just fainted! We need medical assistance right away!",
          "Someone fell down."
        ],
        correctAnswer: 1,
        explanation: "Option 2 clearly communicates urgency and the need for medical help. Options 1 and 3 don't convey emergency."
      },
      {
        id: 'hlt8',
        type: 'multiple-choice',
        scenario: "The doctor asks about your pain level on a scale of 1-10.",
        question: "What's a helpful response?",
        options: [
          "I don't know, bad?",
          "It hurts a lot.",
          "It's about a 7—it's pretty intense but not the worst I've ever had."
        ],
        correctAnswer: 2,
        explanation: "Option 3 uses the scale and adds helpful context. Options 1 and 2 don't answer the question clearly."
      },
      {
        id: 'hlt9',
        type: 'sentence-building',
        scenario: "You want to explain you need urgent help.",
        question: "Arrange these words to make an urgent statement:",
        options: ["This", "urgent—", "see", "doctor", "away.", "right", "need", "a", "to", "is", "I"],
        correctAnswer: "This is urgent— I need to see a doctor right away.",
        explanation: "Starting with 'this is urgent' communicates priority and seriousness."
      },
      {
        id: 'hlt10',
        type: 'multiple-choice',
        scenario: "The nurse asks if you understand the instructions.",
        question: "What should you say if you're not sure?",
        options: [
          "Yes.",
          "Maybe.",
          "I want to make sure I got it right. Could you go over the dosage one more time?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 asks for clarification politely. Options 1 and 2 don't address your uncertainty."
      }
    ]
  },
  {
    id: 'phone-communication',
    title: 'Phone & Online Communication',
    description: 'Master phone calls, voicemails, and professional texting.',
    icon: '📱',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'phn1',
        type: 'multiple-choice',
        scenario: "You're answering a call from an unknown number.",
        question: "What's a good way to answer?",
        options: [
          "Yeah?",
          "Who is this?",
          "Hello, this is Sarah speaking."
        ],
        correctAnswer: 2,
        explanation: "Option 3 is polite and identifies yourself. Option 1 is too casual. Option 2 sounds defensive."
      },
      {
        id: 'phn2',
        type: 'fix-sentence',
        scenario: "You need to leave a voicemail for an appointment.",
        question: "Which is more professional?",
        options: [
          "Hey, it's John. Call me back about Friday.",
          "Hi, this is John Smith calling about my appointment on Friday. Please call me back at 555-1234. Thank you!"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is complete with full name, reason, and callback number. Option 1 is too casual and unclear."
      },
      {
        id: 'phn3',
        type: 'multiple-choice',
        scenario: "You're calling customer service and get put on hold.",
        question: "What do you say when they come back?",
        options: [
          "Finally!",
          "Thank you for getting back to me.",
          "You took so long."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is polite and patient. Options 1 and 3 express frustration inappropriately."
      },
      {
        id: 'phn4',
        type: 'sentence-building',
        scenario: "You want to ask to speak to someone specific.",
        question: "Arrange these words to make a polite request:",
        options: ["please?", "speak", "I", "to", "Could", "manager,", "the"],
        correctAnswer: "Could I speak to the manager, please?",
        explanation: "This is the standard, polite way to ask for a specific person on the phone."
      },
      {
        id: 'phn5',
        type: 'multiple-choice',
        scenario: "You need to text your boss that you'll be late.",
        question: "Which text is most appropriate?",
        options: [
          "gonna b late",
          "Hi, I'm running about 10 minutes late due to traffic. I'll be there as soon as I can. Sorry for the inconvenience!",
          "Traffic. Late."
        ],
        correctAnswer: 1,
        explanation: "Option 2 is professional, explains the reason, and apologizes. Options 1 and 3 are too informal for a boss."
      },
      {
        id: 'phn6',
        type: 'fix-sentence',
        scenario: "You're ending a customer service call.",
        question: "Which closing is more appropriate?",
        options: [
          "Okay, bye.",
          "Thank you for your help today. Have a great day!"
        ],
        correctAnswer: 1,
        explanation: "Option 2 expresses gratitude and is friendly. Option 1 is too abrupt."
      },
      {
        id: 'phn7',
        type: 'multiple-choice',
        scenario: "Someone calls and you can't talk right now.",
        question: "What should you say?",
        options: [
          "Call later.",
          "I'm busy.",
          "Sorry, I can't talk right now. Can I call you back in about an hour?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 apologizes and offers a solution. Options 1 and 2 are too brief and rude."
      },
      {
        id: 'phn8',
        type: 'multiple-choice',
        scenario: "You're texting a friend to confirm plans.",
        question: "Which message is clear and friendly?",
        options: [
          "r we still going",
          "Hey! Just confirming we're still on for 7pm tonight at the café. See you there!",
          "7pm?"
        ],
        correctAnswer: 1,
        explanation: "Option 2 is clear about time and place. Options 1 and 3 are unclear and might cause confusion."
      },
      {
        id: 'phn9',
        type: 'sentence-building',
        scenario: "You want to ask someone to repeat something on the phone.",
        question: "Arrange these words to make a polite request:",
        options: ["bad—", "the", "could", "connection", "say", "that", "again?", "you", "Sorry,", "is"],
        correctAnswer: "Sorry, the connection is bad— could you say that again?",
        explanation: "Blaming the connection (not the person) is a polite way to ask for repetition."
      },
      {
        id: 'phn10',
        type: 'multiple-choice',
        scenario: "You're scheduling an appointment over the phone.",
        question: "What's a clear way to confirm the details?",
        options: [
          "Tuesday, right?",
          "Okay, thanks.",
          "Let me confirm: that's Tuesday, March 15th at 2pm. Is that correct?"
        ],
        correctAnswer: 2,
        explanation: "Option 3 repeats all details to avoid confusion. Options 1 and 2 don't confirm specifics."
      }
    ]
  },
  {
    id: 'idioms',
    title: 'Idioms & Natural Expressions',
    description: 'Learn common idioms and when to use them appropriately.',
    icon: '🎯',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'idm1',
        type: 'multiple-choice',
        scenario: "Your friend asks how your job interview went.",
        question: "What does 'I think I nailed it!' mean?",
        options: [
          "I hurt myself.",
          "I built something.",
          "I think I did really well."
        ],
        correctAnswer: 2,
        explanation: "'Nailed it' is an idiom meaning you did something successfully or perfectly."
      },
      {
        id: 'idm2',
        type: 'fix-sentence',
        scenario: "Someone says they're 'feeling under the weather.'",
        question: "What do they mean?",
        options: [
          "They're outside in bad weather.",
          "They're feeling a bit sick."
        ],
        correctAnswer: 1,
        explanation: "'Under the weather' is an idiom meaning to feel slightly ill or unwell."
      },
      {
        id: 'idm3',
        type: 'multiple-choice',
        scenario: "Your coworker says, 'Let's call it a day.'",
        question: "What do they mean?",
        options: [
          "Let's schedule a meeting.",
          "Let's stop working and go home.",
          "Let's make a phone call."
        ],
        correctAnswer: 1,
        explanation: "'Call it a day' means to stop working and finish for the day."
      },
      {
        id: 'idm4',
        type: 'sentence-building',
        scenario: "You want to say something is very easy.",
        question: "Arrange these words to make a common idiom:",
        options: ["cake!", "of", "It's", "piece", "a"],
        correctAnswer: "It's a piece of cake!",
        explanation: "'Piece of cake' is an idiom meaning something is very easy to do."
      },
      {
        id: 'idm5',
        type: 'multiple-choice',
        scenario: "Someone says 'I'll keep you in the loop.'",
        question: "What does this mean?",
        options: [
          "I'll tie you with a rope.",
          "I'll keep you informed and updated.",
          "I'll include you in my group."
        ],
        correctAnswer: 1,
        explanation: "'Keep in the loop' means to keep someone informed about ongoing developments."
      },
      {
        id: 'idm6',
        type: 'fix-sentence',
        scenario: "When is it appropriate to use 'break a leg'?",
        question: "Which situation is correct?",
        options: [
          "Warning someone about a dangerous situation.",
          "Wishing someone good luck before a performance."
        ],
        correctAnswer: 1,
        explanation: "'Break a leg' is used to wish performers good luck, especially in theater."
      },
      {
        id: 'idm7',
        type: 'multiple-choice',
        scenario: "Your boss says 'We need to think outside the box.'",
        question: "What does this mean?",
        options: [
          "We need to work in a different room.",
          "We need to organize our storage.",
          "We need to think creatively and unconventionally."
        ],
        correctAnswer: 2,
        explanation: "'Think outside the box' means to think creatively and find unconventional solutions."
      },
      {
        id: 'idm8',
        type: 'multiple-choice',
        scenario: "Someone says 'That's the last straw!'",
        question: "What emotion are they expressing?",
        options: [
          "They're talking about farming.",
          "They've finally lost their patience after many frustrations.",
          "They finished their drink."
        ],
        correctAnswer: 1,
        explanation: "'The last straw' refers to the final event that makes a situation unbearable."
      },
      {
        id: 'idm9',
        type: 'sentence-building',
        scenario: "You want to express that you understand someone's situation.",
        question: "Arrange these words to make an empathetic idiom:",
        options: ["same", "I'm", "in", "boat.", "the"],
        correctAnswer: "I'm in the same boat.",
        explanation: "'In the same boat' means you're in the same situation as someone else."
      },
      {
        id: 'idm10',
        type: 'multiple-choice',
        scenario: "When would 'bite the bullet' be appropriate?",
        question: "Choose the right context:",
        options: [
          "When you're at the dentist.",
          "When you need to do something difficult that you've been avoiding.",
          "When you're eating something hard."
        ],
        correctAnswer: 1,
        explanation: "'Bite the bullet' means to face a painful or difficult situation with courage."
      }
    ]
  },
  {
    id: 'cultural-english',
    title: 'Cultural English',
    description: 'Understand the cultural nuances that make English feel natural.',
    icon: '🌍',
    estimatedTime: '10 min',
    questions: [
      {
        id: 'cul1',
        type: 'multiple-choice',
        scenario: "A coworker asks 'How are you?' as they walk past you.",
        question: "What's the expected response?",
        options: [
          "Why do you want to know?",
          "Good, thanks! You?",
          "Well, actually, I've been having some problems with my sleep and my back hurts..."
        ],
        correctAnswer: 1,
        explanation: "'How are you?' in passing is often a greeting, not a real question. A brief, positive response is expected."
      },
      {
        id: 'cul2',
        type: 'fix-sentence',
        scenario: "Someone invites you to a party but you can't go.",
        question: "Which decline is more culturally appropriate?",
        options: [
          "No, I can't come.",
          "That sounds fun! Unfortunately, I have other plans that night. Maybe next time?"
        ],
        correctAnswer: 1,
        explanation: "In American/British culture, it's polite to express enthusiasm, give a reason, and suggest future plans."
      },
      {
        id: 'cul3',
        type: 'multiple-choice',
        scenario: "Your American colleague offers you food and you're not hungry.",
        question: "What's the polite response?",
        options: [
          "I'm not hungry right now.",
          "No thanks, I'm good! But that looks delicious.",
          "No."
        ],
        correctAnswer: 1,
        explanation: "Declining with a compliment softens the rejection and shows appreciation for the offer."
      },
      {
        id: 'cul4',
        type: 'sentence-building',
        scenario: "You want to politely disagree in a meeting.",
        question: "Arrange these words to make a diplomatic statement:",
        options: ["but", "considered...", "valid", "That's", "have", "we", "a", "point,"],
        correctAnswer: "That's a valid point, but have we considered...",
        explanation: "Acknowledging the other person's view before offering an alternative is culturally expected in professional settings."
      },
      {
        id: 'cul5',
        type: 'multiple-choice',
        scenario: "Someone compliments your English skills.",
        question: "What's the culturally appropriate response?",
        options: [
          "I know, I'm very good.",
          "No, my English is not good.",
          "Thank you! I've been working hard on it."
        ],
        correctAnswer: 2,
        explanation: "Accept compliments graciously. Option 1 sounds arrogant. Option 2 contradicts the compliment awkwardly."
      },
      {
        id: 'cul6',
        type: 'fix-sentence',
        scenario: "You accidentally bump into someone.",
        question: "Which response is culturally expected?",
        options: [
          "...",
          "Oh, sorry about that!"
        ],
        correctAnswer: 1,
        explanation: "In English-speaking cultures, even minor accidents require a quick apology. Saying nothing can seem rude."
      },
      {
        id: 'cul7',
        type: 'multiple-choice',
        scenario: "You're meeting someone for the first time at a business event.",
        question: "What's appropriate small talk?",
        options: [
          "Nice to meet you! How much money do you make?",
          "Nice to meet you! Are you married?",
          "Nice to meet you! Have you attended this conference before?"
        ],
        correctAnswer: 2,
        explanation: "Salary and relationship status are considered too personal for first meetings in Western business culture."
      },
      {
        id: 'cul8',
        type: 'multiple-choice',
        scenario: "Your boss asks 'Could you possibly finish this by Friday?'",
        question: "What does this really mean?",
        options: [
          "It's optional—you can say no easily.",
          "They're unsure if they need it by Friday.",
          "It's a polite request, but they expect you to finish by Friday."
        ],
        correctAnswer: 2,
        explanation: "Indirect requests from authority figures are often expectations framed politely. 'Could you possibly' still means 'please do this.'"
      },
      {
        id: 'cul9',
        type: 'sentence-building',
        scenario: "You want to suggest an idea without seeming pushy.",
        question: "Arrange these words to make a culturally appropriate suggestion:",
        options: ["different", "we", "a", "if", "tried", "What", "approach?"],
        correctAnswer: "What if we tried a different approach?",
        explanation: "Framing suggestions as questions ('What if...') is less direct and more collaborative."
      },
      {
        id: 'cul10',
        type: 'multiple-choice',
        scenario: "You're invited to someone's home for dinner.",
        question: "What's culturally expected?",
        options: [
          "Bring your own food because you don't trust their cooking.",
          "Arrive empty-handed and leave immediately after eating.",
          "Bring a small gift like wine or flowers, and offer to help clean up."
        ],
        correctAnswer: 2,
        explanation: "In Western culture, bringing a hostess gift and offering to help shows appreciation and good manners."
      }
    ]
  }
];