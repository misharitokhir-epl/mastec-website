import { Hero } from '@/components/home/Hero';
import { ProductCategories } from '@/components/home/ProductCategories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Stats } from '@/components/home/Stats';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <Stats />
      <CTASection />
    </>
  );
}
