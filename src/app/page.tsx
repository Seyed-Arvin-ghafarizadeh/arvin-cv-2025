import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { Skills } from '@/components/Skills'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <section id="about" className="card mb-8 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            As an AI Engineer and Systems Architect with over 5 years of experience, I specialize in crafting robust, scalable, and intelligent systems. My expertise spans LLM-based applications, AI agents, and comprehensive backend architectures. I excel at leading cross-functional teams, translating complex requirements into elegant solutions, and driving projects from concept to deployment. I am passionate about leveraging cutting-edge AI to solve real-world problems and enhance product capabilities.
          </p>
        </section>
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
