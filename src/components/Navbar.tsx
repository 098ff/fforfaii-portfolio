'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    const linkClass = (path: string) =>
        pathname === path
            ? 'text-[#797E4A] underline'
            : 'hover-yellow'

    return (
        <nav className="bg-[var(--color-primary)] shadow-md fixed w-full top-0 z-50">
            <div className="max-w-full mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="outfit-700 text-sm text-[var(--color-logo)]">
                        FFORFAII
                    </div>
                    <div className="outfit-500 md:flex space-x-2 text-xs text-[var(--color-brown)]">
                        <Link href="/" className={linkClass('/')}>Home</Link>
                        <Link href="/about" className={linkClass('/about')}>About</Link>
                        <Link href="/project" className={linkClass('/project')}>Projects</Link>
                        <Link href="/experience" className={linkClass('/experience')}>Experiences</Link>
                        <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
