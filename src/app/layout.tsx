import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PAH Learning Center | Pulmonary Arterial Hypertension Education',
  description: 'The world\'s leading educational initiative for pulmonary arterial hypertension (PAH). Access expert-led CME activities, cutting-edge research, and comprehensive resources from renowned global faculty.',
  keywords: 'PAH, pulmonary arterial hypertension, medical education, CME, continuing education, cardiology, pulmonary medicine',
  authors: [{ name: 'PAH Learning Center' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'PAH Learning Center | Leading Global Excellence in PAH Education',
    description: 'Transform your expertise with world-class PAH education from the #1 global learning initiative.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAH Learning Center | Pulmonary Arterial Hypertension Education',
    description: 'The world\'s leading educational initiative for PAH. Expert-led CME activities and cutting-edge research.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
