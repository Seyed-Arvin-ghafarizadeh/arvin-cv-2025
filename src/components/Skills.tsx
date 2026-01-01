'use client'

import { Brain, Code, Terminal, Server, GitBranch, Bot, Database, Monitor, Laptop } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string;
  icon?: React.ElementType;
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const backendDevopsSkills: Skill[] = [
    { name: 'Flask', icon: Server },
    { name: 'Django', icon: Server },
    { name: 'FastAPI', icon: Server },
    { name: 'Git', icon: GitBranch },
    { name: 'Docker', icon: Bot },
    { name: 'Web scraping', icon: Code },
    { name: 'Automation', icon: Code },
  ]

  const aiSkills: Skill[] = [
    { name: 'Prompt Engineering', icon: Brain },
    { name: 'Agentic-AI', icon: Bot },
    { name: 'RAG - LLM', icon: Brain },
    { name: 'WorkFlow design', icon: Brain },
    { name: 'Pytorch/Tensorflow', icon: Code },
    { name: 'NLP & Computer Vision', icon: Monitor },
    { name: 'VectorDB, postgresql', icon: Database },
  ]

  const devEnvironments: Skill[] = [
    { name: 'VSCode', icon: Laptop },
    { name: 'Cursor', icon: Laptop },
    { name: 'Google Colab', icon: Monitor },
    { name: 'Jupyter Notebook', icon: Monitor },
    { name: 'Git-Docker', icon: GitBranch },
  ]

  const SkillPill = ({ skill, index }: { skill: Skill; index: number }) => {
    const Icon = skill.icon
    return (
      <span
        className={`inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 ${
          isVisible ? 'fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {skill.name}
      </span>
    )
  }

  const skillCategories = [
    { title: 'Backend & DevOps', skills: backendDevopsSkills, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'AI & Machine Learning', skills: aiSkills, gradient: 'from-purple-500 to-pink-500' },
    { title: 'Development Environments', skills: devEnvironments, gradient: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section ref={sectionRef} id="skills" className="card mb-8">
      <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Technologies I work with</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="flex flex-col gap-4">
            <h3 className={`text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${catIndex * 100}ms` }}>
              <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <SkillPill key={skill.name} skill={skill} index={catIndex * 10 + skillIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
