import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CopyButton } from "@/components/copy-button"

export const metadata: Metadata = {
  title: "Get In Touch — LordPipon",
  description: "Reach out by email or Discord.",
}

const EMAIL = "lordpipon@gmail.com"
const DISCORD = "@piponidlo"

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-24 sm:py-32">
      <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
        <Link href="/">
          <ArrowLeft data-icon="inline-start" />
          Back
        </Link>
      </Button>

      <section className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Get In Touch
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground text-pretty">
          Want a Minecraft server, a Discord community, or something else built?
          Pick whichever works best and reach out.
        </p>
      </section>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Card>
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
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <DiscordIcon className="size-5" />
            </div>
            <CardTitle>Discord</CardTitle>
            <CardDescription>{DISCORD}</CardDescription>
            <div className="pt-2">
              <CopyButton value={DISCORD} label="Copy Discord" />
            </div>
          </CardHeader>
        </Card>
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
