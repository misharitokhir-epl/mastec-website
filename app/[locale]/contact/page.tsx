import { getTranslations } from 'next-intl/server';
import { ContactContent } from '@/components/contact/ContactContent';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <ContactContent />
    </div>
  );
}
