import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import GalleryCard from '../components/GalleryCard'
import { galleryItems } from '../data/siteData'

export default function Gallery() {
  const [modalImage, setModalImage] = useState(null)

  return (
    <main className="bg-[#FFFFFF] text-[#2B2B2B]">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="A visual story of precision manufacturing."
            description="Images that highlight our production environment, inspection processes, and industrial craftsmanship."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <GalleryCard key={item.label} image={item.image} label={item.label} onClick={() => setModalImage(item.image)} />
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={() => setModalImage(null)}>
          <div className="relative max-w-4xl overflow-hidden rounded-[32px] bg-[#FFFFFF] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2B2B2B] text-white"
            >
              Close
            </button>
            <img src={modalImage} alt="Gallery preview" className="h-[70vh] w-full object-cover" />
          </div>
        </div>
      )}
    </main>
  )
}
