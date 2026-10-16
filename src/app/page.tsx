import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  Clock,
  Gauge,
  HeartHandshake,
  MessageCircle,
  Palette,
  Rocket,
  Server,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const highlights = [
  { icon: Zap, label: "Fast turnaround" },
  { icon: HeartHandshake, label: "Personal support" },
  { icon: Gauge, label: "Built to run smooth" },
]

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

const plans = [
  {
    name: "Discord Community",
    price: "€2–€3",
    tagline: "A nice Discord community for your friends and your people.",
    icon: MessageCircle,
    featured: false,
    features: [
      "Organized channels & categories",
      "Roles and permission setup",
      "Bots, welcome flow & moderation",
      "Branding, icons and a clean look",
    ],
  },
  {
    name: "Minecraft Server",
    price: "€5–€8",
    tagline: "Full setup of everything you want — you tell me, I build it.",
    icon: Server,
    featured: true,
    features: [
      "Server setup from scratch",
      "Plugins & configuration you ask for",
      "Performance tuning for smooth play",
      "Permissions, ranks & a ready-to-play world",
    ],
  },
  {
    name: "Something Else",
    price: "Custom",
    tagline: "Websites, tooling or anything in between — let's talk.",
    icon: Sparkles,
    featured: false,
    features: [
      "Websites & landing pages",
      "Bots, dashboards & tools",
      "Tell me your idea, I'll build it",
      "Pricing based on what you need",
    ],
  },
]

const steps = [
  {
    icon: MessageCircle,
    title: "Reach out",
    description:
      "Message me on Discord or email and tell me what you want built.",
  },
  {
    icon: Palette,
    title: "I build it",
    description:
      "I set everything up exactly the way you asked, then show you the result.",
  },
  {
    icon: Rocket,
    title: "You launch",
    description:
      "Everything is handed over ready to go — with support if you need a hand.",
  },
]

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-5xl flex-1 px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-foreground/10 blur-3xl animate-glow"
      />

      <section className="flex flex-col items-start gap-6 py-24 sm:py-32">
        <div className="animate-fade-up">
          <Badge variant="outline">
            <Sparkles className="size-3" />
            Available for work
          </Badge>
        </div>
        <h1
          className="animate-fade-up max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Hi, I&apos;m{" "}
          <span className="underline decoration-accent decoration-2 underline-offset-8">
            LordPipon
          </span>
        </h1>
        <p
          className="animate-fade-up max-w-xl text-lg text-muted-foreground text-pretty"
          style={{ animationDelay: "160ms" }}
        >
          I am a small developer that creates stuff. I build Minecraft servers,
          Discord communities and the little things that make them feel yours.
        </p>
        <div
          className="animate-fade-up flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
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
        <p
          className="animate-fade-up text-sm text-muted-foreground"
          style={{ animationDelay: "320ms" }}
        >
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

      <Reveal className="pb-20">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border/60 py-6">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="size-4 text-foreground" />
              {label}
            </div>
          ))}
        </div>
      </Reveal>

      <section className="flex flex-col gap-8 pb-24">
        <Reveal className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="max-w-xl text-muted-foreground">
            Everything you need to get your community off the ground — done
            right the first time.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:ring-foreground/25">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-rotate-6">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 pb-24">
        <Reveal className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Pricing</h2>
          <p className="max-w-xl text-muted-foreground">
            Simple, friendly pricing. Pay for the setup once — you get everything
            made the way you asked for.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(({ name, price, tagline, icon: Icon, features, featured }, i) => (
            <Reveal key={name} delay={i * 80} className="h-full">
              <Card
                className={`h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  featured ? "ring-2 ring-foreground" : "hover:ring-foreground/25"
                }`}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    {featured ? (
                      <Badge>
                        <Star className="size-3" />
                        Popular
                      </Badge>
                    ) : null}
                  </div>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>{tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-3xl font-semibold tracking-tight">
                    {price}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Get In Touch
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 pb-24">
        <Reveal className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Three quick steps from an idea to something real.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="pb-24">
        <Card className="overflow-hidden">
          <CardHeader className="items-center gap-3 px-8 py-12 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Clock className="size-6" />
            </div>
            <CardTitle className="text-2xl tracking-tight">
              Ready to get started?
            </CardTitle>
            <CardDescription className="max-w-md text-balance">
              Tell me what you want and I&apos;ll get it built. Reach out and
              let&apos;s make something nice.
            </CardDescription>
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  <MessageCircle data-icon="inline-start" />
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://lordpipon.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  View portfolio
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </Reveal>
    </div>
  )
}
