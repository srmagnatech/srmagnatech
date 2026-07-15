import SectionHeading from '../components/SectionHeading'

const certs = [
  { title: 'Government Certified Products', text: 'Products are supported by certified quality processes aligned with government and public-sector requirements.' },
  { title: 'ISO-aligned Subcontractor Capability', text: 'Our manufacturing approach is structured for repeatability, compliance, and disciplined execution.' },
  { title: 'Quality Assurance', text: 'Inspection and validation routines are built into the production workflow at every critical stage.' },
]

export default function Certifications() {
  return (
    <main className="bg-slate-50">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Certifications"
            title="Credibility built through disciplined compliance."
            description="Our reputation is grounded in dependable manufacturing standards and a serious attention to quality."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {certs.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
