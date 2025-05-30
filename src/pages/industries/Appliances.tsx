
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Appliances = () => {
  const advantages = [
    {
      title: 'Durability Performance',
      description: 'Union Appliances\' product range provides superior resistance to scratches, stains, chemicals, wear, tear, high humidity and corrosion for the long-lasting performance of home appliances.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
    },
    {
      title: 'Cost Efficiency',
      description: 'Through our continuous innovations to create add value for the manufacturers by continuous cost reduction, we innovate our High Yield Product range to achieve the lowest consumption per m² and our low cure product range to reduce energy consumption rate to act as a real partner with our customers.',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop'
    },
    {
      title: 'Customized Services',
      description: 'Thanks to our highly advanced production capabilities enable us to commit to our customers fluctuated and urgent needs to provide our full support in their customized orders by quick sample matching, very short lead time order supply, minimum batch sizes.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop'
    },
    {
      title: 'Safety and Sustainability',
      description: 'Our Commitment toward humans and the environment Safety and Sustainability, We fulfil that all of our products are VOCs free and 100% Recyclable to keep healthy and green environment.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'
    },
    {
      title: 'Design is Matter',
      description: 'As the design is very important in home appliances, our research and development center always work to create and develop new colors and effects from high glossy to Bonded Metallic.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop'
    }
  ];

  const solutions = [
    {
      title: 'Kitchen Excellence',
      description: 'Premium coatings for refrigerators, ovens, and dishwashers that resist stains and maintain their appearance.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
    },
    {
      title: 'Laundry Solutions',
      description: 'Durable finishes for washing machines and dryers that withstand moisture and daily use.',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&h=400&fit=crop'
    },
    {
      title: 'Climate Control',
      description: 'Weather-resistant coatings for air conditioners and radiators exposed to harsh conditions.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop'
    }
  ];

  const partners = [
    { name: 'Toshiba', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=80&fit=crop' },
    { name: 'Sharp', logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=80&fit=crop' },
    { name: 'Fresh', logo: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=150&h=80&fit=crop' },
    { name: 'Electrolux', logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&h=80&fit=crop' }
  ];

  const applicationAreas = [
    'Refrigerators',
    'Washing Machines',
    'Air Conditioners',
    'Dishwashers',
    'Radiators',
    'Ovens',
    'Clothes dryers',
    'Dish Washers'
  ];

  return (
    <Layout>
      <HeroSection
        title="Appliances Powder Coatings"
        subtitle="Superior resistance to scratches, stains, chemicals, and corrosion for long-lasting home appliance performance."
        backgroundImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Home appliances face constant challenges such as daily wear, food-related chemical spills, high humidity, 
              and temperature fluctuations. Refrigerator surfaces, for instance, require protection against stains and 
              chemical damage, while air conditioner compressor units must withstand harsh outdoor conditions. Moreover, 
              product designers seek coatings that offer both long-lasting durability and visually appealing finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Union's Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Union's Advantage: Performance & Efficiency
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={advantage.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={advantage.image} 
                      alt={advantage.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardTitle className="text-xl text-blue-700 mb-4">{advantage.title}</CardTitle>
                    <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Application Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-20">
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Enhance Your Appliances?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our experts to learn more about our appliance powder coating solutions and how they can improve 
              the durability and appearance of your products.
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

export default Appliances;
