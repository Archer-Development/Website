import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-custom-secondary p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center max-w-screen-lg">
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mb-4"
          />
          <p className="text-white text-sm font-montserrat max-w-xs mb-4">
            Archer Security is a Discord bot designed for moderation and
            security, equipped with full moderation, ticket, and utility
            features.
          </p>
          <div className="flex items-center bg-custom-tertiary text-white text-xs font-montserrat px-3 py-2 rounded-full">
            Proudly hosted on
            <Image
              src="/Melonslab.svg"
              alt="Melonslab"
              width={80}
              height={24}
              className="ml-2"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 text-custom-quaternary font-montserrat">
          <div>
            <h4 className="text-custom-accent text-lg mb-4">Site</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-custom-accent text-white">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-custom-accent text-lg mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/facebook" className="text-white">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-custom-accent text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
