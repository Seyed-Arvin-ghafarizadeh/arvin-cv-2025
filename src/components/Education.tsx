import { GraduationCap } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: "Master's in Communication Systems",
      university: "University of Shahid Chamran—Ahvaz",
      year: "2020",
      thesis: "Implementing OCR on Persian DataSet Applying customized CNN from scratch"
    },
    {
      degree: "Bachelor in Electronics",
      university: "University of Shahid Chamran—Ahvaz",
      year: "2016",
      thesis: "Implementing Face Detection using Open-CV"
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="section-title">Education</h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-500" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-primary-600 font-medium">{edu.university}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                <p className="text-gray-600">
                  <span className="font-medium">Thesis:</span> {edu.thesis}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
