import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getProductBySlug, products } from '@/lib/data/products';
import { ProductDetail } from '@/components/products/ProductDetail';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const name = locale === 'ru' ? product.nameRu : locale === 'uz' ? product.nameUz : product.name;
  const description = locale === 'ru' ? product.descriptionRu : locale === 'uz' ? product.descriptionUz : product.description;

  return {
    title: name,
    description: description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <ProductDetail product={product} />
    </div>
  );
}
