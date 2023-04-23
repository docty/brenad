import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Grid } from '@mui/material'

const inter = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Content />
      <Footer />
    </main>
  )
}


const Content = () => {
  return (
    <div className={'lg:px-36 px-2 py-6'}>
      <div className='grid lg:grid-cols-4 lg:grid-rows-3 gap-4' >

        <div className={'bg-red-500 col-start-1 col-end-3 row-start-1 row-end-3'}>
          <Image className="w-full h-full" src="/img/1.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

        <div className={'bg-red-500 col-start-3 col-end-4 row-start-1 row-end-2'}>
          <Image className="w-full h-full" src="/img/2.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

        <div className={'bg-red-500 col-start-4 col-end-5 row-start-1 row-end-2'}>
          <Image className="w-full h-full" src="/img/3.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

        <div className={'bg-red-500 col-start-3 col-end-5 row-start-2 row-end-3'}>
          <Image className="w-full h-full" src="/img/slides3.jpg" alt="" width={0} height={0} sizes='md' />
        </div>


        <div className={'bg-red-500 col-start-1 col-end-2 row-start-3 row-end-4'}>
          <Image className="w-full h-full" src="/img/5.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

        <div className={'bg-red-500 col-start-2 col-end-3 row-start-3 row-end-4'}>
          <Image className="w-full h-full" src="/img/5.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

        <div className={'bg-red-500 col-start-3 col-end-4 row-start-3 row-end-4'}>
          <Image className="w-full h-full" src="/img/5.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

        <div className={'bg-red-500 col-start-4 col-end-5 row-start-3 row-end-4'}>
          <Image className="w-full h-full" src="/img/5.jpg" alt="" width={0} height={0} sizes='md' />
        </div>

      </div>
    </div>
  )
}