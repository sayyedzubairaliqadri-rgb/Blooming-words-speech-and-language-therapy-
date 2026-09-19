import React from 'react';
import { approachSteps } from '../data/clinicData';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface OurApproachProps {
  onBookClick: () => void;
}

export const OurApproach: React.FC<OurApproachProps> = ({ onBookClick }) => {
  return (
    <section id="approach" className="py-20 bg-[#FAF7F2] border-t border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
            Our Care Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mt-3 mb-4 font-heading">
            A Personalized Approach to Every Communication Journey
          </h2>
          <p className="text-sm sm:text-base text-[#4F5E57] leading-relaxed">
            We follow a structured, collaborative, and evidence-informed path from your very first conversation to lasting communicative independence.
          </p>
        </div>

        {/* 5-Step Timeline Grid / Process */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#DFD6C7] -translate-y-12 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {approachSteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 border border-[#E7E0D3] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#EAF2ED] text-[#2C5948] font-bold text-sm flex items-center justify-center mb-5 border border-[#CFE1D6]">
                    {step.stepNumber}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1E2924] mb-2 font-heading">
                    {step.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm font-medium text-[#3A4B42] mb-3 leading-snug">
                    {step.summary}
                  </p>

                  {/* Detail text */}
                  <p className="text-xs text-[#5D6F66] leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F2ECE2] flex items-center gap-1.5 text-[11px] font-semibold text-[#3F6F5E]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Step {idx + 1} of 5</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Highlight Banner & CTA */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#396353] to-[#2B4E41] text-white p-8 sm:p-10 shadow-md text-center max-w-4xl mx-auto">
          <p className="font-editorial text-xl sm:text-2xl md:text-3xl italic text-[#F8F5EE] leading-relaxed mb-3">
            “Small steps can create meaningful changes. Let's help your communication bloom.”
          </p>
          <p className="text-xs sm:text-sm text-[#D1E4DB] max-w-xl mx-auto mb-6">
            Begin with a warm, supportive initial consultation to understand your goals and map out a clear path forward.
          </p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F9F6F0] text-[#244336] font-semibold text-sm sm:text-base shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#396353]" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 text-[#396353]" />
          </button>
        </div>

      </div>
    </section>
  );
};
