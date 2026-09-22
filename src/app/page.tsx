"use client";

import { FadeIn } from "@/components/FadeIn";
import { Nav } from "@/components/Nav";
import { experience, skillGroups } from "@/data/resume";

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
      <div
        className="gradient-orb left-[-10%] top-[-8%] h-72 w-72 bg-sky-500/40"
        aria-hidden
      />
      <div
        className="gradient-orb right-[-5%] top-[20%] h-80 w-80 bg-indigo-500/30"
        aria-hidden
      />
      <div
        className="gradient-orb bottom-[10%] left-[30%] h-64 w-64 bg-cyan-600/20"
        aria-hidden
      />

      <Nav />

      <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-12 sm:px-6 sm:pt-16">
        {/* Hero */}
        <FadeIn>
          <section className="mb-20">
            <p className="mb-3 text-sm font-medium text-sky-400">
              Edmonton, AB · Open to remote / WFH
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gio Franz Magracia
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Engineer-in-Training (APEGA) | Project Manager | PMP Eligible
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-[1.05rem]">
              Project Manager and Engineer-in-Training with hands-on ownership
              of capital and maintenance projects from initiation through
              close-out. Experience leading multidisciplinary teams, managing
              schedules and budgets (including work on programs over $300M),
              procurement and contract administration, change control, and
              stakeholder reporting. Strong delivery record coordinating field
              and office teams, subcontractors, and client interfaces across
              industrial and civil construction environments. Seeking remote /
              hybrid Project Manager roles where structured delivery, cost
              control, and clear communication matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:giomagracia@gmail.com"
                className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Email me
              </a>
              <a
                href="tel:3068077167"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                306-807-7167
              </a>
              <a
                href="https://www.linkedin.com/in/giofranzmagracia"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </FadeIn>

        {/* Experience */}
        <section className="mb-20">
          <FadeIn>
            <SectionHeading
              id="experience"
              eyebrow="Career"
              title="Experience"
            />
          </FadeIn>
          <div className="space-y-6">
            {experience.map((role, i) => (
              <FadeIn key={`${role.company}-${role.dates}`} delay={i * 0.06}>
                <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {role.title}
                      </h3>
                      <p className="text-sky-300">{role.company}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-slate-400">
                      {role.dates}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {role.bullets.map((b) => (
                      <li
                        key={b.slice(0, 48)}
                        className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Education + Certs */}
        <section className="mb-20">
          <FadeIn>
            <SectionHeading
              id="education"
              eyebrow="Credentials"
              title="Education & Certifications"
            />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Education
                </h3>
                <p className="mt-3 text-lg font-semibold text-white">
                  B.A.Sc., Petroleum Engineering (Co-op Program)
                </p>
                <p className="mt-1 text-sky-300">University of Regina</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Certifications & Memberships
                </h3>
                <ul className="mt-3 space-y-2 text-[0.95rem] text-slate-300">
                  <li>
                    Engineer-in-Training — Association of Professional Engineers
                    and Geoscientists of Alberta (APEGA)
                  </li>
                  <li>PMP Eligible (not yet certified)</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <FadeIn>
            <SectionHeading id="skills" eyebrow="Capabilities" title="Skills" />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                    {group.label}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Recognition / Volunteering / Refs */}
        <section className="mb-20">
          <FadeIn>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-sky-400">
                  Select recognition
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  “You See It You Own It” campaign — top candidate recognition
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-sky-400">
                  Volunteering
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Graham Indigenous Engagement — volunteer attendee, 2021 – 2022
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-sky-400">
                  References
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Available upon request.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Contact */}
        <FadeIn>
          <section
            id="contact"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-8 sm:p-10"
          >
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Let’s connect
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Open to remote / hybrid Project Manager roles. Reach out by email,
              phone, or LinkedIn.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:giomagracia@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                giomagracia@gmail.com
              </a>
              <a
                href="tel:3068077167"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                306-807-7167
              </a>
              <a
                href="https://www.linkedin.com/in/giofranzmagracia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                linkedin.com/in/giofranzmagracia
              </a>
            </div>
          </section>
        </FadeIn>
      </main>

      <footer className="relative border-t border-white/5 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Gio Franz Magracia ·{" "}
          <a
            href="https://www.linkedin.com/in/giofranzmagracia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-sky-300"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
