export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
  badge?: string;
  bullets: string[];
}

export interface PipelineStage {
  name: string;
  action: string;
  delay?: string;
}

export interface ServiceItem {
  slug: string;
  url: string;
  primaryKeyword: string;
  title: string;
  h1: string;
  metaDescription: string;
  category: "CRM Setup" | "Automation" | "Migration";
  audience: string;
  badge: string;
  lede: string;
  problemStatement: {
    headline: string;
    description: string;
    stats?: { value: string; label: string };
  };
  deliverables: ServiceDeliverable[];
  pipelineStages: PipelineStage[];
  faqs: ServiceFaqItem[];
  relatedSlugs: string[];
}

export const BASE_URL = "https://www.realtor-go.com";

export const SERVICES_HUB_DATA = {
  url: `${BASE_URL}/services/`,
  primaryKeyword: "GoHighLevel CRM Setup",
  title: "GoHighLevel CRM Setup Services Across the USA | Realtor-Go",
  h1: "GoHighLevel CRM Setup & Automation Services for Real Estate and Mortgage Businesses",
  metaDescription:
    "Realtor-Go provides GoHighLevel CRM setup, real estate and mortgage CRM solutions, lead follow-up automation, marketing automation, and CRM migration services across the USA.",
  lede:
    "Turn GoHighLevel into a turn-key revenue engine built specifically for US real estate agents, mortgage brokers, and growing teams. From custom pipelines and speed-to-lead automations to full CRM migrations, we handle the technical architecture so you can focus on closings.",
  stats: [
    { value: "< 60s", label: "Average automated speed-to-lead response time" },
    { value: "100%", label: "Done-for-you 10DLC compliance & carrier registration" },
    { value: "10–14 Days", label: "Turnaround from onboarding to live workflows" },
    { value: "0", label: "Long-term lock-in contracts: month-to-month freedom" },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    slug: "real-estate-crm-setup",
    url: `${BASE_URL}/services/real-estate-crm-setup/`,
    primaryKeyword: "Real Estate CRM Setup",
    title: "Real Estate CRM Setup Services Across the USA | Realtor-Go",
    h1: "Real Estate CRM Setup for Agents, Teams and Brokerages",
    metaDescription:
      "Need real estate CRM setup in the USA? Realtor-Go helps agents and brokerages organize leads, manage buyer and seller pipelines, and automate follow-ups.",
    category: "CRM Setup",
    audience: "Solo Agents, High-Producing Teams & Independent Brokerages",
    badge: "Agent & Brokerage Edition",
    lede:
      "Stop letting incoming buyer and seller leads fall through cracks in spreadsheets and bloated software. We build a clean, unified GoHighLevel real estate CRM customized for your local market, team hierarchy, and pipeline stages.",
    problemStatement: {
      headline: "The average real estate agent loses 70% of online leads due to slow follow-up and disorganized contact records.",
      description:
        "Portal inquiries, open house visitors, and website forms end up scattered across different inboxes. Without structured pipeline stages and immediate automated replies, warm prospects call the next agent on Google.",
      stats: { value: "70%", label: "Of leads choose the first agent who replies within 5 minutes" },
    },
    deliverables: [
      {
        title: "Multi-Tiered Buyer & Seller Pipelines",
        description: "Visual pipeline stages mapped to your exact sales process from new lead to escrow and past-client referral.",
        badge: "Core Architecture",
        bullets: [
          "Separate Buyer, Listing/Seller, and Past Client pipelines",
          "Automated stage-trigger actions that notify agents instantly",
          "Custom contact tags, custom fields, and lead-source tracking",
        ],
      },
      {
        title: "Instant Multi-Channel Lead Capture",
        description: "Direct integrations with Zillow Premier Agent, Realtor.com, Google LSA, and Meta ads.",
        badge: "Speed to Lead",
        bullets: [
          "Sub-minute SMS and email auto-replies to every inbound inquiry",
          "Round-robin lead distribution across team members or ISA queues",
          "Missed-call text-back so you never lose callers while in showings",
        ],
      },
      {
        title: "Calendar Booking & Appointment Reminders",
        description: "Self-booking consultation links with automated SMS/email confirmation and reminder sequences.",
        badge: "Show Rate Protection",
        bullets: [
          "24-hour and 2-hour automated reminders to minimize no-shows",
          "Calendar syncing with Google Calendar and Microsoft Outlook",
          "Reschedule and cancellation workflows that free up your schedule",
        ],
      },
      {
        title: "10DLC Carrier Registration & Compliance",
        description: "A2P 10DLC brand registration and campaign vetting completed so your client texts don't get blocked.",
        badge: "Compliance First",
        bullets: [
          "Compliant opt-in language and privacy disclaimers",
          "TCR registration approved with major US carriers",
          "Automated STOP/UNSUBSCRIBE honoring and opt-out logging",
        ],
      },
    ],
    pipelineStages: [
      { name: "New Lead Capture", action: "Instant SMS/Email sent under 60 seconds", delay: "0 min" },
      { name: "First Contact Made", action: "Assigned to agent, follow-up calendar reminder set", delay: "+15 min" },
      { name: "Appointment Booked", action: "Calendar invite, preparation email, confirmation SMS", delay: "Instant" },
      { name: "Active Showing / Listing", action: "Weekly check-in cadence & MLS feedback loop", delay: "Weekly" },
      { name: "Under Contract", action: "Milestone updates sent to buyer, lender & title rep", delay: "Milestones" },
      { name: "Closed & Review Asked", action: "Google 5-star review request + annual anniversary timer", delay: "30 days" },
    ],
    faqs: [
      {
        question: "How long does a full Real Estate CRM setup take?",
        answer:
          "Most setups are fully completed, tested, and handed over within 10 to 14 business days. This includes pipeline builds, workflow automation, 10DLC registration, and a dedicated 1-on-1 walkthrough.",
      },
      {
        question: "Will this integrate with my existing lead sources (Zillow, Realtor.com, Facebook)?",
        answer:
          "Yes. We integrate your GoHighLevel instance directly with Zillow, Realtor.com, Facebook Lead Ads, Google Ads, Zapier, and your custom website forms so all leads flow directly into the CRM instantly.",
      },
      {
        question: "Do you help with 10DLC carrier compliance for texting?",
        answer:
          "Yes, 10DLC registration is included in every setup. We handle your brand verification, campaign submission, and sample message formatting so your outbound SMS messages deliver reliably to US numbers.",
      },
      {
        question: "Can I bring my team members onto the platform?",
        answer:
          "Absolutely. We configure user permissions, individual calendar links, team routing rules (round-robin or claim-based), and pipeline visibility appropriate for team leaders and agents.",
      },
    ],
    relatedSlugs: ["gohighlevel-real-estate-crm-setup", "real-estate-lead-follow-up-automation", "crm-workflow-automation"],
  },
  {
    slug: "mortgage-crm-setup",
    url: `${BASE_URL}/services/mortgage-crm-setup/`,
    primaryKeyword: "Mortgage CRM Setup",
    title: "Mortgage CRM Setup Services Across the USA | Realtor-Go",
    h1: "Mortgage CRM Setup for Brokers and Loan Officers",
    metaDescription:
      "Set up your mortgage CRM to manage leads, organize borrower pipelines and automate follow-ups. Realtor-Go supports mortgage brokers and loan officers across the USA.",
    category: "CRM Setup",
    audience: "Independent Mortgage Brokers, Loan Officers & Branch Managers",
    badge: "Loan Officer Edition",
    lede:
      "A tailored GoHighLevel mortgage CRM built to track borrowers from initial rate inquiry through pre-approval, loan processing, and long-term past borrower retention. Keep Realtor partners updated without manual phone tag.",
    problemStatement: {
      headline: "Mortgage leads go cold while loan officers spend hours manually typing milestone emails to buyers and real estate agents.",
      description:
        "Borrowers need speed, reassurance, and consistent document reminders. When loan officers get bogged down in underwriting tasks, prospective pre-approvals stall and partner referral sources slip away.",
      stats: { value: "82%", label: "Of borrowers never hear from their original loan officer after closing" },
    },
    deliverables: [
      {
        title: "Borrower Pipeline Mapped to Loan Milestones",
        description: "Pipeline architecture designed around the actual mortgage production cycle.",
        badge: "Loan Origination Stages",
        bullets: [
          "Pre-Qual, Pre-Approved, In Processing, Clear to Close, and Funded stages",
          "Automated milestone SMS notifications to borrower and co-borrower",
          "Simultaneous notification sent to referring real estate agents",
        ],
      },
      {
        title: "Pre-Approval & Document Collection Nurture",
        description: "Automated check-ins for borrowers who stall during 1003 completion or document collection.",
        badge: "Conversion Booster",
        bullets: [
          "Gentle SMS nudges for missing W2s, paystubs, and bank statements",
          "Long-term house hunting check-ins for pre-approved buyers",
          "Rate watch alerts that trigger re-engagement when markets shift",
        ],
      },
      {
        title: "Realtor Partner Relationship Engine",
        description: "Pipelines and cadences specifically to nurture and recruit local real estate agent referral partners.",
        badge: "Referral Growth",
        bullets: [
          "Weekly loan status digest for each referring agent",
          "Co-branded lead capture opportunities",
          "Automated 'Thank You for Referral' workflows",
        ],
      },
      {
        title: "Post-Close Borrower Retention & Refinance Triggers",
        description: "Keep past clients in your ecosystem so you retain their next purchase or refinance.",
        badge: "Lifetime Value",
        bullets: [
          "Annual mortgage review and equity check reminders",
          "Loan anniversary and birthday greetings",
          "Rate-drop opportunity alerts based on original loan interest rate",
        ],
      },
    ],
    pipelineStages: [
      { name: "Inquiry / Lead", action: "Instant rate quote invitation & booking link", delay: "0 min" },
      { name: "Application Out", action: "Automated document checklist via SMS/email", delay: "+2 hours" },
      { name: "Pre-Approved", action: "Pre-approval letter confirmation + 14-day weekend check-ins", delay: "Bi-weekly" },
      { name: "Underwriting / Processing", action: "Status update to buyer and Realtor partner", delay: "On Stage Move" },
      { name: "Clear to Close", action: "Celebratory text + final closing details guide", delay: "Instant" },
      { name: "Funded & Retained", action: "Review ask + annual equity review scheduled", delay: "+30 days" },
    ],
    faqs: [
      {
        question: "Can this system integrate with my LOS (Loan Origination System)?",
        answer:
          "Yes. We set up webhook and Zapier triggers for modern LOS platforms like Arive, LendingPad, and Encompass, or configure structured CSV data synchronizations for past borrower databases.",
      },
      {
        question: "How does the system keep real estate agents updated?",
        answer:
          "Whenever a borrower moves to a key pipeline stage (such as 'Pre-Approved', 'Appraisal Ordered', or 'Clear to Close'), an automated SMS or email can be automatically fired to the assigned buyer's agent.",
      },
      {
        question: "Is communication compliant with financial regulations?",
        answer:
          "Yes. We configure full 10DLC messaging compliance, mandatory opt-out wording, and ensure all messaging is conversational, professional, and compliant with consumer communication standards.",
      },
      {
        question: "Can we import our existing database of funded past clients?",
        answer:
          "Yes. We map your past funded loans, extract interest rates and closing dates, and establish annual mortgage checkup workflows to secure refinance and repeat business.",
      },
    ],
    relatedSlugs: ["mortgage-lead-follow-up-automation", "crm-workflow-automation", "crm-migration-services"],
  },
  {
    slug: "crm-workflow-automation",
    url: `${BASE_URL}/services/crm-workflow-automation/`,
    primaryKeyword: "CRM Workflow Automation",
    title: "CRM Workflow Automation Services Across the USA | Realtor-Go",
    h1: "CRM Workflow Automation for Real Estate and Mortgage Businesses",
    metaDescription:
      "Automate CRM workflows across the USA with lead assignment, follow-up reminders, appointment confirmations and sales pipeline automation from Realtor-Go.",
    category: "Automation",
    audience: "Real Estate & Mortgage Teams Seeking Operational Efficiency",
    badge: "Automation Engineering",
    lede:
      "Eliminate repetitive manual tasks. We architect intelligent, multi-step GoHighLevel automation workflows that assign leads, trigger follow-up sequences, book appointments, and progress opportunities without human delay.",
    problemStatement: {
      headline: "Manual data entry and disjointed apps waste over 15 hours every week per producer.",
      description:
        "When your team has to manually assign leads, send confirmation emails, update pipeline statuses, and remember to follow up with stalled deals, opportunities are routinely forgotten and team accountability suffers.",
      stats: { value: "15+ hrs", label: "Saved per team member each week through unified workflow automation" },
    },
    deliverables: [
      {
        title: "Dynamic Lead Assignment & Routing",
        description: "Distribute incoming leads according to team schedules, zip codes, lead types, or round-robin capacity.",
        badge: "Smart Routing",
        bullets: [
          "Round-robin, weighted, or availability-based distribution",
          "Internal Slack, SMS, or mobile push alerts to on-duty agents",
          "Re-assignment workflows if a lead isn't contacted within 15 minutes",
        ],
      },
      {
        title: "Automated Appointment Scheduling Sequences",
        description: "Frictionless calendar booking with conditional confirmations, reminders, and post-call tasks.",
        badge: "Zero No-Shows",
        bullets: [
          "Multi-channel SMS & email reminder cadences",
          "Direct Google / Outlook two-way calendar synchronization",
          "Automatic 'No-Show' follow-up campaign to re-book missed calls",
        ],
      },
      {
        title: "Conditional Stage-Progression Triggers",
        description: "Pipelines that update automatically based on customer behavior and form submissions.",
        badge: "Pipeline Logic",
        bullets: [
          "Automatic stage advance when a lead books an appointment",
          "Instant task creation for contract deadlines and contingencies",
          "Automated deal tagging and revenue value calculations",
        ],
      },
      {
        title: "Multi-Channel Follow-Up Drips",
        description: "Cohesive messaging across SMS, email, voicemail drops, and call tasks that stop immediately on reply.",
        badge: "Human Touch",
        bullets: [
          "Conversational copy written to sound authentic, not robotic",
          "Immediate stop triggers when the lead replies or calls back",
          "Custom wait delays that respect US time zones and business hours",
        ],
      },
    ],
    pipelineStages: [
      { name: "Inbound Lead Enters", action: "Routing rule applied, tagged by source, internal alert sent", delay: "0 min" },
      { name: "Speed-to-Lead SMS", action: "Conversational question sent to prospect's phone", delay: "< 1 min" },
      { name: "No Reply Branch", action: "Follow-up email + second conversational SMS", delay: "+4 hours" },
      { name: "Reply Detected", action: "Automation pauses; agent notified on mobile app", delay: "Instant" },
      { name: "Meeting Scheduled", action: "Lead moved to 'Booked', confirmation sequence starts", delay: "Instant" },
      { name: "Meeting Completed", action: "Follow-up notes requested; next steps automated", delay: "+1 hour" },
    ],
    faqs: [
      {
        question: "What happens when a lead replies to an automated text?",
        answer:
          "The automation instantly pauses so the prospect is never sent an awkward out-of-context follow-up. An urgent alert is dispatched to the assigned agent so they can reply directly in the GoHighLevel unified mobile app.",
      },
      {
        question: "Do automated messages respect local time zones?",
        answer:
          "Yes. All workflows are built with strict business hour constraints and time-zone rules so messages are never delivered during late evening or early morning hours.",
      },
      {
        question: "Can workflows trigger tasks in other software like Slack or Google Sheets?",
        answer:
          "Yes. We configure webhooks and integrations that can ping team Slack channels, update live Google Sheet tracking boards, or trigger third-party marketing applications.",
      },
      {
        question: "Will our team be trained on how to manage these workflows?",
        answer:
          "Every setup includes an executive walkthrough, loom documentation, and an intuitive pipeline interface designed so any team member can use it from day one without technical confusion.",
      },
    ],
    relatedSlugs: ["real-estate-lead-follow-up-automation", "mortgage-lead-follow-up-automation", "crm-migration-services"],
  },
  {
    slug: "real-estate-lead-follow-up-automation",
    url: `${BASE_URL}/services/real-estate-lead-follow-up-automation/`,
    primaryKeyword: "Real Estate Lead Follow-Up Automation",
    title: "Real Estate Lead Follow-Up Automation | Realtor-Go USA",
    h1: "Real Estate Lead Follow-Up Automation for Agents and Teams",
    metaDescription:
      "Convert more real estate inquiries into opportunities with automated email and text follow-ups, lead nurturing and appointment reminders for US real estate professionals.",
    category: "Automation",
    audience: "Real Estate Agents, Team Leads & ISAs",
    badge: "Speed to Lead & Long-Term Nurture",
    lede:
      "Turn cold inquiries and website registrations into confirmed listing and buyer appointments. We engineer automated follow-up cadences that engage prospects in under 60 seconds and nurture them for up to 12 months.",
    problemStatement: {
      headline: "Over 50% of real estate inquiries go unanswered for more than 48 hours, and 80% never receive a third follow-up.",
      description:
        "Agents are constantly on the road, hosting open houses, or negotiating inspections. Without automated follow-up infrastructure, incoming leads contact your competitors while you are busy serving current clients.",
      stats: { value: "391%", label: "Increase in lead-to-opportunity conversions when contacting leads within 1 minute" },
    },
    deliverables: [
      {
        title: "Sub-Minute Speed-to-Lead Sequences",
        description: "Engage every new inquiry across Zillow, Realtor.com, Facebook, or your website instantly.",
        badge: "Instant Engagement",
        bullets: [
          "Conversational SMS inquiries that prompt quick answers",
          "Personalized email with local guide or property details",
          "Automated missed-call text-back for direct incoming calls",
        ],
      },
      {
        title: "365-Day Long-Term Buyer & Seller Nurture",
        description: "Keep buyers and sellers who are 6–12 months out from buying engaged until they are ready.",
        badge: "Long-Term Conversion",
        bullets: [
          "Low-pressure monthly market updates and home value check-ins",
          "Neighborhood spotlights and local real estate tips",
          "Automated birthday and holiday touchpoints",
        ],
      },
      {
        title: "Open House Visitor Conversion Funnel",
        description: "Digital sign-in workflows that trigger immediate thank-you texts and property packets.",
        badge: "Open House System",
        bullets: [
          "Digital iPad/tablet sign-in form for open house attendees",
          "Immediate same-day SMS with property disclosure packet",
          "48-hour follow-up asking for feedback on price and condition",
        ],
      },
      {
        title: "Past Client Referral & Review Campaigns",
        description: "Automate 5-star Google review requests and maintain annual contact for referrals.",
        badge: "Referral Multiplier",
        bullets: [
          "Timing-optimized Google Review requests post-closing",
          "Annual home purchase anniversary greetings",
          "Semi-annual equity update offers to encourage repeat listings",
        ],
      },
    ],
    pipelineStages: [
      { name: "Day 0: Inbound Lead", action: "SMS sent in 45 sec + introductory email + agent notification", delay: "0 min" },
      { name: "Day 1: Friendly Follow-Up", action: "SMS asking preferred timeline and neighborhood interests", delay: "+24 hours" },
      { name: "Day 3: Value Offer", action: "Email sharing off-market list / recent neighborhood sales", delay: "+3 days" },
      { name: "Day 7: Quick Check-In", action: "Short SMS: 'Did you still want me to send homes in [Area]?'", delay: "+7 days" },
      { name: "Day 14+: Long-Term Cadence", action: "Bi-weekly market update and property alert nurture", delay: "Bi-weekly" },
      { name: "Lead Responds", action: "Automation halts; conversation transferred to agent's phone", delay: "Instant" },
    ],
    faqs: [
      {
        question: "Does the automated follow-up sound robotic or automated?",
        answer:
          "No. We write conversational copy specifically crafted to sound like a personal text from you on your phone—short, natural, and low-pressure, designed to generate a simple reply.",
      },
      {
        question: "What happens when a prospect texts back?",
        answer:
          "The automation stops immediately. You and your assigned team member receive a push notification on your mobile phone, and you can continue the live conversation directly.",
      },
      {
        question: "Can we customize the text and email scripts?",
        answer:
          "Yes. During our onboarding call, we review all messaging templates and tailor the tone, market references, and questions to match your exact personal brand.",
      },
      {
        question: "How does the missed-call text-back feature work?",
        answer:
          "If a prospect calls your GoHighLevel tracking number and you miss the call while in an appointment, the system instantly fires an automated text saying: 'Hi! Sorry I missed your call, I'm currently with a client. How can I help you today?'",
      },
    ],
    relatedSlugs: ["real-estate-crm-setup", "real-estate-marketing-automation", "gohighlevel-real-estate-crm-setup"],
  },
  {
    slug: "mortgage-lead-follow-up-automation",
    url: `${BASE_URL}/services/mortgage-lead-follow-up-automation/`,
    primaryKeyword: "Mortgage Lead Follow-Up Automation",
    title: "Mortgage Lead Follow-Up Automation | Realtor-Go USA",
    h1: "Mortgage Lead Follow-Up Automation for Brokers and Loan Officers",
    metaDescription:
      "Improve mortgage lead management with automated follow-ups, borrower nurturing and appointment reminders. Realtor-Go helps US mortgage professionals streamline communication.",
    category: "Automation",
    audience: "Mortgage Brokers, Branch Managers & Loan Officers",
    badge: "Speed-to-Lead & Borrower Nurture",
    lede:
      "Convert rate shoppers and borrower inquiries into complete loan applications. We deploy automated follow-up systems that respond in seconds, guide borrowers through document submittal, and nurture pre-approvals until funding.",
    problemStatement: {
      headline: "Rate shoppers contact 3 to 4 lenders simultaneously. The first loan officer to respond secures the loan application 78% of the time.",
      description:
        "Loan officers tied up in underwriting and loan approvals cannot always answer internet inquiries right away. Without intelligent automated follow-ups, expensive mortgage leads quickly look elsewhere.",
      stats: { value: "78%", label: "Of mortgage borrowers submit their application with the first lender to respond" },
    },
    deliverables: [
      {
        title: "Immediate Borrower Rate Inquiry Response",
        description: "Engage borrowers the second they submit a loan inquiry online.",
        badge: "Speed to Lead",
        bullets: [
          "Instant conversational SMS acknowledging their loan scenario",
          "Direct link to schedule a 15-minute mortgage strategy call",
          "Automated missed-call text-back to capture incoming phone leads",
        ],
      },
      {
        title: "Incomplete Application (1003) Recovery",
        description: "Automated gentle reminders for borrowers who start an online application but do not complete it.",
        badge: "Application Completion",
        bullets: [
          "Follow-up sequence within 2 hours of abandoned application",
          "Assistance offer to review difficult credit or income questions",
          "Proven 34% recovery rate for stalled 1003 submissions",
        ],
      },
      {
        title: "Pre-Approval House Hunting Nurture",
        description: "Keep pre-approved buyers engaged while they shop for homes over 30 to 90 days.",
        badge: "Pipeline Retention",
        bullets: [
          "Weekend check-ins: 'Need an updated pre-approval letter for an offer today?'",
          "Educational tips on avoiding credit mistakes during escrow",
          "Co-updates sent to the borrower's buyer agent to maintain alignment",
        ],
      },
      {
        title: "Rate-Drop & Past Borrower Refi Alerts",
        description: "Automatically segment and re-engage funded past borrowers when market conditions shift.",
        badge: "Past Borrower Value",
        bullets: [
          "Filtered notifications for borrowers with interest rates higher than current market",
          "Annual home equity and loan balance review notifications",
          "Automated birthday and loan anniversary touchpoints",
        ],
      },
    ],
    pipelineStages: [
      { name: "New Loan Lead", action: "Instant SMS with pre-qual link + LO calendar link", delay: "0 min" },
      { name: "App Started, Incomplete", action: "Gentle reminder: 'Need help finishing up your application?'", delay: "+3 hours" },
      { name: "Application Submitted", action: "Document checklist text + introduction to processing team", delay: "Instant" },
      { name: "Pre-Approved Shopping", action: "Weekend check-in: 'Putting an offer in this weekend?'", delay: "Weekly (Fri)" },
      { name: "Milestone: Underwriting", action: "Status update SMS to borrower & real estate agent", delay: "On stage change" },
      { name: "Loan Funded", action: "Closing celebration text + review link + annual review scheduled", delay: "+3 days" },
    ],
    faqs: [
      {
        question: "Can this follow up with borrowers after business hours?",
        answer:
          "Yes, but with strict compliance controls. Speed-to-lead replies can send immediately, or you can restrict texts to standard consumer contact hours (e.g., 8:00 AM to 8:00 PM in the borrower's time zone) while holding overnight inquiries until morning.",
      },
      {
        question: "How does the system nurture pre-approved buyers who take months to buy?",
        answer:
          "We set up a low-friction weekend sequence that texts the borrower every couple of weeks on Friday afternoon asking if they need an updated pre-approval letter for weekend showings. It keeps you top of mind without being intrusive.",
      },
      {
        question: "Does this replace my loan origination system?",
        answer:
          "No, GoHighLevel is your front-end communication and relationship CRM. It pairs with your LOS (like Encompass, Arive, or Calyx) to automate borrower communication, calendar scheduling, and partner updates.",
      },
      {
        question: "Are our automated texts compliant with 10DLC and TCPA?",
        answer:
          "Yes. All outbound campaigns include verified TCR 10DLC registration, clear opt-in tracking, automated STOP/HELP responses, and compliant disclaimer copy.",
      },
    ],
    relatedSlugs: ["mortgage-crm-setup", "crm-workflow-automation", "crm-migration-services"],
  },
  {
    slug: "real-estate-marketing-automation",
    url: `${BASE_URL}/services/real-estate-marketing-automation/`,
    primaryKeyword: "Real Estate Marketing Automation",
    title: "Real Estate Marketing Automation Services the USA | Realtor-Go",
    h1: "Real Estate Marketing Automation for Agents and Brokerages",
    metaDescription:
      "Automate real estate marketing with email campaigns, lead nurturing, landing page integrations and follow-up workflows built for agents and brokerages across the USA.",
    category: "Automation",
    audience: "Real Estate Brokerages, Expansion Teams & Growth-Minded Agents",
    badge: "Full-Funnel Real Estate Marketing",
    lede:
      "Attract, capture, and convert more home buyers and sellers on autopilot. We connect your landing pages, ad campaigns, and listing marketing directly into high-performing GoHighLevel marketing funnels.",
    problemStatement: {
      headline: "Real estate marketing fails when lead generation is disconnected from lead follow-up.",
      description:
        "Running Facebook ads or distributing listing flyers without automated capture funnels leads to wasted marketing dollars. Marketing automation ensures every dollar spent on advertising yields captured contacts and nurtured conversations.",
      stats: { value: "4x", label: "Higher ROI on advertising spend when leads receive automated multi-touch marketing" },
    },
    deliverables: [
      {
        title: "High-Converting Real Estate Landing Pages",
        description: "Custom GoHighLevel landing pages designed for home valuation, buyer guides, and new listing showcases.",
        badge: "Lead Capture",
        bullets: [
          "Home valuation seller landing pages with instant address lookup",
          "Buyer guide and relocation packet download funnels",
          "Open house registration and exclusive listing preview pages",
        ],
      },
      {
        title: "Multi-Channel Ad Campaign Integrations",
        description: "Direct API connections to Meta Lead Ads, Google Ads, and local listing portals.",
        badge: "Paid Ads Integration",
        bullets: [
          "Zero-delay lead delivery into GoHighLevel via native webhooks",
          "Automatic custom audience retargeting sync",
          "Ad campaign attribution tracking by source and campaign ID",
        ],
      },
      {
        title: "Automated Email Newsletters & Market Updates",
        description: "Editorial email marketing campaigns that showcase your local expertise without hours of manual drafting.",
        badge: "Brand Authority",
        bullets: [
          "Monthly local market pulse newsletters with median price trends",
          "Just Listed & Just Sold automated blast templates",
          "Vendor recommendations and seasonal homeowner maintenance tips",
        ],
      },
      {
        title: "Database Reactivation Marketing Campaigns",
        description: "Re-engage dormant contacts in your existing database to generate immediate transactions.",
        badge: "Immediate Pipeline",
        bullets: [
          "9-word email strategy to unearth hidden buyer/seller intent",
          "Interactive SMS polls: 'Are you still planning to make a move this year?'",
          "Proven track record of uncovering 3–7 warm listings from existing lists",
        ],
      },
    ],
    pipelineStages: [
      { name: "Ad Click / Landing Page", action: "Prospect submits home valuation or guide request", delay: "0 min" },
      { name: "Instant Guide Delivery", action: "Automated SMS with PDF link + thank-you email sent", delay: "< 1 min" },
      { name: "Qualifying Question", action: "SMS asking if they are looking to buy in the next 30, 60, or 90 days", delay: "+15 min" },
      { name: "Nurture Sequence", action: "5-part educational email sequence on buying/selling tips", delay: "Over 14 days" },
      { name: "Consultation Call Booked", action: "Moved to active consultation pipeline; calendar invite sent", delay: "Instant" },
      { name: "Long-Term Market Pulse", action: "Monthly local market newsletter subscription", delay: "Monthly" },
    ],
    faqs: [
      {
        question: "Can we connect our Meta (Facebook & Instagram) ads directly to GoHighLevel?",
        answer:
          "Yes. We configure the native GoHighLevel Facebook integration so that leads from Meta Instant Forms populate inside your CRM instantly and trigger immediate automated follow-up sequences.",
      },
      {
        question: "What is a database reactivation campaign?",
        answer:
          "Database reactivation reaches out to your older, uncontacted leads with a low-pressure, conversational text or email. It typically produces immediate appointments within 48 hours without spending extra ad dollars.",
      },
      {
        question: "Can we send automated newsletters to our past clients?",
        answer:
          "Yes. We design branded, mobile-responsive email templates in GoHighLevel featuring your branding, headshot, and market statistics that can be scheduled out monthly.",
      },
      {
        question: "Do you build the landing pages inside GoHighLevel?",
        answer:
          "Yes. We construct clean, fast-loading landing pages and funnels inside your GoHighLevel account, complete with tracking pixels, custom domains, and SSL certificates.",
      },
    ],
    relatedSlugs: ["real-estate-crm-setup", "real-estate-lead-follow-up-automation", "gohighlevel-real-estate-crm-setup"],
  },
  {
    slug: "crm-migration-services",
    url: `${BASE_URL}/services/crm-migration-services/`,
    primaryKeyword: "CRM Migration Services",
    title: "CRM Migration Services for Real Estate & Mortgage | Realtor-Go",
    h1: "CRM Migration Services for Real Estate and Mortgage Businesses",
    metaDescription:
      "Migrate your CRM with confidence. Realtor-Go helps real estate and mortgage businesses organize contact data, map fields, configure pipelines and validate migrated records.",
    category: "Migration",
    audience: "Real Estate Brokerages, Top Producer Teams & Mortgage Branches",
    badge: "Risk-Free Data Migration",
    lede:
      "Switching CRMs doesn't have to mean losing contact history, messing up custom fields, or risking deliverability. We cleanly migrate your data from legacy platforms to GoHighLevel with complete field mapping and integrity validation.",
    problemStatement: {
      headline: "Bad CRM migrations lead to duplicated contacts, lost notes, broken email unsubscribes, and team confusion.",
      description:
        "Exporting and importing thousands of contacts without proper data sanitization results in corrupted pipeline stages, untagged leads, and carrier spam flags. Professional migration ensures your business never skips a beat.",
      stats: { value: "100%", label: "Data integrity and field mapping validation before system launch" },
    },
    deliverables: [
      {
        title: "Full Data Extraction & Cleaning",
        description: "Sanitize, deduplicate, and format contact lists prior to importing into GoHighLevel.",
        badge: "Data Cleansing",
        bullets: [
          "Deduplication across email addresses and phone numbers",
          "Standardization of phone formatting for E.164 compliance",
          "Scrubbing invalid email addresses to protect domain reputation",
        ],
      },
      {
        title: "Custom Field & Pipeline Stage Mapping",
        description: "Translate old CRM stages, tags, and custom data points into GoHighLevel's architecture.",
        badge: "Precision Mapping",
        bullets: [
          "Mapping property addresses, loan amounts, and closing dates",
          "Preserving referral source tags and lead origins",
          "Structuring custom fields for fast team filtering and reporting",
        ],
      },
      {
        title: "Platform Migrations from Any Legacy System",
        description: "Experienced with all major real estate and mortgage CRM software ecosystems.",
        badge: "Universal Compatibility",
        bullets: [
          "Real Estate: Follow Up Boss, kvCORE, LionDesk, Brivity, BoomTown, Sierra Interactive",
          "Mortgage: Jungo, Shape, Total Expert, Surefire, BNTouch, Encompass exports",
          "General: HubSpot, Salesforce, ActiveCampaign, Mailchimp",
        ],
      },
      {
        title: "Post-Migration Audit & Validation",
        description: "Rigorous verification of contact counts, notes, opt-in statuses, and pipeline integrity.",
        badge: "Quality Assurance",
        bullets: [
          "Sample contact record inspection across all migrated stages",
          "Verification of DNC (Do Not Call) and unsubscribe flags",
          "Warm-up sending strategy to preserve email deliverability",
        ],
      },
    ],
    pipelineStages: [
      { name: "Step 1: Data Audit", action: "Review existing CRM export files, schemas, and tag structures", delay: "Day 1–2" },
      { name: "Step 2: Schema Design", action: "Create custom fields, tags, and pipelines inside GoHighLevel", delay: "Day 3–4" },
      { name: "Step 3: Test Migration", action: "Import 100 sample records to verify field mapping and note sync", delay: "Day 5" },
      { name: "Step 4: Full Import", action: "Cleanse and import complete database with duplicate suppression", delay: "Day 6–7" },
      { name: "Step 5: Deliverability Prep", action: "Configure SPF, DKIM, DMARC, and 10DLC messaging compliance", delay: "Day 8–9" },
      { name: "Step 6: Team Handover", action: "Walkthrough with team leaders to confirm data accuracy and search views", delay: "Day 10" },
    ],
    faqs: [
      {
        question: "Which CRMs can you migrate from?",
        answer:
          "We regularly migrate teams from Follow Up Boss, kvCORE, LionDesk, Brivity, BoomTown, Sierra Interactive, Jungo, Shape, Surefire, Total Expert, HubSpot, and spreadsheet exports.",
      },
      {
        question: "Will my contact notes and interaction histories carry over?",
        answer:
          "Yes. Depending on the export capabilities of your previous CRM, we extract and map chronological contact notes and timeline histories so your team retains context on every relationship.",
      },
      {
        question: "What happens to unsubscribed contacts and DNC flags?",
        answer:
          "We strictly preserve all unsubscribe, DNC, and opt-out statuses during the import process. This protects your sending domain reputation and ensures full legal compliance.",
      },
      {
        question: "Will our operations be interrupted during the migration?",
        answer:
          "No. You can continue working in your old CRM while we build out GoHighLevel and perform the data staging. Once everything is verified, we run a final delta sync and transition your team seamlessly.",
      },
    ],
    relatedSlugs: ["real-estate-crm-setup", "mortgage-crm-setup", "crm-workflow-automation"],
  },
  {
    slug: "gohighlevel-real-estate-crm-setup",
    url: `${BASE_URL}/services/gohighlevel-real-estate-crm-setup/`,
    primaryKeyword: "GoHighLevel Real Estate CRM Setup",
    title: "GoHighLevel Real Estate CRM Setup the USA | Realtor-Go",
    h1: "GoHighLevel Real Estate CRM Setup for Agents and Teams",
    metaDescription:
      "Get a GoHighLevel real estate CRM configured for buyer and seller pipelines, lead capture, appointment scheduling and automated follow-ups for real estate professionals across the USA.",
    category: "CRM Setup",
    audience: "Real Estate Agents, Team Leaders & Operations Managers",
    badge: "Done-For-You GoHighLevel Architecture",
    lede:
      "GoHighLevel is the most powerful CRM on the market, but out of the box it's an empty sandbox. We deliver a fully configured real estate snapshot ready to use from day one with custom pipelines, campaigns, calendars, and automations.",
    problemStatement: {
      headline: "Most agents spend months watching YouTube tutorials trying to set up GoHighLevel, yet never launch it properly.",
      description:
        "Building custom snapshots, triggers, calendars, custom fields, and SMS campaigns takes dozens of hours of technical trial and error. We eliminate the frustration by deploying a battle-tested real estate system customized for your business in days.",
      stats: { value: "100%", label: "Turnkey GoHighLevel deployment ready for immediate live operation" },
    },
    deliverables: [
      {
        title: "Real Estate Snapshot Installation & Customization",
        description: "A pre-built, proven real estate snapshot tailored to your market and branding.",
        badge: "Complete System",
        bullets: [
          "Pre-loaded with 6 specialized pipelines (Buyers, Sellers, Escrow, Past Clients, etc.)",
          "Over 30 pre-written text and email templates tailored for real estate",
          "Custom contact tags, custom fields, and smart lists for daily prospecting",
        ],
      },
      {
        title: "Unified Two-Way Communication Hub",
        description: "Consolidate SMS, calls, emails, Facebook Messenger, Instagram DMs, and Google Business Messages.",
        badge: "All-in-One Inbox",
        bullets: [
          "Centralized desktop and mobile app inbox for the entire team",
          "Outbound calling and call recording from your dedicated local business number",
          "Automated missed-call text-back to capture missed client phone calls",
        ],
      },
      {
        title: "Lead Capture & Third-Party Integrations",
        description: "Connect your website, portals, and lead generators directly into your GoHighLevel instance.",
        badge: "Zero Latency",
        bullets: [
          "Native Zillow Premier Agent, Realtor.com, and website form integration",
          "Zapier and Make webhook configuration for custom tech stacks",
          "Facebook Lead Ads and Google Ads direct API synchronization",
        ],
      },
      {
        title: "Full Onboarding, 10DLC Vetting & Team Training",
        description: "We handle the technical carrier paperwork and conduct a complete 1-on-1 team training walkthrough.",
        badge: "Concierge Support",
        bullets: [
          "Complete A2P 10DLC brand and campaign approval submission",
          "Custom video walkthroughs recorded inside your specific account",
          "Ongoing support and optimization directly from the specialist who built it",
        ],
      },
    ],
    pipelineStages: [
      { name: "New Lead Capture", action: "Trigger speed-to-lead SMS and internal notification", delay: "0 min" },
      { name: "Discovery Call Booked", action: "Appointment confirmation sequence and calendar invite", delay: "Instant" },
      { name: "Active Client", action: "Showing feedback and property recommendation cadence", delay: "Weekly" },
      { name: "Under Contract / Escrow", action: "Milestone updates sent to client, lender, and title company", delay: "Milestones" },
      { name: "Closing Day Celebration", action: "Congratulatory message and gift delivery notification", delay: "Closing day" },
      { name: "Post-Close Referral System", action: "5-star Google review request + home anniversary trigger", delay: "+30 days" },
    ],
    faqs: [
      {
        question: "Do I need my own GoHighLevel account or can you host it for me?",
        answer:
          "We can set up your system inside your own existing GoHighLevel agency/sub-account, or provide a fully managed account under our infrastructure—whichever fits your business model best.",
      },
      {
        question: "How is this different from generic GoHighLevel snapshots?",
        answer:
          "Generic snapshots purchased online are often outdated, filled with broken webhook placeholders, and require dozens of hours of manual configuration. We customize every pipeline, message template, and integration directly for your business.",
      },
      {
        question: "What does the 10DLC registration process involve?",
        answer:
          "We prepare and submit your business legal entity information, EIN, privacy policy, and sample messaging campaigns to the Campaign Registry (TCR) to ensure your texts are approved by US mobile carriers.",
      },
      {
        question: "How long until my system is up and running?",
        answer:
          "Our standard deployment takes between 10 and 14 business days. You receive a fully functioning system tested end-to-end with a dedicated handover walkthrough.",
      },
    ],
    relatedSlugs: ["real-estate-crm-setup", "real-estate-lead-follow-up-automation", "crm-migration-services"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_LIST.find((s) => s.slug === slug);
}
