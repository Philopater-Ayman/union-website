
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Architectural = () => {
  const solutions = [
    {
      title: 'Durability that Lasts',
      description: 'Union Architectural Product Range (Standard Durable, Super Durable, Hyper Durable and Primers) provide the best solution against harsh weather environment conditions to enable Architects and Designers to achieve the maximum required Durability performance.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      title: 'Aesthetic Design',
      description: 'Whatever Solid or Metallic, Smooth or Textures, Matt or Gloss, Architects and Designers can rely on our different colour collections or release their best imaginations to be customized for creating their iconic designs.',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop'
    },
    {
      title: 'Global Certifications',
      description: 'With our different global certification of Qualicoat and with compliance with AAMA and GSB, we guarantee the long-lasting durability in harsh weather conditions for every unique design.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop'
    },
    {
      title: 'Eco-Friendly',
      description: 'Future is going to a green building to keep a sustainable environment. Our solutions support to lower carbon footprint and gaining points through our Eco-Friendly range of Primed (Standard Durable and Super Durable).',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'
    }
  ];

  const applicationAreas = [
    'Façade systems and Curtain Walls',
    'Doors and Windows',
    'Louvers and Shutters',
    'Sunshades and Ceilings Tiles',
    'Fencing and Railing',
    'Garage doors and Metal Frameworks'
  ];

  const partners = [
    { name: 'Delemar', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=80&fit=crop' },
    { name: 'Dawlia', logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=80&fit=crop' },
    { name: 'Extrucoat', logo: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=150&h=80&fit=crop' },
    { name: 'Intercairo', logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&h=80&fit=crop' },
    { name: 'Aluafric', logo: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=150&h=80&fit=crop' }
  ];

  return (
    <Layout>
      <HeroSection
        title="Architectural Powder Coatings"
        subtitle="Empowering architects and designers to bring iconic architectural visions to life while ensuring long-lasting performance."
        backgroundImage="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              The architectural industry faces the dual challenge of maintaining both durability and visual appeal. 
              Environmental factors such as UV exposure, temperature extremes, and corrosion can lead to surface 
              degradation over time. Union's Architectural Product range offers innovative solutions, empowering 
              architects and designers to bring iconic architectural visions to life while ensuring long-lasting performance.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationAreas.map((area, index) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
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
              Ready to Elevate Your Architecture?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our experts to learn more about our architectural powder coating solutions and how they can bring 
              your design visions to life with lasting durability.
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

export default Architectural;
