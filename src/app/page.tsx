import Link from "next/link"
import {
  ArrowUpRight,
  Boxes,
  MessageCircle,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: Server,
    title: "Minecraft Servers",
    description:
      "Full server setup and configuration — plugins, performance tuning, permissions and a smooth launch.",
  },
  {
    icon: MessageCircle,
    title: "Discord Communities",
    description:
      "Clean, organized Discord servers with roles, channels, bots and a structure that actually makes sense.",
  },
  {
    icon: Boxes,
    title: "Web & Tooling",
    description:
      "Sites, dashboards and tools built to fit your community and look the part on every screen.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing care — updates, fixes and improvements so everything keeps running the way it should.",
  },
]

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6">
      <section className="flex flex-col items-start gap-6 py-24 sm:py-32">
        <Badge variant="outline">
          <Sparkles className="size-3" />
          Available for work
        </Badge>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="underline decoration-accent decoration-2 underline-offset-8">
            LordPipon
          </span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground text-pretty">
          I am a small developer that creates stuff.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">
              <MessageCircle data-icon="inline-start" />
              Get In Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://lordpipon.com" target="_blank" rel="noreferrer">
              Portfolio
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          See more of my work at{" "}
          <a
            href="https://lordpipon.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 decoration-accent/40 transition-colors hover:decoration-accent"
          >
            lordpipon.com
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-8 pb-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="max-w-xl text-muted-foreground">
            Everything you need to get your community off the ground — done
            right the first time.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
