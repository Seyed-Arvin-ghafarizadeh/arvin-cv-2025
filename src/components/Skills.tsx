export function Skills() {
  const backendDevopsSkills = [
    'Flask', 'Django', 'FastAPI', 'Git', 'Docker', 'Web scraping', 'Automation'
  ]

  const aiSkills = [
    'Prompt Engineering', 'Agentic-AI', 'RAG - LLM', 'WorkFlow design',
    'Pytorch/Tensorflow', 'NLP & Computer Vision', 'VectorDB, postgresql'
  ]

  const devEnvironments = [
    'VSCode', 'Cursor', 'Google Colab', 'Jupyter Notebook', 'Git-Docker'
  ]

  return (
    <div className="mb-8">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Backend & DevOps</h3>
          <div>
            {backendDevopsSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">AI & Machine Learning</h3>
          <div>
            {aiSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Development Environments</h3>
          <div>
            {devEnvironments.map((env) => (
              <span key={env} className="skill-tag">
                {env}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
