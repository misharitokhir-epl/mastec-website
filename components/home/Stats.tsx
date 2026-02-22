'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', key: 'years' },
  { value: '500+', key: 'clients' },
  { value: '50+', key: 'products' },
  { value: '10+', key: 'countries' },
];

export function Stats() {
  const t = useTranslations('home.stats');

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm md:text-base">
                {t(stat.key)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
