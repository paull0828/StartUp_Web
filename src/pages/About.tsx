import { CheckCircle } from 'lucide-react'

const team = [
  { name: 'John Smith', role: 'CEO & Founder', emoji: '👨‍💼' },
  { name: 'Sarah Johnson', role: 'CTO', emoji: '👩‍💻' },
  { name: 'Mike Chen', role: 'Lead Developer', emoji: '👨‍🔧' },
  { name: 'Emma Williams', role: 'Business Lead', emoji: '👩‍🏫' },
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section min-h-[60vh] flex items-center bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About Visionary Process</h1>
            <p className="text-xl text-muted mb-8">
              We're a team of innovators and strategists dedicated to helping businesses harness the power of AI and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted mb-6">
                Founded in 2013, Visionary Process started with a simple mission: to make advanced technology accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-muted mb-6">
                Over the past decade, we've grown into a trusted partner for over 500 companies, helping them optimize operations, reduce costs, and accelerate growth through intelligent automation.
              </p>
              <p className="text-lg text-muted">
                Today, we remain committed to innovation and excellence, continuously pushing the boundaries of what's possible with AI and automation.
              </p>
            </div>
            <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-muted">Building the Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-secondary">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly exploring new technologies and approaches' },
              { title: 'Excellence', desc: 'Delivering exceptional quality in everything we do' },
              { title: 'Partnership', desc: 'Building long-term relationships with our clients' },
            ].map((value, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border">
                <CheckCircle size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-secondary rounded-lg p-8 text-center border border-border hover:border-accent transition">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
