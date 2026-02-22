'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ShoppingCart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cart';
import { useLocalizedPath } from '@/lib/navigation';
import type { Product } from '@/lib/data/products';

interface ProductCardProps {
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

export function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale();
  const t = useTranslations('common');
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

  return (
    <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
      {/* Image */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
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
          <div className="text-center p-4" style={{ color: colors.text }}>
            <div className="text-4xl font-bold opacity-30">
              {product.categoryId === 'black-masterbatch' && 'MB'}
              {product.categoryId === 'white-masterbatch' && 'MB'}
              {product.categoryId === 'color-masterbatch' && 'CM'}
              {product.categoryId === 'pigments' && 'PG'}
              {product.categoryId === 'fillers' && 'FL'}
              {product.categoryId === 'additives' && 'AD'}
            </div>
          </div>
        )}

        {/* Category Badge */}
        <Badge
          className="absolute top-3 left-3"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {product.category}
        </Badge>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={getPath(`/products/${product.slug}`)}>
              <Eye className="h-4 w-4 mr-2" />
              {t('viewDetails')}
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {getName()}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {getDescription()}
        </p>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-primary hover:bg-primary/90"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {t('addToCart')}
        </Button>
      </CardContent>
    </Card>
  );
}
