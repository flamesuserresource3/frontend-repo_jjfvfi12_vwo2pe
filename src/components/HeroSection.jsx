import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white pointer-events-none" />
        <div className="h-[560px] md:h-[640px]">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-8 items-center min-h-[520px]">
          <div className="md:col-span-6 lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Automated finance workflows
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Modern finance automation for fast-moving teams
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Connect accounts, reconcile in real-time, and build no-code workflows that
              keep your books clean while you scale.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow-sm hover:bg-slate-800">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">
                See features
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Free 14-day trial. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
