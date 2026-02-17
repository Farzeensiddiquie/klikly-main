
import "./globals.css";
export const metadata = {
  title: "Klikly | Where design meets intelligence",
  description: "Digital agency specializing in brand identity, web design, and animated experiences. Transform your ideas into reality.",
  keywords: "digital agency, web design, branding, animation, UI/UX design",
  robots: "index, follow",
};
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-[#010201] text-white">
       {children}
      </body>
    </html>
  );
}
