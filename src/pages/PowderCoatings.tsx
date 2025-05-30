import React, { useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const PowderCoatings = () => {
  const scrollRef = useScrollAnimation();

  const productCategories = [
    {
      title: 'Epoxies Powder Coatings',
      subtitle: 'Unrivaled Chemical Resistance',
      description: 'Epoxies are the pioneers of powder coatings and are renowned for their exceptional chemical resistance, hardness, and adhesion. These coatings are ideal for industrial applications where durability and protection against harsh environments are paramount.',
      features: [
        'Superior chemical and corrosion resistance',
        'Exceptional durability against scratches, chipping, and fading',
        'Excellent adhesion to metal surfaces',
        'Wide range of cure schedules'
      ],
      applications: [
        'Industrial Machinery',
        'Electrical components',
        'Consumer Electronics',
        'Automotive Industries',
        'Interior surfaces requiring high corrosion resistance'
      ],
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop',
      icon: '🔬'
    },
    {
      title: 'Standard Durable Polyester Powder Coatings',
      subtitle: 'Versatile & Robust',
      description: 'Standard Durable Polyesters are the most widely used powder coatings due to their versatility, affordability, and excellent mechanical properties. Available in TGIC and TGIC-free variants, they provide outstanding flexibility and impact resistance.',
      features: [
        'High UV resistance for outdoor applications',
        'Great mechanical durability and chemical resistance',
        'Low curing temperature',
        'Wide range of finishes and textures',
        'Qualicoat Class 1 (meets AAMA 2603 and GSB Master)'
      ],
      applications: [
        'Indoor and Outdoor Architectural surfaces',
        'Windows and doors',
        'Outdoor furniture',
        'Residential Buildings'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      icon: '🏛️'
    },
    {
      title: 'Super Durable Polyester Powder Coatings',
      subtitle: 'Enhanced UV & Weathering Resistance',
      description: 'Super durable polyesters are engineered to provide even greater resistance to UV light and weathering than standard polyester coatings. Their excellent resistance to fading and chalking ensures that the coated surface maintains its appearance and integrity over time.',
      features: [
        'Enhanced UV stability',
        'Single-coat technology saves time and reduces costs',
        'Superior durability in extreme environmental conditions',
        'High resistance to fading and chalking',
        'Qualicoat Class 2 (meets AAMA 2604 and GSB Master)'
      ],
      applications: [
        'Aluminium and metal for outdoor structures',
        'Coastal and industrial structures',
        'Outdoor Garden Furniture in Coastal Areas'
      ],
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop',
      icon: '☀️'
    },
    {
      title: 'Epoxy-Polyester Hybrid Powder Coatings',
      subtitle: 'Balanced Performance',
      description: 'Hybrids combine the best properties of epoxies and polyesters, creating coatings with improved chemical and corrosion resistance plus weathering resistance and enhanced flexibility.',
      features: [
        'Superior weather degradation properties',
        'Tailorable ratios',
        'Excellent adhesion and surface finish',
        'Excellent resistance to wear and tear, and yellowing over time'
      ],
      applications: [
        'Interior furniture',
        'Indoor Electrical cabinets',
        'Home Appliances'
      ],
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop',
      icon: '⚙️'
    },
    {
      title: 'Polyurethane Powder Coatings',
      subtitle: 'Toughness & Aesthetics',
      description: 'Polyurethane powder coating is a thermosetting coating that forms a tough, protective layer upon curing. Known for its outstanding resistance to chemicals, abrasion, and weathering, this coating is widely used in applications where both performance and aesthetics matter.',
      features: [
        'Excellent Flow and Levelling',
        'Strong Adhesion',
        'High Chemical and Abrasion Resistance',
        'Good Application Performance'
      ],
      applications: [
        'Base Coat for Sublimation Transfer Film',
        'Aluminium Doors, Windows, and Kitchens',
        'Steel Sheets in Home Appliances and Furniture'
      ],
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      icon: '🎨'
    },
    {
      title: 'Hyper Durable Powder Coatings',
      subtitle: 'Extreme Environment Protection',
      description: 'Fluoropolymer powder coating is a fluorocarbon polymer which is the best alternative for liquid PVDF. They are designed to deliver superior performance in the most extreme environments. Known for their excellent durability and resistance to UV rays, corrosion, and harsh weather.',
      features: [
        'Exceptional resistance to UV rays',
        'Long-lasting protection against harsh weather conditions',
        'Qualicoat Class 3 (meets AAMA 2605 and GSB Premium)'
      ],
      applications: [
        'Commercial Buildings',
        'Facades in Coastal Areas'
      ],
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop',
      icon: '🏢'
    },
    {
      title: 'Bonded Metallic Powder Coating',
      subtitle: 'Decorative Flair & Durability',
      description: 'Metallic powder coatings are increasingly popular for adding decorative flair to surfaces while maintaining durability. These powders provide aesthetic appeal and durability, with a shiny and smooth finish.',
      features: [
        'Uniform metallic distribution',
        'Enhanced bonding properties',
        'Wide range of metallic shades and effects',
        'Cost Efficiency (ability to reclaim >95% of powder)'
      ],
      applications: [
        'Furniture and decorative items',
        'Automotive trims and Wheels',
        'High-end architectural projects'
      ],
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      icon: '✨'
    },
    {
      title: 'Heat-Resistant Powder Coatings',
      subtitle: 'Withstanding Extreme Temperatures',
      description: 'These coatings are engineered to withstand high temperatures while maintaining their appearance and adhesion properties.',
      features: [
        'Resistance to temperatures up to 600°C (or higher)',
        'Retains gloss and color under prolonged heat exposure',
        'Excellent adhesion and durability'
      ],
      applications: [
        'Ovens and grills',
        'Automotive exhaust systems',
        'Industrial furnaces'
      ],
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop',
      icon: '🔥'
    },
    {
      title: 'Anti-Corrosive Powder Coatings',
      subtitle: 'Extended Lifespan for Steel',
      description: 'Zinc-rich powder coatings offer sacrificial protection for steel surfaces, extending their lifespan and preventing corrosion against chemicals, and humidity over time.',
      features: [
        'High zinc content for maximum Corrosion protection',
        'Excellent adhesion and flexibility',
        'Outstanding performance in salt spray tests'
      ],
      applications: [
        'Steel pipelines',
        'Structural components in harsh environments',
        'Industrial machinery'
      ],
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop',
      icon: '🛡️'
    },
    {
      title: 'Fusion Bonded Epoxy Powder Coatings',
      subtitle: 'Protection in Harsh Environments',
      description: 'These coatings provide exceptional adhesion and superior resistance to cathodic disbandment, making them ideal for highly corrosive environments.',
      features: [
        'Excellent performance in extreme conditions',
        'Long-term corrosion protection',
        'High chemical and impact resistance'
      ],
      applications: [
        'Pipelines for water, gas, and oil',
        'Marine equipment',
        'Reinforced steel bars'
      ],
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      icon: '🌊'
    },
    {
      title: 'Anti-Microbial Powder Coatings',
      subtitle: 'Hygienic & Durable Surfaces',
      description: 'Designed to inhibit the growth of bacteria, Mold, fungus, and algae, these coatings ensure hygienic surfaces while maintaining durability.',
      features: [
        'Contains antimicrobial agents',
        'Reduces staining, discoloration, and Odors',
        'Durable, long-lasting protection'
      ],
      applications: [
        'Medical equipment',
        'Food processing facilities',
        'Public spaces like schools and gyms',
        'Hospital environments'
      ],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      icon: '🧼'
    },
    {
      title: 'High Yield Powder Coatings',
      subtitle: 'Efficiency & Performance',
      description: 'Advanced powder coatings engineered for maximum efficiency and performance, offering superior coverage and material utilization for cost-effective coating solutions.',
      features: [
        'Exceptional material efficiency',
        'Reduced waste and overspray',
        'Superior coverage properties',
        'Cost-effective solutions'
      ],
      applications: [
        'Automotive components',
        'Mass production applications',
        'High-volume manufacturing'
      ],
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=400&fit=crop',
      icon: '🏭'
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Union Powder Coatings: Engineered for Excellence"
        subtitle="A comprehensive range of advanced powder coatings designed for superior protection, durability, and aesthetic performance."
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop"
      />      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll relative" ref={scrollRef}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-primary-50 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary-50 rounded-full opacity-50"></div>
            <div className="relative">
              <span className="inline-block text-sm font-semibold tracking-wider text-primary-600 uppercase bg-primary-50 px-4 py-2 rounded-full mb-4 shadow-sm">Innovative Solutions</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">Advanced Powder Coating Technologies</h2>
              <div className="flex items-center justify-center space-x-1 mb-8">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="w-12 h-1 bg-primary-600 rounded-full"></div>
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Union offers a comprehensive range of advanced powder coatings, each engineered to meet 
                specific industry needs and environmental challenges. Our technologies combine aesthetic 
                excellence with superior performance and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}      <section className="py-24" ref={scrollRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {productCategories.map((category, index) => (
              <div key={category.title} className="group animate-on-scroll">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-stretch`}>
                  {/* Image Section */}
                  <div className="w-full lg:w-2/5 relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-900/30 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ minHeight: "400px" }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-primary-200 font-medium">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full lg:w-3/5 flex flex-col">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                          PREMIUM TECHNOLOGY
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto grid sm:grid-cols-2 gap-6">                        <div className="bg-white p-5 rounded-xl border border-gray-100">
                          <h4 className="text-base font-bold text-gray-900 mb-4 bg-primary-50 py-2 px-4 rounded-lg inline-block">
                            Key Features
                          </h4>
                          <ul className="space-y-3 pl-1">
                            {category.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-700 pl-3 border-l-2 border-primary-300 py-1 hover:bg-gray-50 transition-colors duration-200">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                          <div className="bg-white p-5 rounded-xl border border-gray-100">
                          <h4 className="text-base font-bold text-gray-900 mb-4 bg-primary-50 py-2 px-4 rounded-lg inline-block">
                            Applications
                          </h4>
                          <ul className="space-y-3 pl-1">
                            {category.applications.map((application, idx) => (
                              <li key={idx} className="text-sm text-gray-700 pl-3 border-l-2 border-primary-300 py-1 hover:bg-gray-50 transition-colors duration-200">
                                {application}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll" ref={scrollRef}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Choosing the Right Coating?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our technical experts are ready to assist you in selecting the perfect solution for your specific requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:scale-105 group"
          >
            Contact Our Team
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PowderCoatings;
