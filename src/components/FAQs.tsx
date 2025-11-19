import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCloud, FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We specialize in comprehensive software development services including web development, mobile app development (iOS and Android), custom software solutions, cloud integration, API development, and technical consulting. We tailor our services to meet your unique business needs, ensuring scalable and efficient solutions that drive real results.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a custom mobile app or complex web application typically takes 8-16 weeks. During our initial consultation, we provide detailed timelines based on your specific requirements. We prioritize transparency and keep you updated throughout the development process.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'We work with modern, industry-standard technologies. For web development, we use React, Next.js, TypeScript, Node.js, and various backend frameworks. For mobile apps, we develop native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform solutions using React Native and Flutter. We also work with cloud platforms like AWS, Azure, and Google Cloud. Our team stays current with the latest technologies to deliver cutting-edge solutions.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes! We offer comprehensive support and maintenance services for all our projects. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support. We offer flexible support packages tailored to your needs, from basic maintenance to 24/7 dedicated support. Your project continues to evolve even after launch.',
    },
    {
      question: 'How do you ensure code quality and security?',
      answer:
        'Code quality and security are paramount in everything we build. We follow industry best practices including code reviews, automated testing, security audits, and adherence to coding standards. Our development process includes continuous integration and deployment (CI/CD), version control with Git, and comprehensive documentation. We also conduct regular security assessments to protect your applications and data.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer:
        'Absolutely! We specialize in integrating with existing systems and platforms. Whether you need to connect with legacy systems, third-party APIs, databases, or other software, we can create seamless integrations. Our team analyzes your current infrastructure and designs solutions that work harmoniously with what you already have, ensuring minimal disruption to your operations.',
    },
    {
      question: 'How do we get started with a project?',
      answer:
        "Getting started is straightforward! Simply reach out through our contact form, email, or schedule a consultation. We'll discuss your project goals, requirements, timeline, and budget. From there, we'll provide a detailed proposal outlining the scope, deliverables, and timeline. Once approved, we'll kick off the project with a discovery phase to ensure we fully understand your vision and requirements before development begins.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="relative section-padding overflow-hidden">
      {/* Cloudy background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          {/* Floating clouds */}
          <div className="absolute top-20 right-10 w-56 h-28 bg-white/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-10 w-48 h-24 bg-white/25 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' as any }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-26 bg-white/20 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' as any }}></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <FaCloud className="text-blue-500 text-xl animate-pulse" />
              <p className="text-blue-600 font-semibold text-lg">Common Questions</p>
              <FaCloud className="text-purple-500 text-xl animate-pulse" style={{ animationDelay: '0.5s' as any }} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium mb-4">
              Everything you need to know about working with Cloudy Day Development
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-300 to-gray-300"></div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-md rounded-2xl border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <button
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-white/40 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaQuestionCircle className="text-white text-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      {openIndex === index && (
                        <div className="mt-4 overflow-hidden animate-slide-down">
                          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-gradient-to-br from-blue-500/30 to-purple-600/30' : ''}`}>
                      {openIndex === index ? (
                        <FaChevronUp className="text-blue-600 text-sm" />
                      ) : (
                        <FaChevronDown className="text-blue-600 text-sm" />
                      )}
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                    <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 mb-4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/70 shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-lg">
                <FaQuestionCircle className="text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact our team of experts to find out how we can help bring your project to life.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
