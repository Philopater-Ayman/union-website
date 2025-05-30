import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Clock, User } from 'lucide-react';

const News = () => {
  const scrollRef = useScrollAnimation();

  const newsArticles = [
    {
      id: 1,
      title: "Union Expands Global Presence with German Joint Venture",
      excerpt: "Strategic partnership strengthens our international capabilities and brings advanced coating technologies to new markets.",
      category: "Company News",
      author: "Union Team",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Revolutionary Anti-Microbial Powder Coatings Launch",
      excerpt: "New coating technology provides enhanced protection against bacteria and viruses for healthcare and public spaces.",
      category: "Product Innovation",
      author: "R&D Team",
      date: "2024-01-10",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Sustainability Milestone: 100% Recyclable Coatings Achieved",
      excerpt: "Union reaches new environmental standards with fully recyclable powder coating solutions across all product lines.",
      category: "Sustainability",
      author: "Sustainability Team",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Industry 4.0: Smart Manufacturing at Union Facilities",
      excerpt: "Advanced automation and AI-driven quality control systems enhance production efficiency and product consistency.",
      category: "Industry Trends",
      author: "Operations Team",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Architectural Excellence: Union Coatings in Iconic Buildings",
      excerpt: "Explore how Union's advanced powder coatings are protecting and beautifying landmark architectural projects worldwide.",
      category: "Case Study",
      author: "Marketing Team",
      date: "2023-12-20",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Masterbatch Innovation: Enhanced UV Protection Solutions",
      excerpt: "New UV-resistant masterbatch formulations extend the lifespan of plastic products in extreme outdoor conditions.",
      category: "Product Innovation",
      author: "Technical Team",
      date: "2023-12-15",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Company News", "Product Innovation", "Sustainability", "Industry Trends", "Case Study"];

  return (
    <Layout>
      <HeroSection
        title="Union Insights: News & Blog"
        subtitle="Stay updated with the latest from Union, industry trends, and expert perspectives on surface finishing innovations."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=1080&fit=crop"
      />

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={article.id} className="premium-card cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-600 text-white">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary-600 transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group-hover:bg-primary-700 transition-all duration-300">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Informed with Union Updates
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter for the latest industry insights, product innovations, and company news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
