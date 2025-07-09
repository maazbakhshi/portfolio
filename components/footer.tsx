"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function Footer() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#1A1A2E] border-t border-[#FF6B35]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-[#B0B0B0] text-center sm:text-left">
          © 2025 Maaz Bakhshi. Built with ❤️ using Next.js and Tailwind CSS.
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 bg-[#0A0A0A] border-[#FF6B35] text-[#FFFFFF] hover:bg-[#FF6B35] hover:scale-110 hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-300 ease-out transform active:scale-95"
        >
          {darkMode ? (
            <>
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </>
          )}
        </Button>
      </div>
    </footer>
  )
}
