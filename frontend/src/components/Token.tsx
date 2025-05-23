'use client';

import { useState } from 'react';
import { Card, Button, Input } from '@nextui-org/react';
import { useWalletKit } from '@mysten/wallet-kit';
import { ContractService } from '@/utils/contracts';

interface TokenProps {
  treasuryCapId?: string;
}

export default function Token({ treasuryCapId }: TokenProps) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);

  const { isConnected, signAndExecuteTransactionBlock } = useWalletKit();
  const contractService = new ContractService('https://fullnode.testnet.sui.io:443');

  const handleMint = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    if (!treasuryCapId) {
      alert('Treasury Cap ID is required');
      return;
    }

    const amountNumber = parseInt(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (!recipient) {
      alert('Please enter a recipient address');
      return;
    }

    setLoading(true);
    try {
      await contractService.mintToken(
        treasuryCapId,
        amountNumber,
        recipient,
        signAndExecuteTransactionBlock
      );

      // Clear form after successful mint
      setAmount('');
      setRecipient('');
      alert('Tokens minted successfully!');
    } catch (error) {
      console.error('Error minting tokens:', error);
      alert('Failed to mint tokens. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-xl font-semibold">Mint Tokens</h3>

      <div className="space-y-4">
        <Input
          type="number"
          label="Amount"
          placeholder="Enter amount to mint"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />

        <Input
          label="Recipient Address"
          placeholder="Enter recipient's Sui address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <Button
          color="primary"
          onClick={handleMint}
          isLoading={loading}
          className="w-full"
          disabled={!treasuryCapId}
        >
          Mint Tokens
        </Button>

        {!treasuryCapId && (
          <p className="text-sm text-gray-500 text-center">
            Treasury Cap ID is required to mint tokens
          </p>
        )}
      </div>
    </Card>
  );
}