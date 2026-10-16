export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://localhost:3000"
}

export const siteConfig = {
  name: "LordPipon's Studio",
  shortName: "LordPipon",
  author: "LordPipon",
  url: getSiteUrl(),
  portfolio: "https://lordpipon.com",
  email: "lordpipon@gmail.com",
  discord: "https://discord.com/users/994655331131072662",
  telegram: "https://t.me/lordpipon",
  description:
    "I build Minecraft servers, Discord communities and websites. Friendly pricing, personal support, everything set up exactly how you want it.",
  keywords: [
    "Minecraft server setup",
    "Discord server setup",
    "Discord community",
    "Minecraft hosting",
    "discord server builder",
    "server configuration",
    "LordPipon",
  ],
}
