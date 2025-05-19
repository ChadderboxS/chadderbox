import { Nav } from "@/components/nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubLink } from "@/components/protected-contact"
import { Projects } from "@/components/ProjectCards"

export default function MemeGeneratorPage() {
  const projectIndex = 1; // Index of the project in the Projects array
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/projects">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to Projects</span>
                  </Link>
                </Button>
                <h1 className="text-3xl font-bold">{Projects[projectIndex].title}</h1>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 space-y-4">
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      About This Project
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {Projects[projectIndex].descriptionLong ? Projects[projectIndex].descriptionLong : Projects[projectIndex].description}
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-medium">Technologies Used:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {Projects[projectIndex]?.technologies?.map((tech: string, idx: number) => (
                          <li key={idx}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4 mt-6">
                      <GitHubLink href={Projects[projectIndex].github}/>
                    </div>
                    <div className="mt-6">
                      <Button asChild>
                        <a
                          href={Projects[projectIndex].iframe}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Open in New Tab
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </div>

                <div className="md:w-2/3">
                  <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg bg-white dark:bg-gray-950">
                    <div className="aspect-[16/9] w-full">
                      <iframe
                        src={Projects[projectIndex].iframe}
                        className="w-full h-full"
                        style={{ minHeight: "600px" }}
                        title={Projects[projectIndex].title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Chad Stilwell. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
