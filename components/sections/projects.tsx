"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Github,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
  CircleDot,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { categories, Project, ProjectCategory, projects } from "@/data/projects_data"

/* ============================================================
   PROJECT IMAGE SLIDER
   — object-contain so the full screenshot is always visible.
============================================================ */

function ProjectImageSlider({
  images,
  title,
  featured = false,
}: {
  images: string[]
  title: string
  featured?: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || paused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [images.length, paused])

  const previousImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length)

  /* ---------- Fallback: no images ---------- */
  if (!images.length) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_65%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-150 rounded-full bg-primary/5 blur-3xl" />
            <span className="relative text-7xl font-black tracking-tighter text-primary/20">
              {title.charAt(0)}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
    )
  }

  return (
    <div
      className="group/slider absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Letterbox backdrop — subtle grid so contain-mode images feel intentional */}
      <div
        aria-hidden
        className="absolute inset-0 bg-secondary/40"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)/0.35) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Soft radial glow behind the image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]"
      />

      {/* Image — contained, no crop */}
      <div className="absolute inset-0 p-3 sm:p-4">
        <AnimatePresence mode="sync">
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              fill
              priority={currentIndex === 0}
              sizes={featured ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 45vw"}
              className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Very light vignette — never covers the image content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

      {/* Image counter */}
      <div className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
        {String(currentIndex + 1).padStart(2, "0")}
        <span className="mx-0.5 text-white/40">/</span>
        {String(images.length).padStart(2, "0")}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/80 group-hover/slider:opacity-100 max-md:opacity-100 sm:left-4 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/80 group-hover/slider:opacity-100 max-md:opacity-100 sm:right-4 sm:h-10 sm:w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Progress dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-4 right-4 z-20 flex gap-1 sm:bottom-4 sm:left-5 sm:right-5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex}
              className="group/dot relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/30 transition-colors hover:bg-white/50"
            >
              <span
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-white transition-all",
                  index === currentIndex
                    ? "w-full duration-[8000ms] ease-linear"
                    : "w-0 duration-300 group-hover/dot:w-full"
                )}
                style={{
                  animation:
                    index === currentIndex && !paused
                      ? "progress-fill 8s linear"
                      : undefined,
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project
  index: number
  featured?: boolean
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:border-primary/40",
        "hover:shadow-2xl hover:shadow-primary/[0.07]",
        featured && "lg:col-span-2"
      )}
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={cn("grid", featured ? "lg:grid-cols-[1.2fr_1fr]" : "grid-cols-1")}>
        {/* ---------- Image / slider ---------- */}
        <div
          className={cn(
            "relative overflow-hidden bg-secondary/20",
            featured
              ? "h-[260px] sm:h-[340px] lg:h-full lg:min-h-[440px]"
              : "h-[220px] sm:h-[240px]"
          )}
        >
          <ProjectImageSlider
            images={project.images}
            title={project.title}
            featured={featured}
          />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute right-4 top-4 z-30 sm:right-5 sm:top-5">
              <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md sm:text-xs">
                <Sparkles className="h-3 w-3 text-amber-300" />
                Featured
              </div>
            </div>
          )}

          {/* Category badges — moved to top-left so they don't collide with the progress bar */}
          <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-1.5 pr-28 sm:left-5 sm:top-5">
            {project.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/15 bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Content ---------- */}
        <div className={cn("relative flex flex-col", featured ? "p-6 sm:p-8 lg:p-9" : "p-6 sm:p-7")}>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs font-medium tabular-nums text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-border/70" />
            {project.featured && (
              <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                <CircleDot className="h-2.5 w-2.5 text-primary" />
                Case Study
              </span>
            )}
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3
              className={cn(
                "font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary",
                featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.title}
            </h3>

            <div className="flex shrink-0 items-center gap-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-all hover:border-border hover:bg-secondary hover:text-foreground"
                >
                  <Github className="h-[18px] w-[18px]" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-all hover:border-border hover:bg-secondary hover:text-primary"
                >
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </a>
              )}
            </div>
          </div>

          <p
            className={cn(
              "mt-4 leading-relaxed text-muted-foreground",
              featured ? "text-sm sm:text-[15px] sm:leading-7" : "text-sm leading-6"
            )}
          >
            {project.featured ? project.longDescription : project.description}
          </p>

          <div className="mt-6 border-t border-border/50 pt-5">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
              <Layers className="h-3 w-3" />
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-all group-hover:border-primary/20 group-hover:bg-secondary group-hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {featured && (
            <div className="mt-auto pt-6">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  View live project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  View source
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ============================================================
   PROJECTS SECTION
============================================================ */

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length }
    for (const cat of categories) {
      if (cat.value === "all") continue
      counts[cat.value] = projects.filter((p) =>
        p.category.includes(cat.value as ProjectCategory)
      ).length
    }
    return counts
  }, [])

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeCategory === "all" ||
          project.category.includes(activeCategory)
      ),
    [activeCategory]
  )

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-sm font-medium tabular-nums text-primary">03.</span>
              <div className="h-px w-10 bg-primary/50" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Selected Work
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Featured <span className="text-muted-foreground">Projects</span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  A selection of projects showcasing my experience across AI,
                  cloud-native systems, backend engineering, and full-stack development.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-sm">
                <span className="tabular-nums">
                  {String(filteredProjects.length).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground/60">
                  {filteredProjects.length === 1 ? "project" : "projects"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* FILTERS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="inline-flex min-w-max gap-1 rounded-xl border border-border/60 bg-secondary/30 p-1 backdrop-blur-sm">
              {categories.map((category) => {
                const active = activeCategory === category.value
                const count = categoryCounts[category.value] ?? 0
                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setActiveCategory(category.value)}
                    aria-pressed={active}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300",
                      active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-project-filter"
                        className="absolute inset-0 rounded-lg bg-primary shadow-sm shadow-primary/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {category.label}
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-px text-[10px] font-semibold tabular-nums transition-colors",
                          active
                            ? "bg-white/20 text-primary-foreground"
                            : "bg-border/60 text-muted-foreground"
                        )}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* GRID */}
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  featured={project.featured}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-2xl border border-dashed border-border bg-secondary/20 p-16 text-center"
            >
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/60">
                <Layers className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Nothing here yet</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                No projects found in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
              >
                Show all projects
              </button>
            </motion.div>
          )}

          {/* VIEW ALL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex justify-center"
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group rounded-xl border-border/70 px-6 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <a href="https://github.com/medelafia" target="_blank" rel="noopener noreferrer">
                View all projects
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes progress-fill {
            from { width: 100%; }
            to   { width: 100%; }
          }
        }
      `}</style>
    </section>
  )
}