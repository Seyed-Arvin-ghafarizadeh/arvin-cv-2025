'use client'

import { Github, ExternalLink, Code, Sparkles, Brain, Eye, Shield, Monitor, Scan, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ElementType;
  gradient: string;
}

export function Projects() {
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

  const projects: ProjectItem[] = [
    {
      title: "Smart Document QA Assistant",
      description: "Developed an intelligent assistant capable of answering complex queries from various document types using advanced NLP and LLM techniques. Features RAG implementation for enhanced accuracy.",
      technologies: ["Python", "LLM", "NLP", "RAG", "FastAPI", "VectorDB"],
      githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Smart-Document-QA-Assistant",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Smart Contract / DeFi Auditor & Advisor Agent",
      description: "An AI agent designed to audit smart contracts and provide DeFi advisory, identifying vulnerabilities and optimizing strategies. Powered by advanced AI reasoning capabilities.",
      technologies: ["Python", "AI Agents", "Solidity", "Web3", "LLM"],
      githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/AI-Smart-Contract-DeFi-Auditor-Advisor-Agent",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Face Recognition System",
      description: "Built a real-time face recognition system with high accuracy, suitable for security and attendance applications. Utilizes deep learning models for robust performance.",
      technologies: ["Python", "OpenCV", "Deep Learning", "Dlib", "CNN"],
      githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Face-Recognition-System",
      icon: Eye,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "AI-powered Monitoring System",
      description: "A system that uses AI to monitor various metrics and alert on anomalies, ensuring system stability and performance. Features predictive analytics and automated alerting.",
      technologies: ["Python", "Machine Learning", "Data Science", "Monitoring", "Time Series"],
      githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/AI-powered-Monitoring-System",
      icon: Monitor,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Persian OCR System",
      description: "Developed an OCR system specifically for Persian text, achieving high accuracy on diverse datasets. Custom CNN architecture trained from scratch for optimal performance.",
      technologies: ["Python", "OCR", "CNN", "Image Processing", "Pytorch"],
      githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Persian-OCR-System",
      icon: Scan,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Real-time Face Detection",
      description: "Implemented a real-time face detection application with various algorithms for robust performance. Optimized for speed and accuracy in different lighting conditions.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
      githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Real-time-Face-Detection",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="card mb-8">
      <div className="fade-in-up">
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Selected Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Explore my latest work and contributions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col transform hover:-translate-y-2 ${
                isVisible ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6 flex-grow flex flex-col">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-600 dark:border-blue-400 px-4 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
