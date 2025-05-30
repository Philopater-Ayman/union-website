import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, User, Mail, FileText, Download, Clock, Shield } from 'lucide-react';

const ClientPortal = () => {
  const [isLogin, setIsLogin] = useState(true);

  const portalFeatures = [
    {
      icon: FileText,
      title: "Order Tracking",
      description: "Monitor your orders from placement to delivery in real-time"
    },
    {
      icon: Download,
      title: "Technical Documents",
      description: "Access TDS, MSDS, and certification documents instantly"
    },
    {
      icon: Clock,
      title: "Order History",
      description: "View and reorder from your complete purchase history"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Enterprise-grade security protects your sensitive data"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Client Portal
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Secure access to your account, order history, technical documents, and exclusive resources
            </p>
          </div>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="premium-card">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <CardTitle className="text-2xl">
                {isLogin ? 'Sign In' : 'Create Account'}
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                {isLogin 
                  ? 'Access your Union client dashboard' 
                  : 'Join thousands of satisfied clients worldwide'
                }
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@company.com"
                    className="pl-10 transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    className="pl-10 transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      placeholder="Confirm your password"
                      className="pl-10 transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </div>
              )}

              <Button className="w-full bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>

              {isLogin && (
                <div className="text-center">
                  <a href="#" className="text-primary-600 hover:text-primary-700 text-sm">
                    Forgot your password?
                  </a>
                </div>
              )}

              <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {isLogin ? 'Register here' : 'Sign in here'}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What You Can Access
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Streamline your workflow with our comprehensive client portal features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="premium-card text-center group">
                  <CardContent className="p-6">
                    <div className="mx-auto w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Our support team is here to assist you with portal access or any technical questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                Contact Support
              </Button>
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 hover:scale-105 transition-all duration-300">
                View Help Center
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClientPortal;
