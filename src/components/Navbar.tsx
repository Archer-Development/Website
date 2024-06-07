import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

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
                aria-label="Open mobile menu"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden lg:flex space-x-4 items-center">
              <Link
                href="/"
                className="text-custom-accent hover:text-white font-montserrat"
                aria-label="Home Link"
              >
                Home
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
                aria-label="Open mobile menu"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden lg:flex space-x-4 items-center">
              <Link
                href="/"
                className="text-custom-accent hover:text-white font-montserrat"
                aria-label="Home Link"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85"
          onClick={handleBackdropClick}
          aria-label="Mobile menu backdrop"
          role="button"
          tabIndex={0}
        >
          <div className="bg-custom-secondary p-6 rounded-lg relative w-3/4 max-w-md mx-auto">
            <button
              onClick={closeMobileMenu}
              className="absolute top-2 right-2 text-custom-accent hover:text-white"
              aria-label="Close mobile menu"
            >
              <FiX className="w-6 h-6" />
            </button>
            <div className="space-y-3 text-center">
              <Link
                href="/"
                className="block text-custom-accent hover:text-white font-montserrat"
                onClick={closeMobileMenu}
                aria-label="Home Link"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
