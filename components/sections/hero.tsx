"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, FileText, Mail, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const TECH = [
  "Spring Boot", "Angular", "React.js", "FastAPI",
  "Docker", "Kubernetes", "AWS", "Python",
]

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
]

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      {/* ---------- Background layers ---------- */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />

      {/* Soft grain for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-1/4 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Top & bottom fade to blend into the page */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* ---------- Content ---------- */}
      <div className="container relative z-10 mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Avatar with animated ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex justify-center"
          >
            <div className="relative">
              {/* Rotating conic ring */}
              <motion.span
                aria-hidden
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, hsl(var(--primary)) 25%, transparent 50%, hsl(var(--primary)) 75%, transparent 100%)",
                  filter: "blur(6px)",
                  opacity: 0.5,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border/80 bg-background shadow-2xl shadow-primary/20 sm:h-40 sm:w-40">
                <Image
                  src="/images/profile.jpg"
                  alt="Mohamed El Afia"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Online dot */}
              <span className="absolute bottom-1 right-1 grid h-5 w-5 place-items-center rounded-full bg-background">
                <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
              </span>
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-secondary/60 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="text-foreground">Mohamed</span>
            <br className="sm:hidden" />
            <span className="gradient-text"> El Afia</span>
          </motion.h1>

          {/* Title stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8"
          >
            <h2 className="text-lg font-medium text-foreground/90 sm:text-xl md:text-2xl">
              Cloud-Native Software Engineer
            </h2>
            <p className="mt-1 text-base text-muted-foreground sm:text-lg">
              AI &amp; DevOps Specialist
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mb-10 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Motivated, detail-oriented software engineer with strong problem-solving skills and
            hands-on experience across full-stack development, cloud infrastructure, and machine
            learning. Fluent in modern frameworks including Angular, React, Spring Boot, FastAPI,
            Docker, and Kubernetes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Primary with shine */}
            <Button
              onClick={() => scrollTo("#projects")}
              size="lg"
              className="group relative w-full overflow-hidden sm:w-auto"
            >
              <span className="relative z-10 inline-flex items-center">
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {/* Shine sweep */}
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </Button>

            <Button variant="outline" size="lg" className="group w-full sm:w-auto" asChild>
              <a href="/cv.pdf" download>
                <FileText className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download CV
              </a>
            </Button>

            <Button variant="ghost" size="lg" onClick={() => scrollTo("#contact")} className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex items-center justify-center gap-1"
          >
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-16 border-t border-border/50 pt-8"
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
              Technologies I work with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TECH.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75 + i * 0.04, duration: 0.3 }}
                  className="rounded-full border border-border/70 bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-secondary hover:text-foreground"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollTo("#about")}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-background/60 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}