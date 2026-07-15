import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/siteData'

const mapEmbedUrl = `https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${encodeURIComponent('S.R. MAGNATECH, 59, 1st Main, Mysore Rd, Pipeline West, Kasthuriba Nagar, Bengaluru, Karnataka 560026, India')}&z=15&output=embed`

export default function Contact() {
  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-[#E5E7EB] bg-[#F7F7F5] p-8 lg:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Start your inquiry with our manufacturing team."
              description="Send us a message for product details, production planning, or custom manufacturing support."
            />
            <div className="mt-10 space-y-6 rounded-[28px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Address</p>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Phone</p>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{contactInfo.phone}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Email</p>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{contactInfo.email}</p>
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-[#F7F7F5] p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B87333]">Map</p>
              <div className="mt-5 h-80 overflow-hidden rounded-[24px] bg-[#E5E7EB]">
                <iframe
                  title="S.R. Magnatech location"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
