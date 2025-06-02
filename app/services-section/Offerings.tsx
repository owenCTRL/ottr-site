import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Brain, 
  Code, 
  Rocket, 
  ChevronRight, 
  Shield,
  BarChart3,
  Zap,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Activity,
  Layers,
  Globe
} from 'lucide-react';

interface Offering {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stats: { label: string; value: string }[];
}

interface BreakdownStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const OttrOfferingsSection: React.FC = () => {
  const [activeOffering, setActiveOffering] = useState<string>('asset-management');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({
    protection: 0,
    upside: 0,
    efficiency: 0
  });

  const offerings: Offering[] = [
    {
      id: 'asset-management',
      title: 'Asset Management',
      description: 'Institutional-grade portfolio management with AI-driven optimization and risk controls.',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-blue-600 to-cyan-600',
      stats: [
        { label: 'AUM', value: '$2.4B+' },
        { label: 'Avg. Return', value: '127%' }
      ]
    },
    {
      id: 'quantitative',
      title: 'Quantitative Investing',
      description: 'Advanced algorithmic strategies leveraging machine learning and real-time data analysis.',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-purple-600 to-pink-600',
      stats: [
        { label: 'Algorithms', value: '50+' },
        { label: 'Data Points/Sec', value: '1M+' }
      ]
    },
    {
      id: 'software',
      title: 'Software Development',
      description: 'Cutting-edge fintech solutions and blockchain infrastructure for the digital economy.',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-green-600 to-emerald-600',
      stats: [
        { label: 'Smart Contracts', value: '200+' },
        { label: 'Transactions', value: '10M+' }
      ]
    },
    {
      id: 'venture',
      title: 'Venture Capital',
      description: 'Strategic investments in breakthrough blockchain and DeFi projects.',
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'from-orange-600 to-red-600',
      stats: [
        { label: 'Portfolio Cos', value: '45+' },
        { label: 'Avg. Multiple', value: '12x' }
      ]
    }
  ];

  const breakdownSteps: BreakdownStep[] = [
    {
      step: 1,
      title: 'Dynamic Risk Assessment',
      description: 'AI models analyze market volatility and set maximum drawdown limits in real-time',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-blue-500'
    },
    {
      step: 2,
      title: 'Smart Position Sizing',
      description: 'Algorithmic allocation based on risk/reward ratios and correlation analysis',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'text-purple-500'
    },
    {
      step: 3,
      title: 'Automated Hedging',
      description: 'Options strategies and derivatives protect capital during market downturns',
      icon: <Lock className="w-5 h-5" />,
      color: 'text-green-500'
    },
    {
      step: 4,
      title: 'Profit Optimization',
      description: 'Machine learning captures momentum while preserving unlimited upside potential',
      icon: <Zap className="w-5 h-5" />,
      color: 'text-orange-500'
    }
  ];

  useEffect(() => {
    // Animate values
    const timer = setTimeout(() => {
      setAnimatedValues({
        protection: 85,
        upside: 100,
        efficiency: 92
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const activeOfferingData = offerings.find(o => o.id === activeOffering);

  return (
    <div className="min-h-screen rounded-3xl bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-20 px-6" id="offerings">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive financial technology solutions powered by cutting-edge AI and blockchain
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeOffering === offering.id ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveOffering(offering.id)}
              onMouseEnter={() => setHoveredCard(offering.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${offering.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className={`relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border ${
                activeOffering === offering.id ? 'border-blue-500' : 'border-gray-800'
              } transition-all duration-300`}>
                <div className={`inline-flex p-3 bg-gradient-to-r ${offering.gradient} rounded-xl mb-4`}>
                  {offering.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{offering.description}</p>
                <div className="flex justify-between items-center">
                  {offering.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className={`absolute top-4 right-4 transition-transform duration-300 ${
                  hoveredCard === offering.id ? 'translate-x-1' : ''
                }`}>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Offering Detail */}
        {activeOfferingData && (
          <div className="mb-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className={`inline-flex p-3 bg-gradient-to-r ${activeOfferingData.gradient} rounded-xl mr-4`}>
                {activeOfferingData.icon}
              </div>
              <h3 className="text-2xl font-bold">{activeOfferingData.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-300 mb-4">{activeOfferingData.description}</p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gray-800 rounded-xl font-semibold hover:bg-gray-700 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <h4 className="text-sm text-gray-400 mb-4">Performance Metrics</h4>
                {activeOfferingData.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center mb-3">
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Crypto SSIM Breakdown Preview */}
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Crypto SSIM Works
            </h2>
            <p className="text-xl text-gray-400">
              Mathematical protection meets unlimited growth potential
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Breakdown Steps */}
            <div className="space-y-6">
              {breakdownSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex gap-4 group"
                  style={{ 
                    opacity: 0,
                    animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    {index < breakdownSteps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-gray-800 -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual Representation */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-6">Performance Visualization</h3>
              
              {/* Risk/Reward Chart */}
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-green-500/10 rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-red-500/20 rounded-b-xl flex items-center justify-center">
                  <div className="text-center">
                    <ArrowDownRight className="w-6 h-6 text-red-500 mx-auto mb-1" />
                    <p className="text-sm font-semibold text-red-500">Max Loss: -15%</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-2/3 flex items-center justify-center">
                  <div className="text-center">
                    <ArrowUpRight className="w-8 h-8 text-green-500 mx-auto mb-1 animate-pulse" />
                    <p className="text-lg font-semibold text-green-500">Unlimited Upside</p>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Downside Protection</span>
                    <span className="text-sm font-semibold">{animatedValues.protection}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${animatedValues.protection}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Upside Capture</span>
                    <span className="text-sm font-semibold">{animatedValues.upside}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${animatedValues.upside}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Capital Efficiency</span>
                    <span className="text-sm font-semibold">{animatedValues.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${animatedValues.efficiency}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                View Full Breakdown
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Globe className="w-6 h-6" />, value: '150+', label: 'Countries' },
            { icon: <DollarSign className="w-6 h-6" />, value: '$2.4B+', label: 'Total Value Locked' },
            { icon: <Activity className="w-6 h-6" />, value: '24/7', label: 'Active Trading' },
            { icon: <Layers className="w-6 h-6" />, value: '50+', label: 'Trading Pairs' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OttrOfferingsSection;