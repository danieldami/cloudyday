import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../logo.png'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const navLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case studies', href: '#case-studies' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-md border-b border-white/20 z-50 shadow-sm shadow-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Nova" 
                className="h-16 lg:h-24 w-auto"
                style={{
                  filter: 'brightness(1.2) contrast(1.5) saturate(1.6) drop-shadow(0 6px 12px rgba(0,0,0,0.35))',
                  transform: 'scale(1.05)',
                  WebkitFilter: 'brightness(1.2) contrast(1.5) saturate(1.6) drop-shadow(0 6px 12px rgba(0,0,0,0.35))'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200 drop-shadow-sm"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 p-2 hover:text-blue-600 transition-all duration-300 drop-shadow-sm transform active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <FaTimes
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-0 opacity-100'
                    : 'rotate-90 opacity-0'
                }`}
              />
              <FaBars
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-90 opacity-0'
                    : 'rotate-0 opacity-100'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 py-4'
              : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="border-t border-white/30 bg-white/40 backdrop-blur-md shadow-lg shadow-white/10">
            <div className="py-4 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 text-gray-800 font-medium hover:text-blue-600 hover:bg-white/30 transition-all duration-300 rounded-lg drop-shadow-sm transform ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 50 + 100}ms`
                      : `${(navLinks.length - index - 1) * 30}ms`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/contact"
                className={`block mt-4 mx-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${navLinks.length * 50 + 150}ms`
                    : '0ms',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
