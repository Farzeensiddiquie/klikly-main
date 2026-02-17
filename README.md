# Klikly - Digital Agency Portfolio

A modern, interactive portfolio website for Klikly, a cutting-edge digital agency specializing in brand identity, web design, and animated digital experiences.

## 🚀 Features

- **Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- **3D Animations** - Interactive 3D robot model using React Three Fiber
- **Smooth Animations** - Framer Motion animations throughout the site
- **Dark Theme** - Modern dark interface with vibrant green accents (#00FF84)
- **Contact Form** - EmailJS integration for client inquiries
- **Portfolio Showcase** - Display your projects with gradient overlays
- **SEO Optimized** - Meta tags and structured data for search engines
- **Loading Animation** - Custom loading screen with progress indicator
- **Circular Cursor** - Interactive cursor effects on hover
- **Team Section** - Display team members and their roles

## 📋 Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org)
- **UI Library**: [React 19.1.0](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion 12.23.24](https://www.framer.com/motion)
- **3D Graphics**: [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Lucide React](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons)
- **Email**: [@emailjs/browser](https://www.emailjs.com)
- **Animation Library**: [GSAP 3.13.0](https://greensock.com/gsap)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd klikly
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
klikly/
├── app/
│   ├── layout.js                 # Root layout with metadata
│   ├── page.js                   # Home page
│   ├── loading.js                # Loading screen
│   ├── globals.css               # Global styles
│   ├── about/page.js             # About page
│   ├── contact/page.js           # Contact page with form
│   └── portfolio/page.js         # Portfolio showcase
├── components/
│   ├── Hero.js                   # Hero section with 3D robot
│   ├── NavBar.js                 # Navigation bar
│   ├── Services.js               # Services cards
│   ├── Projects.js               # Featured projects
│   ├── Faqs.js                   # FAQ accordion
│   ├── CTASection.js             # Call-to-action section
│   ├── Footer.js                 # Footer with social links
│   ├── BackgroundEffects.js      # Animated background
│   ├── RobotCanvas.js            # 3D robot model
│   ├── CursorComponent.js        # Cursor effect
│   ├── Stats.js                  # Statistics counter
│   ├── OwnerCard.js              # Founder section
│   ├── EmployeCard.js            # Team members
│   ├── ProjectBackground.js      # Project section background
│   └── FaqBackground.js          # FAQ section background
├── public/
│   └── images/                   # Image assets
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── jsconfig.json
```

## 📄 Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, services, projects, FAQ, CTA |
| About | `/about` | Company mission, team, statistics |
| Portfolio | `/portfolio` | All projects showcase |
| Contact | `/contact` | Contact form, WhatsApp link |

## 🔐 Environment Setup

The project requires EmailJS credentials for the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create a service and template
3. Add credentials to `.env.local`

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📋 Project Completion Checklist

### ✅ Completed
- [x] Home page with hero section
- [x] Navigation with mobile menu
- [x] Services section
- [x] Featured projects
- [x] FAQ accordion
- [x] About page with team
- [x] Contact form with EmailJS
- [x] Portfolio showcase
- [x] 3D robot animation
- [x] Custom loading screen
- [x] Meta tags & SEO
- [x] Responsive design
- [x] Code issues fixed

### 📝 TODO - Next Steps

1. **Update Project Data** ⭐ PRIORITY
   - [ ] Add real project links to `components/Projects.js`
   - [ ] Update portfolio project URLs
   - [ ] Add project descriptions and details

2. **Replace Images**
   - [ ] `/public/images/about.jpg` - Company photo
   - [ ] `/public/images/project1.jpg` - Project screenshots
   - [ ] `/public/images/ceo.png` - Team member photos

3. **Update Team Information**
   - [ ] Add real team member details in `components/EmployeCard.js`
   - [ ] Update team member photos
   - [ ] Add team member roles/descriptions

4. **Configure Contact Details**
   - [ ] Update WhatsApp number in `app/contact/page.js` (line 89)
   - [ ] Add social media links in `components/Footer.js`
   - [ ] Test EmailJS form submission

5. **Enhancement Features**
   - [ ] Add 404 error page
   - [ ] Add sitemap.xml
   - [ ] Add robots.txt
   - [ ] Configure analytics
   - [ ] Image optimization
   - [ ] Add Twitter/OG meta tags

## 🐛 Bug Fixes Applied

✅ **Fixed Issues:**
- Loading component return statement
- Missing metadata exports on pages
- EmployeCard placeholder data removed
- Contact form error handling improved
- Code consistency and formatting

## 🎨 Design System

### Color Palette
- **Primary Green**: `#00FF84` / `#01ff83`
- **Dark Background**: `#010201`
- **Secondary Green**: `#20974c`
- **Text**: `#ffffff` (white) / `#7b807e` (gray)

### Fonts
- **Display**: Bruce Forever Regular (custom local font)
- **Body**: System font stack with Tailwind defaults

## 📞 Contact Information

- **WhatsApp**: +923096726374
- **Email**: Through contact form
- **Website**: https://klikly-v1.vercel.app

## 🤝 Contributing

Contributions are welcome! Please submit issues and pull requests.

## 📄 License

MIT License - feel free to use this project for your own agency.

---

**Created with ❤️ by Klikly Digital Agency**

*Last Updated: January 17, 2026*
