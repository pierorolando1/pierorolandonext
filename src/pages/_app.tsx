import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='max-w-4xl mx-auto flex'>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
