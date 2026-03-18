import { Link } from 'react-router-dom'
import { Zap, Brain, Cog, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate complex processes and drive decision-making.',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline your workflows and eliminate manual tasks with intelligent automation systems.',
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights to drive strategic business decisions.',
  },
  {
    icon: Zap,
    title: 'Integration Services',
    description: 'Seamlessly connect your existing systems and tools for improved efficiency.',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section bg-secondary">
      <div className="container-max">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted">
            Comprehensive solutions designed to modernize your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <Icon size={40} className="text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            )
          })}
        </div>

        <Link to="/services" className="btn-primary group inline-flex">
          View All Services
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
