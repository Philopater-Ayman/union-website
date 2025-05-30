
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      title: 'Architectural Powder Coatings',
      description: 'Empowering architects and designers to bring iconic architectural visions to life while ensuring long-lasting performance.',
      href: '/industries/architectural',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop'
    },
    {
      title: 'Appliances Powder Coatings',
      description: 'Providing superior resistance to scratches, stains, chemicals, and corrosion for long-lasting home appliance performance.',
      href: '/industries/appliances',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop'
    },
    {
      title: 'General Industry Powder Coatings',
      description: 'Designing solutions to protect components from humidity, chemical corrosion, scratches, and UV radiation, ensuring high performance over time.',
      href: '/industries/general-industry',
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop'
    },
    {
      title: 'Furniture Powder Coatings',
      description: 'Offering stylish designs and functional durability against UV radiation, scratches, and wear for both indoor and outdoor furniture.',
      href: '/industries/furniture',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop'
    },
    {
      title: 'Automotive & Transportation Powder Coatings',
      description: 'Delivering exceptional performance, durability, and aesthetic design for interior and exterior vehicle components.',
      href: '/industries/automotive',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop'
    },
    {
      title: 'ACE Powder Coatings',
      description: 'Providing superior corrosion protection and high performance for agriculture & construction equipment working under the toughest environmental conditions.',
      href: '/industries/ace',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop'
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Industries We Empower"
        subtitle="Delivering specialized surface finishing solutions to meet the unique demands of global industries."
        backgroundImage="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Union's expertise spans across diverse industries, each with unique challenges and requirements. 
              Our specialized solutions are designed to meet the demanding standards of each sector while 
              delivering exceptional performance and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={industry.title} className="overflow-hidden premium-card">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary-700">{industry.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={industry.href}>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:scale-105">
                      View Solutions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
