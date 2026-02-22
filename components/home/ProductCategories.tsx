'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Circle, Palette, Droplets, Layers, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLocalizedPath } from '@/lib/navigation';

const categories = [
  {
    id: 'black-masterbatch',
    icon: Circle,
    color: '#1a1a1a',
    bgColor: '#1a1a1a',
    textColor: 'white',
  },
  {
    id: 'white-masterbatch',
    icon: Circle,
    color: '#f5f5f5',
    bgColor: '#f5f5f5',
    textColor: '#1a202c',
  },
  {
    id: 'color-masterbatch',
    icon: Palette,
    color: '#e53e3e',
    bgColor: '#fed7d7',
    textColor: '#c53030',
  },
  {
    id: 'pigments',
    icon: Droplets,
    color: '#3182ce',
    bgColor: '#bee3f8',
    textColor: '#2b6cb0',
  },
  {
    id: 'fillers',
    icon: Layers,
    color: '#718096',
    bgColor: '#e2e8f0',
    textColor: '#4a5568',
  },
  {
    id: 'additives',
    icon: Sparkles,
    color: '#38a169',
    bgColor: '#c6f6d5',
    textColor: '#276749',
  },
];

const translationKeys: Record<string, string> = {
  'black-masterbatch': 'blackMasterbatch',
  'white-masterbatch': 'whiteMasterbatch',
  'color-masterbatch': 'colorMasterbatch',
  'pigments': 'pigments',
  'fillers': 'fillers',
  'additives': 'additives',
};

export function ProductCategories() {
  const t = useTranslations('home.categories');
  const getPath = useLocalizedPath();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const key = translationKeys[category.id];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={getPath(`/products?category=${category.id}`)}
                >
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: category.bgColor }}
                        >
                          <Icon
                            className="h-7 w-7"
                            style={{ color: category.textColor }}
                            fill={category.id.includes('masterbatch') ? category.color : 'none'}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                            {t(`${key}.title`)}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {t(`${key}.description`)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium mr-2">
                          View Products
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
