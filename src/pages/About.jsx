import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { aboutSections, aboutTimeline } from '../data/siteData'

export default function About() {
  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-[#E5E7EB] bg-[#F7F7F5] p-8 shadow-[0_24px_80px_rgba(43,43,43,0.05)] lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About Us"
                title="A refined manufacturing partner for modern industry."
                description="S.R. Magnatech brings together engineering focus, certified manufacturing discipline, and a premium B2B production experience."
              />
            </div>
            <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Company Profile</p>
              <p className="mt-4 text-lg leading-8 text-[#6B7280]">
                We manufacture ferrite transformers, chokes, and toroids for telecom, industrial, and OEM applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
          {aboutSections.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-[24px] border border-[#E5E7EB] bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#2B2B2B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Timeline"
            title="The milestones that shape our manufacturing story."
            description="A progressive history of capability growth, facility investment, and production maturity."
            align="center"
          />
          <div className="mt-12">
            <Timeline items={aboutTimeline} />
          </div>
        </div>
      </section>
    </main>
  )
}
