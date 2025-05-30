
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Automotive = () => {
  const solutions = [
    {
      title: 'Outstanding Protection',
      description: 'Transportation Industry is one of the most challenging segments that face severe environmental conditions such as Wear, Tear, Friction, Chemical Exposure, High Humidity, Temperatures Fluctuation and UV Radiation.',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
      icon: '🛡️'
    },
    {
      title: 'Wide Functional Product Range',
      description: 'Union innovations are continuous for a better future of the transportation Industry is always providing new technologies and solutions to meet this industry revolution. From primers, top coats and Functional powder coatings.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop',
      icon: '🔧'
    },
    {
      title: 'Future Design',
      description: 'Union is providing a high-quality Aesthetic finish for the best performance in smoothness, High gloss levels in different aspects of solid and metallic shades to match all OEM Manufactures\' needs.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
      icon: '🎨'
    },
    {
      title: 'Global Testing Approvals',
      description: 'Our Automotive product range is fulfilling and comply with global testing methods of the industry with a Qualisteel Certification for high corrosive environments.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      icon: '✅'
    }
  ];

  const applications = [
    'Motorbikes',
    'Wheels',
    'Exhaust Systems',
    'Interior Trim and body',
    'Underbody',
    'Fuel Tank',
    'Seat Mechanism',
    'Engine Block',
    'Windshield wiper',
    'Chassis parts',
    'Fuel Filters'
  ];

  const partners = ['GM Motors', 'Nissan Motors', 'Jeep Motors', 'Lada Motors'];

  return (
    <Layout>
      <HeroSection
        title="Automotive & Transportation Powder Coatings"
        subtitle="Exceptional performance, durability, and aesthetic design for both interior and exterior vehicle components."
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Amid the global shift and ongoing innovations in the automotive and transportation sector, transitioning 
              from conventional to electric vehicles and spanning motorbikes to commercial vehicles, Union Powder Coatings 
              delivers exceptional performance, durability, and aesthetic design for both interior and exterior vehicle components.
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

export default Automotive;
