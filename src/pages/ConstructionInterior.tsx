import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheck, FaBuilding, FaPaintBrush, FaHardHat, FaChartLine } from 'react-icons/fa';

export default function ConstructionInterior() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated background (reuse your cloud animation) */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl animate-float-medium"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

        <Link
  to="/"
  className="inline-flex items-center gap-3 mb-10 text-lg md:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
>
  ← Back to Home
</Link>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Websites for {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Builders, Architects & Interior Designers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help construction and interior design businesses showcase their work online and win more clients.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <span className="text-lg font-semibold text-gray-700">Packages from $1699</span>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-semibold text-gray-700">Lightening fast Delivery</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              
                <a href="#packages"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Packages
              </a>
              
                <a href="https://calendly.com/danieldami9999/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built Specifically For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaBuilding className="text-4xl text-blue-600" />,
                title: 'Architecture Firms',
                desc: 'Professional portfolio sites that showcase your projects and attract high-value clients',
              },
              {
                icon: <FaPaintBrush className="text-4xl text-purple-600" />,
                title: 'Interior Designers',
                desc: 'Visual-first websites with stunning galleries that convert visitors into bookings',
              },
              {
                icon: <FaHardHat className="text-4xl text-orange-600" />,
                title: 'Construction Companies',
                desc: 'Corporate websites that build trust and demonstrate your expertise',
              },
              {
                icon: <FaChartLine className="text-4xl text-green-600" />,
                title: 'Real Estate Developers',
                desc: 'Project showcases that help pre-sell properties and attract investors',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Package</h2>
          <p className="text-center text-gray-600 mb-12">Select the perfect website solution for your business</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">STARTER</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$1699</div>
              <p className="text-gray-600 mb-6">Perfect for solo practitioners and new firms</p>
              <ul className="space-y-3 mb-8">
                {[
                  '5-page professional website',
                  'Mobile-responsive design',
                  'Contact form & WhatsApp integration',
                  'Portfolio gallery (up to 15 projects)',
                  '1 revision round',
                  '14-day delivery',
                  'Free domain setup',
                  '30-day support',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
                <a href="https://wa.me/2349125882627?text=Hi! I'm interested in the Starter package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Growth Package */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 transform scale-105 relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">GROWTH</h3>
              <div className="text-4xl font-bold text-white mb-4">$2999</div>
              <p className="text-blue-100 mb-6">Most Popular - For established businesses</p>
              <ul className="space-y-3 mb-8">
                {[
                  '8-page website',
                  'Advanced portfolio gallery (30+ projects)',
                  'Blog/news section',
                  'Instagram feed integration',
                  'Google Business Profile setup',
                  'Basic SEO optimization',
                  '2 revision rounds',
                  '10-day delivery',
                  'Free domain & hosting (1 year)',
                  '60-day support',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              
                <a href="https://wa.me/2349125882627?text=Hi! I'm interested in the Growth package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Authority Package */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">AUTHORITY</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">$6499</div>
              <p className="text-gray-600 mb-6">Premium solution for leading firms</p>
              <ul className="space-y-3 mb-8">
                {[
                  '10+ custom pages',
                  'Video integration & animations',
                  'Client testimonial system',
                  'Project case studies with metrics',
                  'Advanced SEO & analytics',
                  'Social media integration suite',
                  'Lead capture & CRM integration',
                  '3 revision rounds',
                  '14-day delivery',
                  'Free domain & hosting (1 year)',
                  '90-day support + maintenance plan',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
                <a href="https://wa.me/2349125882627?text=Hi! I'm interested in the Authority package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Work</h2>
          <p className="text-center text-gray-600 mb-12">
            Websites Built for Nigerian Construction & Interior Professionals
          </p>
          <p className="text-center text-sm text-gray-500 mb-8 italic">
            Sample references — your custom site will be unique to your brand
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ARCHITECTURE STUDIO PORTFOLIO',
                desc: 'Modern, clean portfolio showcasing 20+ projects',
                services: 'Custom Design, Gallery Integration',
                timeline: '8 days',
              },
              {
                title: 'INTERIOR DESIGNER SHOWCASE',
                desc: 'Visual-first website with Instagram integration',
                services: 'Custom Design, Social Integration',
                timeline: '9 days',
              },
              {
                title: 'CONSTRUCTION COMPANY WEBSITE',
                desc: 'Professional corporate site with team profiles',
                services: 'Custom Design, SEO, Blog Setup',
                timeline: '12 days',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Demo Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <strong>Services:</strong> {project.services}
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Timeline:</strong> {project.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your project and create a website that wins you clients.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            
              <a href="https://wa.me/2349125882627"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-green-600" />
              WhatsApp: +234 912 588 2627
            </a>
            
              <a href="mailto:daniel@cloudydaydevelopment.com"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}