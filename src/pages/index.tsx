import { alfredState } from '@/features/alfred/atoms'
import Head from 'next/head'
import { useRecoilState } from 'recoil'

export default function Home() {

  const  [state, setAlfredState] = useRecoilState(alfredState)

  return (
    <>
      <Head>
        <title>Piero Rolando</title>
        <meta name="description" content="Hey, I'm Piero. Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-gray-50 bg-gray-950 flex flex-col justify-center h-screen w-full p-12">
        <h1 className="text-2xl font-bold">Piero Rolando</h1>
        <p className="text-gray-500">Software Engineer</p>
        
        <p className='text-sm py-2 pb-5 text-gray-300'>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>

        <div onClick={() => setAlfredState(val => ({...val, isOpen: true}))
          } className="px-4 py-2 flex w-full bg-gray-900/60 rounded-xl cursor-text max-w-md items-center hover:bg-gray-900/90 transition-all">
          <p className='text-gray-500 mr-auto text-sm'>Ask Something about me</p>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 w-[1.1rem] h-[1.1rem]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </div>

      </main>
    </>
  )
}
