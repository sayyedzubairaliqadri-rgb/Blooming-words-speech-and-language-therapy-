import React from 'react';
import { UserCheck, Sparkles, Target, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const featureCards = [
    {
      title: 'Personalized Care',
      description: 'Therapy plans designed around individual communication needs, strengths, and personal goals.',
      icon: UserCheck,
      bgColor: 'bg-[#F2F7F4]',
      iconColor: 'text-[#3B6A5A]',
    },
    {
      title: 'Supportive Environment',
      description: 'A welcoming, empathetic space where clients of all ages feel comfortable learning and expressing themselves.',
      icon: Sparkles,
      bgColor: 'bg-[#FCF6F2]',
      iconColor: 'text-[#8A5133]',
    },
    {
      title: 'Goal-Focused Therapy',
      description: 'Regular monitoring and meaningful, real-world activities designed to support functional, lasting communication.',
      icon: Target,
      bgColor: 'bg-[#F4F3F8]',
      iconColor: 'text-[#594C7D]',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2ED] text-[#2F5848] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#3F6F5E]" />
            About Blooming Words
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2723] tracking-tight mb-6 font-heading">
            Where Communication Begins to Bloom
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#47574F] leading-relaxed">
            <p>
              <strong>Blooming Words Speech and Language Therapy</strong> is dedicated to helping individuals develop meaningful communication skills in a supportive, encouraging, and clinically sound environment.
            </p>
            <p className="text-sm sm:text-base text-[#56655D]">
              Every person communicates differently. Our therapy approach focuses on understanding individual needs, setting meaningful goals, and creating personalized therapy plans that make progress engaging, sustainable, and achievable.
            </p>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-7 ${card.bgColor} border border-[#E9E2D8] transition-all duration-300 hover:shadow-xs`}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-2xs flex items-center justify-center mb-5">
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#202B26] mb-2.5 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-[#4F5E56] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy Callout Quote */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#EBE3D7] text-center max-w-4xl mx-auto">
          <p className="font-editorial text-lg sm:text-xl md:text-2xl italic text-[#2D3934] leading-relaxed">
            “Communication is more than just words—it is the bridge to human connection, self-advocacy, and lifelong confidence.”
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#53655D]">
            <span>Blooming Words Philosophy</span>
            <span>•</span>
            <span>Ashna Jahan</span>
          </div>
        </div>

      </div>
    </section>
  );
};
