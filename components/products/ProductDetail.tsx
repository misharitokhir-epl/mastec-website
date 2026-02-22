'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/store/cart';
import { useLocalizedPath } from '@/lib/navigation';
import type { Product } from '@/lib/data/products';

interface ProductDetailProps {
  product: Product;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'black-masterbatch': { bg: '#1a1a1a', text: '#ffffff' },
  'white-masterbatch': { bg: '#f5f5f5', text: '#1a202c' },
  'color-masterbatch': { bg: '#e53e3e', text: '#ffffff' },
  'pigments': { bg: '#3182ce', text: '#ffffff' },
  'fillers': { bg: '#718096', text: '#ffffff' },
  'additives': { bg: '#38a169', text: '#ffffff' },
};

export function ProductDetail({ product }: ProductDetailProps) {
  const locale = useLocale();
  const t = useTranslations();
  const tCommon = useTranslations('common');
  const tProduct = useTranslations('product');
  const { addItem } = useCartStore();
  const getPath = useLocalizedPath();

  const getName = () => {
    if (locale === 'ru') return product.nameRu || product.name;
    if (locale === 'uz') return product.nameUz || product.name;
    return product.name;
  };

  const getDescription = () => {
    if (locale === 'ru') return product.descriptionRu || product.description;
    if (locale === 'uz') return product.descriptionUz || product.description;
    return product.description;
  };

  const colors = categoryColors[product.categoryId] || { bg: '#e2e8f0', text: '#1a202c' };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      nameRu: product.nameRu,
      nameUz: product.nameUz,
      category: product.categoryId,
      image: product.image,
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in ${getName()}. Can you provide more information?`
  );
  const telegramMessage = encodeURIComponent(
    `Hello! I'm interested in ${getName()}. Can you provide more information?`
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Button variant="ghost" asChild>
          <Link href={getPath('/products')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {tCommon('products')}
          </Link>
        </Button>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className="aspect-square rounded-2xl flex items-center justify-center overflow-hidden relative"
            style={{ backgroundColor: colors.bg }}
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={getName()}
                fill
                className="object-cover"
              />
            ) : (
              <div className="text-center" style={{ color: colors.text }}>
                <div className="text-8xl font-bold opacity-30">
                  {product.categoryId === 'black-masterbatch' && 'MB'}
                  {product.categoryId === 'white-masterbatch' && 'MB'}
                  {product.categoryId === 'color-masterbatch' && 'CM'}
                  {product.categoryId === 'pigments' && 'PG'}
                  {product.categoryId === 'fillers' && 'FL'}
                  {product.categoryId === 'additives' && 'AD'}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <Badge
              className="mb-4"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getName()}
            </h1>
            <p className="text-lg text-muted-foreground">
              {getDescription()}
            </p>
          </div>

          <Separator />

          {/* Properties */}
          {product.properties && product.properties.length > 0 && (
            <div>
              <h2 className="font-semibold text-lg mb-4 uppercase tracking-wide">
                {tProduct('properties')}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                {product.properties.map((prop, index) => {
                  const propKey = locale === 'ru' ? (prop.keyRu || prop.key) : locale === 'uz' ? (prop.keyUz || prop.key) : prop.key;
                  const propValue = locale === 'ru' ? (prop.valueRu || prop.value) : locale === 'uz' ? (prop.valueUz || prop.value) : prop.value;
                  return (
                    <div
                      key={index}
                      className={`flex ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}
                    >
                      <div className="w-1/3 px-4 py-3 font-medium text-muted-foreground border-r border-border">
                        {propKey}
                      </div>
                      <div className="w-2/3 px-4 py-3 font-medium">
                        {propValue}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Specifications (Quick View) */}
          {product.specifications && product.specifications.length > 0 && !product.properties && (
            <div>
              <h2 className="font-semibold text-lg mb-4">
                {tProduct('specifications')}
              </h2>
              <div className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground">{spec.key}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Actions */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {tCommon('addToCart')}
            </Button>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={`https://wa.me/998946469999?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={`https://t.me/share/url?url=&text=${telegramMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Inquiry Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12"
      >
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>{tProduct('inquire')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Contact our team for pricing, availability, and custom formulations.
            </p>
            <Button asChild>
              <Link href={getPath('/contact')}>
                {tCommon('contact')}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
