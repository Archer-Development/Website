import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMobileMenu();
    }
  };

  return (
    <>
      <nav className="bg-custom-secondary p-4" id="original-navbar">
        <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
          <div className="flex items-center">
            <Image
              src="/Logo.svg"
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
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-custom-accent hover:text-white font-montserrat"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex space-x-4 items-center">
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
              src="/Logo.svg"
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
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-custom-accent hover:text-white font-montserrat"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex space-x-4 items-center">
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
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85"
          onClick={handleBackdropClick}
        >
          <div className="bg-custom-secondary p-6 rounded-lg relative w-3/4 max-w-md mx-auto">
            <button
              onClick={closeMobileMenu}
              className="absolute top-2 right-2 text-custom-accent hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="space-y-3 text-center">
              <Link
                href="/contact"
                className="block text-custom-accent hover:text-white font-montserrat"
                onClick={closeMobileMenu}
              >
                Support
              </Link>
              <Link href="/signup" className="block">
                <button
                  className="w-full bg-custom-accent text-custom-primary font-montserrat py-2 rounded-full hover:bg-white hover:text-custom-accent transition duration-300"
                  onClick={closeMobileMenu}
                >
                  Add To Discord
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
