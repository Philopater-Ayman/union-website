import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  className?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryCta, 
  secondaryCta, 
  backgroundImage,
  overlay = true,
  className = ''
}: HeroSectionProps) => {
  return (
    <section className={`relative flex items-center ${backgroundImage ? 'min-h-[70vh]' : 'py-20'} ${className}`}>
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && <div className="absolute inset-0 bg-black/40" />}
        </>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            backgroundImage ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h1>
          
          <p className={`text-xl sm:text-2xl mb-6 ${
            backgroundImage ? 'text-gray-100' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
          
          {description && (
            <p className={`text-lg mb-8 max-w-3xl ${
              backgroundImage ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {description}
            </p>
          )}
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Link to={primaryCta.href}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    {primaryCta.text}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`px-8 py-3 ${
                      backgroundImage
                        ? 'border-white text-black hover:bg-white hover:text-gray-900'
                        : 'border-gray-300 text-black hover:bg-gray-50'
                    }`}
                  >
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
