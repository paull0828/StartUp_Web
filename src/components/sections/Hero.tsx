import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-transparent" />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fadeIn">
          <div className="mb-6 inline-block">
            <span className="text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full">
              Welcome to the Future
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-balance">
            AI & Automation for Modern Business
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-10 text-balance max-w-2xl mx-auto">
            Transform your workflow with intelligent solutions that drive efficiency, reduce costs, and unlock new growth opportunities.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              Get Started
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="btn-secondary group">
              <Play size={20} className="mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted">Happy Clients</p>
            </div>
            <div className="text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <p className="text-muted">Projects Completed</p>
            </div>
            <div className="text-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
