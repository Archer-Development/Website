import type { AppProps } from 'next/app';
import RootLayout from '../components/Layout';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
