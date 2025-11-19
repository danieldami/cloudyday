import { useState } from 'react'
import { FaCloud, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaUser, FaBuilding } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 overflow-hidden">
        {/* Cloudy background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-slate-100 to-blue-50">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-20 left-10 w-64 h-32 bg-white/40 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-10 w-56 h-28 bg-white/35 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-26 bg-white/30 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaCloud className="text-blue-500 text-xl animate-pulse" />
                <p className="text-blue-600 font-semibold text-lg">Get in Touch</p>
                <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                Ready to start your project? Let's discuss how we can help bring your vision to life.
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/70 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700 animate-slide-down">
                    <FaCheckCircle className="text-2xl" />
                    <div>
                      <p className="font-bold">Thank you!</p>
                      <p className="text-sm">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="+234 912 588 2627"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaBuilding className="inline mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-0 animate-pulse"></div>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/70 shadow-2xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Reach out to us through any of these channels. We're here to help you bring your ideas to life.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+2349125882627" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                          +234 912 588 2627
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:info@cloudyday.dev" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                          info@cloudyday.dev
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">
                          Cloudy Day Development<br />
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                    <FaCloud className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Fast Response Time</h3>
                  <p className="text-white/90 mb-6">
                    We typically respond within 24 hours. For urgent matters, please call us directly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
                      Quick Response
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
                      24/7 Support
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
                      Free Consultation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

