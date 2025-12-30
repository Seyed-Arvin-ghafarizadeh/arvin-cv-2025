import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <div className="mb-8">
      <h2 className="section-title">Get In Touch</h2>

      <div className="card text-center">
        <p className="text-gray-600 mb-6">
          I'm always interested in new opportunities and collaborations in AI engineering and systems architecture.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:arvinghafrizaadeh@gmail.com"
            className="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          <a
            href="https://github.com/SEYED-ARVIN-GHAFARIZADEH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arvin-ghafari-zadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
