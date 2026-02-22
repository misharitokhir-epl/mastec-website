'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/store/cart';
import { useLocalizedPath } from '@/lib/navigation';

export function CartDrawer() {
  const t = useTranslations('cart');
  const locale = useLocale();
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCartStore();
  const getPath = useLocalizedPath();

  const getItemName = (item: typeof items[0]) => {
    if (locale === 'ru') return item.nameRu || item.name;
    if (locale === 'uz') return item.nameUz || item.name;
    return item.name;
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t('title')}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-lg font-medium text-muted-foreground mb-2">
              {t('empty')}
            </p>
            <Button variant="outline" onClick={closeCart} asChild>
              <Link href={getPath('/products')}>
                {t('continueShopping')}
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={getItemName(item)}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className="h-full w-full flex items-center justify-center text-xs text-muted-foreground"
                          style={{
                            backgroundColor:
                              item.category === 'black-masterbatch'
                                ? '#1a1a1a'
                                : item.category === 'white-masterbatch'
                                ? '#f5f5f5'
                                : item.category === 'color-masterbatch'
                                ? '#e53e3e'
                                : '#e2e8f0',
                          }}
                        >
                          {item.category === 'black-masterbatch' && (
                            <span className="text-white">Black</span>
                          )}
                          {item.category === 'white-masterbatch' && (
                            <span className="text-gray-600">White</span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {getItemName(item)}
                      </h4>
                      <p className="text-xs text-muted-foreground capitalize">
                        {item.category.replace(/-/g, ' ')}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="pt-4 space-y-4">
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{t('subtotal')}</span>
                <span className="text-muted-foreground">
                  {items.reduce((acc, item) => acc + item.quantity, 0)} items
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearCart}
                >
                  {t('clearCart')}
                </Button>
                <Button className="flex-1 bg-accent hover:bg-accent/90" asChild>
                  <Link
                    href={getPath('/checkout')}
                    onClick={closeCart}
                  >
                    {t('checkout')}
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
