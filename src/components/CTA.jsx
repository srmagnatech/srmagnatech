import { NavLink } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-[#F7F7F5] px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-[32px] border border-[#E5E7EB] bg-white px-8 py-12 text-center shadow-[0_24px_80px_rgba(43,43,43,0.05)] sm:flex-row sm:text-left">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Ready for the next step?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2B2B2B] sm:text-4xl">
            Partner with a manufacturer built for premium B2B electronics.
          </h2>
        </div>
        <NavLink
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#2B2B2B] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B87333]"
        >
          Contact Sales
        </NavLink>
      </div>
    </section>
  )
}
