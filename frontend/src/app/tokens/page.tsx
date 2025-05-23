'use client';

import { useState } from 'react';
import { Card } from '@nextui-org/react';
import Header from '@/components/Header';
import Token from '@/components/Token';

interface TokenInfo {
  symbol: string;
  name: string;
  totalSupply: number;
  holders: number;
}

export default function Tokens() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>({
    symbol: 'FLUKO',
    name: 'Fluko Token',
    totalSupply: 1000000,
    holders: 150
  });

  // TODO: Replace with actual treasury cap ID from contract deployment
  const treasuryCapId = process.env.NEXT_PUBLIC_TREASURY_CAP_ID;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Token Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Symbol</h3>
            <p className="text-2xl font-bold text-primary-600">{tokenInfo.symbol}</p>
          </Card>

          <Card className="p-6 shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Name</h3>
            <p className="text-2xl font-bold text-primary-600">{tokenInfo.name}</p>
          </Card>

          <Card className="p-6 shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Total Supply</h3>
            <p className="text-2xl font-bold text-primary-600">
              {tokenInfo.totalSupply.toLocaleString()}
            </p>
          </Card>

          <Card className="p-6 shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Holders</h3>
            <p className="text-2xl font-bold text-primary-600">
              {tokenInfo.holders.toLocaleString()}
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mint Tokens</h2>
            <Token treasuryCapId={treasuryCapId} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Token Information</h2>
            <Card className="p-6 shadow-lg rounded-xl">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Fluko tokens are the native cryptocurrency of the Fluko platform, 
                  powered by Sui blockchain technology. These tokens are generated 
                  based on real-time analytics and market trends.
                </p>

                <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Analytics-driven token generation</li>
                  <li>Real-time market trend integration</li>
                  <li>Community-focused governance</li>
                  <li>Secure Sui blockchain infrastructure</li>
                </ul>

                <h4 className="text-lg font-semibold mt-4 mb-2">Usage:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Platform governance</li>
                  <li>Meme generator access</li>
                  <li>Community rewards</li>
                  <li>Trading and liquidity provision</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}