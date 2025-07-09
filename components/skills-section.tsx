import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "HTML", level: "Learning", color: "bg-[#FF6B35]" },
  { name: "CSS", level: "Learning", color: "bg-[#00D9FF]" },
  { name: "JavaScript", level: "Beginner", color: "bg-[#FF6B35]" },
  { name: "Next.js", level: "Exploring", color: "bg-[#0A0A0A]" },
  { name: "Tailwind CSS", level: "Learning", color: "bg-[#00D9FF]" },
  { name: "Git & GitHub", level: "Beginner", color: "bg-[#FF6B35]" },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#FFFFFF] mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:shadow-[#00D9FF]/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out bg-[#1A1A2E] border-[#FF6B35] hover:border-[#00D9FF] hover:bg-[#1A1A2E]/90 group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center border border-[#FFFFFF]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <span className="text-[#FFFFFF] font-bold text-lg">{skill.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#00D9FF] transition-colors duration-300">
                  {skill.name}
                </h3>
                <Badge
                  variant="secondary"
                  className="text-sm bg-[#FF6B35] text-[#FFFFFF] border-0 group-hover:bg-[#00D9FF] group-hover:text-[#0A0A0A] group-hover:scale-110 transition-all duration-300"
                >
                  {skill.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
