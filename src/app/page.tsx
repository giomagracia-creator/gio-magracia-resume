"use client";

import { FadeIn } from "@/components/FadeIn";
import { Nav } from "@/components/Nav";
import { experience, skillGroups, summary } from "@/data/resume";

const img = (path: string) =>
  path.startsWith("http") ? path : `https://gio-resume-site.vercel.app${path}`;

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div className="gradient-orb left-[-10%] top-[-8%] h-72 w-72 bg-sky-500/40" aria-hidden />
      <div className="gradient-orb right-[-5%] top-[20%] h-80 w-80 bg-indigo-500/30" aria-hidden />
      <Nav />
      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-12 sm:px-6 sm:pt-16">
        <FadeIn>
          <section className="mb-20">
            <p className="mb-3 text-sm font-medium text-sky-400">Edmonton, AB · Open to remote / WFH</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gio Franz Magracia
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Engineer-in-Training (APEGA) | Project Manager | PMP Eligible
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:giomagracia@gmail.com" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950">Email me</a>
              <a href="tel:3068077167" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white">306-807-7167</a>
              <a href="https://www.linkedin.com/in/giofranzmagracia" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white">LinkedIn</a>
            </div>
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("/images/hero-banner.png")} alt="Gio Franz Magracia career banner" className="h-auto w-full object-cover" />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">Ventures</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="#experience" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("/images/code-ninjas-education.png")} alt="Code Ninjas Central Edmonton" className="aspect-[16/9] w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-white">Code Ninjas Central Edmonton</p>
                  <p className="mt-1 text-xs text-slate-400">Cofounder, Owner & Operator · Present</p>
                </div>
              </a>
              <a href="#experience" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("/images/maintello-ai.png")} alt="Maintello" className="aspect-[16/9] w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-semibold text-white">Maintello</p>
                  <p className="mt-1 text-xs text-slate-400">Founder · 2026 – Present</p>
                </div>
              </a>
            </div>
          </section>
        </FadeIn>

        <section className="mb-20">
          <FadeIn>
            <SectionHeading id="experience" eyebrow="Career" title="Experience" />
          </FadeIn>
          <div className="space-y-6">
            {experience.map((role, i) => (
              <FadeIn key={`${role.company}-${role.dates}`} delay={i * 0.06}>
                <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shadow-black/20">
                  {role.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img(role.image)} alt={role.imageAlt || role.company} className="aspect-[21/9] w-full object-cover" />
                  ) : null}
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                        <p className="text-sky-300">{role.company}</p>
                        {role.location ? <p className="mt-1 text-xs text-slate-500">{role.location}</p> : null}
                      </div>
                      <p className="shrink-0 text-sm font-medium text-slate-400">{role.dates}</p>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {role.bullets.map((b) => (
                        <li key={b.slice(0, 48)} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <FadeIn>
            <SectionHeading id="education" eyebrow="Credentials" title="Education & Certifications" />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Education</h3>
              <p className="mt-3 text-lg font-semibold text-white">B.A.Sc., Petroleum Engineering (Co-op Program)</p>
              <p className="mt-1 text-sky-300">University of Regina</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Certifications & Memberships</h3>
              <ul className="mt-3 space-y-2 text-[0.95rem] text-slate-300">
                <li>Engineer-in-Training — Association of Professional Engineers and Geoscientists of Alberta (APEGA)</li>
                <li>PMP Eligible (not yet certified)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <FadeIn>
            <SectionHeading id="skills" eyebrow="Capabilities" title="Skills" />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <FadeIn>
          <section id="contact" className="scroll-mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let&apos;s connect</h2>
            <p className="mt-3 max-w-xl text-slate-400">Open to remote / hybrid Project Manager roles. Reach out by email, phone, or LinkedIn.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="mailto:giomagracia@gmail.com" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950">giomagracia@gmail.com</a>
              <a href="tel:3068077167" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white">306-807-7167</a>
              <a href="https://www.linkedin.com/in/giofranzmagracia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white">linkedin.com/in/giofranzmagracia</a>
            </div>
          </section>
        </FadeIn>
      </main>
      <footer className="relative border-t border-white/5 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Gio Franz Magracia</p>
      </footer>
    </div>
  );
}
