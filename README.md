# Aarovan.ai Website

Modern, animated website for Aarovan.ai - an AI-powered interview preparation platform for engineering students.

## Features

- ✨ Modern glassmorphism design
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive
- 🚀 Fast performance with Vite
- 🎯 Smooth scrolling with Lenis
- 🎭 Interactive UI components
- 📊 Animated counters and statistics
- 🌐 SEO optimized

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Google Material Symbols

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
aarovan-website/
├── src/
│   ├── components/
│   │   ├── AnimatedSection.jsx
│   │   ├── Footer.jsx
│   │   ├── GrainOverlay.jsx
│   │   ├── Navbar.jsx
│   │   └── SmoothScroll.jsx
│   ├── hooks/
│   │   ├── useCountUp.js
│   │   └── useInView.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Home.jsx
│   │   └── Team.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Pages

- **Home**: Hero section, stats, problem statement, features, and CTA
- **About**: Company story, opportunity, and approach
- **Features**: System flow and detailed feature breakdown
- **Team**: Team members and company values
- **Contact**: Contact form and information

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: '#512FEB',
  'primary-light': '#7C3AED',
  // ... more colors
}
```

### Fonts

Fonts are loaded from Google Fonts in `src/styles/index.css`. Update the import URL to change fonts.

### Content

Update content in the respective page files under `src/pages/`.

## Performance

- Lazy loading for routes
- Optimized animations
- Minimal bundle size
- Image optimization ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contact

For questions or support, contact: contact@aarovan.ai
