import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DarkModeProvider } from '@/lib/contexts/DarkModeContext'

export const metadata: Metadata = {
  title: 'Kolpingsfamilie Ramsen - Theater',
  description:
    'Theatergruppe der Kolpingsfamilie Ramsen. Eigene Stücke seit 2016 mit mittelalterlichen, Fantasy- und dystopischen Themen.',
  keywords: 'Theater, Kolping, Ramsen, Open-Air, Eigenproduktionen, Anno 1146',
  authors: [{ name: 'Kolpingsfamilie Ramsen' }],
  creator: 'Kolpingsfamilie Ramsen',
  publisher: 'Kolpingsfamilie Ramsen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kolpingsfamilie Ramsen - Theater',
    description: 'Theatergruppe der Kolpingsfamilie Ramsen seit 2016',
    url: 'https://theater-ramsen.de',
    siteName: 'Kolpingsfamilie Ramsen Theater',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='de'>
      <body className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
        <DarkModeProvider>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  )
}
