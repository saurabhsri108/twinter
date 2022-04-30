import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, NativeBaseProvider } from "native-base";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Box height="100%" bg="muted.50">
        <Component {...pageProps} />
      </Box>
    </NativeBaseProvider>
  );
}

export default MyApp;
