const projects = [
  {
    id: 1,
    title: 'Enterprise AI Implementation',
    category: 'AI Solutions',
    image: '🏢',
    description: 'Implemented ML models for a Fortune 500 company, reducing operational costs by 40%.',
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Time Saved', value: '2000+ hrs/yr' },
    ],
  },
  {
    id: 2,
    title: 'Workflow Automation System',
    category: 'Automation',
    image: '⚙️',
    description: 'Automated 95% of manual processes for a financial services firm.',
    metrics: [
      { label: 'Processes Automated', value: '95%' },
      { label: 'Error Reduction', value: '99%' },
    ],
  },
  {
    id: 3,
    title: 'Data Analytics Platform',
    category: 'Analytics',
    image: '📊',
    description: 'Built comprehensive analytics platform handling 100M+ data points.',
    metrics: [
      { label: 'Data Points', value: '100M+' },
      { label: 'Insights/Month', value: '500+' },
    ],
  },
  {
    id: 4,
    title: 'Customer Platform Integration',
    category: 'Integration',
    image: '🔗',
    description: 'Unified 15+ disparate systems into single platform.',
    metrics: [
      { label: 'Systems Integrated', value: '15' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 5,
    title: 'Real-time Monitoring System',
    category: 'AI Solutions',
    image: '📡',
    description: 'Real-time monitoring and alerting system for infrastructure.',
    metrics: [
      { label: 'Alerts/Day', value: '1000+' },
      { label: 'Detection Rate', value: '98%' },
    ],
  },
  {
    id: 6,
    title: 'Predictive Maintenance Platform',
    category: 'Analytics',
    image: '🔧',
    description: 'Predictive maintenance system for manufacturing.',
    metrics: [
      { label: 'Downtime Reduced', value: '60%' },
      { label: 'ROI', value: '300%' },
    ],
  },
]

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="section min-h-[60vh] flex items-center bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted">
              See how we've helped businesses transform through innovative AI and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-secondary rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 group">
                {/* Project Image */}
                <div className="aspect-video bg-primary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-sm text-accent font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted mb-6">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-background p-3 rounded border border-border">
                        <div className="text-lg font-bold text-accent">{metric.value}</div>
                        <div className="text-xs text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-background">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="opacity-70">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="opacity-70">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <p className="opacity-70">Lines of Code</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="opacity-70">Years Active</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
