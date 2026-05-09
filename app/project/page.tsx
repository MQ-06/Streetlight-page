'use client';

import DownloadStreetLightCTA from '@/components/DownloadStreetLightCTA';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const IMPACT_SLIDER_MIN = 0;
const IMPACT_SLIDER_MAX = 100;

const issueTypes = [
  {
    id: 'roads',
    title: 'Road Damage',
    detail:
      'A citizen spots a broken road, captures one photo, and sends the report with location in a few seconds.',
    pulse: 'Hotspot near main road',
  },
  {
    id: 'waste',
    title: 'Waste Overflow',
    detail:
      'Overflowing garbage is reported early, so city teams can act before it grows into a larger health issue.',
    pulse: 'Hotspot near neighborhood',
  },
  {
    id: 'lights',
    title: 'Street Light Fault',
    detail:
      'Dark and unsafe streets become visible to decision makers quickly through one clear report.',
    pulse: 'Hotspot near crossing',
  },
] as const;

const flowSteps = [
  {
    title: 'Citizen reports',
    body: 'A person reports an issue with image and location.',
  },
  {
    title: 'Issue becomes visible',
    body: 'The issue is shown clearly so everyone sees what needs attention.',
  },
  {
    title: 'City team takes action',
    body: 'Teams can prioritize and respond with better speed and confidence.',
  },
] as const;

const impactBefore = {
  title: 'Without a clear channel',
  points: ['Problems stay unseen', 'People do not know what happens next', 'Response feels slow'],
};

const impactAfter = {
  title: 'With StreetLight',
  points: ['Problems become visible fast', 'People can follow progress', 'Teams can respond with clarity'],
};

const integrityFlowSteps = [
  {
    title: 'Capture',
    body: 'Citizen sends a photo, location, and short context through the mobile app.',
  },
  {
    title: 'Validate',
    body: 'The system checks image quality, place data, and basic rules so junk never crowds real issues.',
  },
  {
    title: 'Analyze',
    body: 'Models classify the issue type and rough severity so teams see what matters first.',
  },
  {
    title: 'Verify',
    body: 'Nearby people and trust signals can confirm or question a report before it is treated as final.',
  },
  {
    title: 'Score and seal',
    body: 'A combined integrity score is produced so each accepted report has one clear, reviewable outcome.',
  },
] as const;

const completeFlowSteps = [
  'Capture',
  'Validate',
  'Analyze',
  'Verify',
  'Score',
  'Anchor',
] as const;

function IntegrityAndChainSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1018] via-[#080b10] to-[#06080c] p-6 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_0%,rgba(244,185,66,0.06),transparent_50%)]" />

      <p className="relative z-10 mb-2 text-xs uppercase tracking-[0.28em] text-primary/90">3. Why StreetLight stays trustworthy</p>
      <h2 className="relative z-10 max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl">
        Once sealed, reports are much harder to quietly rewrite
      </h2>
      <p className="relative z-10 mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
        StreetLight treats reports like evidence. After scoring, records can be tied to a{' '}
        <span className="text-white/90">blockchain style anchor</span>, so if someone tries to alter history later, the
        mismatch is visible to auditors and the public.
      </p>
      <p className="relative z-10 mt-3 max-w-3xl text-sm leading-relaxed text-white/60">
        This is not only about trust. It also gives city teams stronger planning signals: recurring hotspots, severity
        trends, and clearer budget priorities for future action.
      </p>

      <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">Tamper alert layer</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Sealed reports gain an integrity fingerprint. If a record is changed later, verification checks can detect it.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">Public transparency</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Citizens can trust that accepted reports keep a reviewable timeline instead of disappearing into dark edits.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">Admin future planning</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Trend history highlights where problems repeat, which helps admin teams prioritize roadmaps and allocate budgets.
          </p>
        </motion.div>
      </div>

    </div>
  );
}

