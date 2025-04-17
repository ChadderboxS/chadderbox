import { Nav } from "@/components/nav"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProtectedEmail, ProtectedPhone, LinkedInLink } from "@/components/protected-contact"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Contact Me
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="ml-8">
                          <p className="font-medium">Phone</p>
                          <ProtectedPhone />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="ml-8">
                          <p className="font-medium">Email</p>
                          <ProtectedEmail />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="ml-8">
                          <p className="font-medium">LinkedIn</p>
                          <LinkedInLink />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Chad Stilwell. All rights reserved.</p>
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
  )
}
