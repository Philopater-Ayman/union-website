
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Certificates = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management Systems certification ensuring consistent delivery of products and services that meet customer and regulatory requirements.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      category: 'Quality Management'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management Systems certification demonstrating our commitment to environmental protection and sustainable practices.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
      category: 'Environmental'
    },
    {
      title: 'ISO 45001:2018',
      description: 'Occupational Health and Safety Management Systems certification ensuring the highest standards of workplace safety.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      category: 'Safety'
    },
    {
      title: 'Qualicoat Certification',
      description: 'International quality certification for architectural powder coatings, ensuring durability and performance in building applications.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      category: 'Product Quality'
    },
    {
      title: 'Qualisteel Certification',
      description: 'Quality certification for steel powder coatings, guaranteeing superior corrosion protection and longevity.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      category: 'Steel Coatings'
    },
    {
      title: 'AAMA Compliance',
      description: 'American Architectural Manufacturers Association standards compliance for architectural aluminum finishing.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      category: 'Industry Standards'
    }
  ];

  const benefits = [
    {
      title: 'Quality Assurance',
      description: 'Our certifications guarantee that every product meets the highest international quality standards.',
      metric: '100% Certified'
    },
    {
      title: 'Performance Reliability',
      description: 'Certified products deliver consistent performance and durability across all applications.',
      metric: '25+ Years Experience'
    },
    {
      title: 'Global Compliance',
      description: 'Our certifications ensure compliance with international regulations and industry standards.',
      metric: '6 Major Certifications'
    },
    {
      title: 'Customer Confidence',
      description: 'Third-party certifications provide independent validation of our quality and performance claims.',
      metric: '1000+ Satisfied Clients'
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Excellence Through Certification"
        subtitle="Our commitment to quality, safety, and environmental responsibility is validated through rigorous international certifications."
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Excellence Through Certification
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Union, our commitment to excellence is validated through a comprehensive portfolio of international 
                  certifications. These certifications represent more than just compliance—they reflect our dedication 
                  to delivering products and services that consistently exceed expectations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our rigorous certification process ensures that every aspect of our operations, from quality management 
                  to environmental stewardship, meets the highest global standards. This commitment gives our customers 
                  confidence in our products and processes.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
                alt="Quality Certification"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Global Standards, Proven Performance
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our certifications span quality management, environmental protection, safety, and product performance, 
              ensuring comprehensive excellence across all operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-blue-700">{cert.title}</CardTitle>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {cert.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Union Certification Advantage
            </h2>
            <p className="text-xl text-gray-700">
              What our certifications mean for your business and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {benefit.metric}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Trust in Certified Excellence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with Union for certified quality that meets the highest international standards. 
              Download our certificates and specifications to learn more about our commitment to excellence.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Download Certificates
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;
