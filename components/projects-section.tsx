import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Brain, User, Calculator, CheckSquare } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "Mood Detection App",
    description:
      "My first application built with ChatGPT assistance - detects user mood and provides personalized suggestions and recommendations.",
    image: "/moodmate.png?height=200&width=300",
    gradient: "from-[#FF6B35] to-[#00D9FF]",
    buttonColor: "bg-[#FF6B35]",
    icon: Brain,
    tech: ["ChatGPT", "JavaScript", "AI"],
    status: "Completed",
  },
  {
    name: "Personal Portfolio",
    description:
      "This responsive portfolio website showcasing my journey from O-Levels to web development, built with Next.js and Tailwind CSS.",
    image: "/portfolio.png?height=200&width=300",
    gradient: "from-[#00D9FF] to-[#FF6B35]",
    buttonColor: "bg-[#00D9FF]",
    icon: User,
    tech: ["Next.js", "Tailwind", "React"],
    status: "Live",
  },
  {
    name: "Simple Calculator",
    description:
      "A clean, functional calculator app - one of my starter projects to practice JavaScript fundamentals and DOM manipulation.",
    image: "/calculator.png?height=200&width=300",
    gradient: "from-[#FF6B35] to-[#1A1A2E]",
    buttonColor: "bg-[#FF6B35]",
    icon: Calculator,
    tech: ["JavaScript", "HTML", "CSS"],
    status: "In Progress",
  },
  {
    name: "To-Do List App",
    description:
      "Task management application with local storage - practicing CRUD operations and modern JavaScript features.",
    image: "/todolist.png?height=200&width=300",
    gradient: "from-[#00D9FF] to-[#1A1A2E]",
    buttonColor: "bg-[#00D9FF]",
    icon: CheckSquare,
    tech: ["JavaScript", "LocalStorage", "DOM"],
    status: "Planning",
  },
]

const statusColors: Record<string, string> = {
  Completed: "bg-[#FF6B35] text-[#FFFFFF] border-[#FF6B35]",
  Live: "bg-[#00D9FF] text-[#0A0A0A] border-[#00D9FF]",
  "In Progress": "bg-[#1A1A2E] text-[#FFFFFF] border-[#1A1A2E]",
  Planning: "bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A]",
}

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FFFFFF] mb-4">My Projects</h2>
          <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
            Here are some projects I&apos;ve built while learning web development. Each one taught me something new!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-[#00D9FF]/10 hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out overflow-hidden border border-[#FF6B35] bg-[#0A0A0A] hover:border-[#00D9FF] hover:bg-[#0A0A0A]/90"
              >
                {/* Gradient Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`}
                ></div>

                <CardHeader className="p-0 relative overflow-hidden">
                  {/* Project Icon Overlay */}
                  <div
                    className={`absolute top-4 left-4 z-10 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-[#FFFFFF]" />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      className={`${statusColors[project.status]} border group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#00D9FF] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-[#B0B0B0] mb-4 leading-relaxed group-hover:text-[#FFFFFF] transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-[#1A1A2E] border-[#FF6B35] text-[#FFFFFF] group-hover:bg-[#00D9FF] group-hover:text-[#0A0A0A] group-hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    className={`w-full ${project.buttonColor} hover:bg-[#FFFFFF] hover:text-[#0A0A0A] hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 ease-out text-[#FFFFFF] border-0 transform active:scale-95`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-[#B0B0B0] mb-4">More projects coming soon as I continue learning!</p>
          <Button
            variant="outline"
            size="lg"
            className="bg-[#0A0A0A] border-[#FF6B35] text-[#FFFFFF] hover:bg-[#FF6B35] hover:scale-110 hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-300 ease-out transform active:scale-95"
          >
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
