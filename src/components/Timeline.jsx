export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={item.step || item.year} className="relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_40px_rgba(43,43,43,0.05)]">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#B87333]/10 text-[#B87333] font-semibold">
            {index + 1}
          </div>
          <h3 className="text-xl font-semibold text-[#2B2B2B]">{item.step || item.year}</h3>
          <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.detail || item.event}</p>
        </div>
      ))}
    </div>
  )
}
