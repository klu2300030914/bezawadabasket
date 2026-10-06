import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/data';

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Us"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
      <MessageCircle size={28} className="text-white relative" />
    </a>
  );
}
