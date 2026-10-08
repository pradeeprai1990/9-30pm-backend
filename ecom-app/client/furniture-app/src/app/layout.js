import { Geist, Geist_Mono } from 'next/font/google'
import 'izitoast/dist/css/iziToast.min.css';
import '@/app/globals.css'
import StoreProvider from './components/StoreProvider'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Furniture Store',
  description: 'Thoughtful furniture for the spaces you call home.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}