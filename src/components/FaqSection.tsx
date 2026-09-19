import React, { useState } from 'react';
import { faqItems } from '../data/clinicData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#EAF2ED] px-3.5 py-1 rounded-full">
            Questions & Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mt-3 mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D55] leading-relaxed">
            Clear, reassuring answers about speech-language evaluation, therapy sessions, and what to expect.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#3F6F5E] bg-[#FAF8F5] shadow-xs'
                    : 'border-[#EAE3D6] bg-[#FCFBF8] hover:border-[#D0C7B8]'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1E2A24] font-heading pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#3F6F5E] text-white rotate-180'
                        : 'bg-[#EDE7DD] text-[#55655C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#45554C] leading-relaxed border-t border-[#EDE7DD] mt-1 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have a question banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#1F2924] font-heading">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-[#52635B] mt-0.5">
              We are glad to talk through your observations and provide honest clinical clarity.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#D5CDC1] text-xs font-semibold text-[#293B33] hover:bg-[#F2EDE5] transition-colors cursor-pointer"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3F6F5E]" />
          </button>
        </div>

      </div>
    </section>
  );
};
