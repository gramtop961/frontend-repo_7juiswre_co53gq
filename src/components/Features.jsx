import { ShieldCheck, Stars, Rocket, LineChart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Website + Unlimited Updates",
    desc: "Modern, lightning-fast site built for conversions. We handle hosting, updates, and security — all included.",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    desc: "Local SEO, landing pages, and paid campaigns that consistently bring in qualified leads for your service business.",
  },
  {
    icon: Stars,
    title: "5‑Star Review Automation",
    desc: "Automated text and email requests that turn happy customers into public 5‑star reviews — on autopilot.",
  },
  {
    icon: Rocket,
    title: "AI Follow‑up Agents",
    desc: "Instantly text and email every new lead, answer questions, and book calls — 24/7, no dropped opportunities.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Everything you need to grow — in one simple plan</h2>
          <p className="mt-4 text-slate-300">Built for contractors and local service companies: HVAC, roofing, cleaning, plumbing, landscaping, and more.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
