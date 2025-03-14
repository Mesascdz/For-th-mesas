// components/Header.tsx
"use client";

import Link from "next/link";
import { Menu, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Vabank MC
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:text-blue-300 transition">
            About us
          </Link>
          <Link href="/services" className="hover:text-blue-300 transition">
            Services
          </Link>
          <Link href="/location" className="hover:text-blue-300 transition">
            Location
          </Link>
          <Link href="/contacts" className="hover:text-blue-300 transition">
            Contacts
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              className="hover:text-blue-300 transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://youtube.com"
              className="hover:text-blue-300 transition"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href="https://t.me"
              className="hover:text-blue-300 transition"
            >
              <Send size={20} />
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4">
              <Link
                href="/about"
                className="py-2 hover:text-blue-300 transition"
              >
                About us
              </Link>
              <Link
                href="/services"
                className="py-2 hover:text-blue-300 transition"
              >
                Services
              </Link>
              <Link
                href="/location"
                className="py-2 hover:text-blue-300 transition"
              >
                Location
              </Link>
              <Link
                href="/contacts"
                className="py-2 hover:text-blue-300 transition"
              >
                Contacts
              </Link>
              <div className="flex space-x-4 py-2">
                <Link
                  href="https://instagram.com"
                  className="hover:text-blue-300 transition"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://youtube.com"
                  className="hover:text-blue-300 transition"
                >
                  <Youtube size={20} />
                </Link>
                <Link
                  href="https://t.me"
                  className="hover:text-blue-300 transition"
                >
                  <Send size={20} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
