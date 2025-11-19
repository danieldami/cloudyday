import { useState } from 'react'
import { FaEnvelope, FaCheckCircle, FaRocket } from 'react-icons/fa'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Cloudy background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          {/* Floating clouds */}
          <div className="absolute top-10 left-20 w-64 h-32 bg-white/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-20 w-56 h-28 bg-white/15 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-26 bg-white/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 shadow-lg">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <div className="inline-flex items-center gap-2 mb-4">
                
                <p className="text-white/90 font-semibold text-lg">Stay Connected</p>
                
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Stay in the Cloud
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
                Subscribe to our newsletter and get the latest updates on technology, development tips, and exclusive insights from Cloudy Day Development.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg border-2 border-white/30 bg-white/95 backdrop-blur-sm font-medium transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2 border-2 border-white/30"
                >
                  <span>Subscribe</span>
                  <FaRocket className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-0"></div>
                </button>
              </div>
              
              {submitted && (
                <div className="mt-6 flex items-center justify-center gap-2 text-green-200 animate-slide-down">
                  <FaCheckCircle className="text-2xl" />
                  <p className="font-semibold text-lg">
                    Thank you! Your submission has been received!
                  </p>
                </div>
              )}
              
              <p className="mt-6 text-white/70 text-sm text-center max-w-xl mx-auto">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Cloudy Day Development. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
