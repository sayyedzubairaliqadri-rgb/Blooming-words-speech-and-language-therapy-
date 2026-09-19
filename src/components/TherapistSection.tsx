import React, { useState } from 'react';
import { ClinicVerifiedInfo } from '../types';
import therapistImg from '../assets/images/therapist_ashna_portrait_1789806693668.jpg';
import { Award, BookCheck, Sparkles, Heart, Edit3, Calendar, CheckCircle2 } from 'lucide-react';
import { EditProfileModal } from './EditProfileModal';

interface TherapistSectionProps {
  info: ClinicVerifiedInfo;
  onUpdateInfo: (updated: ClinicVerifiedInfo) => void;
  onBookClick: () => void;
}

export const TherapistSection: React.FC<TherapistSectionProps> = ({
  info,
  onUpdateInfo,
  onBookClick,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="therapist" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#EAF2ED] px-3.5 py-1 rounded-full">
            Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2723] mt-3 mb-3 font-heading">
            Meet Your Therapist
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D55]">
            Dedicated to helping every voice bloom through empathetic, evidence-informed speech and language therapy.
          </p>
        </div>

        {/* Profile Card Layout */}
        <div className="max-w-5xl mx-auto bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E9E2D7] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Portrait & Badges */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#ECE5DA]">
                <img
                  src={therapistImg}
                  alt={`Portrait of ${info.therapistName}, ${info.professionalTitle}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status pill */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1EB] text-[#295444] text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#3F6F5E]" />
                <span>Accepting New Clients</span>
              </div>

              {/* Edit verified fields quick button */}
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#52645B] hover:text-[#254B3D] underline underline-offset-4 cursor-pointer"
                title="Edit verified qualifications and clinical details"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Verified Details</span>
              </button>
            </div>

            {/* Right: Bio & Verified Fields */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2924] font-heading">
                    {info.therapistName}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#E2ECE6] text-[#2B5443]">
                    {info.professionalTitle}
                  </span>
                </div>

                <p className="text-sm font-medium text-[#486D5D] mb-6">
                  Blooming Words Speech & Language Therapy
                </p>

                {/* Bio placeholder */}
                <div className="space-y-3 text-sm sm:text-base text-[#3D4C44] leading-relaxed mb-6">
                  <p>
                    Ashna Jahan is dedicated to creating a supportive and personalized therapy experience where every client can develop communication skills at their own pace. Her approach focuses on understanding individual needs, building confidence and working toward meaningful communication goals.
                  </p>
                  {showFullBio && (
                    <p className="text-sm text-[#4E5E56] pt-2 border-t border-[#EDE6DC]">
                      At Blooming Words, Ashna believes that true communication milestones are achieved through trust, respectful partnership with families, and evidence-informed interventions designed for real-world functionality.
                    </p>
                  )}
                </div>

                {/* Verified Fields Display - Strictly Editable Placeholders */}
                <div className="space-y-3.5 bg-white rounded-2xl p-5 border border-[#E8E1D5] mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF2EE] text-[#335F4F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#63756C]">
                        Qualifications:
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#2A3730]">
                        {info.qualifications}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F7EFEA] text-[#814C2F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BookCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#63756C]">
                        Experience:
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#2A3730]">
                        {info.experience}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F2F0F9] text-[#5B4E80] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#63756C]">
                        Special Interests:
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#2A3730]">
                        {info.specialInterests}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="therapist-learn-more-btn"
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-xs sm:text-sm font-semibold text-[#3D4C44] hover:bg-[#F2EDE5] transition-colors cursor-pointer"
                >
                  {showFullBio ? 'Show Less' : 'Learn More About Ashna'}
                </button>

                <button
                  id="therapist-book-consult-btn"
                  onClick={onBookClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3F6F5E] hover:bg-[#31574A] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Ashna</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        info={info}
        onSave={onUpdateInfo}
      />
    </section>
  );
};
