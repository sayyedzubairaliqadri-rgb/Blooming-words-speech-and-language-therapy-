import React from 'react';
import { MapPin, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';

interface TherapyModesSectionProps {
  onSelectMode: (mode: 'in-person' | 'online') => void;
}

export const TherapyModesSection: React.FC<TherapyModesSectionProps> = ({ onSelectMode }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#EAF2ED] px-3.5 py-1 rounded-full">
            Flexible Care Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2723] mt-3 mb-4 font-heading">
            Flexible Therapy Options
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D55] leading-relaxed">
            Choose the format that best fits your family’s routine, location, and clinical requirements.
          </p>
        </div>

        {/* 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: In-Person */}
          <div className="rounded-3xl p-8 bg-[#FAF8F5] border border-[#E8E1D5] flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F2ED] text-[#335F4F] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2924] mb-2 font-heading">
                In-Person Therapy
              </h3>
              <p className="text-sm text-[#4E5E56] mb-6 leading-relaxed">
                Professional therapy sessions in a welcoming, sensory-considerate clinic environment.
              </p>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#3E4E46]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6F5E] flex-shrink-0 mt-0.5" />
                  <span>Hands-on clinical materials, toys, and tactile communication tools</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6F5E] flex-shrink-0 mt-0.5" />
                  <span>Direct parent coaching inside a calm, dedicated therapy space</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6F5E] flex-shrink-0 mt-0.5" />
                  <span>Ideal for young toddlers and speech sound placement guidance</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectMode('in-person')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-[#F4EFE6] text-[#24332D] text-sm font-semibold border border-[#D8D0C3] shadow-2xs transition-all cursor-pointer active:scale-98"
            >
              <span>Choose In-Person Sessions</span>
              <ArrowRight className="w-4 h-4 text-[#3F6F5E]" />
            </button>
          </div>

          {/* Card 2: Online Teletherapy */}
          <div className="rounded-3xl p-8 bg-[#F6F5FA] border border-[#DDD8EC] flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EDEAF7] text-[#55477B] flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2924] mb-2 font-heading">
                Online Therapy
              </h3>
              <p className="text-sm text-[#4E5E56] mb-6 leading-relaxed">
                Convenient sessions for clients who prefer remote support, subject to clinical suitability.
              </p>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#3E4E46]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#55477B] flex-shrink-0 mt-0.5" />
                  <span>Access quality therapy from the comfort of home or school</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#55477B] flex-shrink-0 mt-0.5" />
                  <span>Engaging digital visual activities, games, and screen sharing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#55477B] flex-shrink-0 mt-0.5" />
                  <span>Effective for fluency, teen support, adult therapy, and parent coaching</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectMode('online')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-[#F2EDF8] text-[#2F2445] text-sm font-semibold border border-[#D5CFE6] shadow-2xs transition-all cursor-pointer active:scale-98"
            >
              <span>Choose Online Teletherapy</span>
              <ArrowRight className="w-4 h-4 text-[#55477B]" />
            </button>
          </div>

        </div>

        {/* Bottom CTA for guidance */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#5B6D63] mb-3">
            Not sure whether in-person or online therapy is the most clinically suitable choice?
          </p>
          <button
            onClick={() => onSelectMode('in-person')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#325A4B] hover:text-[#1F3E32] underline underline-offset-4 cursor-pointer"
          >
            <span>Find the Right Option in Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
