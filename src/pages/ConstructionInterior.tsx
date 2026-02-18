import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaCheck,
  FaBuilding,
  FaPaintBrush,
  FaHardHat,
  FaChartLine,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaSearch,
  FaEnvelope,
  FaRegClock,
} from 'react-icons/fa';

export default function ConstructionInterior() {
  const packages = [
    {
      name: 'STARTER',
      price: '$1699',
      tagline: 'For solo professionals and small firms establishing a credible online presence',
      accent: 'from-sky-500 to-blue-600',
      checks: [
        '5-page professional website',
        'Mobile-responsive design',
        'Contact form & WhatsApp integration',
        'Portfolio gallery (up to 15 projects)',
        '1 revision round',
        '14-day delivery',
        'Free domain setup',
        '30-day support',
      ],
      waText: "Hi! I'm interested in the Starter package",
      featured: false,
    },
    {
      name: 'GROWTH',
      price: '$2999',
      tagline: 'For established companies ready to generate consistent inbound inquiries',
      accent: 'from-blue-500 to-violet-600',
      checks: [
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
      ],
      waText: "Hi! I'm interested in the Growth package",
      featured: true,
      note: 'Best fit for firms targeting $100K+ projects',
    },
    {
      name: 'AUTHORITY',
      price: '$6499',
      tagline: 'For market-leading firms competing at regional or national level',
      accent: 'from-violet-500 to-fuchsia-600',
      checks: [
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
      ],
      waText: "Hi! I'm interested in the Authority package",
      featured: false,
    },
  ];

  const work = [
    {
      title: 'ARCDOME Architecture Studio',
      desc: 'Modern portfolio showcasing 20+ projects with a streamlined inquiry flow.',
      services: 'Custom Design, Gallery Integration',
      timeline: '8 days',
      tag: 'Architecture',
      image: '/arcdome screenshot.png',
      website: 'https://arcdome.vercel.app/',
    },
    {
      title: 'CONAH, an Interior Designer',
      desc: 'Visual-first website structured to turn visitors into consultation bookings.',
      services: 'Custom Design, Social Integration',
      timeline: '9 days',
      tag: 'Interior Design',
      image: '/conah screenshot.PNG',
      website: 'https://conah.vercel.app/',
    },
    
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute top-10 right-[-120px] h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-[-180px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl" />
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.09)_1px,transparent_1px)] [background-size:48px_48px]" />
          {/* noise overlay */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                <FaRegClock className="text-white/70" />
                <span>Fast 2–4 week delivery • starting at $1,699</span>
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Websites that help construction & design firms{' '}
                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  win bigger projects
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Cloudy Day Development builds conversion-focused, SEO-ready websites for builders,
                architects, interior designers, and real estate developers: designed to attract better leads,
                build credibility fast, and turn your portfolio into booked calls.
              </p>

              {/* Proof strip */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                  <FaBolt className="text-sky-300" /> Built to convert
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                  <FaSearch className="text-violet-300" /> SEO foundation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                  <FaShieldAlt className="text-fuchsia-200" /> Bid-ready credibility
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/danieldami9999/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-4 text-sm font-bold text-white shadow-[0_18px_60px_rgba(59,130,246,.25)] hover:shadow-[0_22px_80px_rgba(139,92,246,.28)] transition-all"
                >
                  Book a Free Strategy Call
                  <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white/90 hover:bg-white/10 transition-all"
                >
                  View Packages
                </a>
              </div>

              <p className="mt-4 text-sm text-white/60">
                Prefer email? <a className="underline hover:text-white" href="#contact">Contact us below</a>.
              </p>
            </div>

            {/* Visual mock */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_90px_rgba(0,0,0,.45)] backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                </div>

                <div className="mt-5 space-y-3">
                  <div className="h-3 w-2/3 rounded-full bg-white/15" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold text-white/60">
                  Portfolio + lead capture flow (example layout)
                </p>
              </div>

              <div className="absolute -bottom-6 -right-2 hidden w-56 rotate-2 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_24px_90px_rgba(0,0,0,.45)] backdrop-blur-xl md:block">
                <div className="mx-auto h-4 w-16 rounded-full bg-black/30" />
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-2/3 rounded-full bg-white/15" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="h-28 rounded-2xl bg-white/10" />
                </div>
                <p className="mt-3 text-xs font-semibold text-white/60">Mobile-first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILT FOR ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Built Specifically For
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-white/70">
            Industry-tuned layouts that showcase your projects, build authority, and generate qualified inquiries.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaBuilding className="text-3xl text-sky-300" />,
                title: 'Architecture Firms',
                desc: 'Portfolio-first websites that communicate your design philosophy and attract high-value clients.',
              },
              {
                icon: <FaPaintBrush className="text-3xl text-violet-300" />,
                title: 'Interior Designers',
                desc: 'Visual-first experiences that turn a gallery into consultation bookings — not just a lookbook.',
              },
              {
                icon: <FaHardHat className="text-3xl text-amber-200" />,
                title: 'Construction Companies',
                desc: 'Credibility-driven sites that support qualification, trust, and larger contract opportunities.',
              },
              {
                icon: <FaChartLine className="text-3xl text-emerald-200" />,
                title: 'Real Estate Developers',
                desc: 'Project showcases built to pre-sell developments, capture leads, and attract investors.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_70px_rgba(0,0,0,.25)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR WORK ===== */}
      <section id="work" className="border-y border-white/10 bg-white/[0.03] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">Our Work</h2>
          <p className="mt-3 text-center text-white/70">
            Premium sites built for premium clients.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {work.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_70px_rgba(0,0,0,.25)] backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs font-bold text-white/80">
                    {project.tag}
                  </span>
                  <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-bold text-white/80">
                    Delivery: {project.timeline}
                  </span>
                </div>

                <div className="h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>


                <div className="p-5">
                  <h3 className="text-base font-extrabold">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{project.desc}</p>

                  <p className="mt-4 text-xs text-white/60">
                    <span className="font-bold text-white/75">Services:</span> {project.services}
                  </p>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white/90 hover:bg-white/10 transition-all"
                  >
                    View website <FaArrowRight className="text-white/70" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://calendly.com/danieldami9999/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-4 text-sm font-bold text-white hover:opacity-95 transition-all"
            >
              Get a Site Like This <FaArrowRight />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white/90 hover:bg-white/10 transition-all"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* ===== ROI ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-white/5 to-violet-500/10 p-8 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,.25)]">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">One project can pay for this website</h2>
              <p className="mt-3 text-white/70">
                If your average project value is $25K–$500K+, your website only needs to generate one new client to deliver
                a strong return. This isn’t “just a website” — it’s a business development asset.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  'Messaging that pre-qualifies prospects',
                  'Portfolio storytelling that builds trust',
                  'Lead capture that turns interest into inquiries',
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-2 text-sm text-white/80">
                      <FaCheck className="mt-0.5 text-emerald-200" />
                      <span>{t}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,.25)]">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-white/60">Typical website investment</p>
                  <p className="text-lg font-black">$1,699–$6,499</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/60">Typical project value</p>
                  <p className="text-lg font-black">$25,000+</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/60">Break-even</p>
                  <p className="text-lg font-black">1 project</p>
                </div>

                <a
                  href="https://calendly.com/danieldami9999/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-4 text-sm font-bold text-white hover:opacity-95 transition-all"
                >
                  Book Strategy Call <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="border-y border-white/10 bg-white/[0.03] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Our proven delivery process
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-white/70">
            A streamlined workflow designed for busy US teams — predictable scope, clean handoff, fast turnaround.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                step: '1',
                title: 'Strategy & Structure',
                desc: 'We map your pages, messaging, and conversion flow based on your services and target projects.',
              },
              {
                step: '2',
                title: 'Design & Content Integration',
                desc: 'We bring your brand to life and organize your project portfolio to sell your capability.',
              },
              {
                step: '3',
                title: 'Build & Optimization',
                desc: 'Mobile-first development with performance tuning and SEO foundations baked in.',
              },
              {
                step: '4',
                title: 'Review & Refinement',
                desc: 'Structured revision rounds to lock in details and polish the experience.',
              },
              {
                step: '5',
                title: 'Launch & Support',
                desc: 'We launch, ensure everything works, then support you post-launch based on your package.',
              },
              {
                step: '6',
                title: 'Growth Guidance',
                desc: 'We’ll advise on updates, content, and next steps to improve performance over time.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_70px_rgba(0,0,0,.25)] backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 text-lg font-black text-white/90">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section id="packages" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">Choose your package</h2>
          <p className="mt-3 text-center text-white/70">Select the website solution that matches your stage and goals.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={[
                  'relative rounded-3xl border bg-white/5 p-7 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,.25)] transition-all',
                  p.featured
                    ? 'border-sky-400/30 ring-1 ring-sky-400/20 shadow-[0_22px_90px_rgba(59,130,246,.18)]'
                    : 'border-white/10 hover:border-white/20 hover:-translate-y-1',
                ].join(' ')}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 px-3 py-1 text-xs font-black text-[#0B1220]">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-black tracking-tight">{p.name}</h3>
                  <span className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${p.accent} opacity-90`} />
                </div>

                <div className="mt-3 text-4xl font-black tracking-tight">{p.price}</div>
                <p className="mt-2 text-sm text-white/70">{p.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {p.checks.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                      <FaCheck className={p.featured ? 'mt-1 text-amber-200' : 'mt-1 text-emerald-200'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {p.featured && (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-semibold text-white/70">
                    {p.note}
                  </div>
                )}

                <div className="mt-6 grid gap-3">
                  <a
                    href="https://calendly.com/danieldami9999/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-black transition-all ${
                      p.featured
                        ? 'bg-gradient-to-r from-sky-500 to-violet-600 text-white hover:opacity-95'
                        : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {p.featured ? 'Book a Strategy Call' : 'Book a Call'}
                    <FaArrowRight />
                  </a>

                  {/* optional WhatsApp */}
                  <a
                    href={`https://wa.me/2349125882627?text=${encodeURIComponent(p.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-bold text-white/65 hover:text-white hover:border-white/20 transition-all"
                  >
                    <FaWhatsapp className="text-emerald-200" />
                    WhatsApp (optional)
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-y border-white/10 bg-white/[0.03] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">FAQ</h2>
          <p className="mt-3 text-center text-white/70">Quick answers for US-based teams considering a website upgrade.</p>

          <div className="mt-10 space-y-3">
            {[
              {
                q: 'Do you work with US-based companies?',
                a: 'Yes. We work remotely with US-based clients and deliver through a clear, documented process with predictable timelines.',
              },
              {
                q: 'What do you need from us to start?',
                a: 'Your logo, service list, and project photos (or links). We’ll guide content and structure so you’re not stuck writing everything.',
              },
              {
                q: 'Can you redesign an existing website?',
                a: 'Yes — we can rebuild for better credibility, performance, project presentation, and conversion flow.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Milestone payments can be supported for Growth and Authority. We’ll confirm details on the strategy call.',
              },
              {
                q: 'What happens after launch?',
                a: 'You get post-launch support based on your package and guidance on updates and ongoing improvement.',
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-black text-white/90">
                  {item.q}
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA / CONTACT ===== */}
      <section id="contact" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/15 via-white/5 to-violet-500/15 p-8 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,.25)] md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">Ready to win better clients?</h2>
                <p className="mt-3 text-white/70">
                  Let’s discuss your project and build a website that reflects the quality of your work — and turns visitors into inquiries.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://calendly.com/danieldami9999/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-4 text-sm font-black text-white hover:opacity-95 transition-all"
                  >
                    Book a Free Strategy Call <FaArrowRight />
                  </a>

                  <a
                    href="mailto:danieluwajeh@cloudydaydevelopment.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white/90 hover:bg-white/10 transition-all"
                  >
                    <FaEnvelope className="text-white/70" />
                    Email Us
                  </a>
                </div>

                <p className="mt-3 text-xs text-white/55">
                  US clients: email + strategy call is the primary flow. WhatsApp is available if you prefer it.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-lg font-black">What you’ll get</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {[
                    'Premium layout tuned for construction & design',
                    'Portfolio system that sells your work',
                    'Mobile-first speed & clean UX',
                    'Clear conversion flow + lead capture',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <FaCheck className="mt-1 text-emerald-200" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/2349125882627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white/80 hover:bg-white/10 transition-all"
                >
                  <FaWhatsapp className="text-emerald-200" />
                  WhatsApp (optional)
                </a>

                <p className="mt-3 text-xs text-white/55">
                  Limited onboarding slots each month to maintain quality.
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <p>© {new Date().getFullYear()} Cloudy Day Development. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#packages" className="hover:text-white">Packages</a>
              <a href="#work" className="hover:text-white">Our Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
