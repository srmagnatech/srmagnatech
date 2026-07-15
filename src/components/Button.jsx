export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]/30'
  const variants = {
    primary: 'bg-[#2B2B2B] text-white hover:bg-[#B87333]',
    secondary: 'border border-[#2B2B2B] bg-transparent text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white',
    ghost: 'text-[#2B2B2B] hover:text-[#B87333]',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
