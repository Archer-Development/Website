import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setShowStickyNavbar(true);
      } else if (currentScrollY < lastScrollY && currentScrollY <= 100) {
        setShowStickyNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className="bg-custom-secondary p-4" id="original-navbar">
        <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="bg-custom-tertiary text-white text-xs font-semibold px-2 py-1 rounded-full">
              v0.1.0
            </span>
          </div>
          <div className="space-x-4 flex items-center">
            <Link
              href="/contact"
              className="text-custom-accent hover:text-white font-montserrat"
            >
              Support
            </Link>
            <Link href="/signup">
              <button className="bg-custom-accent text-custom-primary font-montserrat py-2 px-4 rounded-full hover:bg-white hover:text-custom-accent transition duration-300">
                Add To Discord
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav
        className={`bg-custom-secondary p-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showStickyNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
        id="sticky-navbar"
      >
        <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="bg-custom-tertiary text-white text-xs font-semibold px-2 py-1 rounded-full">
              v0.1.0
            </span>
          </div>
          <div className="space-x-4 flex items-center">
            <Link
              href="/contact"
              className="text-custom-accent hover:text-white font-montserrat"
            >
              Support
            </Link>
            <Link href="/signup">
              <button className="bg-custom-accent text-custom-primary font-montserrat py-2 px-4 rounded-full hover:bg-white hover:text-custom-accent transition duration-300">
                Add To Discord
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
