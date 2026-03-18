import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Enterprise AI Implementation',
    category: 'AI Solutions',
    image: '🏢',
  },
  {
    id: 2,
    title: 'Workflow Automation System',
    category: 'Automation',
    image: '⚙️',
  },
  {
    id: 3,
    title: 'Data Analytics Platform',
    category: 'Analytics',
    image: '📊',
  },
]

export default function PortfolioPreview() {
  return (
    <section className="section bg-secondary">
      <div className="container-max">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Recent Projects</h2>
            <p className="text-lg text-muted max-w-xl">
              Explore our latest work and see how we help businesses transform.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-background rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-primary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Link to="/portfolio" className="btn-primary group inline-flex">
          View All Projects
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
