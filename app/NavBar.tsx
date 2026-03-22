"use client";

import { Button } from "@/components/ui/button";
import { House, Layers, Sparkles, User, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <House className="w-5 h-5" /> },
    { href: "/projects", label: "Projects", icon: <Layers className="w-5 h-5" /> },
    { href: "/skills", label: "Skills", icon: <Sparkles className="w-5 h-5" /> },
    { href: "/about", label: "About", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <nav className="relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">MICHEAL B.</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg xl:text-xl font-semibold text-[#EAC048] flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {link.icon} {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button
              className="text-lg xl:text-xl font-semibold text-[#EAC048] border border-[#EAC048] bg-transparent hover:bg-[#EAC048]/30 hover:text-black cursor-pointer"
              type="button"
            >
              <Mail className="w-5 h-5" /> Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#EAC048] hover:bg-[#EAC048]/10 rounded-lg transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm mt-4 rounded-xl p-4 z-50 border border-[#EAC048]/20">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-[#EAC048] flex items-center gap-3 p-2 rounded-lg hover:bg-[#EAC048]/10 transition-colors"
              >
                {link.icon} {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full text-lg font-semibold text-[#EAC048] border border-[#EAC048] bg-transparent hover:bg-[#EAC048]/30 hover:text-black"
                type="button"
              >
                <Mail className="w-5 h-5" /> Contact Me
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
