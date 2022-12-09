import {
  EthereumClient,
  modalConnectors,
  // walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { infuraProvider } from 'wagmi/providers/infura'

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import Test from "./Test";
import HomPage from "../Pages/HomPage";

const chains = [chain.goerli];
// const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum];

// Wagmi client
const { provider } = configureChains(chains, [
  infuraProvider({ apiKey: 'c780b7e9416640ac8550712b8ed6c1ac' }),
  // walletConnectProvider({ projectId: "7ce11e8082948a3f6b58b9701c6c62f0" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});
// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const Web3Madal = () => {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <HomPage />
        {/* <Test /> */}
      </WagmiConfig>

      <Web3Modal
        projectId="7ce11e8082948a3f6b58b9701c6c62f0"
        ethereumClient={ethereumClient}
        themeColor="teal"
        themeMode="dark"
      />
    </>
  )
}
export default Web3Madal;