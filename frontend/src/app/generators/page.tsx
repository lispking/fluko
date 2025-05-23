'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/react';
import Header from '@/components/Header';
import Generator from '@/components/Generator';

interface GeneratorData {
  id: string;
  name: string;
  description: string;
  analytics: {
    trendScore: number;
    socialImpact: number;
    marketPotential: number;
  };
}

export default function Generators() {
  const [showNewGenerator, setShowNewGenerator] = useState(false);
  const [generators, setGenerators] = useState<GeneratorData[]>([
    // Mock data - replace with actual data from blockchain
    {
      id: '1',
      name: 'Trending Memes 2024',
      description: 'Generator for viral meme trends',
      analytics: {
        trendScore: 85,
        socialImpact: 75,
        marketPotential: 90
      }
    },
    {
      id: '2',
      name: 'Crypto Memes',
      description: 'Blockchain and crypto themed memes',
      analytics: {
        trendScore: 92,
        socialImpact: 88,
        marketPotential: 95
      }
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Meme Generators</h1>
          <Button
            color="primary"
            onClick={() => setShowNewGenerator(!showNewGenerator)}
            size="lg"
          >
            {showNewGenerator ? 'Cancel' : 'Create New Generator'}
          </Button>
        </div>

        <div className="space-y-8">
          {showNewGenerator && (
            <div className="mb-8 p-8 shadow-lg rounded-xl bg-white">
              <h2 className="text-xl font-semibold mb-4">New Generator</h2>
              <Generator />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generators.map((generator) => (
              <div key={generator.id} className="space-y-4 p-6 shadow-lg rounded-xl bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{generator.name}</h3>
                <p className="text-gray-600">{generator.description}</p>
                <Generator
                  id={generator.id}
                  initialName={generator.name}
                  initialDescription={generator.description}
                  initialAnalytics={generator.analytics}
                />
              </div>
            ))}
          </div>

          {generators.length === 0 && !showNewGenerator && (
            <div className="text-center py-12 text-gray-600">
              <p className="text-gray-500">
                No generators found. Click &quot;Create New Generator&quot; to get started.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}