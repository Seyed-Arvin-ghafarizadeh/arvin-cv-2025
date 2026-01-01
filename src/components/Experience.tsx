'use client'

import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
  companyUrl?: string;
  linkedinUrl?: string;
}

export function Experience() {
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

  const experiences: ExperienceItem[] = [
    {
      title: "AI Engineer",
      company: "Raymond Rayan Pardazan",
      period: "June 2024 – November 2024",
      location: "Tehran, Iran",
      description: [
        "Developed and deployed LLM-based systems for various industrial applications.",
        "Designed and implemented AI agents for automation and intelligent decision-making.",
        "Contributed to the full software development lifecycle, from concept to deployment.",
      ]
    },
    {
      title: "Freelance AI Engineer",
      company: "Self-Employed",
      period: "December 2023 – May 2024",
      location: "Remote",
      description: [
        "Provided consulting and development services for AI and machine learning projects.",
        "Built custom AI solutions, including RAG systems and NLP models.",
        "Managed client relationships and project delivery.",
      ]
    },
    {
      title: "Python & Machine Learning Instructor",
      company: "NetCollege Institute",
      period: "June 2023 – September 2023",
      location: "Tehran, Iran",
      description: [
        "Taught Python programming, machine learning, and data science concepts to students.",
        "Developed course materials and practical exercises.",
        "Mentored students in their projects and career development.",
      ]
    },
    {
      title: "Data Analyst",
      company: "FARAFAN",
      period: "August 2022 – April 2023",
      location: "Tehran, Iran",
      description: [
        "Performed data collection, cleaning, and analysis to support business decisions.",
        "Developed dashboards and reports using data visualization tools.",
        "Contributed to optimizing data pipelines and improving data quality.",
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="experience" className="card mb-8">
      <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">My career journey and achievements</p>
      </div>

      <div className="relative border-l-2 border-gradient-to-b from-blue-500 to-purple-500 border-blue-300 dark:border-blue-600 ml-4 pl-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-10 last:mb-0 relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute -left-[29px] top-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg ring-4 ring-white dark:ring-gray-900 transform hover:scale-110 transition-transform duration-300">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="ml-8">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {exp.title}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">at</span>
                <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {exp.company}
                </span>
                {(exp.companyUrl || exp.linkedinUrl) && (
                  <a
                    href={exp.companyUrl || exp.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-3 mt-1 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </span>
                {exp.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                )}
              </p>
              <ul className="list-none mt-4 space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
