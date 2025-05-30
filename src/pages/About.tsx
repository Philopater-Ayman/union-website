
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from "framer-motion";

const About = () => {
  const culturePillars = [
    {
      title: 'Collaboration',
      description: 'At Union, teamwork is at the heart of everything we do. We encourage open communication, shared ideas, and collective problem-solving to create innovative solutions for our clients and partners.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop'
    },
    {
      title: 'Innovation',
      description: 'We foster a forward-thinking environment where creativity thrives. Union is a place where bold ideas are welcomed, and employees are empowered to experiment and push boundaries to redefine surface finishing.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      title: 'Inclusion and Diversity',
      description: 'Our team is a mosaic of diverse talents, backgrounds, and perspectives. We believe that inclusivity sparks innovation, and we are committed to providing equal opportunities for everyone to grow and succeed.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop'
    },
    {
      title: 'Continuous Learning',
      description: 'Learning is a cornerstone of our culture. Through ongoing training, mentorship, and development programs, we ensure our employees stay ahead of industry trends while pursuing personal and professional growth.',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop'
    },
    {
      title: 'Sustainability',
      description: 'Union\'s culture reflects our responsibility to the planet and the communities we serve. We integrate sustainable practices into our daily operations and work towards creating a better future for all.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
    },
    {
      title: 'Celebrating Success',
      description: 'We recognize and celebrate the achievements of our team members, whether big or small. At Union, every milestone matters, and we take pride in creating an environment where accomplishments are acknowledged.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
    }
  ];

  return (
    <Layout>

      <HeroSection
        title="About Union: Our Legacy of Excellence"
        subtitle="Pioneering surface finishing solutions with a commitment to innovation, quality, and sustainability."
        backgroundImage="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&h=1080&fit=crop"
      />      {/* From Family Vision to Global Presence (moved here) */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="absolute right-0 top-24 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute left-0 bottom-24 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
              From Family Vision to <span className="text-blue-600">Global Presence</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              Transforming the surface finishing industry since 1999
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Timeline column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="relative pl-10 border-l-2 border-blue-200 space-y-12 py-4">
                {/* Timeline Node 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-blue-600 mr-2">1999</span>
                      <span>Family Foundation</span>
                    </h3>
                    <p className="text-gray-700">
                      Union began as a family business with a visionary approach to surface finishing, 
                      initially focused on liquid coatings.
                    </p>
                  </div>
                </motion.div>
                {/* Timeline Node 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-blue-600 mr-2">2000</span>
                      <span>Powder Coatings Shift</span>
                    </h3>
                    <p className="text-gray-700">
                      We transitioned to powder coatings to address technical challenges and 
                      meet niche market demands.
                    </p>
                  </div>
                </motion.div>
                {/* Timeline Node 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-blue-600 mr-2">2018</span>
                      <span>Masterbatch Expansion</span>
                    </h3>
                    <p className="text-gray-700">
                      Union expanded into the masterbatch market and achieved exponential growth,
                      diversifying our product portfolio.
                    </p>
                  </div>
                </motion.div>
                {/* Timeline Node 4 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-blue-600 mr-2">2022</span>
                      <span>Global Joint Venture</span>
                    </h3>
                    <p className="text-gray-700">
                      We solidified our global presence through a joint venture with a German company,
                      elevating our capabilities to new heights.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/* Image and current status column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="relative mb-8 h-full flex-grow">
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-600/20 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-600/20 transform -rotate-2 scale-[1.03]"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-full">                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                    alt="Union's manufacturing facility"
                    className="w-full h-full object-cover object-center"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">Today's Global Impact</h3>
                      <p className="text-white/90 text-lg mb-6">
                        We proudly serve thousands of clients worldwide, offering tailored, high-performance 
                        solutions that protect and beautify surfaces across industries.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                            <span className="font-bold text-white text-lg">25+</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold">Years of Excellence</p>
                            <p className="text-blue-100 text-sm">Since 1999</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                            <span className="font-bold text-white text-lg">50+</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold">Countries Served</p>
                            <p className="text-blue-100 text-sm">Global presence</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* Removed Industry Partnerships and Future Vision cards */}
            </motion.div>
          </div>
        </div>
      </section>      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=200&fit=crop" 
                  alt="Vision" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <div className="w-12 h-1 bg-blue-600 mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To partner with resilient industrial leaders globally while building scalable, adaptable 
                solutions for the ever-evolving surface finishing industry.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop" 
                  alt="Mission" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <div className="w-12 h-1 bg-blue-600 mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Union empowers industries with vibrant and protective finishing solutions, backed by expert 
                material development, automated production processes, risk mitigation sourcing, and sustainable practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>      {/* Union Culture */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements - kept simple */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Our Values
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 md:mb-0 leading-tight">
                Union <span className="text-blue-600">Culture</span>
              </h2>
              <div className="h-1 w-24 bg-blue-600 rounded-full md:hidden mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl">
                The foundation of our success, reflecting who we are and how we work together
              </p>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 my-12"
            ></motion.div>
          </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {culturePillars.map((pillar, index) => (
              <motion.div 
                key={pillar.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative"
              >
                <div className="p-4 rounded-3xl border-2 border-blue-200 hover:border-blue-500 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3] group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="w-12 h-1 bg-blue-500 rounded-full mb-4"
                  ></motion.div>
                  <p className="text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
