import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30" />
          <span className="text-white font-semibold text-lg tracking-tight">
            meetflows<span className="text-indigo-300">.ai</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition">Results</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="px-4 py-2 rounded-lg text-slate-200 hover:text-white transition">See pricing</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 transition">Get a demo</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-2 py-2">
            <a href="#features" className="text-slate-200 py-2">Features</a>
            <a href="#pricing" className="text-slate-200 py-2">Pricing</a>
            <a href="#testimonials" className="text-slate-200 py-2">Results</a>
            <a href="#cta" className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white text-center">Get a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
