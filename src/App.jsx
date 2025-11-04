import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Pricing />
        <section id="contact" className="py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h3 className="text-2xl font-semibold">Questions? We’re here to help.</h3>
            <p className="mt-2 text-slate-600">Reach out and we’ll get back within one business day.</p>
            <a
              href="mailto:hello@fintrix.app"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50"
            >
              Contact sales
            </a>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Fintrix Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
