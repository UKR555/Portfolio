import type { LucideIcon } from 'lucide-react';
import { Code2, Database, Brain, Layers, Palette, GitMerge, Cloud, Server, Smartphone, Monitor, MessageSquare, Users, Clock, Settings, FileCode, Globe } from 'lucide-react';

export interface Skill {
  name: string;
  icon?: LucideIcon; // Optional: if you want to add icons later
  level?: number; // Optional: for progress bars, 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: Code2, level: 85 },
      { name: "C", icon: Code2, level: 80 },
      { name: "HTML", icon: Palette, level: 95 },
      { name: "CSS", icon: Palette, level: 95 },
      { name: "SQL", icon: Database, level: 85 },
      { name: "Python", icon: Code2, level: 90 },
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "Artificial Intelligence", icon: Brain, level: 80 },
      { name: "Machine Learning", icon: Brain, level: 75 },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: MessageSquare, level: 90 },
      { name: "Leadership", icon: Users, level: 85 },
      { name: "Adaptability", icon: Settings, level: 90 },
      { name: "Time Management", icon: Clock, level: 85 },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: GitMerge, level: 85 },
      { name: "Visual Studio Code", icon: FileCode, level: 90 },
      { name: "Google Colaboratory", icon: Globe, level: 80 },
    ]
  },
];

export const projectsData: Project[] = [
  {
    title: "Plant Disease Detection",
    description: "An AI-powered plant disease detection system using machine learning and computer vision to identify and classify plant diseases from images.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    imageHint: "plant disease detection",
    githubUrl: "https://github.com/UKR555/Plant-_disease_detection",
  },
  {
    title: "Quiz Application",
    description: "An interactive quiz application built with JavaScript, featuring multiple-choice questions, score tracking, and a user-friendly interface.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    imageHint: "quiz app",
    githubUrl: "https://github.com/UKR555/QUIZ_APP",
  },
  {
    title: "Customer Churn Prediction",
    description: "A machine learning model to predict customer churn using data analysis and predictive modeling techniques.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    imageHint: "customer analytics",
    githubUrl: "https://github.com/UKR555/customer_churn_prediction",
  },
  {
    title: "FoodCycle Robot",
    description: "An innovative food waste management system using robotics and automation to promote sustainable food practices.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    imageHint: "food waste robot",
    githubUrl: "https://github.com/UKR555/foodcycle-robot",
  },
  {
    title: "FoodCycle Bot",
    description: "A Python-based bot system for food waste management and recycling automation.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    imageHint: "food bot",
    githubUrl: "https://github.com/UKR555/foodcycle-bot",
  },
  {
    title: "DAN - Donation App",
    description: "A personal donation application that allows users to donate small amounts (minimum 1 rupee) for charitable causes, promoting micro-donations for social impact.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    imageHint: "donation app",
    githubUrl: "https://github.com/UKR555/DAN",
  },
  {
    title: "Portfolio Website (This one!)",
    description: "A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    imageUrl: "https://picsum.photos/600/400?random=8",
    imageHint: "portfolio website",
    githubUrl: "https://github.com/UKR555/port",
  },
];

export const personalInfo = {
  name: "CH Uday Kumar Reddy",
  title: "AI/ML Engineer | Full Stack Developer | Tech Enthusiast",
  bio: "I build intelligent systems and beautiful web experiences.",
  aboutMe: "Hello! I'm CH Uday Kumar Reddy, a passionate and results-driven engineer with a strong foundation in Artificial Intelligence, Machine Learning, and Full Stack Web Development. I thrive on solving complex problems and transforming innovative ideas into reality. My journey in tech has been fueled by a curiosity for learning and a desire to create impactful solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in nature.",
  email: "uday554@gmail.com",
  linkedin: "https://www.linkedin.com/in/uday554/",
  github: "https://github.com/UKR555",
  twitter: "https://twitter.com/alexjohnsondev",
  resumeUrl: "/resume.pdf",
};
