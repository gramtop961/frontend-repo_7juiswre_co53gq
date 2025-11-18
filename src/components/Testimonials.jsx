export default function Testimonials() {
  const items = [
    {
      quote: "We went from 3-4 leads a week to 3-4 a day. The AI texts back instantly and books jobs while we're on-site.",
      name: "Marcus R.",
      role: "Owner, Apex Roofing"
    },
    {
      quote: "They rebuilt our site and set up reviews. We hit 100+ five-star ratings in 2 months and our phone won't stop ringing.",
      name: "Jenny C.",
      role: "Founder, ShineClean"
    },
    {
      quote: "The monthly plan is a no-brainer — updates, SEO, and lead follow-up handled. We just show up to the jobs.",
      name: "Luis P.",
      role: "Operations, Prime HVAC"
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Proven results for local service brands</h2>
          <p className="mt-4 text-slate-300">Real outcomes from the clients we serve daily.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
