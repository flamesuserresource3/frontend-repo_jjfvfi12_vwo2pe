import React from 'react'
import { Check, Lock } from 'lucide-react'

const tier = {
  name: 'Scale',
  price: '$49',
  per: '/mo',
  features: [
    'Unlimited workflows',
    'Real-time bank feeds',
    'Advanced reconciliation rules',
    'SAML SSO + RBAC',
    'Priority support',
  ],
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Fair, predictable pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you need more power and control.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-end gap-2">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">{tier.price}</div>
              <div className="pb-1 text-slate-500">{tier.per}</div>
            </div>
            <p className="mt-2 text-slate-600">Everything you need to automate reconciliations and close faster.</p>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 text-green-600"><Check size={18} /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow-sm hover:bg-slate-800">
              Start 14-day free trial
            </a>
            <p className="mt-3 text-xs text-slate-500 flex items-center gap-1"><Lock size={14}/> No credit card required</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
            <h3 className="text-2xl font-semibold">What you get</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 text-white/90">
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-sm">Reconciliation</div>
                <div className="text-2xl font-semibold">x10 faster</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-sm">Accuracy</div>
                <div className="text-2xl font-semibold">99.9%</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-sm">Time saved</div>
                <div className="text-2xl font-semibold">8h/week</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <div className="text-sm">Audit logs</div>
                <div className="text-2xl font-semibold">Full</div>
              </div>
            </div>
            <p className="mt-6 text-white/80">
              Transparent, usage-friendly pricing designed for startups and finance teams that ship fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
