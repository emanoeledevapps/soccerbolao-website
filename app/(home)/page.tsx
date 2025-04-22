import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { HeroHome } from './components/HeroHome'
import { Emphasis } from './components/Emphasis/Emphasis'
import { CommunityStats } from './components/CommunityStats/CommunityStats'
import { Footer } from '@/components/Footer/Footer'
import { HowDoesItWorks } from './components/HowDoesItWorks/HowDoesItWorks'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroHome />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <Emphasis />
        <HowDoesItWorks />
        <CommunityStats />
      </main>

      <Footer />
    </>
  )
}
