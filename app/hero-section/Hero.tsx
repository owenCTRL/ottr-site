import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Shield, Zap, Lock, ChartLine, Coins, ArrowRight } from 'lucide-react';

interface TickerItem {
  symbol: string;
  price: string;
  change: number;
  isPositive: boolean;
}

interface PerformanceMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const OttrHero: React.FC = () => {
  const [tickerItems] = useState<TickerItem[]>([
    { symbol: 'BTC/USDT', price: '$68,924', change: 5.67, isPositive: true },
    { symbol: 'ETH/USDT', price: '$3,847', change: 3.21, isPositive: true },
    { symbol: 'SOL/USDT', price: '$187.42', change: -1.24, isPositive: false },
    { symbol: 'AVAX/USDT', price: '$42.18', change: 7.89, isPositive: true },
    { symbol: 'MATIC/USDT', price: '$1.12', change: -0.32, isPositive: false },
    { symbol: 'DOT/USDT', price: '$7.84', change: 2.45, isPositive: true },
    { symbol: 'LINK/USDT', price: '$15.67', change: 4.12, isPositive: true },
    { symbol: 'ADA/USDT', price: '$0.68', change: -2.87, isPositive: false },
  ]);

  const [glowStates, setGlowStates] = useState<{ [key: string]: boolean }>({});
  const [activeMetric, setActiveMetric] = useState(0);

  const performanceMetrics: PerformanceMetric[] = [
    { label: 'Total Value Protected', value: '$2.4B+', icon: <Shield className="w-5 h-5" /> },
    { label: 'Maximum Drawdown', value: '-15%', icon: <Lock className="w-5 h-5" /> },
    { label: 'Average APY', value: '127%', icon: <ChartLine className="w-5 h-5" /> },
    { label: 'Active Strategies', value: '24/7', icon: <Zap className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    tickerItems.forEach((item) => {
      const interval = setInterval(() => {
        setGlowStates(prev => ({
          ...prev,
          [item.symbol]: Math.random() > 0.5
        }));
      }, Math.random() * 2000 + 1000);
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [tickerItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % performanceMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [performanceMetrics.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Orbs Background - Continuous Effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Large orb - top left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl animate-float-slow" />
          
          {/* Medium orb - top right */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-float-medium" />
          
          {/* Small orb - bottom left */}
          <div className="absolute -bottom-16 left-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-green-500/20 blur-3xl animate-float-fast" />
          
          {/* Large orb - bottom right */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl animate-float-slow-reverse" />
          
          {/* Center orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse-slow" />
        </div>
      {/* Stock Ticker */}
      <div className="relative w-full h-16 overflow-hidden" id="home">
        <div className="absolute inset-0"></div>
        <div className="flex h-full">
          <div className="flex animate-scroll">
            {/* Render items twice for seamless loop */}
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={`${item.symbol}-${index}`} className="flex items-center px-6 h-full whitespace-nowrap">
                <Coins className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium mr-2">{item.symbol}</span>
                <span className="text-gray-300 mr-3 font-mono">{item.price}</span>
                <div className="flex items-center">
                  <div 
                    className={`w-2 h-2 rounded-full mr-2 transition-all duration-300 ${
                      item.isPositive ? 'bg-green-500' : 'bg-red-500'
                    } ${
                      glowStates[item.symbol] 
                        ? `shadow-[0_0_10px_${item.isPositive ? '#10b981' : '#ef4444'}]` 
                        : ''
                    }`}
                    style={{
                      boxShadow: glowStates[item.symbol] 
                        ? `0 0 10px ${item.isPositive ? '#10b981' : '#ef4444'}, 0 0 20px ${item.isPositive ? '#10b981' : '#ef4444'}`
                        : 'none'
                    }}
                  />
                  <span className={`font-semibold text-sm ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {item.isPositive ? '+' : ''}{item.change}%
                  </span>
                  {item.isPositive ? (
                    <TrendingUp className="ml-1 w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="ml-1 w-3 h-3 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ottr
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="block opacity-0 animate-fadeInUp">
              ATLAS
            </span>
            <span className="block mt-2 opacity-0 animate-fadeInUp animation-delay-200">
              <span className="text-red-500">Capped</span> Downside.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Unlimited
              </span>{' '}
              Upside.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 opacity-0 animate-fadeInUp animation-delay-400">
            Asymmetrics Trading & Liquidity Allocation System (ATLAS):<br></br>
            <span className="text-white font-semibold"> Mathematical protection</span> meets 
            <span className="text-white font-semibold"> exponential growth</span> potential 
            in a revolutionary DeFi investment framework.
          </p>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0 animate-fadeInUp animation-delay-500">
            {performanceMetrics.map((metric, index) => (
              <div 
                key={metric.label}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-4 border transition-all duration-500 ${
                  activeMetric === index 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-center mb-2 text-blue-400">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center justify-center">
                Start Investing
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20">
              <span className="relative z-10">View Live Performance</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-0 animate-fadeInUp animation-delay-700">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Audited Smart Contracts</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>150+ Countries</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span>24/7 Automated</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -60px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.95); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 30px) scale(1.05); }
          50% { transform: translate(20px, -50px) scale(0.95); }
          75% { transform: translate(-30px, -20px) scale(1.1); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(40px, -30px) scale(1.1); }
          40% { transform: translate(-20px, 40px) scale(0.9); }
          60% { transform: translate(30px, 20px) scale(1.05); }
          80% { transform: translate(-40px, -40px) scale(0.95); }
        }

        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 60px) scale(0.95); }
          66% { transform: translate(40px, -40px) scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OttrHero;