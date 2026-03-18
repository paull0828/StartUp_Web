import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In a real app, you'd send this to your backend
      console.log('Form submitted:', data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section min-h-[60vh] flex items-center bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted">
              Have a question or ready to start your transformation? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:info@visionary.com" className="text-muted hover:text-accent transition">
                      info@visionary.com
                    </a>
                    <p className="text-sm text-muted mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted hover:text-accent transition">
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-muted mt-1">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted">
                      123 Tech Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-accent transition"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-accent transition"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-accent transition"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Your company"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-accent transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register('message')}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-accent transition resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary group w-full md:w-auto"
                >
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
