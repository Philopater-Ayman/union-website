import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Sustainability = () => {
  const pillars = [
    {
      title: 'Environmental Stewardship',
      description: 'We prioritize reducing our environmental footprint through eco-friendly manufacturing processes, sustainable sourcing, and waste reduction initiatives.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Innovation for Tomorrow',
      description: 'Our R&D focuses on developing next-generation coating solutions that deliver superior performance while minimizing environmental impact.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-sky-600'
    },
    {
      title: 'Community Engagement',
      description: 'We actively engage with local communities, supporting education and environmental initiatives that create lasting positive impact.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Responsible Manufacturing',
      description: 'Our production facilities operate under strict environmental standards, ensuring minimal waste and maximum efficiency.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-violet-600'
    },
    {
      title: 'Green Supply Chain',
      description: 'We partner with suppliers who share our commitment to sustainability, creating a responsible supply chain from raw materials to finished products.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
      color: 'from-green-500 to-lime-600'
    },
    {
      title: 'Circular Economy',
      description: 'We embrace circular economy principles by designing products for longevity, recyclability, and minimal environmental impact.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const initiatives = [
    {
      title: 'Zero VOC Coatings',
      description: 'Our powder coatings contain no volatile organic compounds, ensuring cleaner air and safer working environments.',
      metric: '100% VOC-Free',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop&q=80' // Example image
    },
    {
      title: 'Energy Efficiency',
      description: 'Advanced manufacturing processes that reduce energy consumption while maintaining the highest quality standards.',
      metric: '30% Energy Reduction',
      image: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&h=400&fit=crop&q=80' // Example image
    },
    {
      title: 'Waste Minimization',
      description: 'Comprehensive waste reduction programs that maximize material utilization and minimize environmental impact.',
      metric: '95% Material Utilization',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&q=80' // Example image
    },
    {
      title: 'Recycling Programs',
      description: 'Industry-leading recycling initiatives that give new life to materials and reduce landfill waste.',
      metric: '98% Recyclable',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&q=80' // Example image
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Sustainability at Union"
        subtitle="Leading the industry toward a more sustainable future through innovative solutions and responsible practices."
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Sustainability at Our Core
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Union, sustainability isn't just a commitment—it's the foundation of everything we do. We recognize 
                  our responsibility to protect the environment while delivering exceptional coating solutions that meet 
                  the evolving needs of our customers and communities.
                </p>
                <p>
                  Our comprehensive approach to sustainability encompasses every aspect of our operations, from research 
                  and development to manufacturing and distribution. We're proud to lead the industry in developing 
                  eco-friendly solutions that don't compromise on performance.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1605103149809-f7eba218009e?w=800&h=600&fit=crop&q=80" // Changed image for better visual appeal
                alt="Sustainable practices at Union"
                className="w-full h-auto object-cover rounded-xl shadow-2xl aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Key Pillars of Sustainability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our sustainability framework is built on six fundamental pillars that guide our decisions and drive our innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-gray-600 leading-relaxed text-base">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Sustainability Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Concrete actions and measurable results in our journey toward sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {initiatives.map((initiative) => (
              <Card key={initiative.title} className="group rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                    {initiative.metric}
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-gray-700 leading-relaxed text-base">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with Union to access sustainable coating solutions that protect your products and our planet. 
            Together, we can create a more sustainable tomorrow.
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Our Green Solutions
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
