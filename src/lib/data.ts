import siteJson from '../../content/site.json';
import collectionsJson from '../../content/collections.json';
export const site: any = siteJson;
export const collections: Record<string, any> = Object.fromEntries(Object.entries(collectionsJson as Record<string, any>).filter(([k, c]) => c.products.length > 0));
const prodMods = import.meta.glob('../../content/products/*.json', { eager: true, import: 'default' });
const postMods = import.meta.glob('../../content/posts/*.json', { eager: true, import: 'default' });
const pageMods = import.meta.glob('../../content/pages/*.json', { eager: true, import: 'default' });
export const products: any[] = Object.values(prodMods);
export const productByHandle = (h: string) => products.find(p => p.handle === h);
export const posts: any[] = (Object.values(postMods) as any[]).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
export const pages: any[] = Object.values(pageMods);
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'All Supplements', href: '/collections/all' },
  { label: 'Comparisons', href: '/blogs/mens-health' },
  { label: 'About Us', href: '/pages/about-us' },
  { label: 'Contact', href: '/pages/contact' },
];
export const money = (v: string | number) => '$' + Number(v).toFixed(2);
export const collectionProducts = (handle: string) => handle === 'all' ? products : (collections[handle]?.products || []).map(productByHandle).filter(Boolean);
export const productCollections = (handle: string) => Object.entries(collections).filter(([k, c]: any) => c.products.includes(handle)).map(([k]) => k);
