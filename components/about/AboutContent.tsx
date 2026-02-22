'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Shield, Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { key: 'quality', icon: Award, color: '#1E3A5F' },
  { key: 'customer', icon: Users, color: '#E53E3E' },
  { key: 'innovation', icon: Lightbulb, color: '#38A169' },
  { key: 'integrity', icon: Shield, color: '#2C5282' },
];

export function AboutContent() {
  const t = useTranslations('about');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {t('mission.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('mission.description')}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {t('vision.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('vision.description')}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          {t('values.title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: value.color }} />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {t(`values.${value.key}`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`values.${value.key}Desc`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Company Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-primary to-[#2C5282] text-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  MASTEC - Your Partner in Polymer Solutions
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Founded in Tashkent, Uzbekistan, MASTEC has grown to become a
                  leading supplier of polymer colorants and masterbatches in
                  Central Asia. We combine technical expertise with a deep
                  understanding of our customers' needs to deliver tailored
                  solutions that drive success.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <div className="text-3xl font-bold">2009</div>
                    <div className="text-white/60 text-sm">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-white/60 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-white/60 text-sm">Clients</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">MASTEC</div>
                    <div className="text-white/60">Polymer Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
