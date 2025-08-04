import { Topic, ExamplePlan, FAQItem } from './types';

export const PARENT_TOPICS: Topic[] = [
  {
    id: 'adolescent-development',
    title: 'Adolescent Development',
    emoji: '🧠',
    shortDescription: 'Understanding the unique needs of the teenage brain for healthy growth.',
    explanation: {
      title: 'The Big Idea: The Teen Brain is Under Construction',
      details: [
        'Adolescence is a period of intense brain remodeling. This drives teens towards four key developmental needs: Exploration, Purpose, Identity, and Respect. Understanding these allows parents to support healthy growth instead of just reacting to challenging behaviors.'
      ]
    },
    examples: [
        {
            title: 'Deep Dive: The Need for Exploration',
            scenario: [ 'Your 16-year-old, who has always had dark hair, suddenly announces they want to dye it bright blue.' ],
            dialogue: [
                { speaker: 'Teen', line: 'I\'m dyeing my hair blue this weekend. Sarah is going to help me.' },
                { speaker: 'Parent', line: '(Taking a breath) "Wow, that\'s a big change! Tell me more about it. What made you choose blue?"' },
                { speaker: 'Teen', line: 'I don\'t know, I just think it would be cool. I want to try something different.' },
                { speaker: 'Parent', line: 'I get wanting to try something new. It\'s important that we use a good quality product so your hair stays healthy. Let\'s look up some options together and I can help you buy the supplies.' }
            ]
        },
        {
            title: 'Deep Dive: The Need for Purpose',
            scenario: [ 'Your 14-year-old has been spending a lot of time helping a friend who is struggling in math, sometimes at the expense of their own homework.' ],
            dialogue: [
                { speaker: 'Parent', line: 'I noticed you\'ve been spending a lot of time helping Alex with math. That\'s incredibly kind of you to contribute your time like that.' },
                { speaker: 'Teen', line: 'Yeah, they were really stressed about the last test. I think it\'s helping.' },
                { speaker: 'Parent', line: 'I\'m sure it is. Your ability to explain things is a real strength. Let\'s just make a quick plan to ensure your own work gets done too, so you don\'t get behind.' }
            ]
        },
        {
            title: 'Deep Dive: The Need for Identity',
            scenario: [ 'Your usually preppy 15-year-old starts dressing in all-black clothing and listening to a new, intense genre of music.' ],
            dialogue: [
                { speaker: 'Parent', line: 'I see you\'re exploring a new style. Can you tell me about the band you\'re listening to?' },
                { speaker: 'Teen', line: '(Surprised) "Oh. They\'re called \'Static Bloom\'. You probably wouldn\'t like them."' },
                { speaker: 'Parent', line: 'Maybe not, but I\'m interested in what you like about them. What draws you to their music?' }
            ]
        },
        {
            title: 'Deep Dive: The Need for Respect & Social Status',
            scenario: [ 'Your teen wants to go to a party where you know there will be minimal supervision. This is the "cool" party to attend.' ],
            dialogue: [
                { speaker: 'Teen', line: 'Everyone is going to Maya\'s party on Friday! I have to go!' },
                { speaker: 'Parent', line: 'I understand it\'s really important for you to be there with your friends. My main job is to make sure you are safe. Let\'s work on a plan that could make this work for both of us.' }
            ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'Instead of reacting to the behavior (blue hair), the parent supported the underlying need (exploration) within safe boundaries.',
        'Praising the act of helping a friend validates their need for purpose and contribution.',
        'Showing curiosity about a new identity expression (music, clothes) shows respect and keeps communication open.',
        'Acknowledging the social importance of an event before stating boundaries shows you respect their world.'
      ]
    },
    exercise: {
      title: 'Your Turn: Find the "Need Behind the Deed"',
      details: [
        'This week, when a challenging behavior arises, pause and ask: "Which of the four needs might my teen be trying to meet?"',
        'Are they exploring? Seeking purpose? Defining their identity? Trying to gain respect?',
        'This simple question can shift your perspective from frustration to understanding, opening the door for a more productive conversation.'
      ]
    },
    references: [
      { name: 'American Academy of Pediatrics (AAP) - Stages of Adolescence', url: 'https://www.healthychildren.org/English/ages-stages/teen/Pages/Stages-of-Adolescence.aspx' },
      { name: 'UCLA Center for the Developing Adolescent', url: 'https://developingadolescent.org/' }
    ]
  },
  {
    id: 'effective-discipline',
    title: 'Effective Discipline',
    emoji: '⚖️',
    shortDescription: 'Strategies for positive and effective discipline without punishment.',
    explanation: {
        title: 'The Big Idea: Discipline is Teaching, Not Punishing',
        details: [
            'The goal of discipline is to teach self-control and problem-solving skills, not to punish. The most effective approach, authoritative parenting, is like being a confident pilot in turbulence: you validate feelings while confidently holding boundaries. This combination of warmth and structure builds security and respect. It\'s crucial to remember that physical punishments like spanking are ineffective and proven to increase aggression.'
        ]
    },
    examples: [
        {
            title: 'Deep Dive: Discipline as Structure',
            scenario: ['Your 7-year-old and 9-year-old constantly argue about tidying the playroom, leaving it a mess.'],
            dialogue: [
                { speaker: 'Parent', line: 'I’ve noticed it’s tough to keep the playroom tidy. Let’s set up a new system together. What’s one rule we can all agree on for this room?' },
                { speaker: 'Child', line: 'That we have to put away one thing before we get out another thing!' },
                { speaker: 'Parent', line: 'That’s a great start. What about a 10-minute "Team Tidy-Up" every day before dinner? We can put on music and do it together.' }
            ]
        },
        {
            title: 'Deep Dive: Authoritative Parenting (Warmth + Structure)',
            scenario: ['Your 5-year-old has a meltdown because you said it\'s time to leave the playground.'],
            dialogue: [
                { speaker: 'Child', line: '(Crying) "No! I don\'t want to go! I want to stay and play forever!"' },
                { speaker: 'Parent', line: '(Kneeling down) "I know, it\'s so hard to leave when you\'re having fun. You\'re feeling really sad and angry right now. It\'s time to go home for dinner. You can choose to walk to the car or I can carry you. Which do you pick?"' }
            ]
        },
        {
            title: 'Deep Dive: Natural Consequences',
            scenario: ['Your 10-year-old repeatedly forgets to put their dirty clothes in the hamper, instead leaving them on the floor.'],
            dialogue: [
                { speaker: 'Parent', line: '(Calmly) "Just a heads-up, I\'m doing laundry this afternoon. I\'ll wash whatever is in the hampers."' },
                { speaker: 'Child', line: '(Later) "Where is my soccer jersey? I need it for practice tomorrow!"' },
                { speaker: 'Parent', line: 'Hmm, I\'m not sure. I washed everything that was in the hamper. You can try washing it by hand if you need it for tomorrow.' }
            ]
        }
    ],
    reflection: {
        title: 'Reflect & Summarize',
        points: [
            'Involving kids in creating rules (structure) increases their buy-in and sense of responsibility.',
            'Validating the feeling (sadness about leaving) before stating the limit (it\'s time to go) shows warmth and reduces resistance.',
            'Allowing a natural consequence (the jersey isn\'t clean) to occur teaches a lesson more effectively than nagging or punishing.'
        ]
    },
    exercise: {
        title: 'Your Turn: Connect Before You Correct',
        details: [
            'The next time you need to correct your child\'s behavior, pause first.',
            'Start by naming their feeling: "I can see you\'re very angry," or "It looks like you\'re feeling frustrated."',
            'Then, state the limit and redirect. "It\'s okay to be angry, but it\'s not okay to hit. Let\'s hit this pillow instead."'
        ]
    },
    references: [
      { name: 'American Academy of Pediatrics (AAP) - Positive Discipline', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Positive-Discipline.aspx' },
      { name: 'Baumrind, D. (1966). Effects of Authoritative Parental Control on Child Behavior.', url: 'https://www.jstor.org/stable/1126611' }
    ]
  },
  {
    id: 'screen-time',
    title: 'Navigating Screen Time',
    emoji: '📱',
    shortDescription: 'A nuanced guide to managing digital media, from social media to video games.',
    explanation: {
        title: 'The Big Idea: It\'s About Balance & Boundaries, Not Just a Ban',
        details: [
            'The screen time debate isn’t just about the number of hours; it’s about what kids are doing on screens and what they are *not* doing because they are on screens. The goal is balance and teaching self-regulation. Screens should be integrated into life, not dominate it. This requires clear, consistent boundaries that are created and enforced collaboratively.'
        ]
    },
    examples: [
        {
            title: 'Deep Dive: The "One More Game" Meltdown',
            scenario: ['Your 10-year-old’s agreed-upon 30 minutes of tablet time is up, but they are in the middle of a game.'],
            dialogue: [
                { speaker: 'Parent', line: '(Giving a heads-up) "Hey, you have 5 minutes left of tablet time. Please find a good place to stop in your game."' },
                { speaker: 'Child', line: '(5 mins later, still playing) "No! I just need to finish this level!"' },
                { speaker: 'Parent', line: '(Calmly) "I know it\'s hard to stop. You can either turn it off now, or I will turn it off, and we lose tablet time tomorrow. The choice is yours."' }
            ]
        },
        {
            title: 'Deep Dive: The Bedroom Phone Battle',
            scenario: ['You discover your 14-year-old has been staying up late scrolling on their phone in their room, and they are tired and irritable in the mornings.'],
            dialogue: [
                { speaker: 'Parent', line: 'I\'ve noticed you seem really tired in the mornings, and I\'m concerned your phone is making it hard to get the sleep you need to feel good. From now on, our new family rule is that all devices charge in the kitchen overnight.' },
                { speaker: 'Teen', line: 'That\'s not fair! I use it for my alarm!' },
                { speaker: 'Parent', line: 'I understand your concern. We can get you a separate alarm clock for your room. This rule is about health and is not negotiable, but I\'m happy to talk about other rules with you.' }
            ]
        },
        {
            title: 'Deep Dive: Quality over Quantity',
            scenario: ['Your child is obsessed with a creative building game that seems positive, but you\'re worried about the amount of time they spend on it.'],
            dialogue: [
                { speaker: 'Parent', line: 'Wow, can you show me what you built in your game today? That looks so complex.' },
                { speaker: 'Child', line: '(Excitedly) "Yeah! I designed a whole castle and even made a secret passage..."' },
                { speaker: 'Parent', line: 'That\'s amazing problem-solving. Let\'s set a timer for 15 more minutes, and when it goes off, I\'d love for you to draw your favorite part of your castle on paper.' }
            ]
        }
    ],
    reflection: {
        title: 'Reflect & Summarize',
        points: [
            'Giving a 5-minute warning respects the child\'s activity and makes transitions easier.',
            'Setting clear, firm, and universal family rules (like no phones in the bedroom) is crucial for health and reduces daily negotiations.',
            'Showing genuine interest in their digital world and connecting it to off-screen activities (like drawing) validates their interest while promoting balance.'
        ]
    },
    exercise: {
        title: 'Your Turn: Create a "Family Media Plan"',
        details: [
            'Use the AAP\'s tool to create a personalized Family Media Plan.',
            'Sit down with your kids and decide together on screen-free times (like dinner) and screen-free zones (like bedrooms).',
            'Involving them in the process increases their buy-in and teaches them to self-regulate.'
        ]
    },
    references: [
        { name: 'AAP Family Media Plan Tool', url: 'https://www.healthychildren.org/English/media/Pages/default.aspx' },
        { name: 'Twenge, J. M., & Campbell, W. K. (2018). Associations between screen time and lower psychological well-being among children and adolescents', url: 'https://psycnet.apa.org/record/2018-49035-001' }
    ]
  },
  {
    id: 'sibling-harmony',
    title: 'Fostering Sibling Harmony',
    emoji: '🤝',
    shortDescription: 'Guiding siblings toward a more peaceful and supportive relationship.',
    explanation: {
      title: 'The Big Idea: Treat Sibling Conflict as a Skill-Building Opportunity',
      details: [
        'Sibling conflict is normal and provides a natural environment for learning crucial social skills like negotiation, empathy, and problem-solving.',
        'Instead of acting as the judge who solves the problem, parents can be a mediator who coaches children through their disagreements. This empowers them to find their own solutions and builds skills for life.'
      ]
    },
    examples: [
        {
          title: 'Deep Dive: Mediator, Not Judge',
          scenario: ['Your 7-year-old comes to you crying because their 5-year-old sibling took the toy they were playing with.'],
          dialogue: [
            { speaker: 'Parent', line: 'I see one person who is very upset and another who really wants to play with that toy. This is a tough problem. One toy, two kids. What are some ideas so you can both be happy?' },
            { speaker: 'Child', line: 'He can have it when I\'m done in 5 minutes!' },
            { speaker: 'Parent', line: 'That\'s one idea. What do you think of that? (To younger child). Can you play with this other car while you wait?' }
          ]
        },
        {
          title: 'Deep Dive: Fostering Positive Connection',
          scenario: ['Your kids (6 and 8) seem to be bickering constantly out of boredom.'],
          dialogue: [
              { speaker: 'Parent', line: 'I have a mission for you two. I need a super-fort built in the living room before dad gets home, and I need two expert builders to do it. Here are the sheets and pillows. You are Team Fort-Builders! Go!' },
              { speaker: 'Child', line: 'Yeah! I get to design the door!' },
              { speaker: 'Child', line: 'And I\'ll make the roof!' }
          ]
        },
        {
          title: 'Deep Dive: When One Child is Always "The Victim"',
          scenario: ['Your younger child (4) often cries to get their way, and the older child (7) gets frustrated, saying "I didn\'t even do anything!"'],
          dialogue: [
              { speaker: 'Parent', line: '(To younger child, calmly) "Use your words to tell your brother what you want. Crying doesn\'t help him understand."' },
              { speaker: 'Parent', line: '(To older child, privately later) "I know it\'s frustrating when your sister cries. It\'s a skill she\'s still learning. Thank you for being patient. Can you show her how to ask for a turn nicely next time?"' }
          ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'Acting as a mediator teaches children to solve their own problems.',
        'Creating opportunities for collaborative play ("Team Fort-Builders") helps build a bank of positive memories and associations.',
        'Coaching both children on communication skills addresses the root of the issue, rather than just reacting to the surface behavior.'
      ]
    },
    exercise: {
      title: 'Your Turn: "Sportscasting" a Conflict',
      details: [
        'The next time a minor squabble breaks out, try not to intervene immediately. Instead, narrate what you see without judgment, like a sportscaster.',
        '"I see two children who both want the blue marker. Liam is holding it, and Chloe is pulling on it."',
        'Often, just hearing the situation described calmly can de-escalate emotions and prompt children to find a solution on their own.'
      ]
    },
    references: [
      { name: 'IAP - Guide on Sibling Rivalry', url: 'https://iapindia.org/pdf/IAP-GUIDE-ON-SIBLING-RIVALRY-final-29-01-2019.pdf' },
      { name: 'Faber, A., & Mazlish, E. (2012). Siblings Without Rivalry.', url: 'https://www.amazon.com/Siblings-Without-Rivalry-Children-Anniversary/dp/0393342212' }
    ]
  },
  {
    id: 'sleep-challenges',
    title: 'Navigating Sleep Challenges',
    emoji: '😴',
    shortDescription: 'Evidence-based strategies for more peaceful nights.',
    explanation: {
      title: 'The Big Idea: Consistency and Predictability Are Your Superpowers',
      details: [
        'Most childhood sleep problems are behavioral, not medical. Children thrive on predictability, and a consistent bedtime routine is the most powerful tool for signaling that it\'s time to wind down and helping them feel secure. Your calm, confident, and consistent response to their protests is what ultimately teaches them to sleep independently.'
      ]
    },
    examples: [
        {
          title: 'Deep Dive: The "Curtain Call" Kid',
          scenario: ['Your 6-year-old repeatedly gets out of bed asking for one more drink, one more story, or one more hug, delaying bedtime by an hour.'],
          dialogue: [
            { speaker: 'Parent', line: '(During the routine) "This is our last book, and then it\'s time for sleep. Do you need a final sip of water before I tuck you in?"' },
            { speaker: 'Child', line: '(Later, getting out of bed) "I just need one more hug!"' },
            { speaker: 'Parent', line: '(Calmly and silently leads child back to bed, gives a quick hug, and says) "It\'s sleep time now. I love you. Goodnight." (Says nothing else and leaves).' }
          ]
        },
        {
          title: 'Deep Dive: The "Bedtime Pass" Strategy',
          scenario: ['Your 5-year-old has anxiety about being alone and makes many requests after lights out.'],
          dialogue: [
            { speaker: 'Parent', line: '"Tonight, you get two special bedtime passes. You can use these to call me back for a quick hug or a question. Once they are gone, they are gone for the night. You put them on your nightstand."' },
            { speaker: 'Child', line: '(Later) "Mom! I\'m using a pass! Can you check for monsters?"' },
            { speaker: 'Parent', line: '(Comes in, gives pass back) "Quick check, all clear! I love you. Goodnight!"' }
          ]
        },
        {
            title: 'Deep Dive: The Child Who Can\'t Fall Asleep',
            scenario: ['Your 7-year-old lies in bed for over an hour every night, getting more and more frustrated that they are not falling asleep.'],
            dialogue: [
                { speaker: 'Parent', line: '"I\'ve noticed it takes you a long time to fall asleep, which is frustrating. For a few nights, we\'re going to try something new. Your bedtime is now 9:30 PM. But you must stay in bed. No getting up."' },
                { speaker: 'Child', line: 'Okay...' },
                { speaker: 'Parent', line: '(After a few nights of them falling asleep quickly) "You\'ve been falling asleep so fast! Let\'s try moving bedtime to 9:15 PM tonight."' }
            ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'The "boring" and consistent return to bed makes curtain calls less rewarding.',
        'The "Bedtime Pass" gives anxious children a sense of control within clear boundaries, reducing their need to protest.',
        'Temporarily setting a later bedtime (Bedtime Fading) can reduce sleep-onset anxiety, allowing you to gradually move it earlier once the child is falling asleep quickly.'
      ]
    },
    exercise: {
      title: 'Your Turn: Optimize the Sleep Environment',
      details: [
        'This week, do a sensory sweep of your child\'s bedroom one hour before bedtime.',
        'Is it cool, dark, and quiet? Dim the lights. Turn off all screens.',
        'A calm environment is a powerful cue for a calm mind and body, setting the stage for sleep.'
      ]
    },
    references: [
      { name: 'AAP - Healthy Sleep Habits: How Many Hours Does Your Child Need?', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/healthy-sleep-habits-how-many-hours-does-your-child-need.aspx' },
      { name: 'Mindell, J. A., & Owens, J. A. (2015). A Clinical Guide to Pediatric Sleep.', url: 'https://www.lww.com/product-showcase/A-Clinical-Guide-to-Pediatric-Sleep-3e' }
    ]
  },
   {
    id: 'mental-well-being',
    title: 'Mental Well-being & Resilience',
    emoji: '🧘',
    shortDescription: 'Supporting your child\'s (and your own) mental health.',
    explanation: {
      title: 'The Big Idea: Model and Co-Regulate Emotional Health',
      details: [
        'A child\'s emotional well-being is deeply connected to their parent\'s. Managing your own stress isn\'t selfish; it\'s a core component of effective parenting ("You can\'t pour from an empty cup"). Furthermore, when children are distressed, our role is often not to fix the problem, but to be a calm, safe harbor in their emotional storm. This process of "co-regulation" is what builds their own capacity for resilience.'
      ]
    },
    examples: [
        {
          title: 'Deep Dive: Parent Self-Care (Cognitive Restructuring)',
          scenario: ['After yelling at your child for spilling milk, you are flooded with guilt and think, "I\'m a terrible parent. I always lose my temper."'],
          dialogue: [
            { speaker: 'Parent', line: '(Internal thought) "I\'m a terrible parent. I\'m ruining my kids."' },
            { speaker: 'Parent', line: '(Reframing) "Wait. Is that 100% true? I\'m not a terrible parent. I\'m a stressed parent who had a bad moment. This single moment doesn\'t define me. I can go apologize."' }
          ]
        },
        {
          title: 'Deep Dive: Co-Regulating a Child\'s Big Feelings',
          scenario: ['Your 8-year-old is crying and inconsolable after not being invited to a friend\'s birthday party.'],
          dialogue: [
            { speaker: 'Child', line: '"It\'s not fair! Max invited everyone but me! He hates me!"' },
            { speaker: 'Parent', line: '(Instead of "Don\'t worry, you\'ll get invited to other parties," or "Max is not a good friend.") (Sits close and says softly) "That sounds so painful. It hurts so much to feel left out. I\'m right here with you."' }
          ]
        },
        {
          title: 'Deep Dive: Managing Intrusive Thoughts',
          scenario: ['As a new parent, you are exhausted and have a fleeting, terrifying thought of your baby falling.'],
          dialogue: [
            { speaker: 'Parent', line: '(Internal thought) "Oh my god, what if I dropped her? What kind of monster thinks that?"' },
            { speaker: 'Parent', line: '(Reframing, based on knowledge) "This is an intrusive thought. The research says they are normal, especially for new parents, and they don\'t mean I\'m a bad person or that I will act on it. It\'s just a thought, like a weird pop-up ad in my brain. I can let it go."' }
          ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'Challenging your own negative thought patterns (cognitive restructuring) is a powerful way to reduce parental stress.',
        'Co-regulating means offering calm and empathy, not solutions. Simply sitting with your child in their distress helps them feel safe and teaches them they can survive hard feelings.',
        'Recognizing intrusive thoughts as normal and powerless brain-glitches, rather than reflections of your character, is key to managing them.'
      ]
    },
    exercise: {
      title: 'Your Turn: The "Three Good Things" Practice',
      details: [
        'Each night this week, take two minutes to write down three things that went well in your day, no matter how small.',
        'For each one, write a sentence about *why* it went well.',
        'This simple practice, rooted in positive psychology, has been shown to decrease symptoms of depression and increase happiness by retraining your brain to notice the positive.'
      ]
    },
    references: [
      { name: 'Seligman, M. E. P., et al. (2005). Positive Psychology Progress.', url: 'https://psycnet.apa.org/record/2005-09813-002' },
      { name: 'HealthyChildren.org (AAP) - When to Seek Help for Your Child’s Mental Health', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/When-to-Seek-Help-for-Your-Childs-Mental-Health.aspx' }
    ]
  }
];

export const TEACHER_TOPICS: Topic[] = [
  {
    id: 'adolescent-learners',
    title: 'Understanding Adolescent Learners',
    emoji: '🧑‍🏫',
    shortDescription: 'Applying developmental science to support teen students in the classroom.',
    explanation: {
      title: 'The Big Idea: The Teen Brain in the Classroom',
      details: [
        'The same needs driving teens at home—Exploration, Purpose, Identity, and Respect—are present in the classroom. Designing lessons that tap into these needs can dramatically increase engagement, motivation, and learning.'
      ]
    },
    examples: [
        {
            title: 'Deep Dive: Tapping into Exploration',
            scenario: [ 'You assign a history presentation, and a student asks if they can create a podcast episode instead of a slide deck.' ],
            dialogue: [
                { speaker: 'Student', line: 'For the history project, could I make a podcast instead of doing PowerPoint? I think it would be more interesting.' },
                { speaker: 'Teacher', line: 'That\'s a fantastic idea. It shows great initiative. Let\'s talk about the rubric to make sure your podcast still covers all the key historical points. I\'m excited to see—or rather, hear—what you come up with.' }
            ]
        },
        {
            title: 'Deep Dive: Tapping into Purpose',
            scenario: [ 'Students seem disengaged with a lesson on local government.' ],
            dialogue: [
                { speaker: 'Teacher', line: 'Okay, I can see this isn\'t quite landing. Let\'s make this real. What is one thing in our school or community you wish you could change? (Students offer ideas: longer lunch, a new crosswalk).' },
                { speaker: 'Teacher', line: 'Great. For the rest of this unit, your project will be to research which part of local government is responsible for that issue and write a formal proposal to them. Let\'s use this knowledge for a real purpose.' }
            ]
        },
        {
            title: 'Deep Dive: Tapping into Identity',
            scenario: [ 'In literature class, a student who is usually quiet raises their hand to connect a poem about feeling like an outsider to a character in a video game they play.' ],
            dialogue: [
                { speaker: 'Student', line: 'That kind of reminds me of a character in this game I play, who gets exiled from their clan...' },
                { speaker: 'Teacher', line: 'Thank you for making that connection. That\'s an excellent point. Tell the class more about that. How does the game character\'s experience reflect what the poet is saying?' }
            ]
        },
        {
            title: 'Deep Dive: Tapping into Respect',
            scenario: [ 'You need to correct a student who is talking during your instruction.' ],
            dialogue: [
                { speaker: 'Teacher', line: '(Instead of calling out across the room) (Walks over to the student\'s desk and speaks quietly) "Alex, I need your focus up here with me right now. Thanks."' },
                { speaker: 'Student', line: '(Nods and re-engages with the lesson.)' }
            ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'Offering project choices validates the need for exploration and autonomy.',
        'Connecting curriculum to real-world problems gives students a sense of purpose.',
        'Allowing students to bring their outside interests (like video games) into the classroom shows respect for their identity.',
        'Correcting behavior privately, rather than publicly, respects a teen\'s heightened sensitivity to social status and avoids a power struggle.'
      ]
    },
    exercise: {
      title: 'Your Turn: One Small Tweak',
      details: [
        'Look at your lesson plan for next week.',
        'Find one small opportunity to tweak an activity to better meet one of the four needs.',
        'Could you add a choice? Connect it to a real-world problem? Allow for personal expression? It doesn\'t have to be a big change to make a big impact.'
      ]
    },
    references: [
      { name: 'CASEL - SEL in the Classroom', url: 'https://casel.org/fundamentals-of-sel/sel-in-the-classroom/' },
      { name: 'Yeager, D. S., & Dweck, C. S. (2012). Mindsets That Promote Resilience.', url: 'https://journals.sagepub.com/doi/abs/10.1177/1745691612442562' }
    ]
  },
  {
    id: 'classroom-management',
    title: 'Positive Classroom Management',
    emoji: '⚖️',
    shortDescription: 'Strategies for creating a structured and positive learning environment.',
    explanation: {
        title: 'The Big Idea: Management is 80% Proactive, 20% Reactive',
        details: [
            'The most effective classroom management isn\'t about reacting to misbehavior; it\'s about proactively creating a clear, consistent, and positive environment where issues are less likely to arise. This foundation is built on strong relationships, explicitly taught routines, and engaging instruction.'
        ]
    },
    examples: [
        {
            title: 'Deep Dive: Building Relationships Proactively',
            scenario: ['A teacher makes a point to greet every student at the door by name.'],
            dialogue: [
                { speaker: 'Teacher', line: 'Good morning, Maria! Glad to see you today.' },
                { speaker: 'Teacher', line: 'Hey, David! How was your soccer game last night? I heard you won.' },
                { speaker: 'Student', line: 'It was great! I scored a goal!' },
                { speaker: 'Teacher', line: 'Awesome! Tell me about it at break if you have a chance.' }
            ]
        },
        {
            title: 'Deep Dive: Explicitly Teaching Routines',
            scenario: ['It\'s the first week of school, and a 2nd-grade teacher is teaching the routine for transitioning from desks to the reading rug.'],
            dialogue: [
                { speaker: 'Teacher', line: 'Okay, Super Readers! When I say "Magic Carpet," you will have one minute to quietly push in your chair, walk to the rug, and find your spot. Let\'s practice. Magic Carpet!' },
                { speaker: 'Teacher', line: '(After practice) "Wow, that was almost perfect! I heard some voices though. Remember, the challenge is to do it silently. Let\'s try one more time to be silent superheroes!"' }
            ]
        },
        {
            title: 'Deep Dive: Responding Calmly to Defiance',
            scenario: ['A 7th-grade student refuses to start their writing assignment, crossing their arms and staring out the window.'],
            dialogue: [
                { speaker: 'Teacher', line: '(Approaches the desk and speaks quietly, not in front of the class) "I see you haven\'t started the assignment yet. You can either start with the first question, or you can start by brainstorming on the back. I\'ll check back in two minutes to see which you chose."' },
                { speaker: 'Teacher', line: '(Walks away, giving the student space and avoiding a public power struggle.)' }
            ]
        }
    ],
    reflection: {
        title: 'Reflect & Summarize',
        points: [
            'Positive greetings build a foundation of connection that makes students more receptive to instruction.',
            'Investing time in practicing routines at the beginning of the year saves huge amounts of instructional time later on.',
            'Responding calmly and privately to defiance with a clear choice de-escalates the situation and preserves the student\'s dignity.'
        ]
    },
    exercise: {
        title: 'Your Turn: The "4-to-1" Ratio',
        details: [
            'For the next week, consciously track your interactions with a challenging student.',
            'Aim for a ratio of four positive, non-contingent interactions (e.g., "Good morning," "I liked your comment") for every one corrective interaction.',
            'This strategy can dramatically improve student-teacher relationships and reduce misbehavior.'
        ]
    },
    references: [
        { name: 'Cook, C. R., et al. (2018). Positive Greetings at the Door.', url: 'https://www.researchgate.net/publication/322972986_Positive_Greetings_at_the_Door_Evaluation_of_a_Low-Cost_High-Yield_Tier_1_Classroom_Management_Practice' },
        { name: 'The IRIS Center, Vanderbilt University - Classroom Management', url: 'https://iris.peabody.vanderbilt.edu/module/clm/' }
    ]
  },
  {
    id: 'digital-citizenship',
    title: 'Promoting Digital Citizenship',
    emoji: '🌐',
    shortDescription: 'Guiding students to use technology responsibly and ethically.',
    explanation: {
        title: 'The Big Idea: Empowering Through Skills, Not Just Restricting with Rules',
        details: [
            'Digital citizenship isn’t just about creating lists of "don\'ts." It\'s about actively teaching students the critical thinking skills they need to be safe, responsible, and ethical online. This includes media literacy, understanding their digital footprint, and practicing online empathy.'
        ]
    },
    examples: [
        {
            title: 'Deep Dive: The Viral Rumor',
            scenario: ['A rumor about a student starts spreading through a class group chat.'],
            dialogue: [
                { speaker: 'Teacher', line: '(During a class meeting) "I want to talk about our responsibility to each other online. Before we share something, let\'s ask three questions: Is it True? Is it Helpful? Is it Kind?"' },
                { speaker: 'Student', line: 'But what if you think it\'s true but it\'s not?' },
                { speaker: 'Teacher', line: 'That\'s a great question. That\'s why we also have to think about who the source is and whether sharing could hurt someone, even if we don\'t mean to.' }
            ]
        },
        {
            title: 'Deep Dive: Evaluating a Source (Media Literacy)',
            scenario: ['During a research project, a student cites "amazingfacts.co" as a source.'],
            dialogue: [
                { speaker: 'Teacher', line: 'That\'s an interesting source. Let\'s look at it as detectives. Who runs this website? What is their goal? Can we find this same information on a museum or university website? It\'s our job to check sources before we trust them.' }
            ]
        },
        {
            title: 'Deep Dive: Impact vs. Intent',
            scenario: ['A student posts a "joke" in a shared Google Doc that makes another student visibly uncomfortable.'],
            dialogue: [
                { speaker: 'Teacher', line: '(Privately, to the first student) "I know you may have intended that as a joke, but I saw the impact it had on Sarah. Part of being a good digital citizen is thinking about how our words might land on others, even when we don\'t mean to cause harm."' }
            ]
        }
    ],
    reflection: {
        title: 'Reflect & Summarize',
        points: [
            'Providing a simple framework (True, Helpful, Kind) gives students a mental tool for future situations.',
            'Teaching students to question and investigate sources builds critical media literacy skills.',
            'Focusing on the impact of online actions, rather than just the intent, helps build empathy.'
        ]
    },
    exercise: {
        title: 'Your Turn: A "Lateral Reading" Challenge',
        details: [
            'Present the class with a biased or fake news article. Before reading it, challenge them to open new tabs and spend three minutes investigating the *source* itself.',
            'Who is behind the website? What do other reliable sources say about them?',
            'This skill, called "lateral reading," is what professional fact-checkers do and is more effective than trying to analyze the article in isolation.'
        ]
    },
    references: [
        { name: 'ISTE - What is digital citizenship?', url: 'https://www.iste.org/areas-of-focus/digital-citizenship' },
        { name: 'Stanford History Education Group - Civic Online Reasoning', url: 'https://cor.stanford.edu/' }
    ]
  },
  {
    id: 'teacher-screen-time',
    title: 'Managing Screens in School',
    emoji: '📵',
    shortDescription: 'Creating clear policies and a positive culture around technology use in the classroom.',
    explanation: {
      title: 'The Big Idea: It\'s About Clear Routines, Not Constant Battles',
      details: [
        'Personal devices can be a major distraction, but outright bans are often difficult to enforce and can create power struggles. The key is a simple, clear, and consistently enforced classroom system that everyone understands. The goal is to minimize distraction during instruction while teaching students to self-regulate their technology use.'
      ]
    },
    examples: [
        {
          title: 'Deep Dive: The "Phone Pocket" System',
          scenario: ['A high school history teacher is frustrated with students constantly and covertly checking their phones during class discussions.'],
          dialogue: [
            { speaker: 'Teacher', line: '(At the start of class) "Okay everyone, welcome! As you come in, please place your phone in your assigned slot in the pocket chart on the door. This ensures we can all be fully focused for our debate today."' },
            { speaker: 'Student', line: 'What if we\'re expecting an important call?' },
            { speaker: 'Teacher', line: 'Great question. If you have a special circumstance, just let me know before class starts, and we can make an arrangement. Otherwise, all phones go in the holder.' }
          ]
        },
        {
          title: 'Deep Dive: Using Tech for Learning',
          scenario: ['A science teacher wants to use phones for a productive purpose.'],
          dialogue: [
            { speaker: 'Teacher', line: 'Alright, for the next five minutes, you may take out your phones for our "Quick Research" task. Your goal is to find one interesting fact about the planet Mars and post it in our class Padlet. Timers on the board. Go!' }
          ]
        },
        {
          title: 'Deep Dive: The "Earbud" Issue',
          scenario: ['A student consistently has one earbud in, claiming they "focus better with music."'],
          dialogue: [
            { speaker: 'Teacher', line: '(Privately) "I understand that music helps you focus sometimes. During independent work, that can be an option we discuss. During direct instruction like this, my expectation is that we have no earbuds in so we are all present together. Thanks for understanding."' }
          ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'A universal, non-confrontational system like a phone pocket chart shifts the default and reduces the need for individual corrections.',
        'Structuring short, specific tasks where phones are used for learning shows they are tools, not just toys, and teaches appropriate use.',
        'Addressing issues like earbuds privately with clear expectations maintains respect and avoids a public power struggle.'
      ]
    },
    exercise: {
      title: 'Your Turn: Co-Create a Tech Agreement',
      details: [
        'Lead a brief class discussion: "When are our devices helpful for learning? When do they become a distraction?"',
        'Based on their input, co-create a simple 3-point "Classroom Tech Agreement" and post it visibly.',
        'Involving students in creating the rules builds understanding and buy-in, making them more likely to follow the policy.'
      ]
    },
    references: [
      { name: 'Beland, L. P., & Murphy, R. (2016). Ill Communication: Technology, distraction & student performance.', url: 'https://cep.lse.ac.uk/pubs/download/dp1429.pdf' },
      { name: 'Edutopia - A Practical Guide to Phone Policies in Schools', url: 'https://www.edutopia.org/article/practical-guide-phone-policies-schools/' }
    ]
  },
  {
    id: 'supporting-student-well-being',
    title: 'Supporting Student Well-being',
    emoji: '❤️‍🩹',
    shortDescription: 'Recognizing distress and fostering a supportive classroom environment.',
    explanation: {
      title: 'The Big Idea: Small, Consistent Actions Create a Culture of Support',
      details: [
        'Teachers are on the front lines of student mental health. While not expected to be therapists, creating a classroom where students feel safe, seen, and supported is a powerful protective factor. Simple, consistent practices like morning greetings, emotional check-ins, and normalizing mistakes can significantly impact the emotional climate of the classroom.'
      ]
    },
    examples: [
        {
          title: 'Deep Dive: The Withdrawn Student',
          scenario: ['A once-active student has become quiet, withdrawn, and their grades are slipping.'],
          dialogue: [
            { speaker: 'Teacher', line: '(Approaches student privately after class) "Hey, I\'ve noticed you seem a little quieter than usual lately. I just wanted to check in and see if everything is okay. Remember I\'m here if you ever want to talk."' },
            { speaker: 'Student', line: '(Shrugs) "I\'m just tired."' },
            { speaker: 'Teacher', line: '"I get that. We all have those days. Well, the offer still stands. And remember Ms. Davis, the school counselor, is also a great person to chat with if you ever need to."' }
          ]
        },
        {
          title: 'Deep Dive: Normalizing Mistakes',
          scenario: ['A teacher makes a spelling mistake on the whiteboard, and a student points it out.'],
          dialogue: [
            { speaker: 'Student', line: 'Um, you spelled "separate" wrong.' },
            { speaker: 'Teacher', line: '(Smiling genuinely) "Oh, you are absolutely right! Thank you for catching that. See? Everybody\'s brain glitches sometimes, even mine. Let me fix it. Great editing eye!"' }
          ]
        },
        {
          title: 'Deep Dive: Pre-Empting Anxiety',
          scenario: ['A student is visibly anxious about their upcoming class presentation.'],
          dialogue: [
            { speaker: 'Teacher', line: '(Privately, before class) "I know presentations can be nerve-wracking. Would it help if you presented to just me and a friend first? Or if you used note cards? Let\'s find a way that works for you."' }
          ]
        }
    ],
    reflection: {
      title: 'Reflect & Summarize',
      points: [
        'A simple, private check-in shows a student they are seen and valued, opening the door for future communication.',
        'Modeling a positive, non-defensive response to making a mistake creates a classroom culture where academic risk-taking feels safe.',
        'Offering small, private accommodations for anxiety can make a challenging task feel manageable and shows students you are on their team.'
      ]
    },
    exercise: {
      title: 'Your Turn: Implement a "Check-In" System',
      details: [
        'Create a simple, non-verbal check-in system. For example, students can point to a chart with different emojis as they enter, or place a sticky note on a "How are you feeling?" poster.',
        'This gives you a quick daily pulse on the emotional state of your class and helps you identify students who might need a quiet word of support.',
        'It also normalizes the idea that all feelings are okay to have at school.'
      ]
    },
    references: [
      { name: 'American Psychological Association - The Role of Teachers in Promoting Student Well-Being', url: 'https://www.apa.org/education-career/k12/teacher-well-being' },
      { name: 'CASEL - SEL in the Classroom', url: 'https://casel.org/fundamentals-of-sel/sel-in-the-classroom/' }
    ]
  }
];

export const EXAMPLE_PLANS: ExamplePlan[] = [
    // Parent Plans
    {
        id: 'parent-bedtime',
        role: 'parent',
        title: 'The Peaceful Bedtime Plan',
        intro: 'It\'s exhausting when bedtime feels like a battle every night. This plan is designed to create a calm, predictable routine that helps your child feel secure and ready for sleep, reducing protests and "curtain calls."',
        steps: [
            {
                title: 'Step 1: The "Power Down" Hour',
                description: 'One hour before bedtime, turn off all screens. Shift to calm activities like reading, quiet puzzles, or listening to soft music. Dim the lights in the house to signal to their brain that it\'s time to wind down.',
                rationale: 'Screens emit blue light that suppresses melatonin, the hormone that makes us sleepy. A calming routine cues the body and mind for rest, making the transition to bed less jarring.'
            },
            {
                title: 'Step 2: The Visual Routine Chart',
                description: 'Create a simple chart with pictures for each step of the bedtime routine (e.g., bath, pajamas, brush teeth, one book, goodnight hug). Have your child help you make it and decorate it. Let them be in charge of moving a magnet or sticker as you complete each step.',
                rationale: 'Visual aids are very effective for young children. It makes the routine predictable and gives them a sense of control and ownership, reducing anxiety and the need to protest.'
            },
            {
                title: 'Step 3: The "Boring" Return',
                description: 'When your child gets out of bed, calmly and silently lead them back. No lectures, no extra hugs, no frustration. Say only "It\'s sleep time now," tuck them in, and leave. Be a gentle but firm robot.',
                rationale: 'Any extra attention—positive or negative—can reinforce the behavior. Being boring and consistent makes getting out of bed less rewarding, so the behavior will eventually fade away.'
            }
        ]
    },
    {
        id: 'parent-screen-time',
        role: 'parent',
        title: 'The Screen Time Reset Plan',
        intro: 'Tired of the constant battles over screen time? This plan helps you replace arguments with clear boundaries and collaboration, teaching your child to manage their digital life responsibly.',
        steps: [
            {
                title: 'Step 1: Co-Create a Family Media Plan',
                description: 'Sit down with your child during a calm moment. Use the AAP\'s Family Media Plan tool or a simple piece of paper to agree on rules together. Discuss when screens are okay, when they are not (e.g., dinner, bedrooms), and what content is appropriate.',
                rationale: 'When children are involved in creating the rules, they have a greater sense of ownership and are more likely to follow them. It shifts the dynamic from a dictatorship to a collaboration.'
            },
            {
                title: 'Step 2: Use Timers and 5-Minute Warnings',
                description: 'Before screen time begins, agree on the duration and set a visible timer (like an egg timer or a smart speaker). When the timer has 5 minutes left, give a calm verbal warning: "You have 5 minutes left. Find a good place to stop."',
                rationale: 'Transitions are hard for kids. A visual timer makes the limit concrete, not just a parent\'s whim. The 5-minute warning respects their activity and gives them time to mentally prepare, reducing the likelihood of a meltdown.'
            },
            {
                title: 'Step 3: Connect Before You Collect',
                description: 'When the timer goes off, instead of just grabbing the device, connect with them first. Ask, "Show me the coolest thing you built," or "What happened in your show?" Show genuine interest for 60 seconds *before* taking the device.',
                rationale: 'This small act of connection validates their digital world and shows you respect what\'s important to them. It makes the transition smoother and proves that *you*, not the device, are the source of warmth and attention.'
            }
        ]
    },
    {
        id: 'parent-sibling-squabbles',
        role: 'parent',
        title: 'The Sibling Peacemaker Plan',
        intro: 'Constant fighting can be incredibly draining. This plan helps you shift from being a referee in every conflict to a coach who empowers your children to solve their own problems.',
        steps: [
            {
                title: 'Step 1: "Sportscast," Don\'t Judge',
                description: 'When a minor conflict starts, step in as a neutral narrator. Say what you see without blame: "I see two children who both want the same red car. Sam is holding it, and Jack is pulling on his arm." Then wait.',
                rationale: 'This technique, called "sportscasting," de-escalates the situation by showing you understand the problem without taking sides. Often, just hearing their problem described calmly gives children the space to find a solution themselves.'
            },
            {
                title: 'Step 2: Mediate, Don\'t Solve',
                description: 'If they can\'t solve it, guide them. Ask, "This is a tough problem. What are some ideas?" If they\'re stuck, offer a few options: "Could you use a timer? Could you play with it together?" But let them make the final choice.',
                rationale: 'By acting as a mediator, you are teaching them the lifelong skills of negotiation and compromise. You are the coach, not the player.'
            },
            {
                title: 'Step 3: Schedule "Special Time"',
                description: 'Spend at least 10-15 minutes of one-on-one time with each child, every day if possible. Let them choose the activity. Call it "Mommy-Leo Time" or "Daddy-Ava Time." Protect this time fiercely.',
                rationale: 'Much of sibling rivalry is competition for parental attention. When a child\'s "attention cup" is full from positive, individual time with you, they have less need to compete for it, which dramatically reduces conflict.'
            }
        ]
    },
    {
        id: 'parent-picky-eating',
        role: 'parent',
        title: 'The Food Explorer Plan',
        intro: 'Mealtime stress can take the joy out of family dinners. This plan shifts the focus from "getting your child to eat" to "giving your child opportunities to learn about food," reducing pressure and increasing curiosity.',
        steps: [
            {
                title: 'Step 1: The "You Provide, They Decide" Model',
                description: 'As the parent, you are responsible for *what* food is served, *when* it\'s served, and *where* it\'s served. Your child is responsible for *if* they eat and *how much* they eat from what you provide. Always include at least one "safe" food you know they like on the table.',
                rationale: 'This division of responsibility, developed by Ellyn Satter, removes the power struggle. It empowers your child with autonomy over their own body while ensuring they are offered balanced meals. The "safe" food guarantees they won\'t go hungry, reducing anxiety for everyone.'
            },
            {
                title: 'Step 2: Be a Food Explorer, Not a Short-Order Cook',
                description: 'Involve your child in food-related activities outside of mealtimes. Let them wash vegetables, stir batter, or pick out a new fruit at the grocery store. Talk about colors, textures, and smells, with no pressure to taste.',
                rationale: 'Repeated, positive, no-pressure exposure to new foods is the most effective way to overcome food neophobia (fear of new foods). It makes unfamiliar foods familiar and less threatening.'
            },
            {
                title: 'Step 3: Keep it Neutral',
                description: 'Avoid labeling foods as "good" or "bad." Don\'t praise your child for eating vegetables or offer dessert as a reward for finishing their plate. Talk about what foods do for our bodies (e.g., "Carrots help our eyes," "Chicken makes our muscles strong").',
                rationale: 'Using rewards creates a power dynamic and can decrease a child\'s intrinsic interest in the food itself. Neutral language fosters a healthier long-term relationship with all types of food.'
            }
        ]
    },
    // Teacher Plans
    {
        id: 'teacher-disruption',
        role: 'teacher',
        title: 'The Calm Classroom Plan',
        intro: 'Dealing with constant disruptions can derail a lesson and create a stressful environment. This proactive plan helps you build a culture of focus and respect, addressing issues before they begin.',
        steps: [
            {
                title: 'Step 1: The "4-to-1" Relationship Builder',
                description: 'For any student who is frequently disruptive, make a conscious effort to have four positive, non-academic interactions for every one correction. This can be a "Good morning," a comment on their sneakers, or a question about their weekend.',
                rationale: 'Disruptive behavior often stems from a need for attention or a lack of connection. Building a positive relationship ensures the student feels seen and valued for who they are, not just for their behavior, which increases their motivation to cooperate.'
            },
            {
                title: 'Step 2: Proximity and Private Cues',
                description: 'Instead of stopping the class to correct a student from across the room, use proximity. Simply move and stand near the student\'s desk as you continue teaching. If needed, give a brief, quiet, private redirection: "I need you with me, thanks."',
                rationale: 'Public corrections can trigger a power struggle, especially with adolescents who are sensitive to social status. Private, non-verbal cues are more respectful, less disruptive to the class, and far more effective.'
            },
            {
                title: 'Step 3: The "Brain Break" Reset',
                description: 'Plan for short, 1-2 minute "brain breaks" during long instructional blocks. This could be a quick stretching exercise, a simple game, or a moment of quiet music. When you see focus waning, call for a reset.',
                rationale: 'Attention is a finite resource. Proactively scheduling breaks helps students reset their focus, which prevents the restlessness and off-task behavior that often leads to disruption. It addresses the cause, not just the symptom.'
            }
        ]
    },
    {
        id: 'teacher-engagement',
        role: 'teacher',
        title: 'The Engagement Igniter Plan',
        intro: 'Facing a sea of blank stares is a teacher\'s nightmare. This plan provides strategies to boost participation and connect your curriculum to students\' lives, making learning more active and meaningful.',
        steps: [
            {
                title: 'Step 1: Start with Choice',
                description: 'Wherever possible, build small choices into your assignments. This doesn\'t mean creating 30 different lessons. It could be as simple as letting students choose between two different essay prompts, select which problems to solve, or decide whether to work alone or with a partner.',
                rationale: 'Autonomy is a primary psychological need. Even small choices increase a student\'s sense of ownership and investment in their work, which is a powerful intrinsic motivator.'
            },
            {
                title: 'Step 2: "Turn and Talk"',
                description: 'Before asking students to share with the whole class, have them turn to a neighbor and share their thoughts first. Use this strategy frequently. "Turn and talk to your partner about one question you still have."',
                rationale: 'This low-stakes strategy ensures that every single student is participating and gives them a chance to rehearse their ideas in a safe setting. It dramatically increases the quality and quantity of responses when you open it up to the whole group.'
            },
            {
                title: 'Step 3: Connect to Their World',
                description: 'Actively find ways to connect your content to their interests. Relate a historical event to a popular movie, use a video game to explain a scientific concept, or frame a math problem around a real-world social issue they care about.',
                rationale: 'Learning happens when new information can be attached to existing knowledge and experiences. Making the content relevant to their lives answers the implicit question, "Why do I need to know this?"'
            }
        ]
    }
];

export const FAQ_DATA: FAQItem[] = [
    {
        role: 'parent',
        question: 'Is it normal for my toddler to have huge tantrums? How should I react?',
        answer: 'Yes, tantrums are a completely normal part of development for toddlers. Their brains are still developing the capacity for self-regulation. The best reaction is to stay calm yourself. Validate their feeling ("You are so angry that we have to leave the park") but hold the boundary ("It\'s still time to go"). Acting as a calm anchor helps them learn to manage their big feelings.'
    },
    {
        role: 'parent',
        question: 'My teen won\'t talk to me about anything. How can I get them to open up?',
        answer: 'This is a common frustration. Try shifting from direct questions ("How was school?") to making observations ("You seem tired today"). Find moments to connect that aren\'t face-to-face, like in the car or while doing dishes, which can feel less confrontational. Also, show genuine interest in their world—ask about their favorite video game or music, even if you don\'t get it. Small, consistent efforts build trust over time.'
    },
    {
        role: 'parent',
        question: 'Should I use a reward chart for things like potty training or chores?',
        answer: 'Reward charts can be effective in the short-term for specific, time-limited goals like potty training. However, for ongoing behaviors like chores, research suggests that relying on external rewards can diminish a child\'s internal motivation. A better long-term strategy is to focus on teamwork and contribution, framing chores as something we all do to help our family run smoothly.'
    },
    {
        role: 'teacher',
        question: 'A student is constantly out of their seat and distracting others. What can I do?',
        answer: 'First, consider the "why." Is the student seeking sensory input? Are they trying to avoid a task? Try building movement into your lessons for all students. You can also give the student a specific "job" that allows for movement, like being the paper collector. For some students, an elastic band on their chair legs for them to kick can provide sensory input without them needing to leave their seat.'
    },
    {
        role: 'teacher',
        question: 'How do I handle a student who just says "I don\'t know" to every question?',
        answer: 'This can stem from a fear of being wrong or a lack of confidence. Try reducing the stakes. Use a "turn and talk" so they can rehearse their answer with a peer first. You can also say, "That\'s a tricky question. What\'s your best guess?" or "What part of the question do you understand?" This validates that it\'s okay not to have the perfect answer right away and encourages them to engage.'
    },
    {
        role: 'teacher',
        question: 'What is the best way to communicate with parents about a behavioral issue?',
        answer: 'Start with a positive foundation *before* there\'s a problem. A brief, positive email or note home early in the year ("Just wanted to let you know Leo had a great day today!") makes a huge difference. When you do need to discuss a challenge, try the "sandwich" approach: start with a strength or positive observation, state the concern clearly and objectively, and then end by collaborating on a solution ("What strategies have you found work well at home?").'
    },
    {
        role: 'all',
        question: 'What does "evidence-based" mean?',
        answer: 'Evidence-based means that the strategies and guidance provided are not just based on opinion, but are supported by scientific research. This includes findings from developmental psychology, pediatric studies, and educational research published in peer-reviewed journals. It\'s about using what science has shown to be effective.'
    },
    {
        role: 'all',
        question: 'Why does the app have separate sections for parents and teachers?',
        answer: 'While parents and teachers share the common goal of helping children thrive, they operate in very different contexts. The challenges of a classroom, with 25+ students, are different from the challenges of a home. By tailoring the content, examples, and strategies to each specific role, we can provide more relevant, practical, and effective guidance.'
    }
];
