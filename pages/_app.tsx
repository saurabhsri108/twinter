import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NativeBaseProvider } from 'native-base';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <NativeBaseProvider><Component {...pageProps} /></NativeBaseProvider>
}

export default MyApp
