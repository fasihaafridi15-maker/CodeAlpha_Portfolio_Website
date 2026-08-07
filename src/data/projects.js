// All project data is sourced directly from Fasiha's provided project list & GitHub account.
// No fabricated screenshots, stats, or demo links are included.

export const projects = [
  {
    id: "memeverse-ai",
    title: "MemeVerse AI",
    tag: "Featured",
    description:
      "An AI-powered real-time meme reaction app that reads facial expressions and hand gestures through the webcam and instantly reacts with a matching meme — built end to end from computer-vision inference to a full-stack backend.",
    tech: ["JavaScript", "MediaPipe", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/fasihaafridi15-maker/memeverse-ai",
    demo: null,
    featured: true,
  },
  {
    id: "civicconnect",
    title: "CivicConnect",
    tag: "Featured",
    description:
      "A smart civic-tech platform connecting citizens of Hyderabad to hospitals, blood banks, NGOs, and emergency services, with Firebase-backed accounts and a live GPS emergency SOS feature.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Leaflet.js"],
    github: "https://github.com/fasihaafridi15-maker/CivicConnect",
    demo: null,
    featured: true,
  },
  {
    id: "intelli-mission-planner",
    title: "Intelli Mission Planner",
    tag: "Academic Team Project",
    description:
      "A Java-based secure mission planning system built with a team, combining a JavaFX desktop GUI, GIS map analysis, A* route planning, Bouncy Castle encryption, and role-based authentication.",
    tech: ["Java", "JavaFX", "GeoTools", "Leaflet.js", "Cryptography"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: "restaurant-management-system",
    title: "Restaurant Management System",
    tag: "Featured",
    description:
      "A database-driven desktop application for restaurant operations — handling order processing, billing, and record-keeping with a normalized SQL schema.",
    tech: ["C++", "DBMS", "SQL"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    id: "dsa-leetcode",
    title: "DSA & Algorithm Practice Repository",
    tag: "Problem Solving",
    description:
      "Solved and documented algorithmic problems from LeetCode in Java — covering arrays, strings, hashing, linked lists, stacks, queues, and searching algorithms, with a focus on optimized solutions.",
    tech: ["Java", "Data Structures", "Algorithms", "LeetCode"],
    github: "https://github.com/fasihaafridi15-maker/LEETCODE-SOLUTIONS-2",
    demo: null,
    featured: false,
  },
  {
    id: "contact-book",
    title: "Contact Book Application",
    tag: "OOP Project",
    description:
      "A desktop contact management application built around clean object-oriented design — add, edit, search, and organize contacts with persistent storage.",
    tech: ["Java", "OOP"],
    github: "https://github.com/fasihaafridi15-maker/CONTACT-BOOK",
    demo: null,
    featured: false,
  },
  {
    id: "smart-text-similarity",
    title: "Smart Text Similarity Checker",
    tag: "Applied Algorithms",
    description:
      "A text-similarity analysis tool using the Longest Common Subsequence technique to compare and score how closely two pieces of text match.",
    tech: ["Python", "LCS Algorithm"],
    github: "https://github.com/fasihaafridi15-maker/smart-text-similarity-lcs",
    demo: null,
    featured: false,
  },
  {
    id: "codealpha-calculator",
    title: "CodeAlpha Scientific Calculator",
    tag: "CodeAlpha Internship — Task 2",
    description:
      "A responsive dual-mode scientific calculator built during the CodeAlpha Frontend Development Internship, with a soft premium color palette and full keyboard support.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/fasihaafridi15-maker/CodeAlpha_Calculator",
    demo: null,
    featured: false,
  },
  {
    id: "codealpha-gallery",
    title: "Lumière Gallery",
    tag: "CodeAlpha Internship — Task 1",
    description:
      "A modern, fully responsive image gallery website with an interactive lightbox and filterable layout, built during the CodeAlpha Frontend Development Internship.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/fasihaafridi15-maker/CodeAlpha_ImageGallery",
    demo: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
