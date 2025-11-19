import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCloud, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '/contact' },
  ]

  const services = [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'Cloud Integration', href: '#services' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaTwitter, href: '#', label: 'X (Twitter)', color: 'hover:text-blue-300' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
  ]

  return (
    <footer id="contact" className="relative bg-gray-900 text-white overflow-hidden">
      {/* Cloudy background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-10 w-64 h-32 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-10 w-56 h-28 bg-white/10 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaCloud className="text-blue-400 text-2xl" />
              <h3 className="text-2xl font-black text-white">Cloudy Day</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building exceptional software solutions for the modern world. We craft powerful apps, beautiful websites, and innovative digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-gray-800`}
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span>Quick Links</span>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span>Services</span>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span>Contact</span>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300 flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                    <FaPhone className="text-blue-400 text-sm" />
                  </div>
                  <span>+(234) 9125882627 </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@cloudydaydevelopment.com" className="hover:text-white transition-colors duration-300 flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-purple-600/20 transition-colors duration-300">
                    <FaEnvelope className="text-purple-400 text-sm" />
                  </div>
                  <span>info@cloudydaydevelopment.com</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    Cloudy Day Development, Lagos<br />
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Cloudy Day Development. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaCloud className="text-blue-400 animate-pulse" />
              <span>Built on a Cloudy Day</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
