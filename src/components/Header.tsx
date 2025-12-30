import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export function Header() {
  return (
    <div className="card text-center mb-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Arvin Ghafrizaadeh</h1>
        <p className="text-xl text-primary-600 font-medium">AI Engineer & Systems Architect</p>
      </div>

      <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
        AI Engineer and Systems Architect with expertise in LLM-based systems, AI agents,
        backend architecture, and end-to-end product execution. Skilled in leading teams,
        designing scalable architectures, and implementing advanced AI workflows, including RAG
        and AI-driven automation solutions. Started in the field through master's thesis research
        and professional programming in 2019, bringing over 5 years of hands-on experience.
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>arvinghafrizaadeh@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4" />
          <a href="https://github.com/SEYED-ARVIN-GHAFARIZADEH" className="hover:text-primary-600 transition-colors">
            github.com/SEYED-ARVIN-GHAFARIZADEH
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4" />
          <a href="https://linkedin.com/in/arvin-ghafari-zadeh" className="hover:text-primary-600 transition-colors">
            linkedin.com/in/arvin-ghafari-zadeh
          </a>
        </div>
      </div>
    </div>
  )
}
