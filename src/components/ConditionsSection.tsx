import React, { useState } from 'react';
import { conditionsList } from '../data/clinicData';
import { MessageSquare, ArrowRight, CheckCircle, Info } from 'lucide-react';

interface ConditionsSectionProps {
  onTalkToUs: () => void;
  onSelectCondition: (serviceId: string) => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({
  onTalkToUs,
  onSelectCondition,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Speech', 'Language', 'Fluency & Voice', 'Developmental', 'Neuro & Adults'];

  const filteredConditions = conditionsList.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="conditions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#EAF2ED] px-3.5 py-1 rounded-full">
            Clinical Focus Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2723] mt-3 mb-4 font-heading">
            What Can We Help With?
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D55] leading-relaxed">
            We work with families, children, and adults facing diverse communication concerns. Explore common areas where clinical guidance can make a difference.
          </p>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2A5243] text-white'
                    : 'bg-[#F5F2EA] text-[#48564F] hover:bg-[#ECE6DB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredConditions.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E9E2D7] hover:border-[#BED6C9] hover:bg-white transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#366150] bg-[#E2ECE6] px-2 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#3F6F5E] opacity-70 group-hover:opacity-100" />
                </div>
                <h3 className="text-base font-bold text-[#1F2A25] mb-2 font-heading leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-[#52635B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => onSelectCondition(item.recommendedServiceId)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#325A4B] group-hover:text-[#214336] transition-colors cursor-pointer pt-2 border-t border-[#EDE6DC]"
              >
                <span>View Recommended Therapy</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Not sure box + Responsible medical note */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-[#F5F9F6] border border-[#CFE4D7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#DCEEE3] text-[#2F5A49] flex items-center justify-center flex-shrink-0 mt-1">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1E2924] font-heading">
                Not sure which service is right for you?
              </h4>
              <p className="text-xs sm:text-sm text-[#495B53] mt-1 max-w-2xl">
                Every individual's communication profile is unique. Reach out to discuss your observations, and we will guide you toward the most appropriate starting step.
              </p>
            </div>
          </div>

          <button
            onClick={onTalkToUs}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3F6F5E] hover:bg-[#30584A] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Talk to Us</span>
          </button>
        </div>

        {/* Responsible Medical Disclaimer Note */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#6E7E76] text-center">
          <Info className="w-3.5 h-3.5 text-[#86978F] flex-shrink-0" />
          <span>
            Therapy plans and outcomes are individualized. We do not claim that every communication condition can be cured or guaranteed to improve.
          </span>
        </div>

      </div>
    </section>
  );
};
