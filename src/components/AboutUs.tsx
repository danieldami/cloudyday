import { Link } from 'react-router-dom'
import { FaCloud, FaCode, FaRocket, FaUsers, FaHeart, FaAward } from 'react-icons/fa'

const AboutUs = () => {
  const values = [
    {
      icon: FaCode,
      title: 'Code Excellence',
      description: 'We write clean, maintainable code that stands the test of time. Quality is never compromised.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaRocket,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, using cutting-edge technologies and modern best practices to deliver exceptional results.',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: FaUsers,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you to understand your vision and bring it to life.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaAward,
      title: 'Reliable & Professional',
      description: 'Timely delivery, transparent communication, and dedicated support throughout every project phase.',
      gradient: 'from-orange-500 to-orange-600',
    },
  ]

  const getGradientColors = (gradient: string) => {
    if (gradient.includes('blue')) return ['#3b82f6', '#2563eb']
    if (gradient.includes('green')) return ['#22c55e', '#16a34a']
    if (gradient.includes('purple')) return ['#a855f7', '#9333ea']
    if (gradient.includes('orange')) return ['#f97316', '#ea580c']
    return ['#ec4899', '#db2777']
  }

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Cloudy background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          {/* Floating clouds */}
          <div className="absolute top-10 left-20 w-52 h-26 bg-white/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-20 w-48 h-24 bg-white/25 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-22 bg-white/20 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <FaCloud className="text-blue-500 text-xl animate-pulse" />
              <p className="text-blue-600 font-semibold text-lg">About Cloudy Day</p>
              <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Side - Story */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/70 shadow-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Building the Future,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
                    One Cloudy Day at a Time
                  </span>
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    At Cloudy Day Development, we're passionate about turning your ideas into powerful digital solutions. We specialize in creating websites, mobile apps, and custom software that drive real business results.
                  </p>
                  <p>
                    Whether you're a startup looking to make your mark, a small business ready to scale, or an established company needing a digital transformation, we're here to make it happen.
                  </p>
                  <p>
                    Our team combines technical expertise with creative vision to deliver solutions that are not just functional, but truly exceptional.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Stats/Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    100+
                  </div>
                  <p className="text-gray-600 font-medium">Projects Delivered</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
                    50+
                  </div>
                  <p className="text-gray-600 font-medium">Happy Clients</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                    5+
                  </div>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg text-center hover:scale-105 transform transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600 font-medium">Support Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Drives Us
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                const [colorStart, colorEnd] = getGradientColors(value.gradient)
                return (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/70 hover:bg-white/80 transition-all duration-500 hover:scale-105 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl text-center"
                  >
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg mx-auto"
                      style={{
                        background: `linear-gradient(to bottom right, ${colorStart}, ${colorEnd})`
                      }}
                    >
                      <IconComponent className="text-3xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 backdrop-blur-md shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and turn your vision into reality
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-700 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

