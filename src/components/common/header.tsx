import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between relative">
                <div className="flex items-center space-x-2">
                    <Image src="/images/logo.png" alt="A&T Tech Services" width={160} height={60} className="h-16 w-auto" priority />
                    <span className="text-xl font-bold">A&amp;T Tech Services</span>
                </div>

                {/* Mobile menu toggle (hidden on md and up) */}
                <input type="checkbox" id="menu-toggle" className="peer hidden" />
                <label htmlFor="menu-toggle" className="md:hidden cursor-pointer p-2 z-50">
                    <Menu className="h-6 w-6 text-primary" />
                </label>

                {/* Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLinks />
                </nav>

                {/* Mobile menu (shown only when checkbox is checked) */}
                <div className="absolute top-full left-0 w-full  flex-col items-start gap-4 px-6 py-4 shadow-md peer-checked:flex hidden md:hidden animate-slide-down z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <NavLinks />
                </div>
            </div>
        </header>
    )
}

// Extracted nav links to reuse
function NavLinks() {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#features", label: "Feature" },
        { href: "#about", label: "About Us" },
        { href: "#contact", label: "Contact Us" }
    ]

    return (
        <>
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
                >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
        </>
    )
}

export default Header
