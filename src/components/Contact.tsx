'use client'

import { Mail, Github, Linkedin, MessageCircle, Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
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

  return (
    <section ref={sectionRef} id="contact" className="card mb-8 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      
      <div className={`relative z-10 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and collaborations in AI engineering and systems architecture.
          Feel free to reach out to me for professional inquiries or just to connect!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:arvinghafrizaadeh@gmail.com"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
          >
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/arvin-ghafari-zadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 px-8 py-4 text-lg font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://github.com/SEYED-ARVIN-GHAFARIZADEH"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/arvin-ghafari-zadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="mailto:arvinghafrizaadeh@gmail.com"
            className="group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
