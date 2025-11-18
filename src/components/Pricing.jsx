export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple monthly pricing</h2>
          <p className="mt-4 text-slate-300">No long-term contracts. Cancel anytime. Most clients see ROI in the first 30 days.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8">
            <p className="text-sm text-slate-300">Best for solo operators</p>
            <h3 className="mt-2 text-white text-2xl font-semibold">Starter</h3>
            <p className="mt-6 text-4xl font-semibold text-white">$399<span className="text-base font-normal text-slate-300">/mo</span></p>
            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li>High-converting website + hosting</li>
              <li>Unlimited updates and support</li>
              <li>Basic lead capture and CRM</li>
              <li>Review request automation</li>
            </ul>
            <a href="#cta" className="mt-8 inline-block px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10 transition">Choose Starter</a>
          </div>

          <div className="rounded-2xl border border-amber-200/30 bg-gradient-to-b from-amber-200/10 to-amber-200/5 p-8 relative overflow-hidden">
            <div className="absolute right-6 top-6 text-amber-300 text-xs uppercase tracking-wider">Most popular</div>
            <p className="text-sm text-slate-300">For growing teams</p>
            <h3 className="mt-2 text-white text-2xl font-semibold">Growth</h3>
            <p className="mt-6 text-4xl font-semibold text-white">$899<span className="text-base font-normal text-slate-300">/mo</span></p>
            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li>Everything in Starter</li>
              <li>Lead generation campaigns</li>
              <li>AI follow-up agents (SMS + Email)</li>
              <li>Advanced analytics and reporting</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 transition">Choose Growth</a>
          </div>
        </div>
      </div>
    </section>
  );
}
