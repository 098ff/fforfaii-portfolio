'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const linkClass = (path: string) =>
        [
            "px-3 py-2 transition-colors duration-200 border-b-2",
            pathname === path
                ? "text-[#797E4A] border-[var(--color-yellow-hover)]"
                : "border-transparent hover:border-[var(--color-yellow-hover)] hover:text-[var(--color-yellow-hover)]",
            "rounded-none" // no rounded for tab look
        ].join(' ')

    return (
        <nav className="bg-[var(--color-primary)] shadow-md fixed w-full top-0 z-50">
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="outfit-700 text-sm text-[var(--color-logo)]">
                        FFORFAII
                    </div>
                    {/* Desktop menu */}
                    <div className="outfit-500 hidden md:flex space-x-8 text-xs text-[var(--color-brown)]">
                        <Link href="/" className={linkClass('/')}>Home</Link>
                        <Link href="/about" className={linkClass('/about')}>About</Link>
                        <Link href="/project" className={linkClass('/project')}>Projects</Link>
                        <Link href="/experience" className={linkClass('/experience')}>Experiences</Link>
                        <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
                    </div>
                    {/* Hamburger icon for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-[var(--color-brown)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col space-y-2 pb-4 text-[var(--color-brown)] outfit-500 text-xs">
                        <Link href="/" className={linkClass('/')} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/about" className={linkClass('/about')} onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/project" className={linkClass('/project')} onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link href="/experience" className={linkClass('/experience')} onClick={() => setMenuOpen(false)}>Experiences</Link>
                        <Link href="/contact" className={linkClass('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
