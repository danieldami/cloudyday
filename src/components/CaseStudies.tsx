import { FaCloud, FaGlobe, FaMobile, FaLaptopCode, FaArrowRight, FaStar } from 'react-icons/fa'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform',
      subtitle: 'Built a scalable e-commerce platform with React and Node.js, increasing online sales by 300% and processing thousands of orders daily.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'Web Development',
      icon: FaGlobe,
      gradient: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      results: [
        { label: 'Sales Increase', value: '300%' },
        { label: 'Load Time', value: '< 2s' },
      ],
    },
    {
      title: 'Mobile Banking App',
      subtitle: 'Developed a secure native mobile banking application for iOS and Android, serving over 50,000 active users with real-time transactions.',
      technologies: ['React Native', 'Firebase', 'AWS'],
      category: 'Mobile App',
      icon: FaMobile,
      gradient: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      results: [
        { label: 'Active Users', value: '50K+' },
        { label: 'Uptime', value: '99.9%' },
      ],
    },
    {
      title: 'Enterprise SaaS Platform',
      subtitle: 'Created a comprehensive cloud-based SaaS solution that automates business workflows and improves team productivity by 250%.',
      technologies: ['Next.js', 'PostgreSQL', 'AWS'],
      category: 'Custom Software',
      icon: FaLaptopCode,
      gradient: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      results: [
        { label: 'Productivity', value: '+250%' },
        { label: 'Users', value: '10K+' },
      ],
    },
  ]

  const getGradientColors = (gradient: string) => {
    if (gradient.includes('blue')) return ['#3b82f6', '#2563eb']
    if (gradient.includes('green')) return ['#22c55e', '#16a34a']
    if (gradient.includes('purple')) return ['#a855f7', '#9333ea']
    return ['#64748b', '#475569']
  }

  return (
    <section id="case-studies" className="relative section-padding overflow-hidden">
      {/* Cloudy background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          {/* Floating clouds */}
          <div className="absolute top-10 left-20 w-52 h-26 bg-white/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-20 w-48 h-24 bg-white/25 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
          <div className="absolute top-1/2 right-1/3 w-44 h-22 bg-white/20 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FaCloud className="text-blue-500 text-xl animate-pulse" />
            <p className="text-blue-600 font-semibold text-lg">Our Portfolio</p>
            <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-4">
            Real projects, real results. See how we've transformed businesses with cutting-edge software solutions.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon
            const [colorStart, colorEnd] = getGradientColors(study.gradient)
            return (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/70 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-3"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{
                        background: `linear-gradient(to bottom right, ${colorStart}, ${colorEnd})`
                      }}
                    >
                      <IconComponent className="text-2xl" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1.5 inline-block">
                      <span className="text-white text-sm font-semibold">{study.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {study.subtitle}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 text-center border border-blue-100/50"
                      >
                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-600 font-medium mt-1">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-lg text-sm font-semibold border border-gray-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors duration-200 group/link"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-200" />
                  </a>

                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom right, ${colorStart}, ${colorEnd})`
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <FaStar className="text-yellow-500 text-xl" />
            <a
              href="#case-studies"
              className="text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-200 inline-flex items-center group"
            >
              <span>View All Projects</span>
              <FaArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
