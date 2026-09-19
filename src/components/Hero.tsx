import React from 'react';
import { Calendar, ArrowRight, Sparkles, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/therapy_session_hero_1789806681558.jpg';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#F6F2EA] to-[#FAF7F2]">
      {/* Subtle organic background ambient blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E5EFEA] opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-[#FCECE3] opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Therapist highlight badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CDE1D6] text-[#2F5848] text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3F6F5E] animate-pulse" />
              <span>With <strong>Ashna Jahan</strong> • Speech & Language Therapist</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1F2723] tracking-tight leading-[1.15] mb-6 font-heading">
              Helping Every Voice <br className="hidden sm:inline" />
              <span className="text-[#366353] relative inline-block">
                Bloom with Confidence
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-3 text-[#D5E6DE] -z-10"
                  viewBox="0 0 260 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C65 2.5 195 2.5 257 8.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#47544E] max-w-2xl leading-relaxed mb-8">
              Personalized speech and language therapy designed to help children and adults communicate with greater confidence, clarity and connection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-book-cta"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3F6F5E] hover:bg-[#31584A] text-white font-medium shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98] text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <button
                id="hero-explore-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#D5CDC1] bg-white/80 hover:bg-white text-[#2B3933] font-medium transition-all duration-200 cursor-pointer text-sm sm:text-base shadow-2xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#5A6F64]" />
              </button>
            </div>

            {/* Small Trust Line */}
            <div className="pt-6 border-t border-[#E8E1D5] w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#4D5E55]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F6F5E]" />
                Personalized Care
              </span>
              <span className="hidden sm:inline text-[#C0B7A8]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F6F5E]" />
                Individual Goals
              </span>
              <span className="hidden sm:inline text-[#C0B7A8]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F6F5E]" />
                Supportive Therapy
              </span>
            </div>

          </div>

          {/* Right Column: Imagery & Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-3xl p-2 bg-white/70 backdrop-blur-sm border border-[#E8E1D5] shadow-md">
                <div className="overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/11] bg-[#ECE5DA]">
                  <img
                    src={heroImg}
                    alt="Ashna Jahan Speech and Language Therapist working with a child and family in a welcoming clinic setting"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  />
                </div>

                {/* Floating Micro-Badge on bottom-left */}
                <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-md border border-[#ECE5DA] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-[#3F6F5E]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#27322D]">Gentle & Child-Centered</p>
                    <p className="text-[11px] text-[#697970]">Play-based & individualized</p>
                  </div>
                </div>

                {/* Floating Micro-Badge on top-right */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 rounded-2xl py-2 px-3.5 shadow-sm border border-[#ECE5DA] items-center gap-2">
                  <Heart className="w-4 h-4 text-[#E37A61]" fill="#E37A61" />
                  <span className="text-xs font-medium text-[#303B36]">Supportive Family Guidance</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
