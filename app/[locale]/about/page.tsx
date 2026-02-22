import { getTranslations } from 'next-intl/server';
import { AboutContent } from '@/components/about/AboutContent';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <AboutContent />
    </div>
  );
}
