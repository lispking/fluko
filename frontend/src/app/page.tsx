'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@mysten/wallet-kit';
import { Card, Progress, Button, Tooltip } from '@nextui-org/react';
import Generator from '@/components/Generator';
import Image from 'next/image';

export default function Home() {
  const [analytics, setAnalytics] = useState({
    trendScore: 0,
    socialImpact: 0,
    marketPotential: 0
  });

  // Simulate data loading and animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalytics({
        trendScore: 78,
        socialImpact: 65,
        marketPotential: 82
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
              F
            </div>
            <h1 className="text-2xl font-display font-bold gradient-text">Fluko</h1>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">Features</a>
              <a href="#analytics" className="text-gray-700 hover:text-primary-600 font-medium">Analytics</a>
              <a href="#docs" className="text-gray-700 hover:text-primary-600 font-medium">Docs</a>
            </nav>
            <ConnectButton />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-display font-bold">
                <span className="gradient-text">Intelligent Meme Token</span>
                <br />Generation Platform
              </h1>
              <p className="text-lg text-gray-700 md:pr-12">
                An intelligent Meme token generation and analysis platform based on Fluxus Stream Processing Engine and Sui blockchain, perfectly combining your creativity with market trends.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="md"
                  color="primary"
                  className="font-medium text-sm shadow-md"
                  onPress={() => console.log('Start Creating')}
                  aria-label="Start Creating Button"
                >
                  Start Creating
                </Button>
                <Button 
                  size="md"
                  variant="bordered"
                  color="primary"
                  className="font-medium text-sm shadow-md"
                  onPress={() => console.log('Learn More')}
                  aria-label="Learn More Button"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative glass-card p-8 animate-float">
                <div className="text-2xl font-display font-bold mb-6 text-gray-800">Create Meme Token Generator</div>
                <Generator />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Leverage real-time data analysis and blockchain technology to create Meme tokens with the highest market potential.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 hover:shadow-neon transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Trend Analysis Icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Trend Analysis</h3>
              <p className="text-gray-700">Real-time analysis based on social media and market data to capture the latest trends.</p>
            </Card>
            
            <Card className="glass-card p-6 hover:shadow-neon transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Token Generation Icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Intelligent Token Generation</h3>
              <p className="text-gray-700">Automatically optimize token parameters and create the best tokens based on data-driven decisions.</p>
            </Card>
            
            <Card className="glass-card p-6 hover:shadow-neon transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Community Engagement Icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-gray-700">Analyze community engagement and interaction to predict the social impact of tokens.</p>
            </Card>
          </div>
        </section>

        {/* Analytics Dashboard Section */}
        <section id="analytics" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">Data-Driven Analytics</h2>
              <p className="text-lg text-gray-700">Understand the performance and potential of your Meme tokens in the market through real-time data analysis.</p>
              
              <Card className="glass-card p-8 shadow-xl">
                <div className="space-y-8">
                  <div>
                    <Tooltip content="Trend analysis based on social media and search trends">
                      <div className="flex justify-between mb-3 text-lg font-medium text-gray-700">
                        <span>Trend Score</span>
                        <span>{analytics.trendScore}%</span>
                      </div>
                    </Tooltip>
                    <Progress
                      value={analytics.trendScore}
                      color="primary"
                      className="max-w-full"
                      size="lg"
                      radius="sm"
                      showValueLabel={false}
                      aria-label="Trend Score Progress Bar"
                    />
                  </div>

                  <div>
                    <Tooltip content="Evaluation of social media influence and community engagement">
                      <div className="flex justify-between mb-3 text-lg font-medium text-gray-700">
                        <span>Social Impact</span>
                        <span>{analytics.socialImpact}%</span>
                      </div>
                    </Tooltip>
                    <Progress
                      value={analytics.socialImpact}
                      color="secondary"
                      className="max-w-full"
                      size="lg"
                      radius="sm"
                      showValueLabel={false}
                      aria-label="Social Impact Progress Bar"
                    />
                  </div>

                  <div>
                    <Tooltip content="Potential assessment based on market data and investor interest">
                      <div className="flex justify-between mb-3 text-lg font-medium text-gray-700">
                        <span>Market Potential</span>
                        <span>{analytics.marketPotential}%</span>
                      </div>
                    </Tooltip>
                    <Progress
                      value={analytics.marketPotential}
                      color="success"
                      className="max-w-full"
                      size="lg"
                      radius="sm"
                      showValueLabel={false}
                      aria-label="Market Potential Progress Bar"
                    />
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary-200 to-accent-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative animated-gradient rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-black/10 backdrop-blur-sm p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-display font-bold mb-4">Real-time Data Visualization</div>
                    <p className="text-lg opacity-80">Real-time data charts and visualizations will be displayed here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm">
                  F
                </div>
                <h2 className="text-xl font-display font-bold">Fluko</h2>
              </div>
              <p className="text-gray-400">Intelligent Meme Token Generation and Analysis Platform</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2025 Fluko. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}