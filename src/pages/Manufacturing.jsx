import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { manufacturingSections, manufacturingTimeline } from '../data/siteData'

export default function Manufacturing() {
  return (
    <main className="bg-[#F7F7F5]">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_80px_rgba(43,43,43,0.05)] lg:p-12">
          <SectionHeading
            eyebrow="Manufacturing"
            title="A disciplined process for consistent industrial production."
            description="We combine process control, quality inspection, and robust packaging to support electronics manufacturing at scale."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {manufacturingSections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] border border-[#E5E7EB] bg-[#F7F7F5] p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-[#B87333]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#B87333]">
                  {section.title}
                </div>
                <p className="text-sm leading-7 text-[#6B7280]">{section.text}</p>
                <div className="mt-6 overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white">
                  <img src={section.image} alt={section.title} className="h-72 w-full object-cover object-center" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Manufacturing Timeline"
            title="A clear production flow from design to dispatch."
            description="Every milestone is documented and validated to guarantee consistent results across each order."
            align="center"
          />
          <div className="mt-12">
            <Timeline items={manufacturingTimeline} />
          </div>
        </div>
      </section>
    </main>
  )
}
