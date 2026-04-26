import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alberto Formaggio",
  initials: "AF",
  url: "https://albertoformaggio1.github.io",
  location: "Turin, Italy",
  locationLink: "https://www.google.com/maps/place/turin",
  description:
    "Engineer at heart, researcher by training. Passionate about AI, mentoring, and building great software.",
  summary:
    "Hey! I'm Alberto, I'm currently working as a Software Engineer at AWS in the DCV team. Previously, I worked on AI research. Now I build the software infrastructure that makes it possible.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Machine Learning" },
    { name: "LLMs" },
    { name: "Python" },
    { name: "Rust" },
    { name: "PyTorch" },
    { name: "MongoDB" },
    { name: "Neo4j" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AlbertoFormaggio1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alberto-formaggio/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GoogleScholar: {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=HY4RSRkAAAAJ",
        icon: Icons.googleScholar,
        navbar: true,
      },
      /*
      GooglePatents: {
        name: "Google Patents",
        url: "https://patents.google.com/?inventor=YOUR_NAME",
        icon: Icons.googlePatents,
        navbar: true,
      },*/
    }
  },

  work: [
    {
      company: "Amazon Web Services",
      href: "https://aws.amazon.com",
      badges: [],
      location: "Asti, Italy",
      title: "Software Engineer (L4)",
      logoUrl: "/aws.svg",
      start: "December 2025",
      end: "Present",
      description:
        "Working on DCV, a high-performance remote display protocol.",
    },
    {
      company: "Roche",
      href: "https://www.roche.com",
      badges: [],
      location: "Basel, Switzerland",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/roche.svg",
      start: "March 2025",
      end: "November 2025",
      description:
        "Led a team of 3 in building and deploying a full-stack application (React, FastAPI, MongoDB), resulting in an internal platform for knowledge sharing on discontinued molecules. Redesigned an LLM-powered text-extraction pipeline, increasing accuracy from 60% to 92% and reducing processing time by 18x (6 hours to 20 minutes).",
    },
    {
      company: "ABB",
      href: "https://global.abb",
      badges: [],
      location: "Mannheim, Germany",
      title: "Machine Learning Research Intern",
      logoUrl: "/abb.svg",
      start: "March 2024",
      end: "October 2024",
      description:
        "Converted PDF documents in 10+ languages to an English Knowledge Graph leveraging Large Language Models. Developed a baseline model for Object Detection over Pipeline and Instrumentation Diagrams (P&IDs).",
    },
  ],
  education: [
    {
      school: "University of Padova",
      href: "https://www.unipd.it",
      degree: "BSc + MSc in Computer Engineering - Artificial Intelligence",
      logoUrl: "/unipd.svg",
      start: "2019",
      end: "2024",
    },
    {
      school: "Charles University",
      href: "https://cuni.cz/UKEN-1.html",
      degree: "Erasmus Exchange",
      logoUrl: "/cuni.svg",
      start: "2023",
      end: "2023",
    },
  ],
  volunteering: [
    {
      organization: "SuperHero Valley",
      href: "https://superherovalley.fun/",
      role: "Mentor",
      logoUrl: "/superherovalley.png",
      start: "2026",
      end: "Present",
      description: "Mentoring students and early-career engineers on their journey to landing roles at top tech companies.",
    },
  ] as {
    organization: string;
    href: string;
    role: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[],
  projects: [] as {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: { type: string; href: string; icon: React.JSX.Element }[];
    image: string;
    video: string;
  }[],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    win?: string;
    mlh?: string;
    links: { title: string; icon: React.JSX.Element; href: string }[];
  }[],
} as const;
