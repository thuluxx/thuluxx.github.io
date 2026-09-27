// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to make the portfolio yours.
// Every section of the site reads from here, so no other file needs touching.
// ─────────────────────────────────────────────────────────────

import osciLogo from './assets/logos/osci.png'
import handshakeLogo from './assets/logos/handshake.png'
import phicsitLogo from './assets/logos/phicsit.png'
import aideahLogo from './assets/logos/aideah.png'
import srmLogo from './assets/logos/srm.png'
import iitmLogo from './assets/logos/iitm.png'
import microsoftLogo from './assets/logos/microsoft.png'
import ibmLogo from './assets/logos/ibm.png'
import leetcodeLogo from './assets/logos/leetcode.png'

export const profile = {
  name: 'Thulasidharan V S',
  tagline: 'AI Evaluation · QA Automation · Cloud & DevOps',
  intro:
    "Dual-degree CS student (B.Tech CSE at SRM + BS Data Science at IIT Madras) working across AI evaluation, QA automation, and Cloud & DevOps. I like understanding how systems fail, so I spend my time breaking them carefully, catching what slips through, and building things that stay up.",
  location: 'Chennai, India',
  email: 'thulasidharan.perumalvs@gmail.com',
  education: 'B.Tech CSE, SRM · BS Data Science, IIT Madras',
  socials: [
    { label: 'GitHub', url: 'https://github.com/thuluxx', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/thulasidharanvs', icon: 'linkedin' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/ZD2vTXRWlU/', icon: leetcodeLogo },
  ],
}

export const skillGroups = [
  {
    category: 'Testing & QA',
    items: [
      'Software Testing',
      'Quality Assurance',
      'Test Automation',
      'Test Automation Tools',
      'Playwright',
      'JMeter',
      'Debugging',
      'Unit Testing',
    ],
  },
  {
    category: 'AI & Evaluation',
    items: [
      'AI Evaluation',
      'AI Model Evaluation',
      'Large Language Models (LLM)',
      'Prompt Engineering',
      'Model Performance Analysis',
      'Research Skills',
    ],
  },
  {
    category: 'Programming',
    items: [
      'Python (Programming Language)',
      'JavaScript',
      'Scripting',
      'Jupyter',
      'Data Structures',
    ],
  },
  {
    category: 'Tools & Collaboration',
    items: [
      'Git (Version Control System)',
      'GitHub',
      'Code Review',
      'Open Source Contribution',
      'Technical Documentation',
    ],
  },
]

export const projects = [
  {
    title: 'Retrace',
    description:
      'AI-powered CI failure classifier that analyzes failed test output, classifies failures (real regression vs. external/infra issues) with a confidence score, and posts results directly as GitHub PR comments via a GitHub Actions integration.',
    tech: ['JavaScript', 'Node.js', 'Jest', 'GitHub Actions'],
    link: '',
    repo: 'https://github.com/thuluxx/retrace',
    status: '',
  },
  {
    title: 'Smart Helmet with Bike Ignition Control',
    description:
      'IoT safety device that ties helmet-wear detection to bike ignition, so the engine only starts when the rider is properly wearing a helmet. The safety check becomes automatic instead of optional.',
    tech: ['IoT', 'Embedded Systems', 'Sensors'],
    link: '',
    repo: 'https://github.com/thuluxx/smart-helmet',
    status: '',
  },
  {
    title: 'Dockfleet - Open Source Contributions',
    description:
      'Contributor to Dockfleet, a self-healing local container orchestrator (FOSS Hack 2026 winner) that runs and monitors multi-service Docker stacks from a single YAML file. Contributing via Open Source Connect India 2026, with 6 merged PRs covering start-failure propagation, resource-limit flag generation, test reliability, and documentation.',
    tech: ['Docker', 'Python', 'Open Source'],
    link: '',
    repo: 'https://github.com/pratyushjha06/Dockfleet',
    status: '',
  },
  {
    title: 'VoltSight - Motor Health Monitoring',
    description:
      'IoT system that continuously monitors electric motor health and flags problems early instead of relying on fixed maintenance schedules. ESP32 sensors feed a FastAPI backend and React dashboard with live data, history, and alerts. Team project, software lead.',
    tech: ['ESP32', 'FastAPI', 'PostgreSQL', 'React'],
    link: '',
    repo: '',
    status: 'In progress',
  },
]

// Roles, org logos, and timelines only. Add `logo` for a real image,
// or `monogram` + `color` for a letter tile fallback.
export const experience = [
  {
    period: 'Sep 2026 - Present',
    title: 'Open Source Contributor',
    org: "Open Source Connect India (OSCI'26)",
    logo: osciLogo,
  },
  {
    period: 'Starting Oct 2026',
    title: 'Discord Manager',
    org: 'PHICSIT',
    logo: phicsitLogo,
    badge: 'Upcoming',
  },
  {
    period: 'Jul - Aug 2026',
    title: 'AI Evaluation Specialist',
    org: 'Handshake AI Fellowship',
    logo: handshakeLogo,
  },
  {
    period: 'May - Jun 2026',
    title: 'Quality Assurance Automation Engineer',
    org: 'Aideah Data Works',
    logo: aideahLogo,
  },
  {
    period: '2025 - 2029',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'SRM Institute of Science and Technology',
    logo: srmLogo,
  },
  {
    period: '2025 - 2029',
    title: 'BS, Data Science and Application',
    org: 'IIT Madras',
    logo: iitmLogo,
  },
]

export const certifications = [
  {
    name: 'Python Programming Fundamentals',
    issuer: 'Microsoft',
    date: 'Sep 2026',
    logo: microsoftLogo,
  },
  {
    name: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM',
    date: 'Jan 2026',
    logo: ibmLogo,
  },
]
