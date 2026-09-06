export const siteConfig = {
  name: '彥睿',
  tagline: '閱讀筆記 × 作品集',
  topics: ['ai', 'product', 'investing', 'engineering', 'career', 'writing'] as const,
  nav: [
    { href: '/', label: '首頁' },
    { href: '/reading', label: '閱讀' },
    { href: '/notes', label: '筆記' },
    { href: '/work', label: '作品' },
    { href: '/about', label: '關於' },
  ],
};
