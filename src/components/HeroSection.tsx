'use client'

import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`card text-center mb-8 overflow-hidden relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Arvin Ghafrizaadeh
          </h1>
          <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Engineer & Systems Architect
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
          AI Engineer and Systems Architect with expertise in LLM-based systems, AI agents,
          backend architecture, and end-to-end product execution. Skilled in leading teams,
          designing scalable architectures, and implementing advanced AI workflows, including RAG
          and AI-driven automation solutions. Started in the field through master's thesis research
          and professional programming in 2019, bringing over 5 years of hands-on experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <a
            href="mailto:arvinghafrizaadeh@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>arvinghafrizaadeh@gmail.com</span>
          </a>
          <a
            href="https://github.com/SEYED-ARVIN-GHAFARIZADEH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/arvin-ghafari-zadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
