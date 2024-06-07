import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

type FooterItem = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterCategory = {
  title: string;
  items: FooterItem[];
};

const footerCategories: FooterCategory[] = [
  {
    title: 'Site',
    items: [{ label: 'Home', href: '/' }],
  },
  {
    title: 'Social',
    items: [
      {
        label: 'Support',
        href: 'https://discord.com/invite/8YX966BGSc',
        external: true,
      },
      {
        label: 'Add To Discord',
        href: 'https://discord.com/oauth2/authorize?client_id=724205594294353980',
        external: true,
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

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
          <Link
            href="https://www.melonslab.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Melonslab Link"
          >
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
          </Link>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 text-custom-quaternary font-montserrat">
          {footerCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-custom-accent text-lg mb-4">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      aria-label={`${item.label} Link`}
                    >
                      <span className="text-white hover:text-custom-accent">
                        {item.external && (
                          <FiExternalLink className="inline-block mr-1" />
                        )}
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
