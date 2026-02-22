import { getTranslations } from 'next-intl/server';
import { CheckoutContent } from '@/components/checkout/CheckoutContent';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'checkout' });

  return {
    title: t('title'),
  };
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <CheckoutContent />
    </div>
  );
}
