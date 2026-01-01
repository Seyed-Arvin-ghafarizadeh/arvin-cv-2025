'use client'

import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface EducationItem {
  degree: string;
  university: string;
  year: string;
  thesis?: string;
  location?: string;
  universityUrl?: string;
}

export function Education() {
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

  const education: EducationItem[] = [
    {
      degree: "Master's in Communication Systems",
      university: "University of Shahid Chamran—Ahvaz",
      year: "2020",
      thesis: "Implementing OCR on Persian DataSet Applying customized CNN from scratch",
      location: "Ahvaz, Iran",
    },
    {
      degree: "Bachelor in Electronics",
      university: "University of Shahid Chamran—Ahvaz",
      year: "2016",
      thesis: "Implementing Face Detection using Open-CV",
      location: "Ahvaz, Iran",
    }
  ]

  return (
    <section ref={sectionRef} id="education" className="card mb-8">
      <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">My academic background</p>
      </div>

      <div className="relative border-l-2 border-green-300 dark:border-green-600 ml-4 pl-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`mb-10 last:mb-0 relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute -left-[29px] top-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg ring-4 ring-white dark:ring-gray-900 transform hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {edu.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {edu.university}
                </span>
                {edu.universityUrl && (
                  <a
                    href={edu.universityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-3 mt-1 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {edu.year}
                </span>
                {edu.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {edu.location}
                  </span>
                )}
              </p>
              {edu.thesis && (
                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-700 dark:text-green-400">Thesis:</span>{' '}
                    {edu.thesis}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