function StreetLightFlowStages() {
  const [litIndex, setLitIndex] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0d1118] via-[#080b10] to-[#05070a] p-6 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(244,185,66,0.08),transparent_55%)]" />

      <p className="relative z-10 mb-2 text-xs uppercase tracking-[0.28em] text-primary/90">
        2. Follow Clear Action Flow
      </p>
      <p className="relative z-10 mb-10 max-w-xl text-sm text-white/65">
        Tap a step or a dot below. Only one lamp stays on at a time, so you control the story.
      </p>

      <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {flowSteps.map((step, index) => {
          const isLit = litIndex === index;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setLitIndex(index)}
              className="relative flex w-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-transparent bg-transparent p-1 text-left outline-none transition-colors focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/30"
              aria-pressed={isLit}
              aria-label={`Step ${index + 1}: ${step.title}`}
            >
              <div className="relative z-20 flex w-full flex-col items-center">
                <div className="h-10 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-zinc-600 to-zinc-800" />
                  <div className="relative z-10 flex h-3 w-14 shrink-0 items-center justify-center rounded-b-full border border-zinc-700/80 bg-zinc-900 shadow-lg">
                  <div className="flex items-center justify-center">
                    <motion.div
                      key={`bulb-${litIndex}-${index}`}
                      className="h-2.5 w-6 shrink-0 rounded-full bg-primary blur-[4px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isLit
                          ? {
                              opacity: [0, 0.15, 0.4, 0.2, 1, 0.85, 1],
                              scale: [0.85, 1.05, 1],
                            }
                          : { opacity: 0.12, scale: 1 }
                      }
                      transition={
                        isLit
                          ? { duration: 0.85, ease: 'easeOut' }
                          : { duration: 0.4 }
                      }
                    />
                  </div>
                </div>
                <div className="flex w-full justify-center px-1">
                  <motion.div
                    className="pointer-events-none z-[5] -mt-px w-[min(100%,15rem)] max-w-full shrink-0 origin-top"
                    initial={false}
                    animate={{
                      opacity: isLit ? 1 : 0.12,
                      scaleY: isLit ? 1 : 0.92,
                    }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      height: 'min(280px, 36vh)',
                      background:
                        'linear-gradient(180deg, rgba(244, 185, 66, 0.5) 0%, rgba(244, 185, 66, 0.26) 28%, rgba(244, 185, 66, 0.12) 52%, rgba(244, 185, 66, 0.04) 75%, transparent 100%)',
                      clipPath: 'polygon(44% 0, 56% 0, 71% 100%, 29% 100%)',
                      filter: 'blur(9px)',
                    }}
                  />
                </div>
              </div>

              <motion.div
                className="relative z-30 mt-5 w-full rounded-2xl border px-5 py-6"
                animate={{
                  borderColor: isLit ? 'rgba(244, 185, 66, 0.55)' : 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: isLit ? 'rgba(244, 185, 66, 0.08)' : 'rgba(0, 0, 0, 0.35)',
                  boxShadow: isLit
                    ? '0 0 40px rgba(244, 185, 66, 0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
                    : '0 0 0 rgba(0,0,0,0)',
                }}
                transition={{ duration: 0.45 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <motion.span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-[#0B0F14]"
                    animate={{
                      scale: isLit ? [1, 1.08, 1] : 1,
                      boxShadow: isLit ? '0 0 20px rgba(244,185,66,0.5)' : 'none',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.span>
                  {isLit && (
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[10px] uppercase tracking-[0.2em] text-primary"
                    >
                      Lit now
                    </motion.span>
                  )}
                </div>
                <p className="text-base font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
              </motion.div>
            </button>
          );
        })}
      </div>

      <div
        className="relative z-10 mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mt-2 flex justify-center gap-2">
        {flowSteps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLitIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              litIndex === i ? 'w-8 bg-primary' : 'w-1.5 bg-white/25 hover:bg-white/40'
            }`}
            aria-label={`Show step ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 mt-6 rounded-xl border border-white/10 bg-black/25 p-4 md:p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">Complete report chain</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {completeFlowSteps.map((step, index) => (
            <span
              key={step}
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white/80"
            >
              {index + 1}. {step}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/55">
          The same chain powers both fast action and long-term transparency from report submission to sealed integrity proof.
        </p>
      </div>
    </div>
  );
}

