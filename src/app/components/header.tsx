'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-background-primary)] sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center space-x-8 lg:space-x-12">
            {/* Left side navigation */}
            <Link 
              href="/about" 
              className={`nav-link transition-colors duration-200 ${isActive('/about') ? 'text-[var(--color-primary)] font-medium' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/team" 
              className={`nav-link transition-colors duration-200 ${isActive('/team') ? 'text-[var(--color-primary)] font-medium' : ''}`}
            >
              Team
            </Link>

            {/* Centered Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold text-[var(--color-primary)] mx-8 lg:mx-12 hover:opacity-80 transition-opacity duration-200"
            >
              Stepchange
            </Link>

            {/* Right side navigation */}
            <Link 
              href="/portfolio" 
              className={`nav-link transition-colors duration-200 ${isActive('/portfolio') ? 'text-[var(--color-primary)] font-medium' : ''}`}
            >
              Portfolio
            </Link>
            <Link 
              href="/history" 
              className={`nav-link transition-colors duration-200 ${isActive('/history') ? 'text-[var(--color-primary)] font-medium' : ''}`}
            >
              History
            </Link>
            <Link 
              href="/invest" 
              className={`nav-link transition-colors duration-200 ${isActive('/invest') ? 'text-[var(--color-primary)] font-medium' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-[var(--color-primary)]"
          >
            Stepchange
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/about"
                className={`nav-link transition-colors duration-200 ${isActive('/about') ? 'text-[var(--color-primary)] font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/team"
                className={`nav-link transition-colors duration-200 ${isActive('/team') ? 'text-[var(--color-primary)] font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/portfolio"
                className={`nav-link transition-colors duration-200 ${isActive('/portfolio') ? 'text-[var(--color-primary)] font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/history"
                className={`nav-link transition-colors duration-200 ${isActive('/history') ? 'text-[var(--color-primary)] font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                History
              </Link>
              <Link 
                href="/invest"
                className={`nav-link transition-colors duration-200 ${isActive('/invest') ? 'text-[var(--color-primary)] font-medium' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}