import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Withcent Nigeria — Study Abroad Experts | UK, Canada & USA',
  description: 'Withcent Nigeria has been guiding Nigerian students into world-class universities in the UK, Canada, and USA since 2010. British Council trained advisors.',
  keywords: 'study abroad Nigeria, UK university admission, Canada student visa, education consultant Nigeria, Withcent',
  authors: [{ name: 'Withcent Nigeria' }],
  creator: 'Withcent Nigeria',
  metadataBase: new URL('https://wcent.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://wcent.vercel.app',
    siteName: 'Withcent Nigeria',
    title: 'Withcent Nigeria — Study Abroad Experts | UK, Canada & USA',
    description: 'We guide ambitious Nigerian students into top universities in the UK, Canada, and USA. British Council trained advisors since 2010.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Withcent Nigeria — Study Abroad Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Withcent Nigeria — Study Abroad Experts',
    description: 'We guide ambitious Nigerian students into top universities in the UK, Canada, and USA.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}