import SectionHeading from '../components/SectionHeading'

const industries = [
  { title: 'Telecommunications', text: 'High-reliability components for communications infrastructure and electronics systems.' },
  { title: 'Electronics OEMs', text: 'Manufacturing support for OEM programs that require quality and repeatability.' },
  { title: 'Industrial Automation', text: 'Durable electronic components for automated systems and industrial control.' },
  { title: 'Power Electronics', text: 'Precision solutions for power-driven assemblies and electronic equipment.' },
  { title: 'Government Programs', text: 'Trusted supply capability for public-sector and compliance-driven applications.' },
]

export default function Industries() {
  return (
    <main className="bg-slate-50">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries Served"
            title="Serving industries that demand technical certainty."
            description="Our manufacturing capability aligns closely with B2B and regulated industrial environments."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{industry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{industry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
