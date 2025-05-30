import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const Masterbatches = () => {
  const specialAdditives = [
    { name: 'Anti-fog Masterbatch', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop' },
    { name: 'Anti-Microbial Masterbatch', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
    { name: 'Anti-corrosive Masterbatch', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop' },
    { name: 'Biodegradable Masterbatch', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop' },
    { name: 'Cling Masterbatch', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop' },
    { name: 'Desiccant Masterbatch', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
    { name: 'Optical Brightener Masterbatch', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop' },
    { name: 'Slip Masterbatch', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop' },
    { name: 'Anti-Slip & Anti-Static Masterbatch', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
    { name: 'Anti-Oxidant Masterbatch', image: 'https://images.unsplash.com/photo-1611784336337-4d681faee909?w=400&h=300&fit=crop' },
    { name: 'Insect Repellent Masterbatch', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop' },
    { name: 'Paper Like Effect Masterbatch', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop' },
    { name: 'Talc-filled Masterbatch', image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?w=400&h=300&fit=crop' },
    { name: 'Antifungal Masterbatch', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' },
    { name: 'Processing Aid Masterbatch', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop' }
  ];

  const masterbatchTypes = [
    { name: 'White Masterbatch', image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?w=400&h=300&fit=crop', gradient: 'from-gray-100 to-white' },
    { name: 'Black Masterbatch', image: 'https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?w=400&h=300&fit=crop', gradient: 'from-gray-800 to-gray-900' },
    { name: 'Colour Masterbatch', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', gradient: 'from-red-200 via-yellow-200 to-blue-200' },
    { name: 'Additive Masterbatch', image: 'https://images.unsplash.com/photo-1611784336337-4d681faee909?w=400&h=300&fit=crop', gradient: 'from-primary-100 to-primary-200' },
    { name: 'Engineering Masterbatch', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop', gradient: 'from-secondary-100 to-secondary-200' },
    { name: 'Special Effect Masterbatch', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop', gradient: 'from-purple-100 to-pink-100' }
  ];
  const keyBenefits = [
    {
      title: 'Coloring Plastics',
      description: 'Masterbatch is the most common method of coloring plastics. It can be used to achieve a wide range of colors, from bright and vibrant colors to subtle and earth tones.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
    {
      title: 'Adding UV Protection',
      description: 'Masterbatch can be used to add UV protection to plastics, which helps to prevent the plastic from fading or becoming brittle when exposed to sunlight.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    },
    {
      title: 'Improving Flame Retardancy',
      description: 'Masterbatch can be used to improve the flame retardancy of plastics, which helps to prevent the plastic from catching fire or spreading flames.',
      image: 'https://images.unsplash.com/photo-1575052806831-8b7525edb0f5?w=600&h=400&fit=crop',
    },
    {
      title: 'Increasing Impact Resistance',
      description: 'Masterbatch can be used to increase the impact resistance of plastics, which helps to prevent the plastic from breaking or cracking when subjected to impact.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    },
    {
      title: 'Reducing Static Electricity',
      description: 'Masterbatch can be used to reduce static electricity in plastics, which helps to prevent the plastic from attracting dust and dirt.',
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop',
    }
  ];
  const industries = [
    { name: 'Mono & Multi Layer Films', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop' },
    { name: 'Agricultural Pipes (PVC & HDPE)', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop' },
    { name: 'Woven Sack Industries', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop' },
    { name: 'Non-woven fabrics', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop' },
    { name: 'Tarpaulin', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
    { name: 'Automobile parts', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop' },
    { name: 'Agro net', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop' },
    { name: 'Mulch Films', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop' },
    { name: 'CRATES', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop' },
    { name: 'Pail Containers', image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?w=400&h=300&fit=crop' },
    { name: 'Pharmaceutical Bottles', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
    { name: 'JERRY CANS', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop' },
    { name: 'Drums', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop' },
    { name: 'Water Tanks', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop' },
    { name: 'PVC PIPES & FITTINGS', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop' },
    { name: 'PVC FILMS CARRY BAGS', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop' },
    { name: 'Box Strapping', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop' },
    { name: 'Furniture Plastic', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop' },
    { name: 'Blow Molding P.E. Films', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop' },
    { name: 'Thermoforming', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop' }
  ];
  const valueAddedServices = [
    {
      title: "Color Matching and Formulation Development",
      description: "Union MB Expert color technicians work closely with customers to achieve precise color matches and create custom formulations meeting specific application requirements.",
    },
    {
      title: "Material Selection and Optimization",
      description: "Union MB leverage its deep knowledge of different polymers, additives, and processing techniques to recommend the ideal masterbatch composition for each application.",
    },
    {
      title: "Product Development Support",
      description: "From initial concept to final product, Union MB provide technical guidance and support throughout the development process, ensuring optimal performance and material compatibility.",
    },
    {
      title: "On-Demand Production and Flexible Delivery",
      description: "Union MB cater to varying customer needs with flexible production schedules and reliable delivery options, ensuring timely supply of high-quality masterbatches.",
    },
    {
      title: "Quality Control and Assurance",
      description: "Rigorous quality control measures are implemented throughout the production process, guaranteeing consistent color, performance, and conformity to customer specifications.",
    },
    {
      title: "Regulatory Compliance",
      description: "Union MB ensure that masterbatches meet all relevant industry standards and regulations, simplifying compliance for our customers.",
    }
  ];
  const efficiencyPerformance = [
    {
      title: "Process Optimization and Troubleshooting",
      description: "Union MB offer technical support to our partner, helping them optimize their processing parameters and troubleshoot any production challenges.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
    },
    {
      title: "Technical Training and Education",
      description: "Union MB Providing training programs and educational resources helps our partner to gain deeper knowledge of masterbatch technology and application techniques.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
    },
    {
      title: "Sustainable Solutions",
      description: "Union MB offer environmentally friendly masterbatches, utilizing recycled materials and promoting responsible manufacturing practices.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Master Batch Division"
        subtitle="Our expertise in polymer compounding enables us to produce innovative master batches that enhance the properties of plastics."
        backgroundImage="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&h=1080&fit=crop"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto" // Increased max-width for a wider layout
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start"> {/* Changed to items-start for better alignment */}
              <div className="lg:pr-8"> {/* Added padding to the right for text block */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Expertise in Polymer <span className="text-primary-600">Compounding</span>
                </h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                  Our expertise in polymer compounding enables us to produce innovative master batches that enhance the properties of plastics. We offer customized master batches tailored to specific requirements, contribute to the packaging, fibers, automotive, construction, electronic, medical and healthcare industries.
                </p>
                <p className="text-base text-secondary-600 leading-relaxed">
                  The company deals with all major types of Masterbatches such as White Masterbatch, Black Masterbatch, Colour Masterbatch, Additive Masterbatch, Engineering Masterbatch and Special Effect Masterbatch to name a few.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4"> {/* Adjusted grid for masterbatch types */}
                {masterbatchTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-secondary-200 hover:border-primary-300 h-full">
                      <div className="relative h-40 sm:h-48 overflow-hidden"> {/* Adjusted height */}
                        <img
                          src={type.image}
                          alt={type.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 sm:p-6"> {/* Adjusted padding */}
                        <h3 className="font-semibold text-foreground text-base sm:text-lg leading-tight text-center group-hover:text-primary-700 transition-colors duration-300">
                          {type.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Additives Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Special Additives Masterbatch <span className="text-primary-600">(Solutions)</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Explore our comprehensive range of special additive masterbatches designed to meet diverse application needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {specialAdditives.map((additive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border border-secondary-200 hover:border-primary-300 overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={additive.image}
                      alt={additive.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground text-sm leading-tight text-center group-hover:text-primary-700 transition-colors duration-300">
                      {additive.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Key Benefits of Our <span className="text-primary-600">Masterbatches</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Discover how our innovative masterbatches can transform and enhance your plastic products.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border border-secondary-200 hover:border-primary-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-4">{benefit.description}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary-600 font-medium flex items-center gap-2 cursor-pointer"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Masterbatch <span className="text-primary-600">Industries</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our masterbatches are trusted by leading manufacturers across diverse industries, providing innovative solutions for various applications.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border border-secondary-200 hover:border-primary-300 overflow-hidden">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                      {industry.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Union <span className="text-primary-600">Value-Added Services</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We go beyond supplying masterbatches. Our comprehensive value-added services ensure you get the most out of our products and expertise.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {valueAddedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`service-${index}`}
                    className="border border-secondary-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-secondary-50 text-left">
                      <span className="font-semibold text-foreground">{service.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-6 bg-secondary-50">
                      <p className="text-secondary-600 leading-relaxed">{service.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Efficiency & Performance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Union MB Improves Partners <span className="text-primary-600">Efficiency and Performance</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our commitment to excellence extends beyond products to comprehensive support that enhances your operational efficiency.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {efficiencyPerformance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border border-secondary-200 hover:border-primary-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-secondary-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Masterbatches;
