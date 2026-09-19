import React, { useState } from 'react';
import { Star, MessageSquarePlus, X, Send, Check } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      quote: '[Add verified client testimonial here.]',
      clientLabel: 'Verified Parent',
      serviceCategory: 'Child Speech Therapy',
    },
    {
      id: 2,
      quote: '[Add verified client testimonial here.]',
      clientLabel: 'Verified Adult Client',
      serviceCategory: 'Fluency & Stuttering Support',
    },
    {
      id: 3,
      quote: '[Add verified client testimonial here.]',
      clientLabel: 'Verified Family Member',
      serviceCategory: 'Social Communication Therapy',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    relation: 'Parent / Family Member',
    testimonialText: '',
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSuccess(true);
    setTimeout(() => {
      setFeedbackSuccess(false);
      setIsModalOpen(false);
      setFeedbackData({ name: '', relation: 'Parent / Family Member', testimonialText: '' });
    }, 1200);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#FAF7F2] border-t border-[#EDE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mt-3 mb-4 font-heading">
            What Families Say
          </h2>
          <p className="text-sm sm:text-base text-[#4F5E57] leading-relaxed">
            Authentic reflections from families and individuals navigating their communication journey.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#E7DFD2] shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#E5A038] mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Editable placeholder text strictly following guidelines */}
                <p className="font-editorial italic text-base sm:text-lg text-[#324039] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE2] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#24332D]">{item.clientLabel}</span>
                <span className="text-[#65786F] bg-[#FAF7F2] px-2.5 py-1 rounded-md">
                  {item.serviceCategory}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Experience Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F4EFE7] border border-[#D5CDC1] text-xs sm:text-sm font-semibold text-[#2C3B34] shadow-2xs transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#3F6F5E]" />
            <span>Share Your Experience</span>
          </button>
        </div>

      </div>

      {/* Share Experience Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5DCD0]">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D6] mb-5">
              <h3 className="text-lg font-bold text-[#1E2823] font-heading">
                Share Verified Feedback
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-[#63756C] hover:bg-[#F2EDE4] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedbackSuccess ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E5F2EB] text-[#3F6F5E] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#1E2823]">Thank you for sharing!</h4>
                <p className="text-xs text-[#52645B] mt-1">
                  Your feedback helps us continuously support families with warmth and excellence.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-[#3C4A42] mb-1">
                    Your Name or Initials
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackData.name}
                    onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                    placeholder="e.g. Parent of Liam (or M.J.)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3C4A42] mb-1">
                    Relationship to Client
                  </label>
                  <select
                    value={feedbackData.relation}
                    onChange={(e) => setFeedbackData({ ...feedbackData, relation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  >
                    <option value="Parent / Family Member">Parent / Family Member</option>
                    <option value="Adult Client">Adult Client</option>
                    <option value="Caregiver / Guardian">Caregiver / Guardian</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3C4A42] mb-1">
                    Your Reflections or Experience
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={feedbackData.testimonialText}
                    onChange={(e) => setFeedbackData({ ...feedbackData, testimonialText: e.target.value })}
                    placeholder="Share how therapy supported communication goals and confidence..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-[#D5CDC1] text-xs font-semibold text-[#516159] hover:bg-[#F2ECE3]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#3F6F5E] text-white text-xs font-semibold hover:bg-[#32584A]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Feedback</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