function ImpactLightReveal() {
  const [reveal, setReveal] = useState(85);
  const span = IMPACT_SLIDER_MAX - IMPACT_SLIDER_MIN;
  const litProgress = span > 0 ? (IMPACT_SLIDER_MAX - reveal) / span : 0;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-primary/20 bg-[#06080c] shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_120%,rgba(244,185,66,0.12),transparent_50%)]" />

      <div className="relative z-10 p-6 md:p-10">
        <p className="mb-2 text-xs uppercase tracking-[0.28em] text-primary/90">4. See The Impact</p>
        <h2 className="max-w-2xl text-2xl font-bold leading-tight text-white md:text-3xl">
          Drag the bar to sweep the light across.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/65">
          Same city. Same people. Slide the control below to peel back the dim layer and compare what changes with
          StreetLight.
        </p>

        <div className="mt-8 rounded-xl border border-white/10 bg-black/30 px-4 py-3 md:px-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">How to read this</p>
          <div className="mt-3 flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex items-start gap-2 md:flex-1">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/40" aria-hidden />
              <div>
                <p className="font-medium text-white/85">{impactBefore.title}</p>
                <p className="mt-0.5 text-xs text-white/50">The dim layer on top</p>
              </div>
            </div>
            <div className="hidden text-primary/50 md:block" aria-hidden>
              →
            </div>
            <div className="flex items-start gap-2 md:flex-1 md:text-right">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(244,185,66,0.7)]"
                aria-hidden
              />
              <div>
                <p className="font-medium text-primary">{impactAfter.title}</p>
                <p className="mt-0.5 text-xs text-white/50">What stays underneath</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 min-h-[340px] overflow-hidden rounded-2xl border border-white/10 md:min-h-[300px]">
          <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-primary/25 via-primary/10 to-[#0a0e14] p-6 md:flex-row md:items-stretch md:p-8">
            <div className="flex flex-1 flex-col justify-center border-white/10 md:border-r md:pr-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{impactAfter.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                {impactAfter.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_12px_rgba(244,185,66,0.8)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-1 flex-col justify-center md:mt-0 md:pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Brighter operations</p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                When reports are visible and trusted, neighborhoods feel heard and teams can move with confidence.
              </p>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 flex flex-col bg-[#05070a] p-6 md:flex-row md:items-stretch md:p-8"
            animate={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
            transition={{ type: 'tween', duration: 0.08, ease: 'easeOut' }}
          >
            <div className="flex flex-1 flex-col justify-center border-white/10 md:border-r md:pr-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">{impactBefore.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                {impactBefore.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-1 flex-col justify-center md:mt-0 md:pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">In the dark</p>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                Issues pile up quietly. Citizens lose trust. Teams lack a single picture of what matters most.
              </p>
            </div>
          </motion.div>

          <div
            className="pointer-events-none absolute bottom-0 top-0 z-20 w-0.5 -translate-x-1/2 bg-primary shadow-[0_0_24px_rgba(244,185,66,0.9)]"
            style={{ left: `${reveal}%` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 top-0 z-20 w-10 -translate-x-1/2 bg-gradient-to-r from-primary/55 to-transparent opacity-75 blur-md"
            style={{ left: `${reveal}%` }}
            aria-hidden
          />
        </div>

        <div className="relative z-30 mt-6">
          <label htmlFor="impact-reveal-slider" className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/55">
            Drag to compare
          </label>
          <input
            id="impact-reveal-slider"
            type="range"
            min={IMPACT_SLIDER_MIN}
            max={IMPACT_SLIDER_MAX}
            value={reveal}
            onChange={(e) => setReveal(Number(e.target.value))}
            className="impact-slider w-full cursor-pointer accent-primary"
          />
          <div className="mt-2 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/45">
            <span className="text-primary/90">More StreetLight</span>
            <span>More hidden</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-[width] duration-75 ease-out"
              style={{ width: `${litProgress * 100}%` }}
            />
          </div>
        </div>

        <DownloadStreetLightCTA variant="banner" showPlaceholderNote className="mt-10" />
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const [activeIssue, setActiveIssue] = useState<(typeof issueTypes)[number]['id']>(issueTypes[0].id);
  const selectedIssue = useMemo(
    () => issueTypes.find((item) => item.id === activeIssue) ?? issueTypes[0],
    [activeIssue]
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,185,66,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 film-grain opacity-60" />

      <section className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-10 md:min-h-[82vh] md:pt-14">
        <div className="mb-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-primary"
          >
            <span aria-hidden>←</span>
            Back to intro
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/MQ-06/STREETLIGHT-PK"
              target="_blank"
              rel="noreferrer"
              aria-label="StreetLight GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/75 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.01-.02-1.98-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.69.08-.69 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.17 1.18A10.9 10.9 0 0 1 12 6.04c.97 0 1.95.13 2.86.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.68 5.4-5.24 5.69.41.35.78 1.03.78 2.08 0 1.5-.01 2.72-.01 3.09 0 .31.2.68.8.56 4.56-1.53 7.85-5.83 7.85-10.91C23.5 5.66 18.35.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/streetlight-pk/"
              target="_blank"
              rel="noreferrer"
              aria-label="StreetLight LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/75 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0z" />
              </svg>
            </a>
            <DownloadStreetLightCTA variant="button" />
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs uppercase tracking-[0.35em] text-primary"
          >
            StreetLight
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-[1.12] text-white md:text-6xl"
          >
            Turn Hidden City Problems Into Shared Action
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/55 md:gap-3 md:text-xs"
          >
            {['Report', 'Visibility', 'Action'].map((word, i) => (
              <span key={word} className="flex items-center gap-2 md:gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-primary/80" aria-hidden />}
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90">
                  {word}
                </span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg"
          >
            One app for citizens to speak up with proof. One place for teams to see what is urgent. One story that keeps everyone aligned.
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-primary/90">1. Report In Seconds</p>
          <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
            <div className="space-y-3">
              {issueTypes.map((issue) => {
                const isActive = issue.id === activeIssue;
                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => setActiveIssue(issue.id)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      isActive
                        ? 'border-primary/70 bg-primary/10 text-white'
                        : 'border-white/10 bg-black/20 text-white/75 hover:border-primary/40'
                    }`}
                  >
                    {issue.title}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={selectedIssue.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-60 rounded-2xl border border-white/10 bg-black/25 p-6"
            >
              <div className="absolute right-5 top-5 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-primary">
                Live Demo
              </div>
              <div className="mx-auto mt-2 w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/65">Citizen View</p>
                <p className="mt-3 text-lg font-semibold">{selectedIssue.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{selectedIssue.detail}</p>
                <div className="mt-5 rounded-lg border border-primary/35 bg-primary/10 px-3 py-2 text-xs text-primary">
                  {selectedIssue.pulse}
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                  <motion.div
                    key={selectedIssue.id}
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[#ffdc91]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <StreetLightFlowStages />
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <IntegrityAndChainSection />
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <ImpactLightReveal />
        </motion.div>
      </section>
    </main>
  );
}

