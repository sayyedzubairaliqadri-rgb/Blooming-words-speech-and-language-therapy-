import React, { useState } from 'react';
import { HelpCircle, CheckCircle, AlertCircle, ArrowRight, RotateCcw, ShieldAlert, Sparkles } from 'lucide-react';

interface ScreeningQuickCheckProps {
  onProceedToBooking: (recommendedFocus: string) => void;
}

export const ScreeningQuickCheck: React.FC<ScreeningQuickCheckProps> = ({ onProceedToBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [ageGroup, setAgeGroup] = useState<'child' | 'teen' | 'adult'>('child');

  const questionsByAge = {
    child: [
      {
        id: 1,
        title: 'Clarity & Pronunciation',
        question: 'Are familiar family members or unfamiliar listeners often asking the child to repeat words or having trouble understanding them?',
      },
      {
        id: 2,
        title: 'Vocabulary & Sentences',
        question: 'Does the child struggle to find words, form age-appropriate sentences, or explain what happened during their day?',
      },
      {
        id: 3,
        title: 'Comprehension & Directions',
        question: 'Does the child appear to have difficulty following multi-step spoken instructions or understanding everyday questions?',
      },
      {
        id: 4,
        title: 'Speech Smoothness & Fluency',
        question: 'Have you noticed frequent sound repetitions (e.g., "b-b-ball"), prolongations, or tension in their face when trying to speak?',
      },
    ],
    teen: [
      {
        id: 1,
        title: 'Confidence in Conversation',
        question: 'Does the teenager hold back from speaking in class, social groups, or presentations due to fear of stuttering or sounding unclear?',
      },
      {
        id: 2,
        title: 'Speech Fluency',
        question: 'Do you notice speech blocks, syllable repetitions, or feeling out of breath when talking under pressure?',
      },
      {
        id: 3,
        title: 'Social Pragmatics',
        question: 'Is it challenging to pick up on social conversational cues, maintain peer friendships, or interpret sarcasm and nonverbal signals?',
      },
      {
        id: 4,
        title: 'Pronunciation Habit',
        question: 'Are specific consonant sounds (like "r", "s", or "th") still pronounced indistinctly?',
      },
    ],
    adult: [
      {
        id: 1,
        title: 'Workplace & Daily Communication',
        question: 'Do you feel that fatigue, unclear speech, or vocal strain impacts your comfort speaking at work or in personal conversations?',
      },
      {
        id: 2,
        title: 'Fluency & Stuttering',
        question: 'Do you experience involuntary hesitations, blocks, or word repetitions that cause communication apprehension?',
      },
      {
        id: 3,
        title: 'Voice Quality & Comfort',
        question: 'Does your voice sound raspy, weak, or strained after brief periods of everyday talking?',
      },
      {
        id: 4,
        title: 'Cognitive-Communication or Word Retrieval',
        question: 'Do you find it difficult to retrieve familiar words, organize thoughts in discussion, or communicate comfortably after a health event?',
      },
    ],
  };

  const activeQuestions = questionsByAge[ageGroup];

  const handleSelectAnswer = (qId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
    if (step < activeQuestions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setStep(activeQuestions.length); // Result screen
    }
  };

  const resetCheck = () => {
    setStep(0);
    setAnswers({});
  };

  const positiveCount = Object.values(answers).filter((v) => v === 'yes' || v === 'often').length;
  const sometimesCount = Object.values(answers).filter((v) => v === 'sometimes').length;

  return (
    <section id="screening-check" className="py-20 bg-white border-t border-[#EAE3D6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner / Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#EAF2ED] px-3.5 py-1 rounded-full">
            Self-Screening Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mt-3 mb-3 font-heading">
            Wondering If Speech & Language Support Could Help?
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D55] leading-relaxed">
            Answer a few simple questions to better understand whether a professional consultation may be helpful.
          </p>

          {!isOpen && (
            <button
              id="start-quick-check-btn"
              onClick={() => setIsOpen(true)}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3F6F5E] hover:bg-[#31574A] text-white text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Quick Check</span>
            </button>
          )}
        </div>

        {/* Interactive Screening Box */}
        {isOpen && (
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E6DDD0] shadow-sm animate-in fade-in duration-300">
            
            {/* Disclaimer Callout (MANDATORY) */}
            <div className="mb-6 p-3.5 rounded-xl bg-[#F6F0E6] border border-[#E4D7C3] flex items-start gap-3 text-xs text-[#5D5039]">
              <ShieldAlert className="w-4 h-4 text-[#8C7A53] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important Clinical Notice:</strong> This screening is for informational purposes only and does not replace a professional assessment or diagnosis.
              </p>
            </div>

            {/* Age Group Selector when in progress */}
            {step < activeQuestions.length && (
              <div className="flex items-center justify-between flex-wrap gap-3 pb-4 mb-6 border-b border-[#E8E1D5]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5B6D64]">
                  <span>Screening for:</span>
                  <div className="flex gap-1">
                    {(['child', 'teen', 'adult'] as const).map((grp) => (
                      <button
                        key={grp}
                        type="button"
                        onClick={() => {
                          setAgeGroup(grp);
                          resetCheck();
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs capitalize transition-colors cursor-pointer ${
                          ageGroup === grp
                            ? 'bg-[#3F6F5E] text-white'
                            : 'bg-white text-[#4A5951] border border-[#D8D0C3] hover:bg-[#EFE9DF]'
                        }`}
                      >
                        {grp === 'child' ? 'Child' : grp === 'teen' ? 'Teen' : 'Adult'}
                      </button>
                    ))}
                  </div>
                </div>

                <span className="text-xs text-[#6A7C73] font-medium">
                  Question {step + 1} of {activeQuestions.length}
                </span>
              </div>
            )}

            {/* Question Screen */}
            {step < activeQuestions.length ? (
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#345F4F]">
                    {activeQuestions[step].title}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E2924] mt-1 font-heading">
                    {activeQuestions[step].question}
                  </h3>
                </div>

                {/* Response Options */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => handleSelectAnswer(activeQuestions[step].id, 'yes')}
                    className="p-3.5 rounded-xl border border-[#D5CDC0] bg-white hover:bg-[#EAF2ED] hover:border-[#3F6F5E] text-sm font-semibold text-[#25352E] text-center transition-all cursor-pointer"
                  >
                    Yes, Frequently
                  </button>
                  <button
                    onClick={() => handleSelectAnswer(activeQuestions[step].id, 'sometimes')}
                    className="p-3.5 rounded-xl border border-[#D5CDC0] bg-white hover:bg-[#FCF6F0] hover:border-[#8A5133] text-sm font-semibold text-[#25352E] text-center transition-all cursor-pointer"
                  >
                    Sometimes / Occasionally
                  </button>
                  <button
                    onClick={() => handleSelectAnswer(activeQuestions[step].id, 'no')}
                    className="p-3.5 rounded-xl border border-[#D5CDC0] bg-white hover:bg-[#F2ECE3] text-sm font-semibold text-[#25352E] text-center transition-all cursor-pointer"
                  >
                    No / Not Observed
                  </button>
                </div>
              </div>
            ) : (
              /* Results Screen */
              <div className="py-4 text-center space-y-5 animate-in fade-in">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F2ED] text-[#335F4F] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#1E2924] font-heading">
                  Quick Check Summary
                </h3>

                <p className="text-sm text-[#4A5B53] max-w-lg mx-auto leading-relaxed">
                  {positiveCount >= 2 || sometimesCount >= 2 ? (
                    <span>
                      Based on your responses, an initial speech and language consultation may provide valuable insight, reassurance, and practical communication strategies.
                    </span>
                  ) : (
                    <span>
                      While your responses suggest fewer concerns at this time, if you or your family ever feel uncertain about speech development, a professional consultation is always available for peace of mind.
                    </span>
                  )}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => onProceedToBooking(`Initial Screening Consultation (${ageGroup})`)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#3F6F5E] hover:bg-[#31574A] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Discuss With Ashna Jahan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={resetCheck}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D5CDC1] bg-white text-xs sm:text-sm font-medium text-[#485850] hover:bg-[#F2ECE3] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Check</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
