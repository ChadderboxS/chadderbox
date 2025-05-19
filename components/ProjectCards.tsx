import { string } from "zod";

export interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  descriptionLong?: string;
  image: string;
  link: string;
  iframe?: string;
  github?: string;
  technologies?: string[];
  disabled: boolean;
}

export const Projects: ProjectCardData[] = [
  {
    id: 1,
    title: "GAME: Tenzies!",
    description: "Roll all 10 dice until all dice are the same.",
    descriptionLong: "Tenzies is a dice game where the goal is to get all dice showing the same number. Click each die to freeze it at its current value between rolls.",
    image: "/images/tenzies-thumbnail.jpg?height=200&width=300",
    technologies: ["React", "CSS", "JavaScript"],
    link: "/projects/tenzies",
    iframe: "https://v0-tenzies-git-main-chadder-box-projects.vercel.app",
    github: "https://github.com/ChadderboxS/Tenzies",
    disabled: false,
  },
  {
    id: 2,
    title: "Meme Generator",
    description: "Create custom memes w/ popular images or your own.",
    descriptionLong: "The Meme Generator allows you to create custom memes by adding text to popular meme templates. Select an image, add your text, and generate your own personalized meme.",
    image: "/images/meme-generator-tumbnail.jpg?height=200&width=300",
    technologies: ["React", "CSS", "JavaScript","Meme API"],
    link: "/projects/meme-generator",
    iframe: "https://meme-generator-v0.vercel.app",
    github: "https://github.com/ChadderboxS/meme-generator-v0",
    disabled: false,
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    link: "/projects",
    disabled: true,
  },
];
