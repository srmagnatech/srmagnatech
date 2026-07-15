import { motion } from 'framer-motion'

export default function GalleryCard({ image, label, onClick }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      className="group w-full overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-sm"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={label} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B2B2B]/80 to-transparent p-4 text-white">
          <p className="text-sm font-semibold">{label}</p>
        </div>
      </div>
    </motion.button>
  )
}
