import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#6B7280]">
      <Link to="/" className="transition hover:text-[#d4af37]">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-[#B3B3B3]" />
          {item.to ? (
            <Link to={item.to} className="transition hover:text-[#d4af37]">
              {item.label}
            </Link>
          ) : (
            <span className={index === items.length - 1 ? 'font-semibold text-[#2B2B2B]' : ''}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
