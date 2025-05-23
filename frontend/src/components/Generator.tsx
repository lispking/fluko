'use client';

import { useState } from 'react';
import { Button, Input, Slider, Tooltip } from '@nextui-org/react';
import { useWalletKit } from '@mysten/wallet-kit';
import { ContractService } from '@/utils/contracts';

interface GeneratorProps {
  id?: string;
  initialName?: string;
  initialDescription?: string;
  initialAnalytics?: {
    trendScore: number;
    socialImpact: number;
    marketPotential: number;
  };
}

export default function Generator({
  id,
  initialName = '',
  initialDescription = '',
  initialAnalytics = {
    trendScore: 0,
    socialImpact: 0,
    marketPotential: 0
  }
}: GeneratorProps) {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const [loading, setLoading] = useState(false);

  const { isConnected, signAndExecuteTransactionBlock } = useWalletKit();

  const contractService = new ContractService('https://fullnode.testnet.sui.io:443');

  const handleCreateOrUpdate = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    setLoading(true);
    try {
      if (id) {
        // Update existing generator
        await contractService.updateAnalytics(
          id,
          analytics.trendScore,
          analytics.socialImpact,
          analytics.marketPotential,
          signAndExecuteTransactionBlock
        );
      } else {
        // Create new generator
        await contractService.createGenerator(
          name,
          description,
          signAndExecuteTransactionBlock
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Transaction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyticsChange = (key: string, value: number) => {
    setAnalytics(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          <Input
            placeholder="Generator name"
            variant="bordered"
            value={name}
            onValueChange={setName}
            classNames={{
              input: [
                "bg-transparent",
                "[\&::placeholder]:text-default-700/50 dark:[\&::placeholder]:text-white/60",
                "text-base"
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-sm",
                "bg-default-100/50",
                "dark:bg-default/60",
                "backdrop-blur-sm",
                "backdrop-saturate-200",
                "hover:bg-default-100/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-100/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
                "rounded-md",
                "p-2"
              ],
            }}
          />

          <Input
            placeholder="Generator description"
            variant="bordered"
            value={description}
            onValueChange={setDescription}
            classNames={{
              input: [
                "bg-transparent",
                "[\&::placeholder]:text-default-700/50 dark:[\&::placeholder]:text-white/60",
                "text-base"
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-sm",
                "bg-default-100/50",
                "dark:bg-default/60",
                "backdrop-blur-sm",
                "backdrop-saturate-200",
                "hover:bg-default-100/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-100/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
                "rounded-md",
                "p-2"
              ],
            }}
          />
        </div>
      </div>

      {id && (
        <div className="space-y-6 pt-2">
          <div>
            <div className="flex justify-between mb-2 text-sm font-medium">
              <Tooltip content="Trend analysis based on social media and search trends">
                <span className="text-gray-700">Trend Score</span>
              </Tooltip>
              <span className="text-primary-600 font-semibold">{analytics.trendScore}%</span>
            </div>
            <Slider 
              size="sm" 
              step={1} 
              maxValue={100} 
              minValue={0} 
              aria-label="Trend Score Slider" 
              value={analytics.trendScore}
              onChange={(value) => handleAnalyticsChange('trendScore', Number(value))}
              color="primary"
              className="max-w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 text-sm font-medium">
              <Tooltip content="Evaluation of social media influence and community engagement">
                <span className="text-gray-700">Social Impact</span>
              </Tooltip>
              <span className="text-secondary-600 font-semibold">{analytics.socialImpact}%</span>
            </div>
            <Slider 
              size="sm" 
              step={1} 
              maxValue={100} 
              minValue={0} 
              aria-label="Social Impact Slider" 
              value={analytics.socialImpact}
              onChange={(value) => handleAnalyticsChange('socialImpact', Number(value))}
              color="secondary"
              className="max-w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 text-sm font-medium">
              <Tooltip content="Potential assessment based on market data and investor interest">
                <span className="text-gray-700">Market Potential</span>
              </Tooltip>
              <span className="text-success-600 font-semibold">{analytics.marketPotential}%</span>
            </div>
            <Slider 
              size="sm" 
              step={1} 
              maxValue={100} 
              minValue={0} 
              aria-label="Market Potential Slider" 
              value={analytics.marketPotential}
              onChange={(value) => handleAnalyticsChange('marketPotential', Number(value))}
              color="success"
              className="max-w-full"
            />
          </div>
        </div>
      )}

      <Button
        color="primary"
        onPress={handleCreateOrUpdate}
        isLoading={loading}
        className="w-full font-medium shadow-md hover:shadow-lg transition-shadow"
        size="lg"
        aria-label={id ? 'Update Analytics Data Button' : 'Create Generator Button'}
      >
        {id ? 'Update Analytics Data' : 'Create Generator'}
      </Button>
    </div>
  );
}