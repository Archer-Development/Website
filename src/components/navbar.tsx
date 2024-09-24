"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [botOnline, setBotOnline] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const fetchBotStatus = async () => {
            try {
                const response = await fetch('/api/status');
                const data = await response.json();
                setBotOnline(data.status === 'online');
            } catch (error) {
                console.error(error);
            }
        };

        fetchBotStatus();
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-[rgba(45,48,77,0.23)] p-4 fixed left-0 right-0 z-50 shadow-lg backdrop-blur-md w-full">
                <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                    {/* Left side: Logo */}
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/Logo.ico"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        {/* Left side: Text and version */}
                        <div className="flex items-center space-x-4">
                            <span className="text-white text-xl font-bold">
                                Archer
                            </span>
                            <span className="bg-custom-tertiary text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                                {/* this will have a dot that will be green if online and red if offline */}
                                <div
                                    className={`w-2 h-2 rounded-full mr-1 ${botOnline ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                />v0.1.0
                            </span>
                        </div>
                    </div>

                    {/* Right side: Navigation links / Hamburger menu */}
                    <div className="flex items-center space-x-4">
                        {/* Hamburger menu for mobile */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-primary hover:text-white font-montserrat"
                                aria-label="Open mobile menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Navigation links for desktop */}
                        <div className="hidden lg:flex space-x-4 items-center">
                            <Link
                                href="/"
                                className="text-primary hover:text-white font-montserrat"
                                aria-label="Home Link"
                            >
                                Home
                            </Link>
                            <Link
                                href="/Roadmap"
                                className="text-primary hover:text-white font-montserrat"
                                aria-label="Roadmap Link"
                            >
                                Roadmap
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-64 bg-custom-secondary p-6 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close button */}
                <button
                    onClick={closeMobileMenu}
                    className="absolute top-2 right-2 text-primary hover:text-white"
                    aria-label="Close mobile menu"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Menu Links */}
                <div className="space-y-3 text-center mt-8">
                    <Link
                        href="/"
                        className="block text-primary hover:text-white font-montserrat"
                        onClick={closeMobileMenu}
                        aria-label="Home Link"
                    >
                        Home
                    </Link>
                    <Link
                        href="/Roadmap"
                        className="block text-primary hover:text-white font-montserrat"
                        onClick={closeMobileMenu}
                        aria-label="Roadmap Link"
                    >
                        Roadmap
                    </Link>
                </div>
            </div>

            {/* Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50"
                    onClick={closeMobileMenu}
                    aria-label="Mobile menu backdrop"
                />
            )}
        </>
    );
};

export default Navbar;
