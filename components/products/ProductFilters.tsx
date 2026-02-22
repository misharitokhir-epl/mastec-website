'use client';

import { useLocale, useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Category } from '@/lib/data/products';

interface ProductFiltersProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryId: string) => void;
  onClearFilters: () => void;
}

export function ProductFilters({
  categories,
  selectedCategories,
  onCategoryChange,
  onClearFilters,
}: ProductFiltersProps) {
  const t = useTranslations('products.filters');
  const locale = useLocale();

  const getCategoryName = (category: Category) => {
    if (locale === 'ru') return category.nameRu;
    if (locale === 'uz') return category.nameUz;
    return category.name;
  };

  const hasActiveFilters = selectedCategories.length > 0;

  return (
    <Card className="sticky top-32">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{t('title')}</CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              {t('clearAll')}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-foreground mb-3">
              {t('category')}
            </h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => onCategoryChange(category.id)}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {getCategoryName(category)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
