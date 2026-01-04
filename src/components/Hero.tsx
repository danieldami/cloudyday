import { Link } from 'react-router-dom'
import { FaCloud, FaMobile, FaGlobe, FaRocket, FaLaptopCode, FaBriefcase } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Animated Cloud Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-slate-100 to-blue-50">
        <div className="absolute inset-0 opacity-50">
          {/* Floating Cloud 1 */}
          <div className="absolute top-20 left-10 w-40 h-20 bg-white/40 rounded-full blur-2xl animate-float-slow">
            <div className="absolute -top-6 left-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 right-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>
            <div className="absolute -top-2 left-1/2 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
          </div>
          
          {/* Floating Cloud 2 */}
          <div className="absolute top-40 right-20 w-52 h-26 bg-white/35 rounded-full blur-3xl animate-float-medium">
            <div className="absolute -top-8 left-14 w-40 h-40 bg-white/35 rounded-full blur-3xl"></div>
            <div className="absolute -top-5 right-10 w-32 h-32 bg-white/35 rounded-full blur-3xl"></div>
            <div className="absolute top-2 left-1/3 w-20 h-20 bg-white/35 rounded-full blur-2xl"></div>
          </div>
          
          {/* Floating Cloud 3 */}
          <div className="absolute bottom-32 left-1/4 w-44 h-22 bg-white/30 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' as any }}>
            <div className="absolute -top-6 left-12 w-36 h-36 bg-white/30 rounded-full blur-2xl"></div>
            <div className="absolute -top-3 right-9 w-28 h-28 bg-white/30 rounded-full blur-2xl"></div>
            <div className="absolute -top-1 left-1/2 w-18 h-18 bg-white/30 rounded-full blur-xl"></div>
          </div>
          
          {/* Floating Cloud 4 */}
          <div className="absolute bottom-20 right-1/3 w-56 h-28 bg-white/35 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '0.5s' as any }}>
            <div className="absolute -top-8 left-16 w-44 h-44 bg-white/35 rounded-full blur-3xl"></div>
            <div className="absolute -top-5 right-12 w-36 h-36 bg-white/35 rounded-full blur-3xl"></div>
            <div className="absolute top-3 left-2/5 w-24 h-24 bg-white/35 rounded-full blur-2xl"></div>
          </div>

          {/* Additional smaller clouds for depth */}
          <div className="absolute top-1/3 left-1/3 w-32 h-16 bg-white/25 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '2s' as any }}>
            <div className="absolute -top-4 left-8 w-24 h-24 bg-white/25 rounded-full blur-xl"></div>
            <div className="absolute -top-2 right-6 w-20 h-20 bg-white/25 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Dynamic light rays with movement */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-blue-200/25 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-200/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' as any }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-sky-200/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' as any }}></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Emphasis */}
          <div className="text-center mb-12">
            <div className="block md:inline-block mb-6">
              <span className="block md:inline text-5xl md:text-6xl lg:text-7xl font-light text-gray-700">Welcome to </span>
              <span className="block md:inline text-7xl sm:text-8xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-600 to-purple-600 animate-gradient drop-shadow-2xl">
                Cloudy Day
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-8 mt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
              <FaCloud className="text-blue-400 animate-pulse text-2xl" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
              Building exceptional software solutions for the modern world. We craft powerful apps, beautiful websites, and innovative digital experiences that elevate your business to new heights.
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              From concept to cloud deployment, we transform your ideas into scalable, cutting-edge solutions that drive results.
            </p>
          </div>

          {/* CTA Buttons with dynamic styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-12 py-6 rounded-2xl text-lg font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaRocket className="text-xl" />
                Start Your Project
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-0 animate-pulse"></div>
            </Link>
            <Link
  to="/construction-interior"
  className="
    bg-white/95 backdrop-blur-md text-blue-700 
    px-6 py-4 text-base
    sm:px-8 sm:py-4 sm:text-lg
    md:px-12 md:py-5 md:text-xl
    lg:px-16 lg:py-6 lg:text-2xl
    rounded-2xl font-bold
    border-2 border-blue-400/60
    hover:bg-white hover:border-blue-600 hover:text-blue-800
    transition-all duration-300
    shadow-lg hover:shadow-2xl
    hover:scale-105 transform hover:-translate-y-1
    w-full sm:w-auto text-center
  "
>
  For Construction Professionals
</Link>

          </div>

          {/* Services Highlights - Dynamic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            <Link
              to="/small-business"
              className="group text-center p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 hover:bg-white/80 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <FaBriefcase className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Small Businesses</h3>
              <p className="text-gray-600 leading-relaxed">We build amazing websites for businesses who want to supercharge their online presence</p>
            </Link>

            <div className="group text-center p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 hover:bg-white/80 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <FaMobile className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed">Native and cross-platform mobile applications that engage users and drive business growth</p>
            </div>
            
            <div className="group text-center p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 hover:bg-white/80 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-500 to-slate-600 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <FaGlobe className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Responsive, high-performance websites and web applications built with modern technologies</p>
            </div>
            
            <div className="group text-center p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 hover:bg-white/80 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <FaLaptopCode className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Software</h3>
              <p className="text-gray-600 leading-relaxed">Tailored software solutions designed to solve your unique business challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
