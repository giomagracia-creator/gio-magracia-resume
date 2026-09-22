"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Nav } from "@/components/Nav";
import {
  experience,
  howIWork,
  previouslyAt,
  shortIntro,
  skillGroups,
  summary,
} from "@/data/resume";

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
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700/80">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

const cardClass =
  "rounded-2xl border border-stone-200/90 bg-white shadow-[0_10px_40px_rgba(28,25,23,0.04)]";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f7f8fa]">
      <Nav />

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-14 sm:px-6 sm:pt-20">
        {/* Hero — Kristina-style hierarchy */}
        <FadeIn>
          <section className="mb-16 sm:mb-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/80">
              Project Manager · EIT (APEGA) · PMP Eligible · Available for remote / hybrid
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Gio Franz Magracia
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              {shortIntro}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-500 sm:text-[0.95rem]">
              Edmonton, AB · Open to remote / WFH
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:giomagracia@gmail.com"
                className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-navy/15 transition hover:bg-[#152a45]"
              >
                Email me
              </a>
              <a
                href="tel:3068077167"
                className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-navy/35 hover:text-navy"
              >
                306-807-7167
              </a>
              <a
                href="https://www.linkedin.com/in/giofranzmagracia"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-navy/35 hover:text-navy"
              >
                LinkedIn
              </a>
            </div>

            <div className="img-frame relative mt-12 overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(30,58,95,0.08)]">
              <Image
                src="/images/hero-banner.png"
                alt="Abstract construction leadership and calm technology illustration"
                width={1280}
                height={720}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </section>
        </FadeIn>

        {/* Previously at */}
        <FadeIn>
          <section className="mb-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Previously at
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {previouslyAt.map((c) => (
                <div key={c.company} className="logo-chip" title={c.company}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.alt} />
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Selected experience */}
        <section className="mb-24">
          <FadeIn>
            <SectionHeading
              id="experience"
              eyebrow="Selected experience"
              title="Roles with clear ownership and outcomes"
            />
          </FadeIn>
          <div className="space-y-6">
            {experience.map((role, i) => (
              <FadeIn key={`${role.company}-${role.dates}`} delay={i * 0.05}>
                <article className={`${cardClass} overflow-hidden`}>
                  {role.image ? (
                    <div className="img-frame relative aspect-[21/9] w-full overflow-hidden border-b border-stone-200 sm:aspect-[24/9]">
                      <Image
                        src={role.image}
                        alt={role.imageAlt || `${role.company} illustration`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        {role.logo ? (
                          <div className="logo-chip mt-0.5 h-14 w-14 shrink-0 !p-2 sm:h-16 sm:w-16">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={role.logo}
                              alt={role.logoAlt || role.company}
                              className="!max-h-10 !max-w-[3.25rem]"
                            />
                          </div>
                        ) : null}
                        <div>
                          <h3 className="text-lg font-semibold text-stone-900 sm:text-xl">
                            {role.title}
                          </h3>
                          <p className="mt-0.5 font-medium text-navy">
                            {role.company}
                          </p>
                          {role.location ? (
                            <p className="mt-1 text-xs text-stone-500">
                              {role.location}
                            </p>
                          ) : null}
                          {role.centerUrl ? (
                            <a
                              href={role.centerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-block text-xs font-medium text-blue-700 underline decoration-blue-700/25 underline-offset-4 hover:text-navy"
                            >
                              Center information
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className="shrink-0 text-sm font-medium text-stone-500">
                        {role.dates}
                      </p>
                    </div>
                    <ul className="mt-6 space-y-2.5">
                      {role.bullets.map((b) => (
                        <li
                          key={b.slice(0, 48)}
                          className="flex gap-3 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                            aria-hidden
                          />
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

        {/* About / how I work */}
        <section className="mb-24" id="about">
          <FadeIn>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title="How I work"
            />
          </FadeIn>
          <FadeIn>
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg">
              {summary}
            </p>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {howIWork.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className={`${cardClass} h-full p-6`}>
                  <h3 className="text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <FadeIn>
              <a
                href="#experience"
                className={`${cardClass} group block overflow-hidden transition hover:-translate-y-0.5 hover:border-navy/25`}
              >
                <div className="img-frame relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/code-ninjas-education.png"
                    alt="Bright STEM and coding learning space"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-stone-900">
                    Code Ninjas Central Edmonton
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    Cofounder, Owner & Operator · Present
                  </p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.06}>
              <a
                href="#experience"
                className={`${cardClass} group block overflow-hidden transition hover:-translate-y-0.5 hover:border-navy/25`}
              >
                <div className="img-frame relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/maintello-ai.png"
                    alt="Calm dashboards and AI implementation workflows"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-stone-900">Maintello</p>
                  <p className="mt-1 text-xs text-stone-500">
                    Founder · AI implementation · 2026 – Present
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Education + Certs */}
        <section className="mb-24">
          <FadeIn>
            <SectionHeading
              id="education"
              eyebrow="Credentials"
              title="Education & certifications"
            />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <div className={`${cardClass} h-full p-6`}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Education
                </h3>
                <p className="mt-3 text-lg font-semibold text-stone-900">
                  B.A.Sc., Petroleum Engineering (Co-op Program)
                </p>
                <p className="mt-1 text-navy">University of Regina</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className={`${cardClass} h-full p-6`}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Certifications & Memberships
                </h3>
                <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-stone-600">
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
        <section className="mb-24">
          <FadeIn>
            <SectionHeading id="skills" eyebrow="Capabilities" title="Skills" />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.06}>
                <div className={`${cardClass} h-full p-6`}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                    {group.label}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
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

        {/* Recognition */}
        <section className="mb-24">
          <FadeIn>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className={`${cardClass} p-5`}>
                <h3 className="text-sm font-semibold text-navy">
                  Select recognition
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  “You See It You Own It” campaign — top candidate recognition
                </p>
              </div>
              <div className={`${cardClass} p-5`}>
                <h3 className="text-sm font-semibold text-navy">Volunteering</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  Graham Indigenous Engagement — volunteer attendee, 2021 – 2022
                </p>
              </div>
              <div className={`${cardClass} p-5`}>
                <h3 className="text-sm font-semibold text-navy">References</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  Available upon request.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Calm contact footer block */}
        <FadeIn>
          <section
            id="contact"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-soft-blue/60 to-white p-8 shadow-[0_16px_42px_rgba(30,58,95,0.06)] sm:p-10"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700/80">
              Contact
            </p>
            <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
              Let’s connect
            </h2>
            <p className="mt-3 max-w-xl text-stone-600">
              Open to remote / hybrid Project Manager roles. Reach out by email,
              phone, or LinkedIn.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:giomagracia@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#152a45]"
              >
                giomagracia@gmail.com
              </a>
              <a
                href="tel:3068077167"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-navy/35 hover:text-navy"
              >
                306-807-7167
              </a>
              <a
                href="https://www.linkedin.com/in/giofranzmagracia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-navy/35 hover:text-navy"
              >
                linkedin.com/in/giofranzmagracia
              </a>
            </div>
          </section>
        </FadeIn>
      </main>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        <p>
          © {new Date().getFullYear()} Gio Franz Magracia ·{" "}
          <a
            href="https://www.linkedin.com/in/giofranzmagracia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 transition hover:text-navy"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
