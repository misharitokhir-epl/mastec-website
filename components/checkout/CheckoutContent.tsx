'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, ShoppingBag, MessageCircle, Send, CheckCircle, Trash2, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/store/cart';
import { useLocalizedPath } from '@/lib/navigation';

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(5, 'Phone is required'),
  company: z.string().optional(),
  notes: z.string().optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export function CheckoutContent() {
  const locale = useLocale();
  const t = useTranslations('checkout');
  const tCart = useTranslations('cart');
  const tCommon = useTranslations('common');
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const getPath = useLocalizedPath();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const getItemName = (item: typeof items[0]) => {
    if (locale === 'ru') return item.nameRu || item.name;
    if (locale === 'uz') return item.nameUz || item.name;
    return item.name;
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const generateOrderMessage = (data: CheckoutForm) => {
    const itemsList = items
      .map((item) => `• ${getItemName(item)} (x${item.quantity})`)
      .join('\n');

    return `New order from MASTEC website:\n\nClient: ${data.name}\nPhone: ${data.phone}${
      data.company ? `\nCompany: ${data.company}` : ''
    }${data.notes ? `\nNotes: ${data.notes}` : ''}\n\nProducts:\n${itemsList}`;
  };

  const handleWhatsApp = () => {
    const data = getValues();
    const message = encodeURIComponent(generateOrderMessage(data));
    window.open(`https://wa.me/998946469999?text=${message}`, '_blank');
    setIsSubmitted(true);
    clearCart();
  };

  const handleTelegram = () => {
    const data = getValues();
    const message = encodeURIComponent(generateOrderMessage(data));
    window.open(`https://t.me/share/url?url=&text=${message}`, '_blank');
    setIsSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {tCart('empty')}
          </h1>
          <p className="text-muted-foreground mb-6">
            Add some products to your cart to checkout.
          </p>
          <Button asChild>
            <Link href={getPath('/products')}>
              {tCart('continueShopping')}
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto"
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {t('success')}
          </h1>
          <p className="text-muted-foreground mb-6">{t('thankYou')}</p>
          <Button asChild>
            <Link href={getPath('/products')}>
              {tCart('continueShopping')}
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

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
            {tCart('continueShopping')}
          </Link>
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {t('title')}
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {t('orderSummary')} ({totalItems})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div
                      className="h-16 w-16 rounded-lg flex items-center justify-center flex-shrink-0"
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
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {getItemName(item)}
                      </h4>
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
              <Separator className="my-4" />
              <div className="flex items-center justify-between font-medium">
                <span>{tCart('subtotal')}</span>
                <span>{totalItems} items</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t('contactInfo')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{tCommon('name')} *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{tCommon('phone')} *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{tCommon('company')}</Label>
                  <Input id="company" {...register('company')} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    rows={3}
                    {...register('notes')}
                    placeholder="Any special requests..."
                  />
                </div>

                <Separator />

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {t('orderVia')}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600"
                      onClick={handleSubmit(handleWhatsApp)}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      {t('whatsapp')}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      className="w-full bg-blue-500 hover:bg-blue-600"
                      onClick={handleSubmit(handleTelegram)}
                    >
                      <Send className="h-5 w-5 mr-2" />
                      {t('telegram')}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
