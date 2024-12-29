import { Event } from '../types';

export const events: Event[] = [
  {
    id: 'paper-presentation',
    title: 'InsightExpo',
    type: 'technical',
    description: 'Present your research papers / prototype on cutting-edge AI and Data Science topics.',
    rules: [
      'Team size: 2-4 members',
      'Time limit: 10 minutes presentation + 5 minutes Q&A',
      'Submit abstract before 24 hours',
      'PowerPoint presentation required',
      'Originality, Creativity and Presentation Skills will be Awarded'
    ],
    coordinators: [
      { name: 'Naga Arjun', phone: '+91 8825676844' },
      { name: 'Athirai', phone: '+91 8098437659' },
    ],
    slots: ['10:00 AM - 11:30 AM', '1:00 PM - 2:30 PM'], // Added slot timings
  },
  {
    id: 'prompt-craft',
    title: 'Prompt Craft',
    type: 'technical',
    description:
      'Test your prompt engineering skills in two rounds: generate an image using AI to match a given image and prompt a chatbot to reveal its password!',
    rules: [
      'Team size: 1-2 members',
      'Pre-registration required; limited on-spot entries.',
      'Round 1: Prompt an AI to generate an image similar to the given one.',
      'Round 2: Prompt the chatbot to reveal its password.',
      'Each round is timed, so think fast and act smart.',
      'Misconduct leads to disqualification.',
    ],
    coordinators: [
      { name: 'Trisha', phone: '+91 8939321031' },
      { name: 'Dhanush', phone: '+91 7339483368' },
    ],
    slots: ['10:00 AM - 12:00 PM'],
  },
  {
    id: 'duo-devs',
    title: 'Duo Devs',
    type: 'technical',
    description:
      'Team up with a friend to solve problems while swapping roles at regular intervals — only one codes at a time, with the final collaboration allowing both to code together!',
    rules: [
      'Team size: 2 members',
      'Platform: Conducted on a competitive coding platform (TBA; account required for registration).',
      'Coding & Idle Roles: One teammate codes while the other sits idle/work it out on paper (no talking between members until the last swap).',
      'Roles swap every 10 minutes (4 swaps in total).',
      'Final Collaboration: For the last swap, both teammates can communicate and code together.',
      'Evaluation: Time complexity of code will be the tiebreaker if teams finish at the same time.',
      'Misconduct: Misconduct/malpractice will lead to disqualification.',
    ],
    coordinators: [
      { name: 'Kezia', phone: '+91 98843 00863' },
      { name: 'Shreeram', phone: '+91 70109 21617' },
    ],
    slots: ['10:00 AM - 11:30 AM', '1:00 PM - 2:30 PM'],
  },
  {
    id: 'sql-detectives',
    title: 'SQL Detectives',
    type: 'technical',
    description:
      'Step into the shoes of a detective and test your SQL skills by solving mysteries using queries. Work solo to uncover clues and prove your expertise!',
    rules: [
      'Team size: 1-2 members',
      'Solve mysteries by querying a pre-loaded database.',
      'Strictly no external resources allowed.',
      'Misconduct leads to disqualification.',
      'Prizes for winners who crack the case fastest and most efficiently!',
      'Coordinators\' decisions are final.',
    ],
    coordinators: [
      { name: 'Ranjith Kumar R', phone: '+91 6380875936' },
      { name: 'Tanisha M', phone: '+91 9962723842' },
    ],
    slots: ['10:00 AM - 11:30 AM', '1:00 PM - 2:30 PM'],
  },
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    type: 'technical',
    description:
      'Solve a problem by creating a high-fidelity frontend and an efficient backend. The winner will be the participant who creates the best website or app!',
    rules: [
      'Team size: 1-2 members.',
      'All project work must be original and developed during the competition.',
      'Participants may use pre-built libraries, frameworks, and AI tools (e.g., ChatGPT, GitHub Copilot, OpenAI APIs) but must declare their usage.',
      'Any plagiarism will result in immediate disqualification.',
      'Originality and creativity of the solution are an advantage.',
      'The application must meet the requirements of the theme/problem statement.',
    ],
    coordinators: [
      { name: 'Tharun E', phone: '+91 98843 63679' },
      { name: 'Sanjay Kumar K', phone: '+91 95510 46698' },
      { name: 'Dhanushiya S M', phone: '+91 96775 24443' },
    ],
    slots: ['10:00 AM - 11:30 AM', '1:00 PM - 2:30 PM'],
  },
  {
    id: 'ml-workshop',
    title: 'Machine Learning Workshop',
    description: 'Hands-on workshop on advanced ML techniques with industry experts.',
    type: 'workshop',
    rules: [
      'Basic Python knowledge required',
      'Laptop with minimum 8GB RAM',
      'Pre-installation guide will be shared',
      'Certificate provided'
    ],
    coordinators: [
      {
        name: 'xyz',
        phone: '+91 9876543216',
      }
    ]
  },
  {
    id: "IPL-Auction",
    title: "Pitch Perfect  The Bidding Edition",
    description:"Experience cricket trivia and strategy in an electrifying IPL auction showdown event!",
    rules: [
      "This event contains 2 rounds: 1. Quiz 2. Auction",
      "Round 1: General Cricket Quiz",
      "The first round will consist of a general cricket quiz.",
      "Top 10 teams from this round will be selected to proceed to the next round.",
      "Round 2: IPL Auction",
      "A list of auctioned players will be provided to all teams 15 minutes before the auction starts.",
      "Each team will have a budget of 75 Cr.",
      "Teams must select 15 players: 11 players for the starting XI, 4 players as impact subs.",
      "Player Selection Limit: 10 Indian players and 5 foreign players are allowed. A maximum of 4 foreign players can be included in the playing XI.",
      "Important Notes: Teams must select their squad within the budget (75 Cr). Teams exceeding the budget will be eliminated.",
      "Evaluation: We will analyze each team and assign a price based on the quality, combination, and impact of the team.",
      "Our decision regarding the team evaluation will be final.",
    ],
    coordinators: [
      { name: "Prithi Prasanna.P", phone: "+91 7904185295" },
      { name: "Ari Prasanna.T", phone: "+91 6374719024" },
    ],
    type: "non-technical",
    slots: ["10:00 AM to 3:00 PM"],
  },
  {
    id: "Teasure Hunt",
    title: "Jumanji - Hunt for the Unknown",
    description:
      "Embark on a thrilling adventure to solve cryptic clues and uncover hidden treasures!",
    rules: [
      "Each team must consist of 3 to 6 members.",
      "Participants can attend anytime between 10:00 AM and 2:00 PM.",
      "Teams will receive their first clue at the starting point.",
      "Teams must complete each challenge to receive the next clue.",
      "The winner will be decided based on the shortest time taken to discover the treasure.",
      "In case of a tie, the team that solved the most challenges independently will be declared the winner.",
      "Teams must not tamper with clues or interfere with other teams.",
      "Fair play is mandatory; violations may lead to disqualification.",
    ],
    coordinators: [
      { name: "Pranav kumar.G", phone: "+91 9360482918" },
      { name: "Madhu shri.P", phone: "+91 8610108937" },
    ],
    type: "non-technical",
    slots: ["10:00 AM to 2:00 PM"],
  },
  {
    id: "Sound Party",
    title: "Sound Party - Let's Rock and Roll",
    description:
      "A musical showdown featuring three exciting rounds of creativity, teamwork, and quick thinking!",
    rules: [
      "Teams must consist of 2-3 members.",
      "Points are awarded based on accuracy and speed in guessing.",
      "No direct verbal clues or humming is allowed unless specified.",
      "Judges' decisions are final.",
      "Ensure fair play and maintain enthusiasm throughout the event.",
    ],
    coordinators: [
      { name: "Ishwarya", phone: "+91 7904731364" },
      { name: "Preethi Varthini A", phone: "+91 6369715637" },
    ],
    type: "non-technical",
    slots: ["10:00 AM – 12:00 PM"],
  },
  {
    id: "Spotlight",
    title: "Spotlight - The ADventure Time",
    description:
      "Showcase your creativity and humor in two fun-filled rounds of innovative advertising!",
    rules: [
      "Each team must consist of 2 to 3 members.",
      "A random advertisement name will be assigned to each team.",
      "One member acts out the advertisement without speaking or using props.",
      "Other members guess the ad name within 1 minute.",
      "No verbal clues, writing, or drawing is allowed.",
      "Failing to guess within the time limit results in no points.",
      "A random product or concept will be assigned to each team.",
      "Teams have 3 minutes to prepare their advertisement concept.",
      "The entire team must present the ad.",
      "Teams have 5 minutes to perform their advertisement.",
      "Ads may include a tagline, demo/skit, humor, or creativity.",
      "Points awarded for creativity, presentation, and entertainment.",
      "Exceeding the time limit results in a point deduction.",
    ],
    coordinators: [
      { name: "Jerusha.C.R", phone: "+91 7904665930" },
      { name: "Gowtham.S", phone: "+91 9345713707" },
    ],
    type: "non-technical",
    slots: ["12:30 PM - 2:00 PM"],
  },
  {
    id: "Recall Quest",
    title: "Recall Quest - Think, Remember, Conquer!",
    description:
      "Challenge your memory and teamwork across three exciting levels in this electrifying quest!",
    rules: [
      "Each team must have 2 participants.",
      "No cheating or use of external aids (e.g., notes, phones). Non-compliance will lead to disqualification.",
      "Level 1: Watch carefully and recall accurately—order matters! In case of a tie, another quick visual challenge will decide.",
      "Level 2: Listen closely, remember the sequence, and repeat it perfectly. Longer sequences settle ties.",
      "Level 3: Relay the flashcard sequence with precision and teamwork. Start your arrangement with the Memory Passphrase Challenge!",
      "Winners are decided based on accuracy and time taken.",
      "Players must be fully cooperative with the timers and follow all instructions.",
      "Judge decisions are final.",
      "Have fun and give it your best shot!",
    ],
    coordinators: [
      { name: "Sivaksha Sivagami.A.P", phone: "+91 7604997897" },
      { name: "Praveen Kumar.S", phone: "+91 9444552899" },
    ],
    type: "non-technical",
    slots: ["10:00 AM TO 12:00 PM"],
  },
  {
    id: "BGMI",
    title: "Gaming Galaxy  The Code Blood [BGMI Classic]",
    description:
      "Compete in thrilling BGMI matches across Classic and TDM modes to claim victory!",
    rules: [
      "Account level should be above 25.",
      "iPad, Emulator, Tablets are not allowed.",
      "Wi-Fi, Earphones, Power backup will not be provided.",
      "Plugins (Files), Triggers, Third-party Apps (GFX Tool) are not allowed.",
      "Tiebreakers will be determined based on total times of winning from previous matches.",
      "No team-ups.",
      "Placement Points (Classic): 1st - 10 pts, 2nd - 6 pts, 3rd - 5 pts, 4th - 4 pts, 5th - 3 pts, 6th - 2 pts, 7th-8th - 1 pt, 9th-16th - 0 pts, Per kill - 2 pts.",
      "Top 4 teams from Round-2 in Classic matches qualify for Round-3 TDM.",
      "Only M416 is allowed in TDM.",
      "In case of ties, a rematch will be conducted in TDM.",
    ],
    coordinators: [{ name: "Subash", phone: "+91 9884692100" }],
    type: "non-technical",
    slots: ["12:30 PM to 2:30 PM"],
  },
  {
    id: "FREE FIRE",
    title: "Gaming Galaxy – The Code Blood [FREE FIRE]",
    description:
      "Compete in Free Fire matches across Classic and Clash Squad modes for the ultimate victory!",
    rules: [
      "New accounts are not allowed.",
      "iPad, Tablet, PC are not allowed.",
      "Charger, power supply, network are not provided.",
      "Triggers are not allowed.",
      "Finger sleeves, powder are allowed.",
      "Tiebreakers will be determined based on kill points and position points.",
      "Top 4 teams will be selected based on the point system in Round 1.",
      "In case of ties, a rematch will be conducted.",
      "Character skills and Gun skins are turned off.",
    ],
    coordinators: [{ name: "Manish", phone: "+91 9150272747" }],
    type: "non-technical",
    slots: ["12:30 PM to 2:30 PM"],
  }  
];