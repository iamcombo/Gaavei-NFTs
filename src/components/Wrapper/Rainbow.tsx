import type { ReactNode } from "react";
import { publicProvider } from 'wagmi/providers/public';
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { bscTestnet } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

const Rainbow = ({ children }: { children: ReactNode}) => {
  const { chains, provider } = configureChains(
    [bscTestnet],
    [
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        {children}
      </RainbowKitProvider>
    </WagmiConfig>

  );
};

export default Rainbow;