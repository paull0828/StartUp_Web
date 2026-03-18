import { Zap, Brain, Cog, TrendingUp, CheckCircle } from 'lucide-react'

const serviceDetails = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Advanced artificial intelligence tailored to your business needs',
    features: ['Machine Learning Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline workflows and eliminate manual tasks',
    features: ['Workflow Design', 'RPA Implementation', 'Task Automation', 'Performance Monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transform data into actionable business insights',
    features: ['Data Visualization', 'BI Dashboards', 'Performance Metrics', 'Custom Reports'],
  },
  {
    icon: Zap,
    title: 'Integration Services',
    description: 'Connect your existing systems seamlessly',
    features: ['API Development', 'System Integration', 'Data Migration', 'Legacy System Updates'],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="section min-h-[60vh] flex items-center bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted">
              Comprehensive solutions designed to modernize your business operations and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            {serviceDetails.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="border border-border rounded-lg p-8 hover:border-accent transition">
                  <Icon size={48} className="text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-lg text-muted mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-secondary">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'Discovery', desc: 'Understanding your goals and challenges' },
              { step: 2, title: 'Strategy', desc: 'Developing tailored solutions' },
              { step: 3, title: 'Implementation', desc: 'Deploying with precision and care' },
              { step: 4, title: 'Support', desc: 'Ongoing optimization and support' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-accent mb-4">{step}</div>
                <h4 className="font-bold mb-2">{title}</h4>
                <p className="text-sm text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
