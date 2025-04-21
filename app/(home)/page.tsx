import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { HeroHome } from './components/HeroHome'
import { Emphasis } from './components/Emphasis/Emphasis'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroHome />

      <main className="my-20 container mx-auto px-32">
        <Emphasis />
      </main>
    </>
  )
}
