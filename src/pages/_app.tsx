import Navbar from '@/components/navbar'
import AlfredModal from '@/features/alfred/components/modal/AlfredModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AlfredModal />
      <main className='max-w-5xl mx-auto flex h-screen sm:flex-row flex-col'>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  )
}
