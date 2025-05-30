import React, { useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from "framer-motion";

const Products = () => {
  const scrollRef = useScrollAnimation();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const imageAnimation = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const productCategories = [
    {
      title: 'Powder Coatings',
      subtitle: 'Durable Protection, Vibrant Finishes',
      description: 'Union offers a comprehensive range of advanced powder coatings, each engineered to meet specific industry needs and environmental challenges. Discover our solutions for superior chemical resistance, exceptional durability, and aesthetic appeal.',
      href: '/products/powder-coatings',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop',
      keyFeatures: [
        'Superior chemical and weather resistance',
        'Eco-friendly with zero VOC emissions',
        'Extensive color and finish options',
        'Energy-efficient application process',
      ],
      icon: '🔬'
    },
    {
      title: 'Masterbatches',
      subtitle: 'Enhancing Plastics with Precision',
      description: 'Our expertise in polymer compounding enables us to produce innovative masterbatches that enhance the properties, color, and functionality of plastics for a multitude of applications.',
      href: '/products/masterbatches',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop',
      keyFeatures: [
        'Custom color formulations',
        'Performance-enhancing additives',
        'UV stabilization technology',
        'Sustainable bio-based options',
      ],
      icon: '🧪'
    }
  ];
  const industryCategories = [
    { 
      name: 'Automotive', 
      href: '/industries/automotive',
      image: 'https://images.unsplash.com/photo-1553260168-66ea335d2e0e?w=800&h=600&fit=crop',
      description: 'High-performance coatings for automotive components with excellent durability and aesthetic appeal.'
    },
    { 
      name: 'Architecture', 
      href: '/industries/architectural',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
      description: 'Weather-resistant finishes for buildings that combine protection with sophisticated design options.'
    },
    { 
      name: 'Furniture', 
      href: '/industries/furniture',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'Stylish and durable coatings that enhance the beauty and longevity of indoor and outdoor furniture.'
    },
    { 
      name: 'Appliances', 
      href: '/industries/appliances',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop',
      description: 'Reliable finishes for home appliances offering heat resistance, scratch protection, and vibrant colors.'
    },
    { 
      name: 'General Industry', 
      href: '/industries/general-industry',
      image: 'https://images.unsplash.com/photo-1533630271848-9da516b3eea9?w=800&h=600&fit=crop',
      description: 'Versatile coating solutions adaptable to diverse industrial applications and environments.'
    },
    { 
      name: 'ACE', 
      href: '/industries/ace',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop',
      description: 'Specialized coatings for agricultural, construction, and earthmoving equipment with superior protection.'
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Our Innovative Product Portfolio"
        subtitle="Delivering high-performance powder coatings and masterbatches for superior surface finishing and plastic enhancement."
        backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop"
      />      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-block text-sm font-semibold tracking-wider text-primary-600 uppercase mb-3">Our Products</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Innovative Surface Solutions
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our premium range of surface treatment products designed to enhance performance and aesthetics across industries.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {productCategories.map((category, index) => (
              <motion.div 
                key={category.title} 
                className="group"
                variants={fadeInUp}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-stretch`}>
                  {/* Image Section */}
                  <div className="w-full lg:w-2/5 relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-900/30 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ minHeight: "400px" }}
                      variants={imageAnimation}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-primary-200 font-medium">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full lg:w-3/5 flex flex-col">
                    <motion.div 
                      className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                      whileHover={{ y: -5 }}
                    >
                      <div className="mb-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                          PREMIUM SOLUTION
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="bg-white p-5 rounded-xl border border-gray-100 mb-6">
                          <h4 className="text-base font-bold text-gray-900 mb-4 bg-primary-50 py-2 px-4 rounded-lg inline-block">
                            Key Features
                          </h4>
                          <ul className="space-y-3 pl-1">
                            {category.keyFeatures.map((feature, idx) => (
                              <motion.li 
                                key={idx} 
                                className="text-sm text-gray-700 pl-3 border-l-2 border-primary-300 py-1 hover:bg-gray-50 transition-colors duration-200"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                              >
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <Link to={category.href}>
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              size="lg" 
                              className="w-full bg-primary-600 hover:bg-primary-700 transition-all duration-300 text-white font-medium group"
                            >
                              Explore {category.title}
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
                          </motion.div>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>      {/* Products by Industry */}      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-block text-sm font-semibold tracking-wider text-primary-600 uppercase mb-3 bg-primary-50 px-4 py-2 rounded-full">Solutions By Market</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Find Products by Industry
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our specialized solutions tailored to meet the unique requirements of different industries.
              Each industry presents unique challenges that our products are designed to solve.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {industryCategories.map((industry, index) => (
              <motion.div 
                key={industry.name}
                variants={fadeInUp} 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to={industry.href}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <motion.img 
                        src={industry.image} 
                        alt={`${industry.name} Industry`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {industry.description}
                      </p>
                      <motion.div 
                        className="flex items-center text-primary-600 font-medium mt-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore Solutions</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
