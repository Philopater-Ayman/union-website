import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Index = () => {
  const coreOfferings = [
    {
      title: 'Powder Coatings',
      description: 'Advanced powder coatings engineered to meet specific industry needs and environmental challenges. Superior chemical resistance, exceptional durability, and aesthetic appeal.',
      href: '/products',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop'
    },
    {
      title: 'Masterbatches',
      description: 'Innovative masterbatches that enhance the properties, color, and functionality of plastics for diverse applications across multiple industries.',
      href: '/products/masterbatches',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop'
    }
  ];

  const industries = [
    {
      title: 'Architectural',
      description: 'Building Lasting Impressions',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop',
      href: '/industries/architectural'
    },
    {
      title: 'Appliances',
      description: 'Durable Home Solutions',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop',
      href: '/industries/appliances'
    },
    {
      title: 'Automotive & Transportation',
      description: 'Performance on the Move',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
      href: '/industries/automotive'
    },
    {
      title: 'Furniture',
      description: 'Stylish & Functional',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      href: '/industries/furniture'
    },
    {
      title: 'General Industry',
      description: 'Versatile Protection',
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=300&fit=crop',
      href: '/industries/general-industry'
    },
    {
      title: 'ACE',
      description: 'Agriculture & Construction Excellence',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      href: '/industries/ace'
    }
  ];

  const features = [
    {
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop',
      title: 'Superior Protection',
      description: 'Advanced formulations providing exceptional durability and corrosion resistance'
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      title: 'Cutting-Edge Technology',
      description: 'State-of-the-art production facilities and automated processes for consistent quality'
    },
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
      title: 'Sustainable Solutions',
      description: 'VOC-free products with 100% recyclability supporting environmental responsibility'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Pioneering Surface Finishing Solutions"
        subtitle="Leading innovator in high-performance Powder Coatings and Masterbatches"
        primaryCta={{ text: 'Explore Our Products', href: '/products' }}
        secondaryCta={{ text: 'Discover Our Industries', href: '/industries' }}
        backgroundImage="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&h=1080&fit=crop"
      />      {/* Our Journey */}
      <section className="py-24 relative overflow-hidden">        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute left-0 top-24 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-2xl"></div>
        <div className="absolute right-0 bottom-24 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                Since 1999
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Our Journey of <span className="text-blue-600">Innovation</span> and Growth
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-6 mb-8 border-l-2 border-blue-200"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Union's journey began in 1999 as a family business with a visionary approach to surface finishing. 
                  Initially focused on liquid coatings, we transitioned to powder coatings in 2000 to address technical 
                  challenges and meet niche market demands.
                </p>
                <div className="absolute -left-2 bottom-6 w-4 h-4 bg-blue-600 rounded-full"></div>
                <p className="text-lg text-gray-700">
                  Our partnership with industry pioneers like BASF catalyzed our growth, allowing us to develop 
                  cutting-edge solutions for multiple industries.
                </p>
              </motion.div>
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm">
                    Read Our Full Story
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 border-2 border-blue-600 rounded-lg transform rotate-3 scale-105"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                  alt="Our Journey"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                  <div className="flex items-center text-white">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="font-bold">25+</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Years of Excellence</p>
                      <p className="text-blue-100 text-sm">Industry-leading innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>{/* Why Choose Union */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white"></div>
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Our Strengths
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 md:mb-0 leading-tight">
                Why Choose <span className="text-blue-600">Union</span>
              </h2>
              <div className="h-1 w-24 bg-blue-600 rounded-full md:hidden mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Delivering excellence through innovation, sustainability, and unwavering quality standards
              </p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 my-12"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-16">            {features.map((feature, index) => (              <motion.div 
                key={feature.title} 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Card with border */}
                <div className="p-4 rounded-3xl border-2 border-blue-200 hover:border-blue-500 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  {/* Image with border */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] group border-2 border-gray-200 shadow-sm hover:border-blue-400 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Text content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{/* Advanced Solutions */}
      <section className="py-24 relative">        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute left-0 top-40 w-40 h-40 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute right-0 bottom-40 w-56 h-56 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Advanced Solutions for Every Surface
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              Comprehensive product portfolio engineered for superior performance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {coreOfferings.map((offering, index) => (
              <motion.div 
                key={offering.title} 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-blue-500 flex flex-col h-full relative z-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow bg-white">
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">{offering.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base mb-8 flex-grow">
                      {offering.description}
                    </CardDescription>
                    <div className="mt-auto flex items-center justify-between">                      <Link to={offering.href} className="w-full">
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 group flex items-center justify-center">
                          <span>Learn More</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{/* Industries We Serve */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute left-0 bottom-20 w-96 h-96 rounded-full bg-blue-100 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partnering with Leaders Across Diverse Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions tailored to meet unique industry requirements
            </p>
          </motion.div>
          
          <div className="relative mb-12">
            {/* Cards Grid - Keeping the original card design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div 
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 hover:scale-[1.02] group">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="text-center p-6">
                      <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{industry.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300 mt-1">{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 mt-auto">
                      <Link to={industry.href}>
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>          </div>
        </div>
      </section>      {/* Sustainability Commitment */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Committed to a Sustainable Future
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                At Union, sustainability is at our core. We strive to reduce our environmental footprint 
                through VOC-free products, waste reduction, and energy optimization.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/sustainability">
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Learn More About Our Sustainability Efforts
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
                alt="Sustainability"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-blue-600"></div>
          <div className="absolute left-0 bottom-10 w-64 h-64 rounded-full bg-blue-400"></div>
          <div className="absolute right-1/4 bottom-0 w-40 h-40 rounded-full bg-blue-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-5 items-center">
              {/* Left content column */}
              <div className="md:col-span-3 p-12 md:p-16">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                  Let's Collaborate
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Transform <span className="text-blue-600">Your Surfaces?</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-xl">
                  Connect with our experts to find the perfect coating solution for your unique needs.
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
                      Explore Products
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              {/* Right image column */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-2 h-full"
              >                <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-400 to-blue-400 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&fit=crop"
                    alt="Surface Transformation"
                    className="w-full h-full object-cover mix-blend-overlay opacity-100"
                  />
                  <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Proven Solutions</p>
                        <p className="text-xs text-gray-600">Industry-leading performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
