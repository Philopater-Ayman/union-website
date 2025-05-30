
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'News & Blog', href: '/news' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Certificates', href: '/certificates' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Powder Coatings', href: '/products/powder-coatings' },
        { name: 'Masterbatches', href: '/products/masterbatches' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Architectural', href: '/industries/architectural' },
        { name: 'Appliances', href: '/industries/appliances' },
        { name: 'Automotive', href: '/industries/automotive' },
        { name: 'Furniture', href: '/industries/furniture' }
      ]
    }
  ];

  return (
    <footer className="bg-secondary-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-4 block hover:from-primary-300 hover:to-primary-400 transition-all duration-300">
              Union
            </Link>
            <p className="text-secondary-300 dark:text-gray-400 mb-4 max-w-md leading-relaxed">
              Pioneering surface finishing solutions since 1999. Leading innovator in high-performance 
              powder coatings and masterbatches for diverse industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-secondary-400 dark:text-gray-500 hover:text-white dark:hover:text-white transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-secondary-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-secondary-800 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 dark:text-gray-500 text-sm">
              © {currentYear} Union. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 dark:text-gray-500 hover:text-white dark:hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 dark:text-gray-500 hover:text-white dark:hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
