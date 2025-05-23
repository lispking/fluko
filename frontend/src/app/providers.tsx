'use client';

import { WalletKitProvider } from '@mysten/wallet-kit';
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletKitProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </WalletKitProvider>
  );
}