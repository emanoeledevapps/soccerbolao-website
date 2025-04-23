import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { HeroHome } from './components/HeroHome'
import { Emphasis } from './components/Emphasis/Emphasis'
import { CommunityStats } from './components/CommunityStats/CommunityStats'
import { Footer } from '@/components/Footer/Footer'
import { HowDoesItWorks } from './components/HowDoesItWorks/HowDoesItWorks'

export const metadata: Metadata = {
  title: 'Soccer Bolão - Diversão para quem ama futebol',
  description: 'Participe do Soccer Bolão! Monte ligas, participe de bolões com amigos, faça palpites nas partidas e dispute os campeonatos mais emocionantes do Brasil e do mundo. 100% gratuito!',
  keywords: 'bolão de futebol, app de palpites, brasileirão 2025, copa do brasil 2025, super mundial de clubes, futebol com amigos, ranking de bolão, placar exato, modo liga, bolão online, sem apostas',
  openGraph: {
    type: 'website',
    title: 'Soccer Bolão - Diversão para quem ama futebol',
    description: '',
    url: 'https://soccerbolao.com.br',
    locale: 'pt-br',
    siteName: 'Soccer Bolão',
    images: 'https://www.soccerbolao.com.br/images/og.png'
  },
  robots: { index: true, follow: true }
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
