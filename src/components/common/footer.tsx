import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="w-full py-4 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 items-center ">
          <div className="space-y-4 ">
            <div className="w-full flex items-center justify-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="A&T Tech Services"
                width={440}
                height={440}
                className="h-24 w-auto"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-center">
              <Link href="#home">Home</Link>
            </h4>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-center">
              <Link href="#contact">Contact Us</Link>
            </h4>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-center">
              <Link href="#about">About Us</Link>
            </h4>
          </div>
        </div>

        {/* <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">© 2024 TechFlow. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div> */}
      </div>
    </footer>
  );
}

export default Footer1;

import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

const navLinks = [
  { href: "#home", name: "Home" },
  { href: "#features", name: "Feature" },
  { href: "#about", name: "About Us" },
  { href: "#contact", name: "Contact Us" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

function Footer1() {
  return (
    <footer className="bg-gradient-to-b bg-background/95 backdrop-blur ">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} A&T Tech Services, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
