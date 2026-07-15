export default function Stats({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[24px] border border-[#E5E7EB] bg-white p-8 text-center shadow-sm">
          <p className="text-4xl font-semibold text-[#2B2B2B]">
            {item.value}
            {item.suffix}
          </p>
          <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
