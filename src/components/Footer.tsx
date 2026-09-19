import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { ClinicVerifiedInfo } from '../types';
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  info: ClinicVerifiedInfo;
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ info, onNavigate }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  return (
    <footer className="bg-[#202925] text-[#DCE6E1] pt-16 pb-24 sm:pb-16 border-t border-[#313E38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#35433C]">
          
          {/* Column 1: Brand & Taglines (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" textColor="text-white" />
            
            <p className="text-sm font-editorial italic text-[#B6CCC2] leading-relaxed">
              “Helping Every Voice Bloom with Confidence”
            </p>
            
            <p className="text-xs text-[#9BB1A6] leading-relaxed">
              Dedicated speech and language therapy by Ashna Jahan, Speech & Language Therapist. Delivering compassionate, personalized communication support for children, teens, and adults.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7EA695]">
                Speak • Connect • Communicate • Bloom
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#social-instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#2A3731] hover:bg-[#3F6F5E] text-[#B8CDC3] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social-facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#2A3731] hover:bg-[#3F6F5E] text-[#B8CDC3] hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social-youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#2A3731] hover:bg-[#3F6F5E] text-[#B8CDC3] hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#social-linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#2A3731] hover:bg-[#3F6F5E] text-[#B8CDC3] hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8BEB3]">
              <li>
                <button
                  onClick={() => onNavigate('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#therapist')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Therapist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#A8BEB3]">
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Speech Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Language Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Fluency Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Pronunciation & Articulation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Social Communication
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Adult Communication
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Contact Clinic
            </h4>
            <ul className="space-y-3 text-xs text-[#A8BEB3]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#7BA694] flex-shrink-0 mt-0.5" />
                <span>{info.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#7BA694] flex-shrink-0 mt-0.5" />
                <span>{info.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#7BA694] flex-shrink-0 mt-0.5" />
                <span>{info.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#7BA694] flex-shrink-0 mt-0.5" />
                <span>{info.clinicAddress}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9F94]">
          <p>© 2026 Blooming Words Speech and Language Therapy. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal Popup */}
      {activeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white text-[#222E27] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3DBD0]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D5] mb-4">
              <h3 className="text-lg font-bold font-heading">
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms & Conditions'}
                {activeModal === 'disclaimer' && 'Clinical & Medical Disclaimer'}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-[#5F7167] hover:bg-[#EFE9DF]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#47574F] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    Blooming Words Speech and Language Therapy strictly protects client privacy. Any information submitted via consultation forms or screening questionnaires is handled confidentially and utilized solely for clinical assessment and scheduling.
                  </p>
                  <p>
                    We do not sell, rent, or share personal contact information or clinical observations with third-party marketers.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>
                    Online consultation requests do not establish a formal therapist-client relationship until an initial clinical intake is conducted and mutually agreed upon.
                  </p>
                  <p>
                    Appointments scheduled online are subject to therapist availability and schedule verification. Cancellations require advance notice to respect reserved clinical hours.
                  </p>
                </>
              )}

              {activeModal === 'disclaimer' && (
                <>
                  <p>
                    The information provided on this website, including services overviews, clinical focus descriptions, and the self-screening tool, is intended for general informational and educational purposes only.
                  </p>
                  <p>
                    It does not constitute medical advice or replace an individualized formal assessment conducted by a qualified speech and language therapist or medical provider. Therapy outcomes are individualized, and no guaranteed results are implied.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[#E8E1D5] text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-[#3F6F5E] text-white text-xs font-semibold hover:bg-[#32584A]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
