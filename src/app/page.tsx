import { Header } from '@/components/Header'
import { Skills } from '@/components/Skills'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
