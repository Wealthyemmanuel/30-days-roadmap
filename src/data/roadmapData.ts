export interface RoadmapDay {
  day: number;
  week: number;
  weekTitle: string;
  phase: string;
  title: string;
  objective: string;
  actionItem: string;
  whatToAvoid: string;
  estimatedMinutes: number;
  keyQuestion: string;
}

export const ROADMAP_WEEKS = [
  {
    week: 1,
    title: "Week 1: Foundation & Offer Clarity",
    description: "Understand the core mechanics, select your single target niche, and choose one vetted product you believe in.",
    days: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    week: 2,
    title: "Week 2: Audience & Traffic Engine",
    description: "Identify the exact humans facing the problem your offer solves, and choose ONE single traffic channel to master.",
    days: [8, 9, 10, 11, 12, 13, 14],
  },
  {
    week: 3,
    title: "Week 3: Content, Trust & Lead Conversations",
    description: "Publish problem-aware content, build genuine credibility, and learn how to begin helpful 1-on-1 conversations.",
    days: [15, 16, 17, 18, 19, 20, 21],
  },
  {
    week: 4,
    title: "Week 4: Conversion, Consistency & Daily Momentum",
    description: "Master ethical recommendation closing, measure your numbers, diagnose leaks, and establish your daily execution routine.",
    days: [22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
];

export const ROADMAP_DAYS: RoadmapDay[] = [
  // WEEK 1: Foundation & Offer Clarity
  {
    day: 1,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Understanding the Mechanics",
    title: "How Affiliate Marketing Really Works in 2026",
    objective: "Strip away the hype and understand the actual value chain: Buyer problem → Your guidance/trust → Merchant solution → Commission.",
    actionItem: "Write down the 3 parties involved in any affiliate sale. Realize you are not a 'salesperson' pitching products; you are a trusted advisor connecting a painful problem to a working solution.",
    whatToAvoid: "Browsing 50 different affiliate networks before you even know who you want to help.",
    estimatedMinutes: 30,
    keyQuestion: "Do I understand that my only job is solving someone's problem through a vetted recommendation?"
  },
  {
    day: 2,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Niche Selection",
    title: "Picking One Single Problem-Solving Category",
    objective: "Select ONE domain where people are actively spending money to fix an acute pain point or achieve an urgent desire.",
    actionItem: "Choose between Health/Fitness, Wealth/Business/Skill, or Relationships/Productivity. Commit to ONE for the entire 30 days.",
    whatToAvoid: "Trying to do multi-niche marketing or picking a category just because someone on TikTok said it's 'easy money'.",
    estimatedMinutes: 45,
    keyQuestion: "Can I explain who gets helped in this niche in one simple sentence?"
  },
  {
    day: 3,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Product Evaluation",
    title: "The Anatomy of a High-Converting Offer",
    objective: "Learn what makes a product actually sellable: social proof, clean sales copy, fair refund policy, and legitimate customer results.",
    actionItem: "Find 3 potential affiliate products in your chosen niche. Audit their sales page: Is the promise clear? Does it have real testimonials? Would you buy it yourself?",
    whatToAvoid: "Signing up for low-commission physical products that pay $1.50 per sale while requiring thousands of clicks.",
    estimatedMinutes: 40,
    keyQuestion: "Would I honestly recommend this to a close friend or family member if they had this problem?"
  },
  {
    day: 4,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Offer Selection",
    title: "Locking In Your Single Flagship Product",
    objective: "Make the final decision and apply for affiliate approval on your ONE flagship product.",
    actionItem: "Sign up for the affiliate program of your chosen product. Get your unique tracking link and test that it properly redirects and tracks.",
    whatToAvoid: "Grabbing 10 different affiliate links to promote at the same time. One offer gives you complete focus.",
    estimatedMinutes: 35,
    keyQuestion: "Do I have my approved tracking link securely saved in my notes?"
  },
  {
    day: 5,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Product Deep Dive",
    title: "Studying What the Product Actually Solves",
    objective: "Understand every feature, benefit, objection, and transformation delivered by your chosen product.",
    actionItem: "List the top 5 questions a beginner would have before buying this product, and write down the honest answers based on the product materials.",
    whatToAvoid: "Copy-pasting the merchant's generic promotional swipe copy without understanding the buyer's emotion.",
    estimatedMinutes: 45,
    keyQuestion: "What is the #1 pain this product eliminates for the buyer?"
  },
  {
    day: 6,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Link Hygiene & Disclosure",
    title: "Setting Up Clean Link Routing & Ethical Disclosures",
    objective: "Prepare clean short-links and understand mandatory FTC/legal affiliate disclosure requirements.",
    actionItem: "Create a branded short link (or simple landing bridge) and write your transparent 1-sentence affiliate disclosure statement.",
    whatToAvoid: "Spamming raw ugly tracking links directly on social platforms or hiding affiliate relationships.",
    estimatedMinutes: 30,
    keyQuestion: "Is my recommendation 100% transparent and compliant?"
  },
  {
    day: 7,
    week: 1,
    weekTitle: "Foundation & Offer Clarity",
    phase: "Week 1 Checkpoint",
    title: "Week 1 Review: Foundation Complete",
    objective: "Audit your foundation before moving into audience and traffic.",
    actionItem: "Confirm you have: 1 clear niche, 1 approved flagship offer, a deep grasp of what it solves, and your link ready. Rest your mind for Week 2.",
    whatToAvoid: "Second-guessing your product and restarting from scratch. Stick with your choice.",
    estimatedMinutes: 25,
    keyQuestion: "Am I ready to stop researching offers and start reaching real humans?"
  },

  // WEEK 2: Audience & Traffic Engine
  {
    day: 8,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Audience Identification",
    title: "Defining Your Ideal Buyer Avatar",
    objective: "Get crystal clear on who specifically is struggling with the problem your offer solves.",
    actionItem: "Fill out the 4-point avatar profile: Where are they currently stuck? What have they tried that failed? What do they desire in 30 days? What words do they use?",
    whatToAvoid: "Saying 'my product is for everybody'. When you speak to everybody, nobody listens.",
    estimatedMinutes: 40,
    keyQuestion: "Can I picture the exact person sitting on their phone searching for a solution late at night?"
  },
  {
    day: 9,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Watering Holes",
    title: "Locating Where Your Audience Already Hangs Out",
    objective: "Find existing communities where people discuss this problem daily.",
    actionItem: "Find 3 active places (Facebook groups, subreddits, YouTube comment sections, or X communities) where people ask questions related to your niche.",
    whatToAvoid: "Joining communities and dropping your affiliate link immediately. That guarantees an instant ban.",
    estimatedMinutes: 45,
    keyQuestion: "Where do my ideal buyers gather to vent about their struggles?"
  },
  {
    day: 10,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Traffic Channel Commitment",
    title: "Choosing Your Single Primary Traffic Engine",
    objective: "Pick ONE primary channel to generate organic attention over the next 3 weeks.",
    actionItem: "Choose ONE: Short-form video (TikTok/Reels/Shorts), Written Social (X/LinkedIn/Facebook), or Direct Community/WhatsApp. Commit to it completely.",
    whatToAvoid: "Attempting to launch a blog, a podcast, a YouTube channel, and 3 social profiles simultaneously.",
    estimatedMinutes: 30,
    keyQuestion: "Which platform matches my natural strengths (writing, speaking, or 1-on-1 chatting)?"
  },
  {
    day: 11,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Profile Optimization",
    title: "Optimizing Your Profile As a Helpful Authority",
    objective: "Turn your social profile into a clean digital storefront that immediately communicates who you help.",
    actionItem: "Rewrite your bio using this formula: 'I help [avatar] do [result] without [biggest pain]. DM me or tap below for [free resource].'",
    whatToAvoid: "Vague inspirational quotes or aggressive 'DM me to get rich quick' claims.",
    estimatedMinutes: 35,
    keyQuestion: "Does my profile make it immediately clear what problem I help solve?"
  },
  {
    day: 12,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Listening & Market Research",
    title: "Mining Real Questions and Frustrations",
    objective: "Collect 10 real questions and pain phrases directly from prospective buyers.",
    actionItem: "Browse community threads in your niche. Copy-paste 10 exact questions people asked this week into a swipe file. These are your upcoming content topics.",
    whatToAvoid: "Guessing what people care about instead of reading their actual words.",
    estimatedMinutes: 40,
    keyQuestion: "What is the most frequently asked beginner question in this niche?"
  },
  {
    day: 13,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Organic Inbound Mechanics",
    title: "Understanding Inbound vs Outbound Traffic",
    objective: "Learn how to attract people who raise their hands rather than cold spamming strangers.",
    actionItem: "Map out the simple 3-step inbound flow: Helpful post answering a specific problem → Call to action to ask for more info → 1-on-1 direct conversation.",
    whatToAvoid: "Sending unsolicited spam links to hundreds of random people's direct messages.",
    estimatedMinutes: 35,
    keyQuestion: "How will my content invite people to ask me for the solution?"
  },
  {
    day: 14,
    week: 2,
    weekTitle: "Audience & Traffic Engine",
    phase: "Week 2 Checkpoint",
    title: "Week 2 Review: Traffic Strategy Locked",
    objective: "Confirm your avatar, community watering holes, and single traffic channel are set.",
    actionItem: "Review your 10 question swipe file and verify your profile is optimized. Prepare for content creation in Week 3.",
    whatToAvoid: "Changing your traffic platform just because you saw another guru claim their platform is easier.",
    estimatedMinutes: 20,
    keyQuestion: "Is my chosen platform ready to receive its first helpful piece of content?"
  },

  // WEEK 3: Content, Trust & Lead Conversations
  {
    day: 15,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "Content Strategy",
    title: "The Problem-Aware Content Formula",
    objective: "Understand how to write content that addresses people who know they have a problem but don't know the solution.",
    actionItem: "Study the 3 parts of effective content: 1. The Hook (names the specific pain), 2. The Insight (explains WHY it happens), 3. The Takeaway (what to do today).",
    whatToAvoid: "Posting generic motivational quotes or regurgitating Wikipedia definitions.",
    estimatedMinutes: 35,
    keyQuestion: "Does my content acknowledge the pain the reader is feeling right now?"
  },
  {
    day: 16,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "First Value Post",
    title: "Drafting & Publishing Your First Value Post",
    objective: "Break the publishing barrier by answering Question #1 from your swipe file.",
    actionItem: "Write and publish one clean, actionable post that genuinely answers one common mistake people make in your niche.",
    whatToAvoid: "Obsessing over likes and follower counts on Day 1. The goal is building proof of consistency.",
    estimatedMinutes: 45,
    keyQuestion: "Did I provide genuine insight before asking for anything in return?"
  },
  {
    day: 17,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "Trust Building",
    title: "Sharing Your Learning Journey (Document, Don't Preach)",
    objective: "Eliminate impostor syndrome by framing your content as a documented journey rather than pretending to be a guru.",
    actionItem: "Publish a post sharing 3 lessons you learned this week as you studied this topic, and what mistake you would tell others to avoid.",
    whatToAvoid: "Faking lifestyle wealth or claiming to have made millions when you're just getting started.",
    estimatedMinutes: 40,
    keyQuestion: "Am I communicating with honest authenticity?"
  },
  {
    day: 18,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "Call-to-Action Design",
    title: "Crafting a Low-Friction Hand-Raiser CTA",
    objective: "Learn how to end content with an invitation that prompts interested people to comment or reach out.",
    actionItem: "Create a simple resource offer (a 1-page checklist or recommended tool breakdown) and end your post with: 'Comment GUIDE or drop a DM and I'll send it over for free.'",
    whatToAvoid: "Putting raw affiliate links directly in the post body where algorithms penalize reach.",
    estimatedMinutes: 35,
    keyQuestion: "Is my call to action so low friction that an interested person feels safe reaching out?"
  },
  {
    day: 19,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "Conversation Starter",
    title: "How to Start Conversations Without Being Pushy",
    objective: "Learn the consultative diagnostic framework for welcoming people who raise their hands.",
    actionItem: "When someone engages or asks for the guide, reply warmly: 'Hey [Name], sent the link over! Curious, what made you look into this today?'",
    whatToAvoid: "Dropping the affiliate link and pitching within the first 10 seconds of a direct message.",
    estimatedMinutes: 40,
    keyQuestion: "Am I asking questions to genuinely diagnose their situation first?"
  },
  {
    day: 20,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "Diagnosing the Need",
    title: "Identifying the Exact Gap Before Recommending",
    objective: "Understand how to discover what they have already tried and where they are stuck.",
    actionItem: "Practice asking 2 diagnostic questions in conversation: 1. 'What have you tried so far?' 2. 'What's the main roadblock stopping you right now?'",
    whatToAvoid: "Assuming every person needs the product right away. If it's not a fit, be honest and say so.",
    estimatedMinutes: 35,
    keyQuestion: "Do I know their exact roadblock before I even think about mentioning the solution?"
  },
  {
    day: 21,
    week: 3,
    weekTitle: "Content, Trust & Lead Conversations",
    phase: "Week 3 Checkpoint",
    title: "Week 3 Review: Content Cadence & Conversation Flow",
    objective: "Assess your published content and initial conversations.",
    actionItem: "Review your posted content. Notice what questions received responses. Celebrate having real conversations with real humans.",
    whatToAvoid: "Getting discouraged if your first few conversations didn't immediately buy. Building trust takes repetition.",
    estimatedMinutes: 25,
    keyQuestion: "Have I shifted from 'hoping for a click' to 'helping a specific human'?"
  },

  // WEEK 4: Conversion, Consistency & Daily Momentum
  {
    day: 22,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Ethical Recommendation",
    title: "The Natural Product Transition",
    objective: "Learn how to introduce your affiliate product as the natural bridge between where they are and where they want to be.",
    actionItem: "Practice this transition phrase: 'Based on what you shared about [pain], the resource that helped me solve that exact thing is [Product]. Would it be helpful if I shared the link with you?'",
    whatToAvoid: "Hard-selling, applying false scarcity, or pressuring someone who said they aren't ready.",
    estimatedMinutes: 35,
    keyQuestion: "Did I obtain permission before sending the recommendation link?"
  },
  {
    day: 23,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Handling Common Hesitations",
    title: "Addressing Objections With Empathy",
    objective: "Understand the common reasons people hesitate (time, cost, doubt in themselves) and how to support them.",
    actionItem: "Draft respectful answers to the two most common buyer concerns: 'I don't have enough time' and 'What if this doesn't work for me?'.",
    whatToAvoid: "Arguing with prospects or being defensive. Validate their concern first.",
    estimatedMinutes: 40,
    keyQuestion: "Can I address their worry with calm reassurance and facts?"
  },
  {
    day: 24,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Following Up",
    title: "The Non-Awkward Follow-Up System",
    objective: "Learn why 70% of decisions happen on the follow-up, and how to follow up without being annoying.",
    actionItem: "Follow up with anyone you spoke with 48 hours ago: 'Hey [Name], just checking in to see if you got a chance to look over that resource, or if you had any questions on it!'",
    whatToAvoid: "Ghosting conversations after one message or sending aggressive 'Did you buy yet?' pings.",
    estimatedMinutes: 30,
    keyQuestion: "Do I have a simple list of people to gently follow up with after 2 days?"
  },
  {
    day: 25,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Tracking Metrics",
    title: "Tracking Your Daily Controllable Inputs",
    objective: "Shift your focus from unpredictable outcomes (sales) to 100% controllable daily inputs.",
    actionItem: "Track these 3 daily numbers: 1. Pieces of content published (1), 2. Hand-raisers/conversations started (2–5), 3. Product links shared with permission (1–2).",
    whatToAvoid: "Refreshing your affiliate dashboard 40 times a day expecting magic.",
    estimatedMinutes: 25,
    keyQuestion: "Did I hit my 3 controllable daily inputs today?"
  },
  {
    day: 26,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Diagnosing Leaks",
    title: "Troubleshooting Your Funnel",
    objective: "Diagnose where the friction is when results aren't happening yet.",
    actionItem: "Use the 3-step diagnostic: No traffic? Fix your hook. Traffic but no conversations? Fix your CTA. Conversations but no sales? Fix your diagnosis/product fit.",
    whatToAvoid: "Throwing away your entire strategy when only one small step in the chain needs adjustment.",
    estimatedMinutes: 35,
    keyQuestion: "Which specific link in my 3-step chain needs a slight improvement?"
  },
  {
    day: 27,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Systematizing Routine",
    title: "Building a 60-Minute Daily Execution Habit",
    objective: "Condense your entire daily affiliate workflow into a repeatable 1-hour block.",
    actionItem: "Schedule your 60-minute daily block: 20 min writing content, 20 min answering conversations, 20 min learning/auditing inputs.",
    whatToAvoid: "Spending 4 hours aimlessly scrolling social media pretending it's 'work'.",
    estimatedMinutes: 30,
    keyQuestion: "At what time of day will I execute my uninterrupted 60-minute block?"
  },
  {
    day: 28,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "The 30-Day Milestone",
    title: "Reviewing Your 30-Day Transformation",
    objective: "Acknowledge how much you have achieved: moving from complete confusion to having a working system in place.",
    actionItem: "Write down 3 things you now understand that you didn't know 30 days ago. Notice how you no longer need to jump from video to video.",
    whatToAvoid: "Comparing your Day 30 to someone else's Year 5. You have established direction.",
    estimatedMinutes: 25,
    keyQuestion: "Do I now know exactly what to do every morning when I open my computer?"
  },
  {
    day: 29,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Systems & Optimization",
    title: "Direction vs Execution: Building Your Daily Routine",
    objective: "Consolidate everything learned into a repeatable 30-minute daily operational routine.",
    actionItem: "Schedule a non-negotiable 30-minute daily execution window on your calendar for publishing content and having genuine helper conversations.",
    whatToAvoid: "Falling back into random information consumption. Stick to your daily operational window.",
    estimatedMinutes: 30,
    keyQuestion: "Is my daily execution time clearly blocked out on my calendar?"
  },
  {
    day: 30,
    week: 4,
    weekTitle: "Conversion, Consistency & Daily Momentum",
    phase: "Milestone Completion",
    title: "Graduation Day: 30 Days of Clarity & Momentum",
    objective: "Celebrate completing the 30-day starter roadmap and commit to continuous compound execution.",
    actionItem: "Review your full 30-day checklist. Note your top 3 wins and keep executing your daily routine without jumping between shiny objects.",
    whatToAvoid: "Stopping your momentum. Consistency is where compound growth happens.",
    estimatedMinutes: 30,
    keyQuestion: "Am I committed to executing this proven path consistently?"
  }
];

export const CORE_ROADMAP_BENEFITS = [
  {
    number: "01",
    title: "Understanding How Affiliate Marketing Actually Works",
    description: "Demystify the mechanics without the guru jargon. See the true value chain between customer problems, trusted guidance, and merchant payouts.",
  },
  {
    number: "02",
    title: "Getting Clear on What You're Promoting",
    description: "Learn how to filter out junk offers and select one high-integrity, high-converting product that delivers legitimate results for buyers.",
  },
  {
    number: "03",
    title: "Identifying the Audience You Want to Reach",
    description: "Define the specific human who is actively searching for the solution you have, avoiding the mistake of speaking to everyone and reaching no one.",
  },
  {
    number: "04",
    title: "Understanding Traffic & How to Attract Potential Buyers",
    description: "Master the principles of inbound interest so prospective buyers raise their hands to talk with you instead of you chasing cold strangers.",
  },
  {
    number: "05",
    title: "Creating Useful Content",
    description: "Simple, repeatable formulas to share genuine value and solve small problems in public without needing video editing wizardry or a massive budget.",
  },
  {
    number: "06",
    title: "Building Trust With Your Audience",
    description: "The 'document, don't pretend' framework that eliminates impostor syndrome and establishes honest credibility from Day 1.",
  },
  {
    number: "07",
    title: "Starting Conversations With Potential Buyers",
    description: "How to open natural, consultative 1-on-1 dialogues that diagnose a prospect's actual roadblock before recommending any link.",
  },
  {
    number: "08",
    title: "Understanding the Basics of Selling",
    description: "Shift from high-pressure sales pitches to ethical, permission-based recommendations that feel comfortable for you and helpful for the buyer.",
  },
  {
    number: "09",
    title: "Knowing What to Focus on as You Progress",
    description: "Cut through daily distractions with a tight daily checklist of 100% controllable inputs rather than obsessing over unpredictable metrics.",
  },
  {
    number: "10",
    title: "Avoiding the Common Mistake of Trying Everything at Once",
    description: "Say goodbye to shiny object syndrome. Keep your attention locked on one offer, one traffic engine, and one simple process for 30 full days.",
  },
];
