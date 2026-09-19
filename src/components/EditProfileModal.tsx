import React, { useState } from 'react';
import { ClinicVerifiedInfo } from '../types';
import { X, Save, ShieldAlert, Check } from 'lucide-react';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: ClinicVerifiedInfo;
  onSave: (updated: ClinicVerifiedInfo) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  info,
  onSave,
}) => {
  const [formData, setFormData] = useState<ClinicVerifiedInfo>({ ...info });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5DDD0] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FAF7F2] border-b border-[#E8E1D5] px-6 py-4 flex items-center justify-between">
          <div>
            <h3 id="edit-profile-title" className="text-lg font-bold text-[#1E2823] font-heading">
              Update Verified Clinic & Therapist Information
            </h3>
            <p className="text-xs text-[#596961]">
              Easily update verified qualifications, clinic contacts, and areas of practice.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#586860] hover:bg-[#ECE5DA] hover:text-[#1E2823] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-sm text-[#242E28]">
          <div className="p-3 bg-[#F2F7F4] border border-[#CFE1D6] rounded-xl flex items-start gap-2.5 text-xs text-[#315747]">
            <ShieldAlert className="w-4 h-4 text-[#3F6F5E] flex-shrink-0 mt-0.5" />
            <span>
              Per healthcare standards, only enter verified, official credentials and contact numbers.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#48574F] mb-1">
                Therapist Full Name
              </label>
              <input
                type="text"
                name="therapistName"
                value={formData.therapistName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#48574F] mb-1">
                Professional Title
              </label>
              <input
                type="text"
                name="professionalTitle"
                value={formData.professionalTitle}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#48574F] mb-1">
              Qualifications & Credentials
            </label>
            <input
              type="text"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              placeholder="e.g. Master of Science in Speech-Language Pathology"
              className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#48574F] mb-1">
              Clinical Experience
            </label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. Clinical speech-language therapy in pediatric and adult communication care"
              className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#48574F] mb-1">
              Special Interests / Focus Areas
            </label>
            <input
              type="text"
              name="specialInterests"
              value={formData.specialInterests}
              onChange={handleChange}
              placeholder="e.g. Early language delay, articulation, fluency & neurodiversity-affirming communication"
              className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#48574F] mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 (555) 234-5678"
                className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#48574F] mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="e.g. +1 (555) 234-5678"
                className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#48574F] mb-1">
              Clinic Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. contact@bloomingwords.com"
              className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#48574F] mb-1">
              Clinic Address
            </label>
            <input
              type="text"
              name="clinicAddress"
              value={formData.clinicAddress}
              onChange={handleChange}
              placeholder="e.g. Suite 402, Wellness Medical Pavilion"
              className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#48574F] mb-1">
              Working Hours
            </label>
            <input
              type="text"
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              placeholder="e.g. Monday – Saturday: 9:00 AM – 6:00 PM"
              className="w-full px-3 py-2 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
            />
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-[#D5CDC1] text-xs font-semibold text-[#495850] hover:bg-[#F0EAE1]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#3F6F5E] hover:bg-[#32584B] text-white text-xs font-semibold transition-all shadow-xs"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Verified Information</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
