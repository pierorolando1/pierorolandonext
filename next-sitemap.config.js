/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://pierorolando.vercel.app",
  generateRobotsTxt: true, // (optional)
  // allow everithing except /posts/n
  robotsTxtOptions: [{ userAgent: "*", allow: "/", disallow: "/posts/n" }],
  // ...other options
};
