import React, { useState, useEffect } from 'react';
import { 
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Cpu,
  Coins,
  BarChart3,
  Tag
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const OttrBlogSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Crypto SSIM: Risk Management in DeFi",
      excerpt: "Explore how Smart Structure Investment Models revolutionize cryptocurrency portfolio management with mathematical downside protection.",
      author: "Dr. Sarah Chen",
      date: "June 2, 2025",
      readTime: "8 min read",
      category: "DeFi Strategy",
      image: "gradient-1",
      tags: ["SSIM", "Risk Management", "DeFi"]
    },
    {
      id: 2,
      title: "AI-Powered Quantitative Trading: The Future is Now",
      excerpt: "Discover how machine learning algorithms are transforming crypto markets with predictive analytics and automated trading strategies.",
      author: "Marcus Rodriguez",
      date: "May 28, 2025",
      readTime: "12 min read",
      category: "Quantitative Trading",
      image: "gradient-2",
      tags: ["AI", "Machine Learning", "Trading"]
    },
    {
      id: 3,
      title: "Building on Blockchain: Smart Contract Best Practices",
      excerpt: "Learn the essential security patterns and optimization techniques for developing robust smart contracts in the ottr ecosystem.",
      author: "Alex Thompson",
      date: "May 25, 2025",
      readTime: "15 min read",
      category: "Development",
      image: "gradient-3",
      tags: ["Smart Contracts", "Security", "Blockchain"]
    },
    {
      id: 4,
      title: "Venture Capital in Web3: Identifying Unicorns",
      excerpt: "Inside look at our investment thesis and how we evaluate breakthrough blockchain projects for exponential growth potential.",
      author: "Jennifer Wu",
      date: "May 20, 2025",
      readTime: "10 min read",
      category: "Venture Capital",
      image: "gradient-4",
      tags: ["VC", "Web3", "Investment"]
    },
    {
      id: 5,
      title: "Market Analysis: Crypto Cycles and Opportunity Zones",
      excerpt: "Deep dive into market patterns, technical indicators, and how ottr's algorithms identify optimal entry and exit points.",
      author: "David Kumar",
      date: "May 15, 2025",
      readTime: "7 min read",
      category: "Market Analysis",
      image: "gradient-5",
      tags: ["Markets", "Analysis", "Trading"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, blogPosts.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'DeFi Strategy': return <Coins className="w-4 h-4" />;
      case 'Quantitative Trading': return <BarChart3 className="w-4 h-4" />;
      case 'Development': return <Cpu className="w-4 h-4" />;
      case 'Venture Capital': return <TrendingUp className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getGradientClass = (image: string) => {
    switch (image) {
      case 'gradient-1': return 'from-blue-600 via-cyan-600 to-teal-600';
      case 'gradient-2': return 'from-purple-600 via-pink-600 to-red-600';
      case 'gradient-3': return 'from-green-600 via-emerald-600 to-cyan-600';
      case 'gradient-4': return 'from-orange-600 via-red-600 to-pink-600';
      case 'gradient-5': return 'from-indigo-600 via-purple-600 to-pink-600';
      default: return 'from-blue-600 to-cyan-600';
    }
  };

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Insights & Research
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into DeFi, quantitative strategies, and the future of digital assets
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-[500px] perspective-1000">
            {blogPosts.map((post, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              const isPrev = offset === -1 || (currentIndex === 0 && index === blogPosts.length - 1);
              const isNext = offset === 1 || (currentIndex === blogPosts.length - 1 && index === 0);
              
              return (
                <div
                  key={post.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive ? 'opacity-100 scale-100 z-10' : 
                    isPrev || isNext ? 'opacity-50 scale-90 z-5' : 
                    'opacity-0 scale-80 z-0'
                  }`}
                  style={{
                    transform: `translateX(${offset * 100}%) rotateY(${offset * -15}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="h-full bg-gray-900/30 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden group hover:border-gray-700 transition-all">
                    {/* Image Section */}
                    <div className={`h-48 bg-gradient-to-br ${getGradientClass(post.image)} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-6 flex items-center gap-2">
                        {getCategoryIcon(post.category)}
                        <span className="text-sm font-semibold">{post.category}</span>
                      </div>
                      
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-4">
                          <span>{post.author}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <button className="group/btn flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`

      `}</style>
    </div>
  );
};

export default OttrBlogSection;