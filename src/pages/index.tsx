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
      
      <Footer />
    </main>
  )
}
