'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { Menu, X, ShoppingCart, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
];

const navItems = [
  { href: '/', label: 'home' },
  { href: '/products', label: 'products' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems, openCart } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get pathname without locale prefix for switching
  const getPathWithoutLocale = () => {
    const cleanPath = pathname.replace(/^\/(ru|en|uz)(\/|$)/, '/');
    return cleanPath || '/';
  };

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = getPathWithoutLocale();
    router.replace(pathWithoutLocale, { locale: newLocale });
  };

  const isActive = (href: string) => {
    const cleanPath = getPathWithoutLocale();
    return cleanPath === href;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white'
      )}
    >
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+998946469999"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>(+998 94) 646 99 99</span>
              </a>
              <a
                href="mailto:Mastecuz@mail.ru"
                className="hover:opacity-80 transition-opacity"
              >
                Mastecuz@mail.ru
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>Tashkent, Uzbekistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">MASTEC</span>
              <span className="text-xs text-muted-foreground -mt-1">
                Polymer Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {languages.find((l) => l.code === locale)?.code.toUpperCase()}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => switchLocale(lang.code as Locale)}
                    className={cn(
                      'flex items-center gap-2 cursor-pointer',
                      locale === lang.code && 'font-semibold'
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={openCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Get Quote Button (Desktop) */}
            <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/contact">
                {t('getQuote')}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <Link
                    href="/"
                    className="text-2xl font-bold text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    MASTEC
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary py-2',
                          isActive(item.href)
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        )}
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </nav>
                  <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('getQuote')}
                    </Link>
                  </Button>
                  <div className="pt-4 border-t">
                    <a
                      href="tel:+998946469999"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(+998 94) 646 99 99</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
