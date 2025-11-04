import React from 'react'
import { CreditCard, Shield, Zap } from 'lucide-react'

const items = [
  {
    icon: CreditCard,
    title: 'Bank-grade connections',
    desc: 'Securely connect bank accounts and cards with read-only permissions and robust audit trails.',
  },
  {
    icon: Zap,
    title: 'Real-time reconciliation',
    desc: 'Automated matching rules keep your GL tidy and up-to-date without manual spreadsheets.',
  },
  {
    icon: Shield,
    title: 'Compliance built-in',
    desc: 'Granular roles, SOC 2 ready, and encryption-in-transit and at-rest out of the box.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 h-full">
          <div className="rounded-3xl bg-gradient-to-b from-blue-50/60 to-indigo-50/40 h-1/2" />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Everything you need to automate finance</h2>
          <p className="mt-3 text-slate-600">A streamlined toolkit for modern teams that want speed, control, and visibility.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
