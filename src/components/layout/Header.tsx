import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveGroup = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  const productItems = [
    { title: 'Powder Coatings', href: '/products/powder-coatings', description: 'Advanced powder coating solutions' },
    { title: 'Masterbatches', href: '/products/masterbatches', description: 'Innovative plastic enhancement solutions' },
  ];

  const industryItems = [
    { title: 'Architectural', href: '/industries/architectural', description: 'Building lasting impressions' },
    { title: 'Appliances', href: '/industries/appliances', description: 'Durable home solutions' },
    { title: 'General Industry', href: '/industries/general-industry', description: 'Versatile protection solutions' },
    { title: 'Furniture', href: '/industries/furniture', description: 'Stylish & functional coatings' },
    { title: 'Automotive & Transportation', href: '/industries/automotive', description: 'Performance on the move' },
    { title: 'ACE', href: '/industries/ace', description: 'Agriculture & construction excellence' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Union</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors relative px-2 py-1 ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Home</span>
              {isActive('/') && (
                <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
              )}
            </Link>

            <Link 
              to="/about" 
              className={`font-medium transition-colors relative px-2 py-1 ${
                isActive('/about') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>About</span>
              {isActive('/about') && (
                <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
              )}
            </Link>

            <div className="relative group">
              <Link 
                to="/products" 
                className={`font-medium transition-colors flex items-center relative px-2 py-1 ${
                  isActiveGroup(['/products']) 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="ml-1 h-4 w-4" />
                {isActiveGroup(['/products']) && (
                  <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
                )}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 space-y-3">
                  {productItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link 
                to="/industries" 
                className={`font-medium transition-colors flex items-center relative px-2 py-1 ${
                  isActiveGroup(['/industries']) 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="ml-1 h-4 w-4" />
                {isActiveGroup(['/industries']) && (
                  <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
                )}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 space-y-3">
                  {industryItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/sustainability" 
              className={`font-medium transition-colors relative px-2 py-1 ${
                isActive('/sustainability') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Sustainability</span>
              {isActive('/sustainability') && (
                <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
              )}
            </Link>

            <Link 
              to="/certificates" 
              className={`font-medium transition-colors relative px-2 py-1 ${
                isActive('/certificates') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Certificates</span>
              {isActive('/certificates') && (
                <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
              )}
            </Link>

            <Link 
              to="/news" 
              className={`font-medium transition-colors relative px-2 py-1 ${
                isActive('/news') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>News</span>
              {isActive('/news') && (
                <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
              )}
            </Link>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors relative px-2 py-1 ${
                isActive('/contact') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Contact</span>
              {isActive('/contact') && (
                <span className="absolute inset-0 bg-blue-100 rounded-md -z-10 animate-pulse-slow opacity-70"></span>
              )}
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/client-portal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-4">
            <div className="space-y-2 pt-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link to="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Products
              </Link>
              <Link to="/products/powder-coatings" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                Powder Coatings
              </Link>
              <Link to="/products/masterbatches" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                Masterbatches
              </Link>
              <Link to="/industries" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Industries
              </Link>
              <Link to="/industries/architectural" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                Architectural
              </Link>
              <Link to="/industries/appliances" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                Appliances
              </Link>
              <Link to="/industries/general-industry" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                General Industry
              </Link>
              <Link to="/industries/furniture" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                Furniture
              </Link>
              <Link to="/industries/automotive" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                Automotive
              </Link>
              <Link to="/industries/ace" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                ACE
              </Link>
              <Link to="/sustainability" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Sustainability
              </Link>
              <Link to="/certificates" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Certificates
              </Link>
              <Link to="/news" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                News
              </Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Link to="/client-portal" className="block py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Client Portal
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
