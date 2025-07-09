import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#1A1A2E] px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/profile.png"
            alt="Maaz Bakhshi Profile"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8 border-4 border-[#00D9FF] shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-300 ease-out"
          />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-4">Maaz Bakhshi</h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#00D9FF] mb-6">
          O-Level Graduate | Future A-Level Student
        </h2>

        <p className="text-lg sm:text-xl text-[#B0B0B0] mb-16 max-w-2xl mx-auto leading-relaxed">
          Just completed my O-Levels and starting A-Levels in Physics, Chemistry & Maths this August. Currently learning
          web development to build projects and create future earning opportunities.
        </p>

        <Button
          size="lg"
          className="bg-[#FF6B35] hover:bg-[#00D9FF] hover:text-[#0A0A0A] hover:scale-110 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 ease-out text-[#FFFFFF] px-8 py-3 text-lg border-0 transform active:scale-95"
        >
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Button>
      </div>
    </section>
  )
}
