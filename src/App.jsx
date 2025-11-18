import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_10%,rgba(99,102,241,0.25),transparent)]" />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} meetflows.ai — Websites, lead gen, reviews, and AI follow‑up for contractors.
      </footer>
    </div>
  )
}

export default App
