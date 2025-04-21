import { Header } from '@/components/Header/Header'
import type { Metadata } from 'next'
import { HeroHome } from './components/HeroHome'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroHome />
    </>
  )
}
