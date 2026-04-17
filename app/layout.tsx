import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Withcent Global — Where Ambition Meets Admission | UK, Canada & USA',
  description: 'Withcent Global guides ambitious African students to world-class universities in the UK, Canada, and USA. British Council trained advisors. Est. 2010.',
  keywords: 'study abroad Nigeria, UK university admission, Canada student visa, education consultant Nigeria, Withcent Global',
  authors: [{ name: 'Withcent Global' }],
  metadataBase: new URL('https://wcent.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://wcent.vercel.app',
    siteName: 'Withcent Global',
    title: 'Withcent Global — Where Ambition Meets Admission',
    description: 'Guiding ambitious Nigerian students to world-class universities in the UK, Canada, and USA. British Council trained advisors since 2010.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Withcent Global' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Withcent Global — Where Ambition Meets Admission',
    description: 'Guiding ambitious Nigerian students to world-class universities.',
    images: ['/og-image.svg'],
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/apple-touch-icon.svg' },
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