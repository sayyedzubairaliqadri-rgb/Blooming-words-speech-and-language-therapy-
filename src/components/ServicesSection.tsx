import React, { useState } from 'react';
import { clinicServices } from '../data/clinicData';
import { ServiceItem } from '../types';
import {
  Baby,
  Mic,
  Sparkles,
  BookOpen,
  Users,
  HeartHandshake,
  Volume2,
  UserCheck,
  Activity,
  Ear,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onBookForService: (serviceName: string) => void;
  audienceFilter: 'all' | 'children' | 'teens' | 'adults';
  onFilterChange: (filter: 'all' | 'children' | 'teens' | 'adults') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookForService,
  audienceFilter,
  onFilterChange,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return Baby;
      case 'Mic':
        return Mic;
      case 'Sparkles':
        return Sparkles;
      case 'BookOpen':
        return BookOpen;
      case 'Users':
        return Users;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Volume2':
        return Volume2;
      case 'UserCheck':
        return UserCheck;
      case 'Activity':
        return Activity;
      case 'Ear':
        return Ear;
      default:
        return Sparkles;
    }
  };

  const filteredServices = clinicServices.filter((service) => {
    if (audienceFilter === 'all') return true;
    return service.audience.includes(audienceFilter);
  });

  return (
    <section id="services" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#356351] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
            Clinical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2723] mt-3 mb-4 font-heading">
            Our Speech & Language Therapy Services
          </h2>
          <p className="text-sm sm:text-base text-[#4E5D55] leading-relaxed">
            Evidence-informed, highly individualized communication support designed for every stage of development.
          </p>

          {/* Filter Pills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-medium text-[#65766E] inline-flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {(['all', 'children', 'teens', 'adults'] as const).map((key) => {
              const labelMap = {
                all: 'All Services (10)',
                children: "Children's Therapy",
                teens: 'Teen Support',
                adults: 'Adult Therapy',
              };
              const isActive = audienceFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => onFilterChange(key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3F6F5E] text-white shadow-xs'
                      : 'bg-white text-[#4D5E56] border border-[#DDD5C8] hover:bg-[#F2ECE2]'
                  }`}
                >
                  {labelMap[key]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 10 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-[#E7E0D3] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  {/* Icon & Audience tags */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF2EE] text-[#345F4F] flex items-center justify-center group-hover:bg-[#3F6F5E] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.audience.map((aud) => (
                        <span
                          key={aud}
                          className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-[#F4F1EA] text-[#55645C]"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#1E2823] mb-2 font-heading group-hover:text-[#32584A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5D56] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#F0EAE0] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#376553] hover:text-[#254539] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onBookForService(service.title)}
                    className="text-[11px] font-medium text-[#65766E] hover:text-[#254539] underline underline-offset-4 cursor-pointer"
                  >
                    Request Booking
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Not seeing your specific concern box */}
        <div className="mt-12 bg-[#F3EFE7] rounded-2xl p-6 sm:p-8 border border-[#E3DCcf] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#202B26] font-heading">
              Need guidance on which speech therapy service fits best?
            </h4>
            <p className="text-xs sm:text-sm text-[#505F57] mt-1">
              Every speech and language journey is unique. Schedule an initial consultation to discuss your specific goals.
            </p>
          </div>
          <button
            onClick={() => onBookForService('General Initial Consultation')}
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[#3F6F5E] hover:bg-[#32594B] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
          >
            Consult With Therapist
          </button>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookForService={onBookForService}
      />
    </section>
  );
};
