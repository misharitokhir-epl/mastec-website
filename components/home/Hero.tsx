'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/lib/navigation';

export function Hero() {
  const t = useTranslations('home.hero');
  const getPath = useLocalizedPath();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-[#2C5282]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Beaker className="h-4 w-4" />
              <span className="text-sm font-medium">
                Premium Polymer Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('title')}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                asChild
              >
                <Link href={getPath('/contact')}>
                  {t('cta1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white hover:text-primary hover:border-white"
                asChild
              >
                <Link href={getPath('/products')}>
                  {t('cta2')}
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/60 text-sm">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-white/60 text-sm">Products</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { color: '#1a1a1a', label: 'Black MB' },
                    { color: '#f5f5f5', label: 'White MB' },
                    { color: '#e53e3e', label: 'Color MB' },
                    { color: '#3182ce', label: 'Pigments' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 text-center"
                    >
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-3 shadow-lg"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white/80 text-sm font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4"
              >
                <div className="text-primary font-bold text-lg">ISO 9001</div>
                <div className="text-muted-foreground text-xs">Certified</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-accent text-white rounded-xl shadow-xl p-4"
              >
                <div className="font-bold text-lg">#1</div>
                <div className="text-white/80 text-xs">in Uzbekistan</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#F7FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
