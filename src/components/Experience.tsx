import { Briefcase } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Raymond Rayan Pardazan",
      period: "June 2025 – November 2025",
      type: "current"
    },
    {
      title: "Freelance AI Engineer",
      company: "Self-Employed",
      period: "December 2024 – May 2025",
      type: "recent"
    },
    {
      title: "Python & Machine Learning Instructor",
      company: "NetCollege Institute",
      period: "June 2023 – September 2023",
      type: "past"
    },
    {
      title: "Data Analyst",
      company: "FARAFAN",
      period: "August 2022 – April 2023",
      type: "past"
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="section-title">Professional Experience</h2>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="card ml-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-primary-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
