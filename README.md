# Cloudy Day Development

A modern, responsive website for Cloudy Day Development - a software development agency specializing in web development, mobile apps, custom software solutions, and cloud integration.

## Features

- 🎨 Modern, dynamic design with cloudy theme animations
- ⚡ Fast development with Vite
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- ✨ Smooth animations and glassmorphism effects
- 🚀 React Router for client-side routing
- 🌤️ Custom cloudy theme with animated backgrounds

## Sections

- **Hero Section** - Dynamic introduction with service highlight cards
- **Services** - Web Development, Mobile Apps, Custom Software, Cloud Integration, API Development, Technical Consulting
- **About Us** - Company story, values, and statistics
- **FAQs** - Interactive accordion with common questions
- **Case Studies** - Showcase of successful projects with results
- **Testimonials** - Client reviews with ratings and avatars
- **Newsletter** - Email subscription form
- **Contact Page** - Contact form and information
- **Small Business Page** - Special offer page for small businesses
- **Footer** - Quick links, services, and contact information

## Pages

- `/` - Home page
- `/contact` - Contact us page
- `/small-business` - Small Business website package offer

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bweb
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

The development server will automatically open in your default browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
bweb/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── Hero.tsx            # Hero section with service cards
│   │   ├── Services.tsx        # Services showcase
│   │   ├── AboutUs.tsx         # About us section
│   │   ├── FAQs.tsx            # Frequently asked questions
│   │   ├── CaseStudies.tsx     # Project case studies
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── Newsletter.tsx      # Newsletter subscription
│   │   └── Footer.tsx          # Footer with links and contact
│   ├── pages/
│   │   ├── Contact.tsx         # Contact page
│   │   └── SmallBusiness.tsx   # Small Business offer page
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles and animations
│   └── logo.png                # Company logo
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library (Font Awesome)

## Key Features & Design

- **Cloudy Theme**: Custom animated cloud backgrounds throughout the site
- **Glassmorphism**: Modern frosted glass effects on cards and components
- **Dynamic Animations**: Floating clouds, gradient animations, hover effects
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Transitions**: Animated menu, hover states, and page transitions
- **Modern UI/UX**: Clean, professional design with excellent user experience

## Custom Animations

The project includes custom CSS animations defined in `src/index.css`:
- `float-slow` - Slow floating cloud animation
- `float-medium` - Medium-speed floating animation
- `pulse-slow` - Slow pulsing effect
- `gradient` - Animated gradient background
- `slide-down` - Smooth slide-down animation

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The project is configured for deployment on Vercel and other static hosting platforms. The build command generates optimized static files in the `dist` directory.

## License

© 2025 Cloudy Day Development. All rights reserved.
