import Link from "next/link"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { LetterToNextTeam } from "@/components/Letter"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Chad Stilwell
                </h1>
                <p className="text-xl text-gray-500">Technology Executive | CTO | AI & Data Science Leader</p>
                <p className="text-gray-500 md:text-lg">
                  Innovative and results-driven technology executive with a proven track record of driving growth and
                  scaling companies through people, products, and innovative technology.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/projects">View My Projects</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/resume">See My Resume</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                {/* Profile Image - Replace with your actual image */}
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
                  <Image
                    src="/images/profile_picture.jpg"
                    alt="Chad Stilwell"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>Short project description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Project Image - Replace with your actual project images */}
                    <div className="aspect-video rounded-md bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img
                        src={`/images/project-${i}.jpg`}
                        alt={`Project ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Place project images at /public/images/project-1.jpg, project-2.jpg, etc.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/projects#project-${i}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-4 md:py-8 lg:py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <LetterToNextTeam />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
