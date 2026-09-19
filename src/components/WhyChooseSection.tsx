import React from 'react';
import { whyChooseReasons } from '../data/clinicData';
import {
  UserCheck,
  Smile,
  FileCheck,
  Target,
  TrendingUp,
  HeartHandshake,
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return UserCheck;
      case 'Smile':
        return Smile;
      case 'FileCheck':
        return FileCheck;
      case 'Target':
        return Target;
      case 'TrendingUp':
        return TrendingUp;
      case 'HeartHandshake':
        return HeartHandshake;
      default:
        return UserCheck;
    }
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-y border-[#EDE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
            Our Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mt-3 mb-4 font-heading">
            Why Families Choose Blooming Words
          </h2>
          <p className="text-sm sm:text-base text-[#4F5E57] leading-relaxed">
            Our clinic is built on clinical integrity, warmth, and transparent collaboration with clients and their loved ones.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseReasons.map((reason, idx) => {
            const Icon = getIcon(reason.iconName);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#E7DFD2] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3EF] text-[#336151] flex items-center justify-center mb-5 border border-[#D5E6DE]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2A25] mb-2 font-heading">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
