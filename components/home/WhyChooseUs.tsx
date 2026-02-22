'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, DollarSign, Truck, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    key: 'quality',
    icon: Award,
    color: '#1E3A5F',
    bgColor: '#E8F0F7',
  },
  {
    key: 'pricing',
    icon: DollarSign,
    color: '#38A169',
    bgColor: '#E6F7EE',
  },
  {
    key: 'delivery',
    icon: Truck,
    color: '#E53E3E',
    bgColor: '#FEE8E8',
  },
  {
    key: 'support',
    icon: Headphones,
    color: '#2C5282',
    bgColor: '#E8F4FD',
  },
];

export function WhyChooseUs() {
  const t = useTranslations('home.whyUs');

  return (
    <section className="section-padding bg-muted/50">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: feature.bgColor }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{ color: feature.color }}
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {t(`${feature.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`${feature.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
