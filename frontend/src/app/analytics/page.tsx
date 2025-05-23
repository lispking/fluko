'use client';

import { useState, useEffect } from 'react';
import { Card } from '@nextui-org/react';
import Header from '@/components/Header';

interface AnalyticsData {
  trendScore: number;
  socialImpact: number;
  marketPotential: number;
  timestamp: string;
}

export default function Analytics() {
  const [analyticsHistory, setAnalyticsHistory] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    // TODO: Implement real-time analytics data fetching
    const mockData: AnalyticsData[] = [
      {
        trendScore: 85,
        socialImpact: 72,
        marketPotential: 90,
        timestamp: '2024-02-01'
      },
      {
        trendScore: 78,
        socialImpact: 68,
        marketPotential: 85,
        timestamp: '2024-01-31'
      },
      // Add more historical data as needed
    ];

    setAnalyticsHistory(mockData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Trend Analysis</h2>
            <div className="space-y-4">
              {analyticsHistory.map((data, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{data.timestamp}</span>
                  <span className="font-semibold">{data.trendScore}%</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Social Impact</h2>
            <div className="space-y-4">
              {analyticsHistory.map((data, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{data.timestamp}</span>
                  <span className="font-semibold">{data.socialImpact}%</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Market Potential</h2>
            <div className="space-y-4">
              {analyticsHistory.map((data, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{data.timestamp}</span>
                  <span className="font-semibold">{data.marketPotential}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Performance Insights</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Based on the current analytics data, your Meme token shows strong market potential 
              with consistently high trend scores. The social impact metrics indicate growing 
              community engagement, while market indicators suggest favorable conditions for 
              token value appreciation.
            </p>
            <ul className="mt-4 space-y-2">
              <li>Strong social media presence and engagement</li>
              <li>Positive market sentiment indicators</li>
              <li>Growing community participation</li>
              <li>Favorable market conditions for growth</li>
            </ul>
          </div>
        </Card>
      </main>
    </div>
  );
}