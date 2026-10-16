import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight transition-colors hover:text-muted-foreground"
        >
          Studio
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">
              <MessageCircle data-icon="inline-start" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
