import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { ClinicVerifiedInfo } from '../types';

interface MobileActionBarProps {
  info: ClinicVerifiedInfo;
  onBookClick: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ info, onBookClick }) => {
  const isPlaceholder = (val: string) => val.startsWith('[Add') && val.endsWith(']');
  const formatTel = (num: string) => num.replace(/[^0-9+]/g, '');

  return (
    <div
      id="mobile-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E0D8CB] px-3 py-2.5 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={isPlaceholder(info.phone) ? '#contact' : `tel:${formatTel(info.phone)}`}
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] py-1.5 px-2 rounded-xl bg-white border border-[#DCD3C5] text-[#2C3B33] active:bg-[#ECE5DA] transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4 text-[#3F6F5E]" />
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={isPlaceholder(info.whatsapp) ? '#contact' : `https://wa.me/${formatTel(info.whatsapp)}`}
          target={isPlaceholder(info.whatsapp) ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] py-1.5 px-2 rounded-xl bg-[#25D366]/10 border border-[#A6E6BE] text-[#1E7D46] active:bg-[#25D366]/20 transition-colors"
          aria-label="WhatsApp chat"
        >
          <MessageCircle className="w-4 h-4 text-[#1E7D46]" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Appointment Button */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] py-1.5 px-2 rounded-xl bg-[#3F6F5E] text-white active:bg-[#30584A] transition-colors shadow-2xs"
          aria-label="Book appointment"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-[11px] font-bold tracking-tight">Book</span>
        </button>
      </div>
    </div>
  );
};
