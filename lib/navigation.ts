import { useLocale } from 'next-intl';

export function useLocalizedPath() {
  const locale = useLocale();

  return (path: string) => {
    if (locale === 'ru') {
      return path;
    }
    return `/${locale}${path}`;
  };
}

export function getLocalizedPath(locale: string, path: string): string {
  if (locale === 'ru') {
    return path;
  }
  return `/${locale}${path}`;
}
