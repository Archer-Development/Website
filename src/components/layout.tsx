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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${museoModerno.variable} ${montserrat.variable}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
