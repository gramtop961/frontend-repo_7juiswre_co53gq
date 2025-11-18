import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 w-full">
        <div className="md:col-span-7 py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200/90 text-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI agents that follow up with every lead — instantly
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Websites that convert. Agents that close. Growth on autopilot.
          </h1>

          <p className="mt-5 text-lg text-slate-200/90 max-w-2xl">
            Meetflows builds and maintains high-converting sites for contractors and service businesses — bundled with lead gen, review automation, and AI follow-up that turns interest into booked jobs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 transition text-center">
              Book your demo
            </a>
            <a href="#features" className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10 transition text-center">
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-slate-300/90">
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 border border-white/20" />
              ))}
            </div>
            <p className="text-sm">Trusted by 100+ local contractors</p>
          </div>
        </div>

        <div className="md:col-span-5" />
      </div>
    </section>
  );
}
