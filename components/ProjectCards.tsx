export interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Projects: ProjectCardData[] = [
  {
    id: 1,
    title: 'GAME: Tenzies!',
    description: 'Roll all 10 dice until all dice are the same.',
    image: "/placeholder.svg?height=200&width=300",
    link: '@/projects/tenzies',
  },  
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/yourusername/project3",
  },
];
