# Jonmoore International Ltd — Digital Identity

A premium, high-fidelity corporate website for **Jonmoore International Ltd**, a leading heavy logistics and project cargo specialist across West Africa. This project delivers a sophisticated, modern, and highly interactive digital experience that reflects the company's 25+ years of operational excellence.

## 🏗️ Technical Architecture

This application is built with a focus on performance, fluid animations, and a refined "editorial" aesthetic.

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)

## ✨ Key Features

- **Adaptive Navigation**: A custom-engineered header that transitions from a transparent, inset frame to a compact, high-contrast "pill" on scroll. Optimized for desktop, tablet, and mobile with perfect mathematical symmetry.
- **Cinematic Hero**: Immersive logistics-themed video background with branded overlays and high-impact typography.
- **Dynamic GSAP Reveals**: Sophisticated scroll-triggered animations (reveals, parallax, and entrance effects) implemented throughout the site for a premium feel.
- **Interactive Branding**:
  - **Premium Logo Integration**: Adaptive logo filters (light/dark modes).
  - **CEO Spotlight**: High-quality portrait integration with refined visual depth.
  - **Corporate Statistics**: Animated counters showcasing 25+ years of operational success.
- **Responsive Excellence**: Custom breakpoints tailored to ensure a flawless experience on everything from ultra-wide monitors to handheld mobile devices.
- **SEO Optimized**: Semantic HTML5 structure with optimized meta-tags and accessible heading hierarchies.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server with hot-reloading:
```bash
npm run dev
```

### Build
Generate a production-ready bundle:
```bash
npm run build
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── home/         # High-fidelity homepage components (Hero, Nav, etc.)
│   └── ui/           # Reusable atomic design components
├── hooks/            # Custom React hooks (mobile detection, etc.)
├── lib/              # Utility functions and shared logic
├── pages/            # Page-level components
└── assets/           # Static assets and icons
public/               # Brand assets (logo.png, ceo.jpg, etc.)
```

## 🛠️ Custom Design System

The project uses a bespoke design system defined in `src/index.css` and `tailwind.config.ts`, featuring:
- **Corporate Color Palette**: Deep blacks, pristine whites, and "Jonmoore Red" accents.
- **Typography**: Modern display fonts paired with highly readable body text.
- **Glassmorphism**: Sophisticated backdrop blurs and subtle borders for a high-end editorial look.

---

© 2026 Jonmoore International Ltd. Developed with a focus on Logistics Excellence.
