'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLocalizedPath } from '@/lib/navigation';

const contactInfo = {
  phones: [
    '(+998 94) 646 99 99',
    '(+998 97) 700 19 91',
    '(+998 97) 727 79 00',
    '(+998 95) 290 99 99',
  ],
  email: 'Mastecuz@mail.ru',
  address: {
    en: '100057, Tashkent, Yunusabad District, Ahmad Donish Street, 19A',
    ru: '100057, Ташкент, Юнусабадский район, улица Ахмада Дониша, 19А',
    uz: "100057, Toshkent, Yunusobod tumani, Ahmad Donish ko'chasi, 19A",
  },
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/mastec.uz', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/mastec.uz', label: 'Instagram' },
];

export default function Footer() {
  const t = useTranslations();
  const tCommon = useTranslations('common');
  const tFooter = useTranslations('footer');
  const locale = useLocale();
  const getPath = useLocalizedPath();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: tCommon('home') },
    { href: '/products', label: tCommon('products') },
    { href: '/about', label: tCommon('about') },
    { href: '/contact', label: tCommon('contact') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href={getPath('/')} className="inline-block mb-4">
              <span className="text-2xl font-bold">MASTEC</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-4">
              {tFooter('description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{tFooter('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getPath(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">{tFooter('contactUs')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  {contactInfo.address[locale as keyof typeof contactInfo.address] ||
                    contactInfo.address.en}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="grid grid-cols-2 gap-2">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {currentYear} MASTEC. {tFooter('copyright')}.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href={getPath('/privacy')}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={getPath('/terms')}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
