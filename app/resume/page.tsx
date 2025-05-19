import { Nav } from "@/components/nav"
import Link from "next/link"
import { ProtectedEmail, ProtectedPhone, LinkedInLink, PersonalLink, GitHubLink } from "@/components/protected-contact"
import { DownloadPDFButton } from '@/components/DownloadPDFButton'
import { Footer } from "@/components/Footer"

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div id="resume-content" className="print:shadow-none print-pdf:text-black">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Chad Stilwell
                  </h1>
                  <p className="text-xl text-gray-500 mt-2">Technology Executive | CTO | AI & Data Science Leader</p>
                  <div className="hidden mt-2 flex-col space-x-2 print-pdf:block print-pdf:black-text">
                    <ProtectedPhone override={true} />
                    <ProtectedEmail override={true} />
                    <LinkedInLink />
                    <GitHubLink />
                    <PersonalLink />
                  </div>
                </div>
                <div className="flex flex-col mt-4 print-pdf:hidden md:mt-0 space-y-2">
                  <ProtectedPhone />
                  <ProtectedEmail />
                  <LinkedInLink />
                  <GitHubLink />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
                  <p>
                    Innovative and results-driven product & technology executive with a proven track record of driving growth 
                    and scaling startups. Blends strategic leadership with hands-on technical expertise—equally comfortable setting 
                    vision and jumping into the code to solve complex problems alongside the team. Skilled in IT strategy, product 
                    development, AI, and high-performing team building. Known for delivering cutting-edge solutions, leading 
                    impactful initiatives, and fostering a culture of ownership, innovation, and executional excellence.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
                  <ul className="mt-2 space-y-1">
                    <li className="leading-relaxed">
                      <span className="font-semibold mr-2">Strategic Leadership –</span> 
                      <span>Drives vision and innovation that aligns IT strategy with business objectives.</span>
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-semibold mr-2">Team & Culture Development –</span>
                      <span>Nurtures a dynamic problem-solving atmosphere with remarkably low turnover rates.</span>
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-semibold mr-2">AI & Data Science Expertise –</span>
                      <span>Develop AI-driven products, leveraging machine learning and generative AI models.</span>
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-semibold mr-2">Decision-Making & Execution –</span>
                      <span>Balances rapid execution with long-term vision.</span>
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-semibold mr-2">Operational Efficiency –</span>
                      <span>Spearheads transformations that improve scalability and profitability.</span>
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-semibold mr-2">Security & Compliance –</span>
                      <span>Maintained several years of unblemished SOC 2 Type 2 reports.</span>
                    </li>
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
                          <h4 className="text-lg font-medium">Chief Product & Technology Officer</h4>
                          <p className="text-gray-500">July 2021 - February 2025</p>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Led product development, IT strategy, and go to market strategy, pioneering patent-pending AI technology.
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
                            technological advancements and bring new products to market.
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
                  <h2 className="text-2xl font-semibold mb-4">Technical Experience Highlights</h2>
                  <div className="space-y-6">
                    <div>

                      <div className="mt-2 ml-0 md:ml-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">AI-Driven SaaS & Cloud Architecture</h4>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Built a <strong>multi-tenant SaaS platform</strong> on <strong>PostgreSQL with Row-Level Security (RLS)</strong> and a unified schema, 
                            enforcing tenant isolation at the database layer. Optimized performance with tenant-aware indexing 
                            and automated onboarding through dynamic RLS policy generation.
                          </li>
                          <li>
                            Integrated Auth0 for authentication and tenant management, using JWTs, Organizations, 
                            and role-based access control (RBAC) to securely resolve tenant context and enforce GraphQL API access policies.
                          </li>
                          <li>
                            Deployed across AWS cloud infrastructure, using Docker containers on ECS for scalable microservices, CloudFormation 
                            for infrastructure as code, and services like Lambda, S3, RDS, and API Gateway. Implemented automated 
                            CI/CD pipelines with CircleCI and achieved 90% test coverage across services, including Playwright-based 
                            front-end testing, ensuring high reliability and fast, scalable deployments.
                          </li>
                          <li>
                            Built APIs using .NET, Python, and Go, selecting the optimal stack for performance, integration, and data science alignment.
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 ml-0 md:ml-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Applied Machine Learning & Predictive Modeling</h4>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Architected and developed an AI-powered auto loan desking tool that dynamically guided 
                            dealers to optimize loan structures using predictive models—minimizing monthly payments, 
                            term lengths, and loan-to-value ratios while maximizing dealer profitability.
                          </li>
                          <li>
                            Built an ML-infused Monte Carlo engine in Python and .NET to forecast loan performance 
                            at the individual level by payment period, achieving {'>'}98% MAE across multiple years 
                            of securitized loan data.
                          </li>
                          <li>
                            Engineered AI agents to generate narrative explanations and interactive chart-based 
                            walkthroughs, enabling end users to interpret program logic and data behavior with minimal training.
                          </li>
                          <li>
                            Engineered GenAI platform that integrates LLMs and vision models to generate 
                            personalized children's books from user-submitted likenesses and story prompts. 
                            Designed and built custom pipelines for natural language generation, image synthesis, 
                            and end-to-end story assembly.
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 ml-0 md:ml-4">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <h4 className="text-lg font-medium">Front-End Engineering & UX</h4>
                        </div>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Built responsive, Atomic Design-based component systems using Next.js, TailwindCSS, 
                            and ShadCN, aligned to modern headless UI patterns for performance and accessibility.
                          </li>
                          <li>
                            Integrated AI SDKs to support real-time interactions and data storytelling experiences 
                            across web applications.
                          </li>
                        </ul>
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

              </div>
            </div>

            <div className="mt-8">
              <a
                href="/CV_Chad_Stilwell.pdf"
                download
                className="inline-block px-4 py-2 mr-4 mb-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-150"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
