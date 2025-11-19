import { FaCloud, FaBriefcase, FaRocket, FaArrowLeft, FaCalendar, FaShieldAlt, FaGlobe, FaMobile, FaChartLine, FaHeadset } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const SmallBusiness = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    { icon: FaGlobe, text: 'Responsive Website Design' },
    { icon: FaMobile, text: 'Mobile-Optimized Experience' },
    { icon: FaChartLine, text: 'SEO Optimization Included' },
    { icon: FaShieldAlt, text: 'SSL Certificate & Security' },
    { icon: FaHeadset, text: '3 Months Free Support' },
    { icon: FaRocket, text: 'Fast Loading Performance' },
  ]

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
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors duration-200 group"
          >
            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 shadow-lg">
                <FaBriefcase className="text-4xl" />
              </div>
              <br></br>
              <div className="inline-flex items-center gap-2 mb-4">
                <FaCloud className="text-blue-500 text-xl animate-pulse" />
                <p className="text-blue-600 font-semibold text-lg">Special Offer</p>
                <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
                Small Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 animate-gradient mt-2">
                  Website Package
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                Supercharge your online presence with a professional, responsive website designed specifically for small businesses.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/70 shadow-2xl mb-12">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                  LIMITED TIME OFFER
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      $1,600
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">One-time payment</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/70 hover:bg-white/80 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <IconComponent className="text-white text-xl" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 transform text-center flex items-center justify-center gap-2"
                >
                  <FaRocket className="text-xl" />
                  <span>Get Started Now</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-0 animate-pulse"></div>
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/95 backdrop-blur-md text-blue-700 px-8 py-4 rounded-2xl text-lg font-bold border-2 border-blue-400/60 hover:bg-white hover:border-blue-600 hover:text-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform text-center flex items-center justify-center gap-2"
                >
                  <FaCalendar className="text-xl" />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Money-Back Guarantee</h4>
                <p className="text-gray-600 text-sm">30-day satisfaction guarantee</p>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                <FaCalendar className="text-4xl text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Website ready in 2-4 weeks</p>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                <FaHeadset className="text-4xl text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600 text-sm">3 months free support included</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/70 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">What if I'm not satisfied?</h4>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee. If you're not completely satisfied with your website, we'll refund your payment.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">How long does it take to build my website?</h4>
                  <p className="text-gray-600">
                    Typically, your website will be ready in 2-4 weeks from the start date, depending on the complexity and how quickly you provide content and feedback.
                  </p>
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

export default SmallBusiness

