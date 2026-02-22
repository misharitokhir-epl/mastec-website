'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/lib/navigation';

export function CTASection() {
  const t = useTranslations('home.cta');
  const getPath = useLocalizedPath();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-[#2C5282] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold min-w-[200px]"
              asChild
            >
              <Link href={getPath('/contact')}>
                {t('button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <a
              href="tel:+998946469999"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>(+998 94) 646 99 99</span>
            </a>
            <a
              href="mailto:Mastecuz@mail.ru"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Mastecuz@mail.ru</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
