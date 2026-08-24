// PARKED 2026-08-24 at Janette's request ("let's just park it, i might want it back").
//
// This is the "Where Janette speaks" section lifted verbatim out of
// src/app/about/page.tsx. Nothing imports it, so it is excluded from the build.
//
// To restore: import it in src/app/about/page.tsx and render <SpeakingWall />
// between the pull-quote section and the Press section. Refresh the dates first —
// source of truth is 20_Areas/Keynotes/ and 20_Areas/Topics/Speaking-and-Keynotes.md
// in the vault.

// Upcoming and recent stages, sourced from 20_Areas/Keynotes/ and
// 20_Areas/Topics/Speaking-and-Keynotes.md. Future-dated events are listed as
// upcoming so the page stays accurate.
const upcomingTalks = [
  { event: 'Virtuoso Travel Tech Summit', place: 'Las Vegas', when: 'Aug 2026' },
  { event: "West Virginia Governor's Conference on Tourism", place: 'Charleston, WV', when: 'Sept 2026' },
  { event: 'ATIA Annual Convention & Trade Show', place: 'Fairbanks, AK', when: 'Oct 2026' },
  { event: 'American Indian Tourism Conference', place: 'United States', when: 'Oct 2026' },
]

const recentTalks = [
  { event: 'IPW — AI Theatre', place: 'Fort Lauderdale, FL', when: 'May 2026' },
  { event: 'micebook C-Suite Summit', place: 'NeueHouse, NYC', when: 'May 2026' },
  { event: 'City Nation Place Americas', place: 'Vancouver', when: 'Apr 2026' },
  { event: 'Maine Tourism Conference', place: 'Maine', when: 'Apr 2026' },
  { event: 'Phocuswright Travel Marketing AI Summit', place: 'New York City', when: 'Mar 2026' },
  { event: "Wyoming Governor's Conference on Tourism", place: 'Wyoming', when: 'Feb 2026' },
]

export default function SpeakingWall() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="dateline text-brand-slate flex items-center gap-4 mb-10">
        <span>On stage</span>
        <span className="flex-1 h-px bg-brand-sand" aria-hidden="true" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-brand-navy mb-4">
        Where Janette speaks
      </h2>
      <p className="max-w-[68ch] text-lg leading-relaxed text-brand-gray-blue mb-12">
        Talks on AI in tourism — for governors&apos; conferences, global summits,
        and destination marketing organizations across the country and beyond.
      </p>

      {/* Upcoming */}
      <h3 className="dateline text-brand-cyan mb-4">
        Upcoming
      </h3>
      <div className="border-t border-brand-navy mb-14">
        {upcomingTalks.map((t) => (
          <div
            key={t.event}
            className="grid grid-cols-1 sm:grid-cols-[6.5rem_1fr_auto] gap-1 sm:gap-5 items-baseline py-5 border-b border-brand-sand"
          >
            <span className="dateline text-brand-cyan whitespace-nowrap">{t.when}</span>
            <span className="text-xl leading-snug text-brand-navy">{t.event}</span>
            <span className="dateline text-brand-slate">{t.place}</span>
          </div>
        ))}
      </div>

      {/* Recent */}
      <h3 className="dateline text-brand-slate mb-4">
        Recent stages
      </h3>
      <div className="border-t border-brand-navy">
        {recentTalks.map((t) => (
          <div
            key={t.event}
            className="grid grid-cols-1 sm:grid-cols-[6.5rem_1fr_auto] gap-1 sm:gap-5 items-baseline py-5 border-b border-brand-sand"
          >
            <span className="dateline text-brand-slate whitespace-nowrap">{t.when}</span>
            <span className="text-xl leading-snug text-brand-navy">{t.event}</span>
            <span className="dateline text-brand-slate">{t.place}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
