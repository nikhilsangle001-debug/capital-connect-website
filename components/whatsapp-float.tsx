import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '919876543210'
const MESSAGE = 'Hello Capital Connect, I would like to discuss a funding requirement.'

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Capital Connect on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C4A] text-white shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-sm bg-primary px-3 py-2 text-xs font-medium text-primary-foreground opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  )
}
