"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "#leistungen" },
  { name: "Über uns", href: "#ueber-uns" },
  { name: "Projekte", href: "#projekte" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <nav className='container mx-auto px-4 flex items-center justify-between py-4'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <img
              src='/logo.png'
              alt='FS Bauunternehmer Logo'
              className='h-12 w-auto'
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex md:items-center md:gap-x-8'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-gray-700 hover:text-yellow-500 font-medium transition-colors'
            >
              {item.name}
            </Link>
          ))}
          <Link
            href='tel:+4917732861599'
            className='flex items-center text-yellow-500 font-medium hover:text-yellow-600'
          >
            <Phone className='h-4 w-4 mr-2' />
            +49 177 3286 159
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className='flex md:hidden'>
          <button
            type='button'
            className='text-gray-700'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className='sr-only'>Menü öffnen</span>
            {mobileMenuOpen ? (
              <X className='h-6 w-6' aria-hidden='true' />
            ) : (
              <Menu className='h-6 w-6' aria-hidden='true' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 px-4 pb-4 pt-2'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='block py-2 text-gray-700 hover:text-yellow-500 font-medium'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href='tel:+4917732861599'
              className='flex items-center justify-center text-yellow-500 font-medium hover:text-yellow-700 mt-2 py-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className='h-4 w-4 mr-2' />
              +49 177 3286 159
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
