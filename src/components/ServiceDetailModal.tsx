import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookForService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookForService,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5DDD0] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#F8F5EE] border-b border-[#E8E1D5] px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#356150] bg-[#E2EFE8] px-2.5 py-0.5 rounded-md">
                Clinical Service
              </span>
              <span className="text-xs text-[#62736A]">
                Suitable for: {service.audience.join(', ')}
              </span>
            </div>
            <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-[#1F2924] font-heading">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#56655E] hover:bg-[#ECE5DA] hover:text-[#1F2924] transition-colors"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#576960] mb-2">
              Overview & Clinical Focus
            </h4>
            <p className="text-sm sm:text-base text-[#3A4942] leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="p-4 rounded-2xl bg-[#F4F9F6] border border-[#D5E8DD]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E5848] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              What We Focus On In Therapy
            </h4>
            <ul className="space-y-2.5 text-sm text-[#34463E]">
              {service.keyFocusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6F5E] flex-shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signs or Indicators */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#576960] mb-3">
              Common Signs or Situations Where This Helps
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4E5D56]">
              {service.signsOrIndicators.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E0795F] mt-2 flex-shrink-0" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E9E1D5] text-xs text-[#5D6D65]">
            <p>
              * All therapy plans at Blooming Words are personalized after a comprehensive initial evaluation. No single timeline or generic workbook is used.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F2] border-t border-[#E8E1D5] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#D5CDC0] text-xs font-semibold text-[#48564F] hover:bg-[#ECE5DA] transition-colors"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookForService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#3F6F5E] text-white text-xs sm:text-sm font-semibold hover:bg-[#315A4C] shadow-xs transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
