
import "./globals.css";

export const metadata = {
  // Metadata Base for Social Images
  metadataBase: new URL("https://klikly.vercel.app"),

  // Basic SEO
  title: "Klikly | Where Design Meets Intelligence",
  description: "Award-winning digital agency specializing in brand identity, web design, and animated experiences. Transform your ideas into reality with our expert team.",
  keywords: "digital agency, web design, branding, animation, UI/UX design, web development, brand identity, digital transformation",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  charset: "utf-8",
  
 

  // Icons & Favicons
  icons: {
    icon: "images/favicon.ico",
    shortcut: "images/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Structured Data for Schema.org
  alternates: {
    canonical: "https://klikly.vercel.app",
  },

  // Author & Copyright
  authors: [{ name: "Klikly", url: "https://klikly.vercel.app" }],
  creator: "Klikly",
  publisher: "Klikly Digital Agency",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#010201" },
  ],
};
export default function RootLayout({ children }) {
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Klikly",
    url: "https://klikly.vercel.app",
    logo: "https://klikly.vercel.app/logo-512.png",
    description: "Award-winning digital agency specializing in brand identity, web design, and animated experiences.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Web Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preload fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#010201] text-white">
        {children}
      </body>
    </html>
  );
}
