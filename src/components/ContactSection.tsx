import React from 'react';
import { ClinicVerifiedInfo } from '../types';
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, Edit3 } from 'lucide-react';

interface ContactSectionProps {
  info: ClinicVerifiedInfo;
  onEditClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ info, onEditClick }) => {
  const isPlaceholder = (val: string) => val.startsWith('[Add') && val.endsWith(']');

  const formatTel = (num: string) => num.replace(/[^0-9+]/g, '');

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mt-3 mb-4 font-heading">
            Let's Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-[#4F5E57] leading-relaxed">
            Whether you have questions about speech milestones or want to schedule an evaluation, we are here to support you.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Quick Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DFD2] shadow-2xs">
              
              <div className="flex items-center justify-between pb-5 border-b border-[#EDE6DC] mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1F2924] font-heading">
                    Blooming Words Speech and Language Therapy
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E6F5E] font-medium mt-0.5">
                    Therapist: <strong>{info.therapistName}</strong> ({info.professionalTitle})
                  </p>
                </div>
                <button
                  onClick={onEditClick}
                  className="p-2 rounded-xl text-[#62756C] hover:bg-[#F2ECE3] transition-colors"
                  title="Edit clinic contact info"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 text-sm text-[#38463F]">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F2ED] text-[#335F4F] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#687C72]">
                      Phone
                    </span>
                    <span className="font-medium text-[#202E27]">
                      {info.phone}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5F5EC] text-[#287A4F] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#687C72]">
                      WhatsApp
                    </span>
                    <span className="font-medium text-[#202E27]">
                      {info.whatsapp}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F6EFEB] text-[#865135] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#687C72]">
                      Email
                    </span>
                    <span className="font-medium text-[#202E27]">
                      {info.email}
                    </span>
                  </div>
                </div>

                {/* Clinic Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F1EFF7] text-[#55477B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#687C72]">
                      Clinic Address
                    </span>
                    <span className="font-medium text-[#202E27]">
                      {info.clinicAddress}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF1E8] text-[#876326] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#687C72]">
                      Working Hours
                    </span>
                    <span className="font-medium text-[#202E27]">
                      {info.workingHours}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons: WhatsApp, Call, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-[#EDE6DC]">
                <a
                  href={isPlaceholder(info.whatsapp) ? '#contact' : `https://wa.me/${formatTel(info.whatsapp)}`}
                  target={isPlaceholder(info.whatsapp) ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold shadow-2xs transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={isPlaceholder(info.phone) ? '#contact' : `tel:${formatTel(info.phone)}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#3F6F5E] hover:bg-[#31574A] text-white text-xs font-semibold shadow-2xs transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Clinic</span>
                </a>

                <a
                  href={isPlaceholder(info.email) ? '#contact' : `mailto:${info.email}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#D5CDC1] bg-white text-[#303E36] hover:bg-[#F2ECE3] text-xs font-semibold transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#3F6F5E]" />
                  <span>Send Email</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Location Card Placeholder */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DFD2] shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-[#1F2924] font-heading flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#3F6F5E]" />
                    Clinic Location & Accessibility
                  </h4>
                  <span className="text-[11px] text-[#697B72] bg-[#FAF7F2] px-2.5 py-1 rounded-md">
                    In-Person Consultations
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4F5E57] mb-5">
                  Our clinic is purposefully designed with calm lighting, sensory-mindful rooms, and child-safe materials to promote focus and comfort.
                </p>

                {/* Google Maps Visual Interactive Mockup */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E2DAD0] bg-[#E9ECE9] aspect-[16/10] flex items-center justify-center text-center p-6">
                  {/* Stylized map grid aesthetic */}
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3F6F5E_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  <div className="relative z-10 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-sm border border-[#E0D8CB] max-w-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F3EE] text-[#3F6F5E] flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-5 h-5 animate-bounce" />
                    </div>
                    <p className="text-xs font-bold text-[#1F2A25]">Blooming Words Clinic</p>
                    <p className="text-[11px] text-[#55675F] mt-0.5">{info.clinicAddress}</p>
                    <div className="mt-3 pt-2 border-t border-[#F0EAE1]">
                      <span className="text-[10px] text-[#6E8077] font-medium">
                        Directions & appointments available upon booking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note about parking & teletherapy alternative */}
              <div className="mt-5 pt-4 border-t border-[#F2EDE5] flex items-center justify-between text-xs text-[#5D6F66]">
                <span>✓ Dedicated parking & elevator access</span>
                <span>✓ Online therapy also available</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
