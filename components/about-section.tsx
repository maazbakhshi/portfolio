export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#FFFFFF] mb-8">About Me</h2>

        <p className="text-lg text-[#B0B0B0] mb-8 max-w-3xl mx-auto leading-relaxed">
          Hi, I&apos;m Maaz! I recently completed my O-Levels and I&apos;m excited to start my A-Levels in Physics, Chemistry, and
          Mathematics this August. While waiting for my results, I&apos;ve discovered my passion for web development and
          coding. I&apos;m learning by building practical projects, starting with simple applications and working my way up.
          My goal is to develop strong programming skills that will help me earn money through freelance projects in the
          future.
        </p>

        <div className="flex justify-center space-x-8 text-4xl">
          <span title="Learning">📚</span>
          <span title="Problem Solving">🧠</span>
          <span title="Building">🛠️</span>
        </div>
      </div>
    </section>
  )
}
