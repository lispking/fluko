'use client';

import { ConnectButton } from '@mysten/wallet-kit';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-2xl font-bold text-primary-600 hover:text-primary-700"
            >
              Fluko
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link 
                href="/generators" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Generators
              </Link>
              <Link 
                href="/analytics" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Analytics
              </Link>
              <Link 
                href="/tokens" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Tokens
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  );
}