import type { Metadata } from 'next';
import './globals.css';
import { business } from '@/lib/site';
export const metadata: Metadata = {
 ...(business.siteUrl ? { metadataBase: new URL(business.siteUrl) } : {}),
 title: 'Master Booth | Location Photobooth en Île-de-France',
 description: 'Master Booth propose des prestations photobooth pour mariages, anniversaires et événements en Île-de-France. Déplacement inclus.',
 openGraph: { title: 'Master Booth | Des moments, des sourires, des souvenirs.', description: 'Votre photobooth événementiel en Île-de-France. Déplacement inclus.', locale: 'fr_FR', type: 'website', siteName: 'Master Booth' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a>{children}</body></html>; }
