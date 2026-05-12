# PAH Learning Center

A comprehensive educational website dedicated to Pulmonary Arterial Hypertension (PAH) education, featuring cutting-edge research, interactive learning modules, and expert faculty resources. Built with Next.js and optimized for professional medical education.

## 🎯 Overview

The PAH Learning Center serves as the world's largest educational initiative for pulmonary arterial hypertension, extending beyond PAH to encompass associated cardiovascular, pulmonary, connective-tissue, and rheumatic diseases. This platform delivers adaptive resources, evidence-based tools, and cutting-edge strategies that empower healthcare professionals to improve patient lives.

## ✨ Key Features

### 🎨 Interactive Design
- **Animated Disease Visualization**: Rotating orbit animation showcasing 10 associated diseases with counter-rotation text
- **Modern UI/UX**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Responsive Design**: Optimized for all device sizes and medical professional workflows

### 📚 Educational Content
- **ACCME-Accredited CME Activities**: Comprehensive collection of 14+ educational modules
- **PDF Toolkit Download**: "The Fundamentals of Pulmonary Hypertension: Essential Toolkit"
- **Research Center**: 12 peer-reviewed research papers with direct PubMed links
- **Faculty Showcase**: 18 world-renowned medical experts and researchers

### 🧭 Navigation & UX
- **Smart Navigation**: Fixed header with smooth-scrolling section navigation
- **Section Organization**:
  - Hero Section with achievement badges
  - PAH Education Hub with rotating disease animation
  - Associated Diseases information
  - Educational Activities grid
  - Research Resource Center
  - Global Faculty Network

### 🎭 Visual Elements
- **Dynamic Animations**: Framer Motion integration with medical-themed transitions
- **Professional Branding**: Global Learning Collaborative logo integration
- **Color Schemes**: Blue and red gradient themes for medical aesthetics
- **Interactive Elements**: Hover effects, floating animations, and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dylancobb2525/pah.git
   cd pah
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the website**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠 Technologies Used

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom utilities
- **Animations**: Framer Motion for professional transitions
- **Icons**: Lucide React icon library
- **Images**: Next.js Image optimization
- **TypeScript**: Full type safety throughout
- **Build**: Optimized for Vercel deployment

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes (auth endpoints)
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   └── components/         # React components
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Landing section
│       ├── VideoIntroduction.tsx  # PAH Education Hub
│       ├── Statistics.tsx  # Associated Diseases
│       ├── EducationalPrograms.tsx # CME Activities
│       ├── ResourceCenter.tsx     # Research papers
│       ├── Faculty.tsx     # Faculty showcase
│       └── Footer.tsx      # Site footer
├── public/                 # Static assets
│   ├── headshot/          # Faculty profile images
│   ├── active/            # Activity thumbnails
│   ├── *.png              # Various images and logos
│   └── *.pdf              # Educational resources
└── newlogo/               # Logo assets
```

## 🎨 Key Visual Components

### Rotating Disease Animation
- **10 Associated Diseases**: Interactive orbit visualization
- **Counter-Rotation**: Text remains readable while orbiting
- **Color Coding**: Red and blue themes for visual distinction
- **Responsive**: Adapts to container size

### Educational Activities Grid
- **14 CME Activities**: ACCME-accredited educational modules
- **Credit Information**: Clear CME credit display
- **Expiration Dates**: Activity validity tracking
- **Direct Links**: Integration with ReachMD platform

### Research Resource Center
- **12 Research Papers**: Peer-reviewed publications
- **PubMed Integration**: Direct links to source materials
- **Uniform Cards**: Consistent 400px height design
- **Citation Format**: Proper academic citations

## 🌐 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with zero configuration

### Build Optimization
- **Static Generation**: Pre-rendered pages for optimal performance
- **Image Optimization**: Automatic WebP conversion and sizing
- **Bundle Analysis**: Minimized JavaScript bundles
- **SEO Ready**: Proper meta tags and Open Graph integration

## 📊 Performance Metrics

- **Page Load**: ~82KB main bundle
- **First Load JS**: 169KB total
- **Static Generation**: All pages pre-rendered
- **Lighthouse Score**: Optimized for performance, accessibility, and SEO

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality. The website runs without external API dependencies.

### Custom Styling
- TailwindCSS configuration in `tailwind.config.ts`
- Custom animations and utilities
- Responsive breakpoints for medical device compatibility

## 📝 Content Management

### Faculty Updates
- Add faculty images to `public/headshot/`
- Update faculty array in `src/components/Faculty.tsx`

### Educational Activities
- Add activity thumbnails to `public/active/`
- Update activities array in `src/components/EducationalPrograms.tsx`

### Research Papers
- Update research papers array in `src/components/ResourceCenter.tsx`
- Maintain PubMed link format

## 🏥 Medical Education Standards

- **ACCME Compliance**: All educational content meets accreditation standards
- **Professional Design**: Appropriate for medical professional use
- **Accessibility**: Designed for healthcare environment compatibility
- **Evidence-Based**: All content sourced from peer-reviewed research

## 🤝 Contributing

This project serves the global medical education community. For updates or improvements:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request with detailed description

## 📄 License

This educational platform is designed for professional medical education and research dissemination.

## 🌟 Acknowledgments

- **Global Faculty Network**: 18 renowned PAH specialists
- **Medical Research Community**: Contributing researchers and institutions
- **ACCME**: Accreditation standards and guidelines
- **ReachMD Platform**: Educational content delivery partnership

---

*Advancing Care in Pulmonary Arterial Hypertension - Committed to Impacting Practice Care*