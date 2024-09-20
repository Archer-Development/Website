import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>Archer Security</title>
      </Head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  );
}
