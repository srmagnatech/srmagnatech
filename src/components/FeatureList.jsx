import { CheckCircle2 } from 'lucide-react'

export default function FeatureList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#6B7280]">
          <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#d4af37]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
