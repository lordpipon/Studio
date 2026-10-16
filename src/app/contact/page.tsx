import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CopyButton } from "@/components/copy-button"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Get In Touch — LordPipon",
  description: "Reach out by email, phone, Discord or socials.",
}

const EMAIL = "lordpipon@gmail.com"
const ALT_EMAIL = "lordpipon@icloud.com"
const DISCORD = "piponidlo"
const DISCORD_ID = "994655331131072662"
const TELEGRAM = "lordpipon"
const INSTAGRAM = "piponidlo"
const TIKTOK = "lordpipon"
const BLUESKY = "lordpipon.com"
const PHONE_DISPLAY = "+420 732 937 162"
const PHONE_DIAL = "+420732937162"

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-24 sm:py-32">
      <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
        <Link href="/">
          <ArrowLeft data-icon="inline-start" />
          Back
        </Link>
      </Button>

      <section className="flex animate-fade-up flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Get In Touch
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground text-pretty">
          Want a Minecraft server, a Discord community, or something else built?
          Reach out on any of these — whatever works best for you.
        </p>
      </section>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Mail className="size-5" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription className="break-all">{EMAIL}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a href={`mailto:${EMAIL}`}>
                    Send an email
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <CopyButton value={EMAIL} label="Copy email" />
              </div>

              <div className="mt-2 border-t border-border/60 pt-4">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Alternative email
                </p>
                <CardDescription className="mt-1 break-all">
                  {ALT_EMAIL}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href={`mailto:${ALT_EMAIL}`}>
                      Send an email
                      <ArrowUpRight data-icon="inline-end" />
                    </a>
                  </Button>
                  <CopyButton value={ALT_EMAIL} label="Copy email" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <DiscordIcon className="size-5" />
              </div>
              <CardTitle>Discord</CardTitle>
              <CardDescription>@{DISCORD}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a
                    href={`https://discord.com/users/${DISCORD_ID}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Add me on Discord
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <CopyButton value={DISCORD} label="Copy Discord" />
              </div>
            </CardHeader>
          </Card>
        </Reveal>

        <Reveal delay={200}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Phone className="size-5" />
              </div>
              <CardTitle>Phone</CardTitle>
              <CardDescription>WhatsApp & SMS</CardDescription>
              <CardDescription className="break-all">
                {PHONE_DISPLAY}
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a
                    href={`https://wa.me/${PHONE_DIAL.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={`sms:${PHONE_DIAL}`}>SMS</a>
                </Button>
                <CopyButton value={PHONE_DISPLAY} label="Copy number" />
              </div>
            </CardHeader>
          </Card>
        </Reveal>

        <Reveal delay={300}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Send className="size-5" />
              </div>
              <CardTitle>Telegram</CardTitle>
              <CardDescription>@{TELEGRAM}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a
                    href={`https://t.me/${TELEGRAM}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Telegram
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <CopyButton value={TELEGRAM} label="Copy handle" />
              </div>
            </CardHeader>
          </Card>
        </Reveal>

        <Reveal delay={400}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <InstagramIcon className="size-5" />
              </div>
              <CardTitle>Instagram</CardTitle>
              <CardDescription>@{INSTAGRAM}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a
                    href={`https://instagram.com/${INSTAGRAM}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Instagram
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <CopyButton value={INSTAGRAM} label="Copy handle" />
              </div>
            </CardHeader>
          </Card>
        </Reveal>

        <Reveal delay={500}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TikTokIcon className="size-5" />
              </div>
              <CardTitle>TikTok</CardTitle>
              <CardDescription>@{TIKTOK}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a
                    href={`https://tiktok.com/@${TIKTOK}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open TikTok
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <CopyButton value={TIKTOK} label="Copy handle" />
              </div>
            </CardHeader>
          </Card>
        </Reveal>

        <Reveal delay={600}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BlueskyIcon className="size-5" />
              </div>
              <CardTitle>Bluesky</CardTitle>
              <CardDescription>@{BLUESKY}</CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild size="sm">
                  <a
                    href={`https://bsky.app/profile/${BLUESKY}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Bluesky
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <CopyButton value={BLUESKY} label="Copy handle" />
              </div>
            </CardHeader>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.432 3c-.2.36-.43.85-.59 1.23a18.27 18.27 0 0 0-5.685 0A12.6 12.6 0 0 0 8.565 3 19.74 19.74 0 0 0 3.68 4.37C.6 8.98-.206 13.48.196 17.92a19.9 19.9 0 0 0 6.03 3.06c.49-.67.93-1.38 1.3-2.13-.71-.27-1.39-.6-2.03-1 .17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.02 0c.16.14.33.27.5.4-.64.4-1.32.73-2.03 1 .37.75.81 1.46 1.3 2.13a19.86 19.86 0 0 0 6.03-3.06c.47-5.14-.8-9.6-3.5-13.55Zm-11.02 11.2c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.09 2.15 2.42 0 1.34-.95 2.42-2.15 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.09 2.15 2.42 0 1.34-.95 2.42-2.15 2.42Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  )
}
