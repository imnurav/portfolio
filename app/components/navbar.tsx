"use client";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.split('#')[1];
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' as const
                });
            }
        } else if (href === '#') {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            router.push(href);
        }
        // Close mobile menu after clicking
        setIsOpen(false);
    };

    const navItems = [
        { label: "ABOUT", href: "/#about" },
        { label: "EXPERIENCE", href: "/#experience" },
        { label: "SKILLS", href: "/#skills" },
        { label: "EDUCATION", href: "/#education" },
        { label: "PROJECTS", href: "/#projects" },
    ];

    return (
        <nav className="sticky top-0 z-99! bg-[#0d1224] border-b border-[#25213b] w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            onClick={(e) => handleClick(e, '#')}
                            href="#"
                            className="text-[#16f2b3] text-2xl sm:text-3xl font-bold hover:text-pink-600 transition-colors duration-300"
                        >
                            VARUN KUMAR
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    onClick={(e) => handleClick(e, item.href)}
                                    href={item.href}
                                    className="px-3 py-2 text-sm text-white hover:text-pink-600 transition-colors duration-300"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#16f2b3] hover:text-pink-600 focus:outline-none transition-colors duration-500"
                        aria-expanded="false"
                    >
                        {isOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out origin-top ${isOpen
                    ? "max-h-screen opacity-100 scale-y-100"
                    : "max-h-0 opacity-0 scale-y-95"
                    }`}
            >
                <div className="bg-[#0d1224] border-t border-[#25213b] px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-white hover:text-pink-600 hover:bg-[#1a1f35] rounded-md transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;