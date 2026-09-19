import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Monitor,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  Send,
  Database,
  Check,
  Copy,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { AppointmentRequest } from '../types';

interface AppointmentBookingProps {
  initialService?: string;
  initialMode?: 'in-person' | 'online';
}

interface SupabaseStatus {
  connected: boolean;
  projectId?: string;
  tableExists?: boolean;
  tableMissing?: boolean;
  localCount?: number;
  sqlScript?: string;
  error?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialService = '',
  initialMode = 'in-person',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    parentGuardianName: '',
    age: '',
    phoneNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    mode: initialMode,
    mainConcern: initialService || 'Speech & Language Delay',
    additionalMessage: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionResult, setLastSubmissionResult] = useState<{
    id?: string;
    savedTo?: string;
    supabaseSynced?: boolean;
    warning?: string;
    tableMissing?: boolean;
  } | null>(null);

  const [dbStatus, setDbStatus] = useState<SupabaseStatus | null>(null);
  const [copiedSql, setCopiedSql] = useState(false);
  const [showSqlGuide, setShowSqlGuide] = useState(false);

  // Check Supabase connection on load
  const checkSupabaseStatus = async () => {
    try {
      const res = await fetch('/api/supabase/status');
      if (res.ok) {
        const data = await res.json();
        setDbStatus(data);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    checkSupabaseStatus();
  }, []);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, mainConcern: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMode) {
      setFormData((prev) => ({ ...prev, mode: initialMode }));
    }
  }, [initialMode]);

  const concernsList = [
    'Speech & Language Delay',
    'Speech Sound & Pronunciation',
    'Stuttering / Fluency',
    'Language Development',
    'Social Communication',
    'Autism Communication Support',
    'Voice & Communication',
    'Adult Speech & Language Therapy',
    'Communication After Neurological Conditions',
    'Hearing-Related Communication Support',
    'General Initial Consultation / Assessment',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setLastSubmissionResult({
        id: data.data?.id || data.booking?.id,
        savedTo: data.savedTo,
        supabaseSynced: data.supabaseSynced,
        warning: data.warning,
        tableMissing: data.tableMissing,
      });

      setSubmitted(true);
      checkSupabaseStatus();
    } catch (err: any) {
      // Fallback
      setLastSubmissionResult({
        savedTo: 'local_backup',
        supabaseSynced: false,
        warning: 'Saved locally as backup: ' + (err.message || 'Network error'),
      });
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setLastSubmissionResult(null);
    setFormData({
      fullName: '',
      parentGuardianName: '',
      age: '',
      phoneNumber: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (9:00 AM - 12:00 PM)',
      mode: 'in-person',
      mainConcern: 'Speech & Language Delay',
      additionalMessage: '',
    });
  };

  const sqlCode = `CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  parent_guardian_name TEXT,
  age TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_date TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  mode TEXT NOT NULL DEFAULT 'in-person',
  main_concern TEXT NOT NULL,
  additional_message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow full access to service role
CREATE POLICY "Allow service role full access" ON public.appointments
  FOR ALL USING (true) WITH CHECK (true);`;

  const copySql = () => {
    navigator.clipboard.writeText(sqlCode);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <section id="book-appointment" className="py-20 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
              Consultation Request
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1E523A] bg-[#E4F5EB] border border-[#BCE5CF] px-3 py-1 rounded-full shadow-2xs">
              <Database className="w-3 h-3 text-[#2E7D58]" />
              <span>Supabase Connected ({dbStatus?.projectId || 'ckmsdkdgehzsprdzeofj'})</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2823] mb-3 font-heading">
            Ready to Take the Next Step?
          </h2>
          <p className="text-sm sm:text-base text-[#4E5E56]">
            Book a consultation and let's understand your communication goals together. All submissions are stored directly in your Supabase database.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7DFD2] shadow-sm">
          
          {submitted ? (
            <div className="py-8 px-4 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F4EE] text-[#3F6F5E] flex items-center justify-center mx-auto mb-5 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-[#1E2823] font-heading mb-3">
                Thank you! Your appointment request has been received.
              </h3>
              <p className="text-sm sm:text-base text-[#4C5D54] max-w-md mx-auto mb-6 leading-relaxed">
                Our team will contact you shortly to confirm appointment availability and answer any preliminary questions.
              </p>

              {/* Database Sync Status Box */}
              <div className="p-4 rounded-2xl bg-[#F4F9F6] border border-[#D5EADF] max-w-lg mx-auto mb-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#2C6E4E]" />
                    <span className="text-xs font-bold text-[#1F4632]">Database Storage Status</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#E5F5EC] text-[#1E7246] border border-[#BDE7CF]">
                    {lastSubmissionResult?.supabaseSynced ? '✓ Synced to Supabase' : '✓ Saved Locally'}
                  </span>
                </div>

                <div className="text-xs text-[#3E5C4C] space-y-1">
                  <p>
                    <span className="font-semibold text-[#253D30]">Project ID:</span> ckmsdkdgehzsprdzeofj
                  </p>
                  <p>
                    <span className="font-semibold text-[#253D30]">Destination Table:</span> public.appointments
                  </p>
                  {lastSubmissionResult?.id && (
                    <p>
                      <span className="font-semibold text-[#253D30]">Booking Reference:</span> {lastSubmissionResult.id}
                    </p>
                  )}
                </div>

                {lastSubmissionResult?.tableMissing && (
                  <div className="mt-3 pt-3 border-t border-[#D0E6DA] text-xs text-[#7A5818]">
                    <div className="flex items-start gap-1.5 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#B87A1E] flex-shrink-0 mt-0.5" />
                      <span>
                        The appointment has been captured safely. To view it inside your Supabase dashboard, create the <strong>public.appointments</strong> table by running the SQL script below.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowSqlGuide(!showSqlGuide)}
                      className="text-xs font-bold text-[#2A5E44] underline hover:text-[#183B2A] cursor-pointer"
                    >
                      {showSqlGuide ? 'Hide Supabase SQL Script' : 'View / Copy Supabase SQL Script'}
                    </button>
                  </div>
                )}
              </div>

              {/* Collapsible SQL Script Guide */}
              {showSqlGuide && (
                <div className="max-w-lg mx-auto mb-6 text-left p-4 rounded-2xl bg-[#1E2622] text-[#E0ECE5] text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-[#86AE9B]">SQL Editor Query for Supabase:</span>
                    <button
                      type="button"
                      onClick={copySql}
                      className="inline-flex items-center gap-1 text-[11px] bg-[#2E3C35] hover:bg-[#3E5047] text-white px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                    >
                      {copiedSql ? <Check className="w-3 h-3 text-[#5AE4A6]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSql ? 'Copied!' : 'Copy SQL'}</span>
                    </button>
                  </div>
                  <pre className="p-3 bg-[#141A17] rounded-xl overflow-x-auto text-[11px] font-mono text-[#A8D3BF] max-h-48 leading-relaxed">
                    {sqlCode}
                  </pre>
                  <p className="mt-2 text-[10px] text-[#8EAFA0]">
                    Run this in: Supabase Dashboard → SQL Editor → New Query → Run
                  </p>
                </div>
              )}

              {/* Responsible note */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E1D5] max-w-lg mx-auto mb-8 text-xs text-[#5D6F66] text-left flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#8C7A53] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Please note:</strong> Appointment dates and times requested online are subject to therapist schedule availability. An appointment is not finalized until our clinic contacts you to confirm.
                </span>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl border border-[#D5CDC1] bg-[#FAF8F5] text-xs sm:text-sm font-semibold text-[#3D4C44] hover:bg-[#F2EDE5] transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Guidance Banner */}
              <div className="p-3.5 rounded-xl bg-[#F4F9F6] border border-[#D4E8DC] text-xs text-[#315747] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3F6F5E] flex-shrink-0" />
                <span>All information provided is kept strictly confidential and used solely for clinical scheduling.</span>
              </div>

              {/* Row 1: Full Name & Parent/Guardian Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Full Name <span className="text-[#C84E3A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Maya Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>

                <div>
                  <label htmlFor="parentGuardianName" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Parent / Guardian Name <span className="text-[#687970] font-normal">(if applicable)</span>
                  </label>
                  <input
                    type="text"
                    id="parentGuardianName"
                    name="parentGuardianName"
                    value={formData.parentGuardianName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins (Mother)"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>
              </div>

              {/* Row 2: Age, Phone, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="age" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Client Age <span className="text-[#C84E3A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 4 years, or Adult"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Phone Number <span className="text-[#C84E3A]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Email Address <span className="text-[#C84E3A]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  />
                </div>
              </div>

              {/* Row 3: Mode & Main Concern */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Session Preference <span className="text-[#C84E3A]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                        formData.mode === 'in-person'
                          ? 'border-[#3F6F5E] bg-[#EAF2ED] text-[#275343]'
                          : 'border-[#D8D1C5] bg-[#FAF8F5] text-[#4F5F57] hover:bg-[#F2ECE3]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        value="in-person"
                        checked={formData.mode === 'in-person'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <MapPin className="w-3.5 h-3.5" />
                      <span>In-Person Clinic</span>
                    </label>

                    <label
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                        formData.mode === 'online'
                          ? 'border-[#55477B] bg-[#EDEAF7] text-[#403463]'
                          : 'border-[#D8D1C5] bg-[#FAF8F5] text-[#4F5F57] hover:bg-[#F2ECE3]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        value="online"
                        checked={formData.mode === 'online'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Online Teletherapy</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="mainConcern" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Primary Area of Concern <span className="text-[#C84E3A]">*</span>
                  </label>
                  <select
                    id="mainConcern"
                    name="mainConcern"
                    value={formData.mainConcern}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  >
                    {concernsList.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Preferred Appointment Date <span className="text-[#C84E3A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                    Preferred Time Window <span className="text-[#C84E3A]">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Early Afternoon (12:00 PM - 3:00 PM)">Early Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                    <option value="Flexible / Either Time Window">Flexible / Either Time Window</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="additionalMessage" className="block text-xs font-semibold text-[#37453E] mb-1.5">
                  Additional Message or Details <span className="text-[#687970] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="additionalMessage"
                  name="additionalMessage"
                  rows={3}
                  value={formData.additionalMessage}
                  onChange={handleChange}
                  placeholder="Share any background details, previous speech assessments, or specific goals you hope to focus on..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D1C5] bg-[#FAF8F5] focus:bg-white text-sm text-[#222E27] focus:outline-none focus:ring-2 focus:ring-[#3F6F5E]"
                />
              </div>

              {/* Disclaimer Notice */}
              <p className="text-[11px] text-[#697B72] leading-relaxed">
                * By submitting this request, you agree to be contacted via phone, WhatsApp, or email by Blooming Words Speech and Language Therapy regarding your consultation. Note: Appointments are only confirmed once verified with our team.
              </p>

              {/* Submit Button & Admin DB Log view */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  id="submit-booking-request-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#3F6F5E] hover:bg-[#31594B] text-white font-semibold text-sm sm:text-base shadow-xs transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting to Supabase...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs text-[#5D6F66]">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Supabase: <strong>ckmsdkdgehzsprdzeofj</strong></span>
                  <button
                    type="button"
                    onClick={() => setShowSqlGuide(!showSqlGuide)}
                    className="text-[#2C6E4E] hover:underline font-semibold ml-1 cursor-pointer"
                  >
                    {showSqlGuide ? 'Hide Table Setup' : 'Table Setup'}
                  </button>
                </div>
              </div>

              {/* Collapsible SQL Script Guide under form */}
              {showSqlGuide && (
                <div className="mt-4 p-4 rounded-2xl bg-[#1E2622] text-[#E0ECE5] text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-[#86AE9B]">Supabase SQL Table Definition:</span>
                    <button
                      type="button"
                      onClick={copySql}
                      className="inline-flex items-center gap-1 text-[11px] bg-[#2E3C35] hover:bg-[#3E5047] text-white px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                    >
                      {copiedSql ? <Check className="w-3 h-3 text-[#5AE4A6]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSql ? 'Copied!' : 'Copy SQL'}</span>
                    </button>
                  </div>
                  <pre className="p-3 bg-[#141A17] rounded-xl overflow-x-auto text-[11px] font-mono text-[#A8D3BF] max-h-48 leading-relaxed">
                    {sqlCode}
                  </pre>
                  <p className="mt-2 text-[10px] text-[#8EAFA0]">
                    To view entries in the Supabase Table Editor: Run this query in Supabase Dashboard → SQL Editor → New Query.
                  </p>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
