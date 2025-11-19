import { 
  FaMobile, 
  FaGlobe, 
  FaLaptopCode, 
  FaCloud, 
  FaCode, 
  FaShoppingCart,
  FaComments,
  FaPalette,
  FaPaintBrush,
  FaSyncAlt,
  FaTools,
  FaServer
} from 'react-icons/fa'

const Services = () => {
  const getGradientColors = (gradient: string) => {
    if (gradient.includes('blue')) return ['#3b82f6', '#2563eb']
    if (gradient.includes('green')) return ['#22c55e', '#16a34a']
    if (gradient.includes('purple')) return ['#a855f7', '#9333ea']
    if (gradient.includes('slate')) return ['#64748b', '#475569']
    if (gradient.includes('orange')) return ['#f97316', '#ea580c']
    if (gradient.includes('teal')) return ['#14b8a6', '#0d9488']
    if (gradient.includes('indigo')) return ['#6366f1', '#4f46e5']
    if (gradient.includes('amber')) return ['#f59e0b', '#d97706']
    return ['#ec4899', '#db2777'] // pink default
  }

  const services = [
    {
      title: 'Custom Website Development',
      description: 'We build fast, modern, and responsive websites tailored to your business. From landing pages to full company sites, we craft clean and professional experiences that help you stand out online.',
      icon: FaGlobe,
      gradient: 'from-blue-500 to-blue-600',
      link: '#',
    },
    {
      title: 'Mobile App Development',
      description: 'Need an app for your business or startup? We design and develop cross-platform Android and iOS apps with smooth performance and beautiful interfaces.',
      icon: FaMobile,
      gradient: 'from-green-500 to-green-600',
      link: '#',
    },
    {
      title: 'Web App & System Development',
      description: 'From dashboards to online platforms, we create powerful, scalable systems using modern technologies. Perfect for startups, small businesses, and custom ideas.',
      icon: FaLaptopCode,
      gradient: 'from-purple-500 to-purple-600',
      link: '#',
    },
    {
      title: 'E-commerce Development',
      description: 'We build online stores that are easy to manage, secure, and optimized for sales. Payments, inventory, shipping: all fully integrated.',
      icon: FaShoppingCart,
      gradient: 'from-orange-500 to-orange-600',
      link: '#',
    },
    {
      title: 'API Development & Integration',
      description: 'Connect your business tools with secure and reliable APIs. We build custom APIs, integrate third-party services, and help automate your workflow.',
      icon: FaCode,
      gradient: 'from-teal-500 to-teal-600',
      link: '#',
    },
    {
      title: 'Real-Time Communication Systems',
      description: 'Chats, notifications, live updates, WebRTC, and more. If your idea needs live interaction, we can build it.',
      icon: FaComments,
      gradient: 'from-indigo-500 to-indigo-600',
      link: '#',
    },
    {
      title: 'Branding & Digital Identity',
      description: 'Logos, colors, visual identity, and brand feel. We help new businesses look polished and professional from day one.',
      icon: FaPalette,
      gradient: 'from-pink-500 to-pink-600',
      link: '#',
    },
    {
      title: 'UI/UX Design',
      description: 'Clean layouts, beautiful interfaces, and user-friendly experiences. We design your product before you build it.',
      icon: FaPaintBrush,
      gradient: 'from-purple-500 to-purple-600',
      link: '#',
    },
    {
      title: 'Website Redesign & Optimization',
      description: 'Already have a website but not happy with it? We transform outdated or slow sites into modern, performance-driven platforms.',
      icon: FaSyncAlt,
      gradient: 'from-amber-500 to-amber-600',
      link: '#',
    },
    {
      title: 'Maintenance & Support Plans',
      description: 'Keep your website or app running smoothly. Monthly updates, fixes, security checks, backups, and technical support.',
      icon: FaTools,
      gradient: 'from-slate-500 to-slate-600',
      link: '#',
    },
    {
      title: 'Hosting & Domain Management',
      description: "We handle all the technical setup so you don't have to: domain, hosting, SSL, server configuration, and ongoing management.",
      icon: FaServer,
      gradient: 'from-blue-500 to-blue-600',
      link: '#',
    },
  ]

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Cloudy background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          {/* Floating clouds */}
          <div className="absolute top-20 right-10 w-48 h-24 bg-white/30 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-10 w-56 h-28 bg-white/25 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-20 bg-white/20 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FaCloud className="text-blue-500 text-xl animate-pulse" />
            <p className="text-blue-600 font-semibold text-lg">What we do</p>
            <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Smart Solutions, Built on a Cloudy Day
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const [colorStart, colorEnd] = getGradientColors(service.gradient)
            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/70 hover:bg-white/80 transition-all duration-500 hover:scale-105 transform hover:-translate-y-3 shadow-lg hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon with gradient background */}
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, ${colorStart}, ${colorEnd})`
                  }}
                >
                  <IconComponent className="text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group/link"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                {/* Subtle gradient overlay on hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(to bottom right, ${colorStart}, ${colorEnd})`
                  }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
