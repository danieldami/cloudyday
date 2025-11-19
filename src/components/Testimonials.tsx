import { FaCloud, FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Cloudy Day Development transformed our business with an incredible e-commerce platform. The team's technical expertise and attention to detail resulted in a 300% increase in online sales. Their modern tech stack and scalable architecture ensure we can grow without limitations. Highly professional and results-driven!",
      author: 'Sarah Chen',
      role: 'CEO, Retail Innovations',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      quote:
        "Working with Cloudy Day Development was an absolute game-changer for our startup. They built a robust mobile banking app that now serves over 50,000 users with 99.9% uptime. Their React Native expertise and cloud architecture knowledge exceeded our expectations. The team is proactive, transparent, and truly dedicated to our success.",
      author: 'Michael Rodriguez',
      role: 'CTO, FinTech Solutions',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      quote:
        "I'm amazed by the impact of the SaaS platform Cloudy Day Development created for us. It streamlined our workflows and increased team productivity by 250%. Their custom software solution perfectly addressed our unique business needs. The ongoing support and continuous improvements show their commitment to long-term partnership. Exceptional work!",
      author: 'Jennifer Park',
      role: 'Operations Director, Enterprise Corp',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ]

  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      {/* Cloudy background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          {/* Floating clouds */}
          <div className="absolute top-20 left-10 w-56 h-28 bg-white/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-48 h-24 bg-white/25 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
          <div className="absolute top-1/2 left-1/3 w-44 h-22 bg-white/20 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FaCloud className="text-blue-500 text-xl animate-pulse" />
            <p className="text-blue-600 font-semibold text-lg">Client Reviews</p>
            <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-4">
            Don't just take our word for it. See what our amazing clients have to say about working with Cloudy Day Development.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/70 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-3"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <FaQuoteLeft className="text-white text-2xl" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 text-lg fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 bg-gradient-to-br from-blue-500 to-purple-600 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              98%
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">Client Satisfaction</p>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
              4.9
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">Average Rating</p>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
              150+
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">Projects Delivered</p>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              50+
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
