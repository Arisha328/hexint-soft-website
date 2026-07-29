import { useState } from 'react'
import {
  ExternalLink,
  Github,
  CheckCircle2,
  ShoppingBag,
  CalendarCheck2,
  LineChart,
  PlaneTakeoff,
  GraduationCap,
  Palette,
  LayoutGrid,
} from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'

// Category → icon, used to give every project a relevant, on-brand visual
// even when no real screenshot has been dropped into /public/projects yet.
const CATEGORY_ICONS = {
  'E-commerce': ShoppingBag,
  'Full-Stack Web App': CalendarCheck2,
  'AI / ML Project': LineChart,
  'UI/UX Design': Palette,
  'C++ / DSA Project': PlaneTakeoff,
  'Java Project': GraduationCap,
}

function ProjectVisual({ category }) {
  const Icon = CATEGORY_ICONS[category] || LayoutGrid
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* subtle dot texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1.4px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* oversized watermark icon */}
      <Icon className="absolute h-40 w-40 -translate-y-2 text-white/10" strokeWidth={1} />
      {/* hex badge with the category icon */}
      <div className="relative flex flex-col items-center gap-3">
        <span className="hex-clip flex h-16 w-16 items-center justify-center bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-white/80">
          {category}
        </span>
      </div>
    </div>
  )
}

export default function ProjectCard({ project, delay = 0, dark = false }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = project.image && !imgFailed

  const cardBase = dark
    ? 'border-white/10 bg-white/[0.03] hover:border-maroon-400/40'
    : 'border-line bg-paper hover:border-maroon-200 hover:shadow-premium'

  const titleColor = dark ? 'text-white' : 'text-ink'
  const descColor = dark ? 'text-white/75' : 'text-ink-700/85'
  const tagStyle = dark
    ? 'border-maroon-400/30 bg-maroon-500/10 text-maroon-200'
    : 'border-maroon-100 bg-maroon-50 text-maroon-700'
  const featureColor = dark ? 'text-white/80' : 'text-ink-700/90'
  const dividerColor = dark ? 'border-white/10' : 'border-line'
  const demoLinkColor = dark ? 'text-maroon-300 hover:text-maroon-200' : 'text-maroon-600 hover:text-maroon-700'
  const githubLinkColor = dark ? 'text-white/50 hover:text-white' : 'text-ink-700/60 hover:text-ink'

  return (
    <Reveal delay={delay}>
      <div
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${cardBase}`}
      >
        {/* Media */}
        <div className="relative aspect-[4/3] overflow-hidden bg-maroon-gradient">
          {showImage && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          )}
          {!showImage && <ProjectVisual category={project.category} />}
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
          {project.role && (
            <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-sm">
              {project.role}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <span className={`font-mono text-[11px] uppercase tracking-wider ${dark ? 'text-maroon-300' : 'text-maroon-600'}`}>
              {project.category}
            </span>
            <h3 className={`mt-1 font-display text-lg font-bold ${titleColor}`}>{project.title}</h3>
          </div>

          <p className={`text-sm leading-relaxed ${descColor}`}>{project.description}</p>

          {project.features && project.features.length > 0 && (
            <ul className="flex flex-col gap-1.5">
              {project.features.slice(0, 3).map((f) => (
                <li key={f} className={`flex items-start gap-2 text-[13px] leading-snug ${featureColor}`}>
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-maroon-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-wrap gap-2 pt-1">
            {project.tech.map((t) => (
              <span key={t} className={`rounded-full border px-3 py-1 font-mono text-[11px] ${tagStyle}`}>
                {t}
              </span>
            ))}
          </div>

          <div className={`flex gap-4 border-t pt-4 ${dividerColor}`}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`flex items-center gap-1.5 font-display text-sm font-semibold ${demoLinkColor}`}
              >
                {project.demoLabel || 'Live Demo'} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`flex items-center gap-1.5 font-display text-sm font-semibold ${githubLinkColor}`}
              >
                GitHub <Github className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
