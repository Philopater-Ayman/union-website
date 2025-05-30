
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const GeneralIndustry = () => {
  const solutions = [
    {
      title: 'Advanced Protection',
      description: 'Extreme Environment Conditions are a big challenge for all OEM manufacturers. We designed our solutions to protect these products from Humidity, Chemical Corrosion, Scratches, UV Radiation, and Temperature fluctuations to keep their high performance and efficiency over time.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
      icon: '🛡️'
    },
    {
      title: 'Cost and Production Efficiency',
      description: 'Even high protection is very important but also OEM manufactures are requiring a continuous cost and production efficiency to support them in a hard competitive market locally and globally.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop',
      icon: '💰'
    }
  ];

  const applications = [
    'Electrical Cabinets',
    'Transformers',
    'Electrical Conduits',
    'Shelving and Racking',
    'Retail Display Fixtures',
    'Indoor Lighting systems',
    'Outdoor Lighting Systems',
    'Scaffoldings',
    'Fire-extinguisher',
    'Fireboxes'
  ];

  const partners = ['ABB', 'Tepco', 'Schneider', 'El-Sweedy', 'Three Brothers', 'Sega M'];

  return (
    <Layout>
      <HeroSection
        title="General Industry Powder Coatings"
        subtitle="Superior protection for industrial components facing harsh environmental conditions."
        backgroundImage="https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              General industries, such as electrical components (including cabinets, transformers, and conduits), 
              shelving and racking, lighting for both indoor and outdoor use, scaffolding, and fire extinguishers, 
              often face harsh environmental conditions. These challenges include exposure to moisture, chemicals, 
              temperature changes, scratches, and UV radiation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Where Our Solutions Shine
            </h2>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={solution.title} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{solution.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Application Areas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {applications.map((application, index) => (
              <Card key={application} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {application.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{application}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div key={partner} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-gray-600 font-bold">{partner.substring(0, 2)}</span>
                  </div>
                  <p className="font-medium text-gray-900">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GeneralIndustry;
