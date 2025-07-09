import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Target } from "lucide-react"

export function AcademicSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#FFFFFF] mb-12">Academic Journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* O-Levels Completed */}
          <Card className="text-center hover:shadow-xl hover:shadow-[#00D9FF]/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out bg-[#0A0A0A] border-[#FF6B35] hover:border-[#00D9FF] hover:bg-[#0A0A0A]/90 group">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <BookOpen className="h-8 w-8 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#00D9FF] transition-colors duration-300">
                O-Levels
              </h3>
              <Badge
                variant="secondary"
                className="mb-3 bg-[#FF6B35] text-[#FFFFFF] border-0 group-hover:bg-[#00D9FF] group-hover:text-[#0A0A0A] group-hover:scale-110 transition-all duration-300"
              >
                Completed
              </Badge>
              <p className="text-[#B0B0B0] group-hover:text-[#FFFFFF] transition-colors duration-300">
                Successfully completed O-Level examinations. Currently awaiting results with optimism and excitement for
                the next phase.
              </p>
            </CardContent>
          </Card>

          {/* A-Levels Starting */}
          <Card className="text-center hover:shadow-xl hover:shadow-[#00D9FF]/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out bg-[#0A0A0A] border-[#FF6B35] hover:border-[#00D9FF] hover:bg-[#0A0A0A]/90 group">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-[#00D9FF] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Calendar className="h-8 w-8 text-[#0A0A0A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#00D9FF] transition-colors duration-300">
                A-Levels
              </h3>
              <Badge
                variant="secondary"
                className="mb-3 bg-[#00D9FF] text-[#0A0A0A] border-0 group-hover:bg-[#FF6B35] group-hover:text-[#FFFFFF] group-hover:scale-110 transition-all duration-300"
              >
                Starting August 2025
              </Badge>
              <p className="text-[#B0B0B0] group-hover:text-[#FFFFFF] transition-colors duration-300">
                <strong className="text-[#00D9FF]">Physics, Chemistry & Mathematics</strong>
                <br />
                Preparing for the next academic challenge with subjects that will build my analytical and
                problem-solving skills.
              </p>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="text-center hover:shadow-xl hover:shadow-[#00D9FF]/10 hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out bg-[#0A0A0A] border-[#FF6B35] hover:border-[#00D9FF] hover:bg-[#0A0A0A]/90 group">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Target className="h-8 w-8 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#00D9FF] transition-colors duration-300">
                Goals
              </h3>
              <Badge
                variant="secondary"
                className="mb-3 bg-[#FF6B35] text-[#FFFFFF] border-0 group-hover:bg-[#00D9FF] group-hover:text-[#0A0A0A] group-hover:scale-110 transition-all duration-300"
              >
                In Progress
              </Badge>
              <p className="text-[#B0B0B0] group-hover:text-[#FFFFFF] transition-colors duration-300">
                Building web development skills through practical projects to create future earning opportunities and
                establish a freelance career.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
