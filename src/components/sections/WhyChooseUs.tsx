import { CheckCircle } from 'lucide-react'

const reasons = [
  'Expert team with 10+ years of experience',
  'Proven track record with 500+ successful projects',
  'Cutting-edge technology and best practices',
  '24/7 customer support and maintenance',
  'Custom solutions tailored to your needs',
  'Transparent pricing and communication',
]

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideUp">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted mb-8">
              We combine innovation, expertise, and dedication to deliver exceptional results that drive real business value.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-base">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="bg-secondary rounded-lg overflow-hidden aspect-square flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-muted">Innovation & Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
