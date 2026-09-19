import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showText = true,
  textColor = 'text-[#222926]',
  size = 'md'
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Custom Blooming Speech Bubble Icon */}
      <div className={`relative flex-shrink-0 ${iconDimensions} rounded-2xl bg-gradient-to-br from-[#4A7A68] to-[#365D4F] p-2 shadow-sm flex items-center justify-center text-white`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Speech Bubble Base */}
          <path
            d="M8 12C8 7.58172 11.5817 4 16 4H24C28.4183 4 32 7.58172 32 12V20C32 24.4183 28.4183 28 24 28H15L9 33V27.5C8.38 26.6 8 25.4 8 24V12Z"
            fill="currentColor"
            fillOpacity="0.25"
          />
          {/* Speech Bubble Outline */}
          <path
            d="M8 12C8 7.58172 11.5817 4 16 4H24C28.4183 4 32 7.58172 32 12V20C32 24.4183 28.4183 28 24 28H15L9 33V27.5C8.38 26.6 8 25.4 8 24V12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Blooming Stem & Leaves */}
          <path
            d="M20 23V14"
            stroke="#FDE8DE"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Left Petal / Leaf */}
          <path
            d="M20 18C17 18 15 16 15 13C18 13 20 15 20 18Z"
            fill="#A3D1BE"
          />
          {/* Right Petal / Leaf */}
          <path
            d="M20 16C23 16 25 14 25 11C22 11 20 13 20 16Z"
            fill="#FCE3D7"
          />
          {/* Center Blooming Bud */}
          <circle cx="20" cy="11.5" r="2.2" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-semibold tracking-tight text-lg leading-tight ${textColor} font-heading`}>
            Blooming Words
          </span>
          <span className="text-[11px] font-medium tracking-wide uppercase text-[#5F7167]">
            Speech & Language Therapy
          </span>
        </div>
      )}
    </div>
  );
};
