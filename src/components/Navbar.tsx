"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/products", label: t("products") },
    { href: "/quality", label: t("quality") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-oswald text-2xl font-bold text-white tracking-wider">
              JBJT Global
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-source-sans text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pay"
              className="font-source-sans text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors"
            >
              {t("pay")}
            </Link>
            <LocaleSwitcher />
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-orange-500 text-white font-source-sans text-sm font-medium rounded-full hover:bg-orange-600 transition-colors"
            >
              {t("getQuote")}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 font-source-sans text-sm font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-800 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/pay"
                className="block px-3 py-2 font-source-sans text-sm text-orange-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("pay")}
              </Link>
              <div className="px-3 py-2">
                <LocaleSwitcher />
              </div>
              <Link
                href="/contact"
                className="block mx-3 my-3 px-4 py-2.5 bg-orange-500 text-white font-source-sans text-sm font-medium rounded-full text-center hover:bg-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("getQuote")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
