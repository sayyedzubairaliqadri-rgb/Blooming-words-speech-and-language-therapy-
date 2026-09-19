import React from 'react';
import { Baby, Sparkles, UserCheck, ArrowRight, Check } from 'lucide-react';

interface QuickAudienceProps {
  onSelectAudience: (audience: 'children' | 'teens' | 'adults') => void;
}

export const QuickAudience: React.FC<QuickAudienceProps> = ({ onSelectAudience }) => {
  const audienceCards = [
    {
      id: 'children' as const,
      title: 'Children',
      subtitle: 'Early Years & School Age',
      description: 'Speech, language, communication and developmental support for children.',
      highlights: ['Speech delays & first words', 'Clear pronunciation & sounds', 'Play-based language growth', 'Parent carryover guidance'],
      buttonText: "Explore Children's Therapy",
      bgClass: 'bg-[#F4F9F6] border-[#D4E6DC]',
      badgeBg: 'bg-[#E2EFE8] text-[#2A5745]',
      icon: Baby,
      iconColor: 'text-[#366353]',
      iconBg: 'bg-[#E3EFE9]',
    },
    {
      id: 'teens' as const,
      title: 'Teens',
      subtitle: 'Adolescents & Young Adults',
      description: 'Support for communication, fluency, pronunciation and confidence.',
      highlights: ['Fluency & stuttering tools', 'Social communication & pragmatics', 'Classroom presentation confidence', 'Self-advocacy & expression'],
      buttonText: 'Explore Teen Support',
      bgClass: 'bg-[#FCF7F3] border-[#EADBD1]',
      badgeBg: 'bg-[#F7E7DC] text-[#784628]',
      icon: Sparkles,
      iconColor: 'text-[#8E5131]',
      iconBg: 'bg-[#F9ECE3]',
    },
    {
      id: 'adults' as const,
      title: 'Adults',
      subtitle: 'Professional & Clinical Support',
      description: 'Support for speech, language, voice and communication difficulties.',
      highlights: ['Voice projection & fatigue reduction', 'Stuttering & speech clarity', 'Post-stroke/neuro communication', 'Workplace speaking confidence'],
      buttonText: 'Explore Adult Therapy',
      bgClass: 'bg-[#F6F5FA] border-[#DDD8EC]',
      badgeBg: 'bg-[#ECE8F7] text-[#55477B]',
      icon: UserCheck,
      iconColor: 'text-[#5C4F82]',
      iconBg: 'bg-[#EDEAF7]',
    },
  ];

  return (
    <section id="who-we-help" className="py-16 bg-[#FAF7F2] border-y border-[#EDE6DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#477060] bg-[#E7F0EB] px-3 py-1 rounded-full">
            Who We Help
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2723] mt-3 mb-3 font-heading">
            How Can We Help?
          </h2>
          <p className="text-sm sm:text-base text-[#56655E]">
            Tailored speech, language, and communication guidance designed around the unique developmental and life stage of every individual.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audienceCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`relative rounded-2xl p-6 sm:p-7 border ${card.bgClass} flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div>
                  {/* Top Bar: Icon + Subtitle */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center shadow-2xs`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${card.badgeBg}`}>
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-xl font-bold text-[#1E2924] mb-2 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4C5B54] mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#3E4D46]">
                    {card.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#3F6F5E] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <button
                  id={`audience-btn-${card.id}`}
                  onClick={() => onSelectAudience(card.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#24332D] text-sm font-semibold border border-[#D8D1C5] shadow-2xs transition-all duration-200 cursor-pointer active:scale-[0.99] group"
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-4 h-4 text-[#4B7362] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
