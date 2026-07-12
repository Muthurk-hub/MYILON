'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'About', href: '/' },
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Software', href: '/services/software' },
        { name: 'Accounts', href: '/services/accounts' },
        { name: 'Painting', href: '/services/painting' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/MYILON.png"
              alt="Myilon Consultancy"
              width={160}
              height={40}
              className="h-9 w-auto max-w-[160px] object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-blue-900">
                Myilon Consultancy Services Private Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-700 inline-flex items-center gap-1 ${
                      pathname === item.href
                        ? 'text-blue-700 border-b-2 border-blue-700'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="absolute left-0 top-full z-50 hidden min-w-44 rounded-md border border-gray-200 bg-white py-2 shadow-lg group-hover:block group-focus-within:block">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-700 ${
                    pathname === item.href
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-blue-700 hover:bg-blue-800">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-700 hover:bg-gray-50 rounded-md ${
                        pathname === item.href ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1.5 text-sm text-gray-600 transition-colors hover:text-blue-700 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-700 hover:bg-gray-50 rounded-md ${
                      pathname === item.href ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-2">
                <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}