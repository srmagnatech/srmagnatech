export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#B87333]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-[#2B2B2B] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-[#6B7280] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
