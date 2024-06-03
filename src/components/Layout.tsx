import Head from 'next/head';
import { ReactNode } from 'react';
import { MuseoModerno, Montserrat } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';
import '../app/globals.css';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  variable: '--font-museoModerno',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={`${museoModerno.variable} ${montserrat.variable}`}>
      <Head>
        <html lang="en" />
        <meta name="msapplication-TileColor" content="#F7768D" />
        <meta name="theme-color" content="#F7768D" />
        <meta name="title" content="Archer Security" />
        <meta
          name="description"
          content="Archer Security is a Discord bot designed for moderation and security, equipped with full moderation, ticket, and utility features."
        />
        <meta
          name="keywords"
          content="Discord Bot, Archer Security, Archer Bot, Security Bot, Archer, Discord Security Bot"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Archer Security" />
        <meta
          property="og:description"
          content="Archer Security is a Discord bot designed for moderation and security, equipped with full moderation, ticket, and utility features."
        />
        <meta property="og:url" content="https://www.archer.is/" />
        <meta property="og:site_name" content="Archer Security" />
        <meta property="og:image" content="https://www.archer.is/Banner.jpg" />
        <meta property="og:image:width" content="1360" />
        <meta property="og:image:height" content="480" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <title>Archer Security</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
