"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();
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
        } else {
            router.push(href);
        }
    };

    return (
        <nav className="bg-transparent">
            <div className="flex items-center justify-between py-5">
                <div className="flex flex-shrink-0 items-center">
                    <Link
                        href="/"
                        className=" text-[#16f2b3] text-3xl font-bold">
                        VARUN KUMAR
                    </Link>
                </div>

                <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
                    <li>
                        <a
                            onClick={(e) => handleClick(e, '/#about')}
                            href="/#about"
                            className="block cursor-pointer px-4 py-2 no-underline outline-none hover:no-underline"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleClick(e, '/#experience')}
                            href="/#experience"
                            className="block cursor-pointer px-4 py-2 no-underline outline-none hover:no-underline"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleClick(e, '/#skills')}
                            href="/#skills"
                            className="block cursor-pointer px-4 py-2 no-underline outline-none hover:no-underline"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleClick(e, '/#education')}
                            href="/#education"
                            className="block cursor-pointer px-4 py-2 no-underline outline-none hover:no-underline"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
                        </a>
                    </li>
                    <li>
                        <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
                    </li>
                    <li>
                        <a
                            onClick={(e) => handleClick(e, '/#projects')}
                            href="/#projects"
                            className="block cursor-pointer px-4 py-2 no-underline outline-none hover:no-underline"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;