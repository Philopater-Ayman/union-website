
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Furniture = () => {
  const solutions = [
    {
      title: 'Stylish Design',
      description: 'Furniture Designers are facing a big challenge due to the continuous and rapid need for new stylish designs to match the market trends and customer preferences. We are providing a lot of colors solutions from Modern to Classic and experimental shades.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      icon: '🎨'
    },
    {
      title: 'Functional Durability',
      description: 'Our product solutions provide the best durability and performance against UV Radiation, Scratch Resistance, Wear and Tear. In addition to perfect corrosion and weathering resistance for outdoor furniture.',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=400&fit=crop',
      icon: '💪'
    },
    {
      title: 'Customization Services',
      description: 'Due to continuous and Rapid needs for new customized colors in a very short lead time with a small batch size, Union becomes the best choice for most Furniture manufacturers to fulfill their needs.',
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&h=400&fit=crop',
      icon: '🔧'
    }
  ];

  const applications = [
    'Office Furniture',
    'Partitions and walls',
    'Garden Furniture',
    'School Furniture',
    'Outdoor Furniture'
  ];

  const partners = ['IKEA', 'Mobica', 'Mohm'];

  return (
    <Layout>
      <HeroSection
        title="Furniture Powder Coatings"
        subtitle="Stylish designs and functional durability for both indoor and outdoor furniture applications."
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              The furniture industry is shaped by changing design trends and consumer tastes, placing great importance 
              on visual appeal. However, preserving furniture aesthetics over time can be difficult due to factors like 
              UV exposure, scratches, and everyday wear. Outdoor furniture faces even greater challenges, including 
              weathering and fading from environmental conditions.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default Furniture;
