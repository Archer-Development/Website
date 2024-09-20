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

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeMobileMenu();
        }
    };

    return (
        <>
            <nav className="bg-[rgba(45,48,77,0.23)] p-4 fixed  left-0 right-0 z-50 shadow-lg backdrop-blur-md w-full">
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
                                {/* this will have dot that wille be green if online and red if offline */}
                                <div
                                    className={`w-2 h-2 rounded-full mr-1 ${botOnline ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                />v0.1.0
                            </span>
                        </div>
                    </div>
                    {/* Right side: Navigation links / Hamburger menu */}
                    <div className="flex items-center space-x-4">
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-[rgb(10,154,191)] hover:text-white font-montserrat"
                                aria-label="Open mobile menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="hidden lg:flex space-x-4 items-center">
                            <Link
                                href="/"
                                className="text-[rgb(10,154,191)] hover:text-white font-montserrat"
                                aria-label="Home Link"
                            >
                                Home
                            </Link>
                            <Link
                                href="https://roadmap.archer.is/"
                                className="text-[rgb(10,154,191)] hover:text-white font-montserrat"
                                aria-label="Roadmap Link"
                            >
                                Roadmap
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
                            className="absolute top-2 right-2 text-[rgb(10,154,191)] hover:text-white"
                            aria-label="Close mobile menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="space-y-3 text-center">
                            <Link
                                href="/"
                                className="block text-[rgb(10,154,191)] hover:text-white font-montserrat"
                                onClick={closeMobileMenu}
                                aria-label="Home Link"
                            >
                                Home
                            </Link>
                            <Link
                                href="https://roadmap.archer.is/"
                                className="block text-[rgb(10,154,191)] hover:text-white font-montserrat"
                                onClick={closeMobileMenu}
                                aria-label="Roadmap Link"
                            >
                                Roadmap
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
