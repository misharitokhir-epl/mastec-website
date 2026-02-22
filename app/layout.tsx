import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MASTEC - Industrial Polymer Solutions",
  description: "Premium masterbatches and polymer colorants for manufacturing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
