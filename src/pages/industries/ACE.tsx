
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ACE = () => {
  const solutions = [
    {
      title: 'Superior Corrosion Protection',
      description: 'Our Durable range is protecting your ACE vehicles from daily wear, tear and to providing a superior corrosion protection against harsh weather of humidity and Chemicals Corrosion to extend the useful working life for your equipment.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      icon: '🛡️'
    },
    {
      title: 'Sustainability',
      description: 'Our commitment to the environment and sustainable future drives our innovations to provide an Eco-Friendly with zero VOCs products to reduce the carbon footprint impact and save our value assets.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
      icon: '🌱'
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="ACE Powder Coatings"
        subtitle="Superior corrosion protection and high performance for agriculture & construction equipment working under the toughest environmental conditions."
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              The agriculture & Construction Equipment industry is working under the toughest environmental conditions 
              of Wear, Tear, High humidity, chemical corrosion and UV Radiation which represent a big challenge for 
              powder coatings suppliers. Union powder coatings provide the best solutions for the ACE Market in terms 
              of Durability and high performance.
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

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Protect Your Equipment?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our experts to learn more about our ACE powder coating solutions and how they can extend 
              the life of your agricultural and construction equipment.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Expert Consultation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ACE;
