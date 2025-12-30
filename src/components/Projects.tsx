import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    "Smart Document QA Assistant",
    "AI Smart Contract / DeFi Auditor & Advisor Agent",
    "Face Recognition System",
    "AI-powered Monitoring System",
    "Persian OCR System",
    "Real-time Face Detection",
    "Text-to-Speech Pipeline",
    "Data Analytics Telegram Bot",
    "User Data Storage Bot"
  ]

  return (
    <div className="mb-8">
      <h2 className="section-title">Selected Projects</h2>

      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <Github className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">GitHub Projects</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <h3 className="font-medium text-gray-800 mb-2">{project}</h3>
              <a
                href={`https://github.com/SEYED-ARVIN-GHAFARIZADEH`}
                className="text-primary-600 hover:text-primary-700 text-sm flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
