import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container-max flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold text-primary">
          VP
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? 'text-accent font-medium'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border animate-slideDown">
          <div className="container-max py-4 flex flex-col gap-4">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 transition-colors ${
                  isActive(link.href)
                    ? 'text-accent font-medium'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
