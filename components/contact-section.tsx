import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#FFFFFF] mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#FF6B35]" />
              <span className="text-lg text-[#FFFFFF]">maaz@example.com</span>
            </div>

            <div className="bg-[#1A1A2E]/30 p-4 rounded-lg border border-[#FF6B35]/30">
              <p className="text-sm text-[#FFFFFF] mb-2">
                <strong>Currently Available For:</strong>
              </p>
              <ul className="text-sm text-[#B0B0B0] space-y-1">
                <li>• Simple web development projects</li>
                <li>• Learning collaborations</li>
                <li>• Beginner-friendly opportunities</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-[#1A1A2E] border-[#FF6B35] text-[#FFFFFF] hover:bg-[#FF6B35] hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-300 ease-out transform active:scale-95"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-[#00D9FF] border-[#00D9FF] text-[#0A0A0A] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 ease-out transform active:scale-95"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#1A1A2E] border-[#FF6B35] hover:shadow-xl hover:shadow-[#00D9FF]/10 hover:scale-105 transition-all duration-300 ease-out group">
            <CardHeader>
              <CardTitle className="text-[#FFFFFF] group-hover:text-[#00D9FF] transition-colors duration-300">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-[#0A0A0A] border-[#FF6B35] text-[#FFFFFF] placeholder:text-[#B0B0B0] focus:border-[#00D9FF] focus:scale-105 transition-all duration-300"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-[#0A0A0A] border-[#FF6B35] text-[#FFFFFF] placeholder:text-[#B0B0B0] focus:border-[#00D9FF] focus:scale-105 transition-all duration-300"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="bg-[#0A0A0A] border-[#FF6B35] text-[#FFFFFF] placeholder:text-[#B0B0B0] focus:border-[#00D9FF] focus:scale-105 transition-all duration-300"
              />
              <Button className="w-full bg-[#FF6B35] hover:bg-[#00D9FF] hover:text-[#0A0A0A] hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 ease-out text-[#FFFFFF] border-0 transform active:scale-95">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
