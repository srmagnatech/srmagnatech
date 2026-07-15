import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    // Validate that all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    try {
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        message: formData.message,
      }

      console.log('Sending email with params:', emailParams)

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams
      )

      setFormData(initialFormState)
      setStatus('success')
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Email send error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-[0_24px_80px_rgba(43,43,43,0.05)] lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-[#2B2B2B]">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-3 text-sm text-[#2B2B2B] outline-none transition focus:border-[#B87333]"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-[#2B2B2B]">
          <span>Company</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-3 text-sm text-[#2B2B2B] outline-none transition focus:border-[#B87333]"
            placeholder="Company name"
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-[#2B2B2B]">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-3 text-sm text-[#2B2B2B] outline-none transition focus:border-[#B87333]"
            placeholder="Email address"
          />
        </label>
        <label className="space-y-2 text-sm text-[#2B2B2B]">
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-3 text-sm text-[#2B2B2B] outline-none transition focus:border-[#B87333]"
            placeholder="Phone number"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-[#2B2B2B]">
        <span>Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[160px] w-full rounded-[28px] border border-[#E5E7EB] bg-[#F7F7F5] px-4 py-4 text-sm text-[#2B2B2B] outline-none transition focus:border-[#B87333]"
          placeholder="Your message"
        />
      </label>

      {status === 'success' && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Your inquiry has been sent successfully.
        </p>
      )}

      {status === 'error' && (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email us directly at srmagnatech@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#2B2B2B] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B87333] sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit inquiry'}
      </button>
    </form>
  )
}
