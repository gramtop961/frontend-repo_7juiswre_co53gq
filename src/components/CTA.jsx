export default function CTA() {
  return (
    <section id="cta" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 p-1">
          <div className="rounded-[22px] bg-slate-950 p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold tracking-tight">Ready to turn more clicks into booked jobs?</h3>
              <p className="mt-3 text-slate-300">Book a 20-minute walkthrough. We'll audit your current site and show the automations that bring in reviews and revenue.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="col-span-3 sm:col-span-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              <input type="email" placeholder="Email" className="col-span-3 sm:col-span-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              <input type="tel" placeholder="Phone" className="col-span-3 sm:col-span-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              <button type="button" className="col-span-3 mt-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 transition">Book my demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
