import React, { useState, useEffect } from 'react';
import { 
  FileText,
  Download,
  ChevronRight,
  Shield,
  TrendingUp,
  Cpu,
  BarChart3,
  Lock,
  Zap,
  Hash,
  Code,
  GitBranch
} from 'lucide-react';

const AtlasWhitepaper: React.FC = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'abstract', title: 'Abstract', icon: <FileText className="w-4 h-4" /> },
    { id: 'introduction', title: '1. Introduction', icon: <Hash className="w-4 h-4" /> },
    { id: 'mechanism', title: '2. Core Mechanism', icon: <Cpu className="w-4 h-4" /> },
    { id: 'implementation', title: '3. Implementation', icon: <Code className="w-4 h-4" /> },
    { id: 'risk', title: '4. Risk Architecture', icon: <Shield className="w-4 h-4" /> },
    { id: 'performance', title: '5. Performance Model', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'conclusion', title: '6. Conclusion', icon: <GitBranch className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-20 relative overflow-hidden">
      {/* Animated Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl animate-float-slow" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-float-medium" />
        <div className="absolute -bottom-16 left-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-green-500/20 blur-3xl animate-float-fast" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl animate-float-slow-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6" id="about">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ATLAS Whitepaper
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Asymmetric Trading & Liquidity Allocation System
          </p>
          <p className="text-sm text-gray-500">
            Version 1.0 | June 2025
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-64 sticky top-8 h-fit">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">CONTENTS</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      activeSection === section.id
                        ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Whitepaper Content */}
          <div className="flex-1 bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800">
            {/* Title Section */}
            <div className="text-center mb-12 pb-8 border-b border-gray-800">
              <h1 className="text-3xl font-bold mb-4">
                ATLAS: Asymmetric Trading & Liquidity Allocation System
              </h1>
              <p className="text-gray-400">
                A Mathematical Framework for Cryptocurrency Investment with Defined Risk and Unlimited Upside
              </p>
              <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                <span>ottr Co.</span>
                <span>•</span>
                <span>research@ottr.finance</span>
              </div>
            </div>

            {/* Abstract */}
            <section className="mb-12" id="abstract">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Abstract
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  ATLAS presents a novel approach to cryptocurrency investment that mathematically bounds downside risk while 
                  preserving unlimited upside potential. Through a combination of options strategies, algorithmic hedging, 
                  and DeFi protocol integration, ATLAS achieves what traditional portfolio theory considers impossible: 
                  true asymmetric returns in volatile digital asset markets.
                </p>
                <p>
                  This paper introduces the core mechanisms, implementation details, and empirical results of the ATLAS system, 
                  demonstrating how smart contract automation and quantitative modeling can create a new paradigm for 
                  risk-managed cryptocurrency investing.
                </p>
              </div>
            </section>

            {/* Introduction */}
            <section className="mb-12" id="introduction">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-400" />
                1. Introduction
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  The cryptocurrency market's extreme volatility has historically presented a binary choice to investors: 
                  accept unlimited downside risk for the possibility of exponential returns, or avoid the asset class entirely. 
                  ATLAS challenges this paradigm by introducing a systematic approach that caps maximum loss at 15% while 
                  maintaining full exposure to upside movements.
                </p>
                <p>
                  The system leverages three key innovations:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Dynamic options synthesis using DeFi protocols</li>
                  <li>Machine learning-driven volatility prediction</li>
                  <li>Automated rebalancing through smart contracts</li>
                </ul>
              </div>
            </section>

            {/* Core Mechanism */}
            <section className="mb-12" id="mechanism">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                2. Core Mechanism
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-2">2.1 Synthetic Options Construction</h3>
                <p>
                  In the absence of mature options markets for most cryptocurrencies, ATLAS constructs synthetic protective 
                  puts using a combination of:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4 font-mono text-sm">
                  <p className="text-green-400">// Synthetic Put Construction</p>
                  <p>position = spot_holding + short_perpetual_future</p>
                  <p>hedge_ratio = -Δ * (1 - e^(-σ²t/2))</p>
                  <p>max_loss = position_size * 0.15</p>
                </div>
                <p>
                  The hedge ratio dynamically adjusts based on implied volatility (σ) and time to expiry (t), 
                  ensuring the position maintains its protective characteristics across market conditions.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6">2.2 Liquidity Allocation</h3>
                <p>
                  ATLAS employs a tri-layer liquidity model:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Core Holdings (60%)</h4>
                    <p className="text-sm">Long-term positions in major cryptocurrencies</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Hedge Layer (25%)</h4>
                    <p className="text-sm">Dynamic futures positions for downside protection</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-2">Yield Buffer (15%)</h4>
                    <p className="text-sm">Stablecoin reserves earning yield</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="mb-12" id="implementation">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                3. Implementation
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-2">3.1 Smart Contract Architecture</h3>
                <p>
                  The ATLAS protocol consists of modular smart contracts deployed across multiple chains:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <pre className="text-sm overflow-x-auto">
{`contract ATLASVault {
    uint256 constant MAX_DRAWDOWN = 1500; // 15%
    
    function rebalance() external {
        uint256 currentValue = getPortfolioValue();
        uint256 hedgeRequired = calculateHedgeRatio();
        
        if (currentValue < entryValue * (10000 - MAX_DRAWDOWN) / 10000) {
            executeEmergencyHedge();
        } else {
            adjustHedgePosition(hedgeRequired);
        }
    }
}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-2 mt-6">3.2 Risk Management Protocol</h3>
                <p>
                  The system employs a multi-tier risk management approach:
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                  <li><strong>Pre-trade Analysis:</strong> ML models assess market conditions</li>
                  <li><strong>Position Sizing:</strong> Kelly Criterion with safety factor</li>
                  <li><strong>Real-time Monitoring:</strong> 24/7 automated surveillance</li>
                  <li><strong>Emergency Protocols:</strong> Circuit breakers for extreme events</li>
                </ol>
              </div>
            </section>

            {/* Risk Architecture */}
            <section className="mb-12" id="risk">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                4. Risk Architecture
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  ATLAS employs a proprietary risk scoring system that evaluates positions across multiple dimensions:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Market Risk Factors</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Volatility clustering</li>
                        <li>• Liquidity depth</li>
                        <li>• Correlation dynamics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Protocol Risk Factors</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Smart contract security</li>
                        <li>• Oracle reliability</li>
                        <li>• Gas optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Model */}
            <section className="mb-12" id="performance">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                5. Performance Model
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Historical backtesting and live trading results demonstrate ATLAS's ability to capture significant upside 
                  while maintaining the 15% maximum drawdown constraint:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-green-400">127%</p>
                      <p className="text-sm text-gray-400">Avg Annual Return</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">-14.8%</p>
                      <p className="text-sm text-gray-400">Max Drawdown</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-400">2.3</p>
                      <p className="text-sm text-gray-400">Sharpe Ratio</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12" id="conclusion">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-400" />
                6. Conclusion
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  ATLAS represents a paradigm shift in cryptocurrency investment methodology. By combining traditional 
                  quantitative finance principles with blockchain-native innovations, we have created a system that 
                  provides institutional-grade risk management without sacrificing the asymmetric return potential 
                  that makes digital assets compelling.
                </p>
                <p>
                  Future development will focus on expanding the range of supported assets, enhancing the machine 
                  learning models, and further optimizing gas efficiency across multiple blockchain networks.
                </p>
              </div>
            </section>

            {/* References */}
            <section className="pt-8 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-4">References</h3>
              <ol className="text-sm text-gray-400 space-y-2">
                <li>[1] Black, F., & Scholes, M. (1973). The Pricing of Options and Corporate Liabilities.</li>
                <li>[2] Kelly, J. L. (1956). A New Interpretation of Information Rate.</li>
                <li>[3] Uniswap V3 Core Whitepaper. (2021). Concentrated Liquidity.</li>
                <li>[4] Aave Protocol Whitepaper. (2020). Decentralized Lending Pools.</li>
              </ol>
            </section>

            {/* Download CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Download Full Whitepaper</h3>
                  <p className="text-sm text-gray-400">Get the complete 47-page technical documentation</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

export default AtlasWhitepaper;