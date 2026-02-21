import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StreetLight | Civic Reporting Platform for Pakistan',
  description: 'A citizen-powered civic reporting platform bringing transparency and accountability to Pakistani cities. Report potholes, garbage, broken streetlights, and road hazards.',
  keywords: ['civic tech', 'pakistan', 'civic reporting', 'streetlight', 'transparency', 'accountability'],
  authors: [{ name: 'StreetLight Team' }],
  creator: 'StreetLight',
  publisher: 'StreetLight',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://streetlight.pk',
    title: 'StreetLight | No Civic Hazard Should Remain in the Dark',
    description: 'Citizen-powered civic reporting platform for Pakistan. Built in Pakistan, for Pakistan.',
    siteName: 'StreetLight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StreetLight | Civic Reporting Platform',
    description: 'Report civic issues with transparency and accountability.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

