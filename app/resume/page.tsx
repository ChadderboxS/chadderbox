import { Nav } from "@/components/nav"
import Link from "next/link"
import { ProtectedEmail, ProtectedPhone, LinkedInLink, PersonalLink } from "@/components/protected-contact"
import { PDFGenerator } from "@/components/pdf-generator"
import { DownloadPDFButton } from '@/components/DownloadPDFButton'

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div id="resume-content" className="print:shadow-none print-pdf:text-black print-pdf:block">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Chad Stilwell
                  </h1>
                  <p className="text-xl text-gray-500 mt-2">Technology Executive | CTO | AI & Data Science Leader</p>
                </div>
                <div className="mt-4 print-pdf:hidden md:mt-0 space-y-2">
                  <ProtectedPhone />
                  <ProtectedEmail />
                  <LinkedInLink />
                </div>
                <div className="hidden print-pdf:block print-pdf:black-text mt-4 md:mt-0 space-y-2">
                  <ProtectedPhone override={true} />
                  <ProtectedEmail override={true} />
                  <LinkedInLink />
                  <PersonalLink />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
                  <p>
                    Innovative and results-driven technology executive with a proven track record of driving growth and
                    scaling startups. Expertise in IT strategy, AI-driven product development, and team building.
                    Recognized for delivering cutting-edge solutions, leading high-impact teams, and influencing
                    industry advancements. Adept at fostering a culture of innovation and executing strategic
                    initiatives that drive profitability and operational excellence.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-2">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Strategic Leadership –</span>
                      <span>Drives vision and innovation that aligns IT strategy with business objectives.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Team & Culture Development –</span>
                      <span>Nurtures a dynamic problem-solving atmosphere with remarkably low turnover rates.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">AI & Data Science Expertise –</span>
                      <span>
                        Leads AI-driven product development, leveraging machine learning and generative AI models.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Decision-Making & Execution –</span>
                      <span>Balances rapid execution with long-term vision.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Operational Efficiency –</span>
                      <span>Spearheads transformations that improve scalability and profitability.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Security & Compliance –</span>
                      <span>Maintained several years of unblemished SOC 2 Type 2 reports.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Emerging Company CIO/CTO of the Year (2024, Tech Titans)</li>
                    <li>40 Under 40 (2024, Auto Remarketing)</li>
                    <li>
                      Two-time CEO Quarterly Excellence Award recipient for outstanding contributions to business
                      strategy and operational efficiency. (Alcon)
                    </li>
                    <li>Top 10 Startups (2024, LinkedIn News, Dallas, TX)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <h3 className="text-xl font-semibold">Agora Data, Inc.</h3>
                        <p className="text-gray-500">August 2019 - February 2025</p>
                      </div>

                      <div className="mt-2 ml-0 md:ml-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Chief Technology Officer</h4>
                          <p className="text-gray-500">July 2021 - February 2025</p>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Led AI-driven product development and IT strategy, pioneering patent-pending AI technology.
                          </li>
                          <li>
                            Scaled the company from 15 employees to over 100, generating $50M in revenue and achieving
                            positive EBITDA.
                          </li>
                          <li>
                            Spearheaded a technology-driven transformation, managing a team of more than 50 employees.
                          </li>
                          <li>
                            Directed and guided the product team to ensure alignment with business strategy and
                            technological advancements.
                          </li>
                          <li>
                            Led IT security initiatives, achieving multiple years with a clean SOC 2 Type 2 report.
                          </li>
                          <li>
                            Cultivated a strong team culture that resulted in exceptional retention rates, maintaining
                            an involuntary turnover rate of just 1.5% and a total turnover rate of 6.5%.
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 ml-0 md:ml-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Senior Vice President - Data Science</h4>
                          <p className="text-gray-500">August 2019 - July 2021</p>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Established and led data science initiatives that shaped product innovation.</li>
                          <li>Developed scalable, data-driven solutions contributing to business growth.</li>
                          <li>
                            Designed and implemented a primary ML model to predict auto loan performance over time,
                            increasing model accuracy from 82% to 98.5% (MAE).
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <h3 className="text-xl font-semibold">Alcon</h3>
                        <p className="text-gray-500">September 2008 - August 2019</p>
                      </div>

                      <div className="mt-2 ml-0 md:ml-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Director, U.S. Commercial Operations</h4>
                          <p className="text-gray-500">2017 – 2019</p>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Led the technology strategy for U.S. commercial operations, optimizing business performance.
                          </li>
                          <li>Managed cross-functional teams to improve operational efficiency.</li>
                          <li>
                            Fostered a data-driven decision-making culture by transforming the in-house data strategy,
                            data science program, reporting, and analytics capabilities.
                          </li>
                          <li>
                            Developed a capital equipment quoting application that enabled the field force and contracts
                            team to reduce quote generation time from over two weeks to an average of 48 hours (iOS and
                            web platforms).
                          </li>
                        </ul>
                      </div>

                      <div className="mt-2 ml-0 md:ml-4 space-y-1">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Associate Director, U.S. Surgical Sales Operations</h4>
                          <p className="text-gray-500">2016 – 2017</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Project Manager, U.S. Surgical Sales Operations</h4>
                          <p className="text-gray-500">2014 – 2016</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Sales Analyst, U.S. Sales Operations</h4>
                          <p className="text-gray-500">2011 – 2014</p>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Information Specialist, I.T. Front Office</h4>
                          <p className="text-gray-500">2008 – 2011</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  <div>
                    <h3 className="text-lg font-medium">Texas Christian University (2008)</h3>
                    <p>Bachelor of Business Administration (BBA) – Business Information Systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <DownloadPDFButton contentId="resume-content" buttonText="Download Resume [PDF]" filename="chad_stilwell_resume.pdf" />
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
