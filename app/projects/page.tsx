import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Projects } from "@/components/ProjectCards"
import { Footer } from "@/components/Footer"
import { GitHubLink } from "@/components/protected-contact"

// const projects = [
//   {
//     id: 1,
//     title: "Project 1",
//     description: "A brief description of Project 1",
//     image: "/placeholder.svg?height=200&width=300",
//     link: "https://github.com/yourusername/project1",
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     description: "A brief description of Project 2",
//     image: "/placeholder.svg?height=200&width=300",
//     link: "https://github.com/yourusername/project2",
//   },
//   {
//     id: 3,
//     title: "Project 3",
//     description: "A brief description of Project 3",
//     image: "/placeholder.svg?height=200&width=300",
//     link: "https://github.com/yourusername/project3",
//   },
// ]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              My Projects
            </h1>

            <div className="text-2xl font-semibold mb-4">
                <GitHubLink />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">More Cool Things Coming Soon...</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={project.title}
                      className="aspect-video object-cover rounded-md"
                      height="200"
                      src={project.image || "/placeholder.svg"}
                      width="300"
                    />
                  </CardContent>
                  <CardFooter>
                    {/* <Button asChild={!project.disabled} variant={project.disabled ? "disabled" : "default"} disabled={project.disabled}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button> */}
                    <Button asChild>
                      <a href={project.link} rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
