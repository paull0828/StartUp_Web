import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section bg-primary text-background">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Let's discuss how our AI and automation solutions can drive growth and efficiency for your organization.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground rounded-lg font-semibold hover:opacity-90 transition group"
            >
              Start Your Journey
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:info@visionary.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-background rounded-lg font-semibold hover:bg-background/10 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-background/20">
            <p className="text-sm opacity-70">
              Get a free consultation and discover how we can help achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
