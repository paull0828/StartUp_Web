import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-background">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Visionary Process</h3>
            <p className="text-sm opacity-70">
              Transform your business with cutting-edge AI and automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:opacity-70 transition">Home</a></li>
              <li><a href="/about" className="hover:opacity-70 transition">About</a></li>
              <li><a href="/services" className="hover:opacity-70 transition">Services</a></li>
              <li><a href="/portfolio" className="hover:opacity-70 transition">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:opacity-70 transition">AI Solutions</a></li>
              <li><a href="#" className="hover:opacity-70 transition">Automation</a></li>
              <li><a href="#" className="hover:opacity-70 transition">Consulting</a></li>
              <li><a href="#" className="hover:opacity-70 transition">Implementation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5" />
                <a href="mailto:info@visionary.com" className="hover:opacity-70 transition">
                  info@visionary.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5" />
                <a href="tel:+1234567890" className="hover:opacity-70 transition">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5" />
                <span>123 Tech Street, SF, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
            <p>&copy; {currentYear} Visionary Process. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
