import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import { createClient, Provider } from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InjectedConnector } from "wagmi/connectors/injected";

const wagmiClient = createClient({
  autoConnect: true,
  connectors() {
    return [new InjectedConnector()];
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Provider client={wagmiClient}>
        <Component {...pageProps} />
      </Provider>
    </NativeBaseProvider>
  );
}

export default MyApp;
