export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*.json$"],
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
    ],
    sitemap: "https://klikly-v1.vercel.app/sitemap.xml",
    crawlDelay: 1,
  };
}
