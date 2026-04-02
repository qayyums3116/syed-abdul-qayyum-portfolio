import { Project } from './index';

export const n8nProjects: Project[] = [
  {
    id: 'jobvizion-dashboard',
    title: 'JobVizion - Executive Recruitment Dashboard',
    description:
      'AI-powered recruitment dashboard that automates hiring workflows and candidate shortlisting with n8n and AI.',
    longDescription:
      'Imagine having the best candidates at your fingertip instantly.✨\n\nThat’s exactly what we’ve built with our AI-Powered Recruitment Dashboard. It’s like having a hiring assistant that never sleeps, combining automation, data, and AI to make recruitment effortless.\n\nKey Features:\n- Real-time insights on job postings, candidates, and applications (pulled directly from LinkedIn)\n- Automated hiring workflows through n8n, from job requirements to shortlisting\n- AI-driven role validation, salary checks, and human-friendly job summaries\n- Smart CV processing that analyzes, scores, and ranks candidates from Google Drive\n- Clear analytics on hiring trends, top companies, and role distributions\n\n✅ The result? What once took days now happens in minutes. From job posting to a shortlist of the top five most qualified candidates—all fully automated.',
    role: 'Automation Engineer',
    technologies: ['n8n', 'LinkedIn API', 'Google Drive API', 'AI Models', 'PostgreSQL'],
    features: [
      'Automated Hiring Workflows',
      'AI-driven Role Validation & Salary Checks',
      'Smart CV Scoring & Ranking',
      'Real-time Job & Candidate Insights',
      'Recruitment Analytics Dashboard',
    ],
    video: '/videos/JobVizion - Executive Recruitment Dashboard.mp4',
    liveUrl: 'https://drive.google.com/file/d/1VPpoJfmhR2PJyu7OrFrEsVg84m9xx6Oi/view?usp=sharing',
    status: 'completed',
    category: 'n8n',
  },
  {
    id: 'smart-email-automation',
    title: 'Smart Email & WhatsApp AI Workflow',
    description:
      'Automated workflow that drafts AI replies, summarizes emails, and notifies via WhatsApp.',
    longDescription:
      'Managing emails can feel overwhelming—constant notifications, late replies, and missed messages. That’s why we built a simple yet powerful workflow that connects Gmail, AI, and WhatsApp to make communication smoother than ever.\n\nHere’s what happens step by step:\n- Every new email in Gmail automatically triggers the workflow.\n- An AI model instantly drafts a professional reply for you.\n- The draft gets saved in Gmail ready for quick review & send.\n- The original email is summarized, so you don’t have to read lengthy texts.\n- A WhatsApp alert reminds you that your reply is waiting in drafts.\n\n💡 The result? No missed emails. Faster replies. Smarter communication.',
    role: 'Automation Engineer',
    technologies: ['n8n', 'Gmail API', 'WhatsApp API', 'AI Models'],
    features: [
      'AI Email Drafting',
      'Email Summarization',
      'Gmail Draft Automation',
      'WhatsApp Reminders',
    ],
    video: '/videos/2.mov',
    liveUrl: 'https://drive.google.com/file/d/1ARyh9PAHUBGsXOqOT_WMlL5F4yTkit45/view?usp=drivesdk',
    status: 'completed',
    category: 'n8n',
  },
  {
    id: 'talentflow-dashboard',
    title: 'TalentFlow Dashboard',
    description:
      'AI-powered recruitment ecosystem for job seekers and recruiters with live LinkedIn data.',
    longDescription:
      'We have built this AI Recruitment Platform to make the hiring process more efficient, accurate, and ethical.\n\nThis platform is designed for both recruiters and job seekers—a complete ecosystem where candidates can explore openings, apply instantly, and get evaluated in real time, while hiring teams receive clear eligibility scores, skills match percentages, and live job data fetched directly from LinkedIn.\n\nWith smart automation, AI-driven validation, and powerful analytics, the system ensures faster decisions, fairer evaluations, and complete transparency in recruitment.',
    role: 'Automation Engineer',
    technologies: ['n8n', 'LinkedIn API', 'AI Models', 'PostgreSQL'],
    features: [
      'Real-time Job Data from LinkedIn',
      'Candidate Scoring & Evaluation',
      'AI-driven Validation',
      'Analytics Dashboard',
    ],
    video: '/videos/TalentFlow Dashboard.mp4',
    liveUrl: 'https://drive.google.com/file/d/1Xr4cYW-g5RHJWbi9NDc9V6n1UaoCjkoD/view?usp=sharing',
    status: 'completed',
    category: 'n8n',
  },
  {
    id: 'excel-automation-workflow',
    title: 'Excel Automation with React, Node.js & n8n',
    description:
      'Automated Excel updates connected with React frontend and Node.js backend powered by n8n.',
    longDescription:
      'What if your Excel sheets could update themselves… while you focus on real work?\n\nBy combining 📊 Excel, ⚛ React, 🌐 Node.js, and the automation tool ⚙ N8N, we’ve built a fully automated workflow that replaces repetitive manual updates with a seamless, reliable process.\n\nIt starts with an Excel sheet containing initial records. Through a React-based web interface, connected to a Node.js backend, workflows can be monitored, activated, or deactivated in just a click. Once triggered, N8N takes over processing the steps and updating Excel automatically with fresh, accurate data.\n\n✨ The result? A streamlined process that reduces workload, prevents mistakes, and scales effortlessly as needs grow.',
    role: 'Automation Engineer',
    technologies: ['n8n', 'Excel', 'React', 'Node.js'],
    features: [
      'Automated Excel Updates',
      'React-based Monitoring Dashboard',
      'Node.js Backend Control',
      'Scalable Workflow Automation',
    ],
    video: '/videos/4.mp4',
    // no liveUrl, instead video download
    status: 'completed',
    category: 'n8n',
  },
  {
    id: 'lead-management-clickup',
    title: 'Automating Lead Management with n8n + ClickUp',
    description:
      'Automated lead capture and task creation system integrated with ClickUp via n8n.',
    longDescription:
      'Managing leads manually can be time-consuming and prone to errors. To solve this, we built a simple automation that connects our website with ClickUp through n8n:\n\n- Client submits details on the website whenever a visitor fills out a form or requests a proposal.\n- n8n workflow triggers automatically starting with a webhook node, passing through a code node for data handling, then creating a task node in ClickUp.\n- Lead instantly appears in ClickUp with no manual entry required. The ClickUp board is updated in real time with the new lead.\n\n💡 The outcome: A seamless, error-free, and fully automated lead capture system. This saves valuable time, reduces manual effort, and ensures no opportunities are missed.',
    role: 'Automation Engineer',
    technologies: ['n8n', 'ClickUp API', 'Webhook', 'Node.js'],
    features: [
      'Website Lead Capture',
      'ClickUp Integration',
      'Webhook + Code Node Flow',
      'Real-time Task Creation',
    ],
    video: '/videos/5.mp4',
    liveUrl: 'https://drive.google.com/file/d/1tBGQFCk9P7UbouoiNwnFRgN6fQcxBh7A/view',
    status: 'completed',
    category: 'n8n',
  },
];
