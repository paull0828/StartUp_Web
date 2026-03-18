import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '1234567890' // Replace with your phone number
  const message = 'Hi, I am interested in your services!'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
