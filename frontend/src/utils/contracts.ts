import { TransactionBlock } from '@mysten/sui.js/transactions';
import { SuiClient } from '@mysten/sui.js/client';

// TODO: Update with actual contract address after deployment
const GENERATOR_PACKAGE = '0xd7df22e3d7986fc67ad49b4d2f538849e42c7b40734f5cf3209842c24a850c76';
const GENERATOR_MODULE = 'meme_generator';
const TOKEN_MODULE = 'meme_token';

export class ContractService {
  private client: SuiClient;

  constructor(rpcUrl: string) {
    this.client = new SuiClient({ url: rpcUrl });
  }

  async createGenerator(name: string, description: string, signer: any) {
    try {
      const tx = new TransactionBlock();
      
      tx.moveCall({
        target: `${GENERATOR_PACKAGE}::${GENERATOR_MODULE}::create_generator`,
        arguments: [
          tx.pure(name),
          tx.pure(description)
        ]
      });

      const result = await signer({
        transactionBlock: tx
      });

      return result;
    } catch (error) {
      console.error('Error creating generator:', error);
      throw error;
    }
  }

  async updateAnalytics(generatorId: string, trendScore: number, socialImpact: number, marketPotential: number, signer: any) {
    try {
      const tx = new TransactionBlock();
      
      tx.moveCall({
        target: `${GENERATOR_PACKAGE}::${GENERATOR_MODULE}::update_analytics`,
        arguments: [
          tx.pure(generatorId),
          tx.pure(trendScore),
          tx.pure(socialImpact),
          tx.pure(marketPotential)
        ]
      });

      const result = await signer({
        transactionBlock: tx
      });

      return result;
    } catch (error) {
      console.error('Error updating analytics:', error);
      throw error;
    }
  }

  async mintToken(treasuryCapId: string, amount: number, recipient: string, signer: any) {
    try {
      const tx = new TransactionBlock();
      
      tx.moveCall({
        target: `${GENERATOR_PACKAGE}::${TOKEN_MODULE}::mint`,
        arguments: [
          tx.pure(treasuryCapId),
          tx.pure(amount),
          tx.pure(recipient)
        ]
      });

      const result = await signer({
        transactionBlock: tx
      });

      return result;
    } catch (error) {
      console.error('Error minting token:', error);
      throw error;
    }
  }
}