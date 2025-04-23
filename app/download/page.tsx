import Image from 'next/image'
import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { HeroDownload } from './components/HeroDownload'
import Link from 'next/link'
import AndroidIcon from '@/public/icons/android.png'
import IosIcon from '@/public/icons/ios.png'
import InternetIcon from '@/public/icons/internet.png'
import { Footer } from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Baixar Soccer Bolão - Diversão para quem ama futebol',
  description: 'Participe dos maiores bolões de futebol com seus amigos! Palpite no Brasileirão, Copa do Brasil e Super Mundial 2025. 100% gratuito, sem apostas. Baixe agora!',
  keywords: 'download Soccer Bolão, app de bolão de futebol, baixar bolão 2025, palpites futebol app, bolão Brasileirão 2025, Copa do Brasil bolão, Super Mundial de Clubes, app de palpites esportivos, jogo de futebol com amigos, bolão grátis Android',
  openGraph: {
    type: 'website',
    title: 'Baixar Soccer Bolão - Diversão para quem ama futebol',
    description: '',
    url: 'https://soccerbolao.com.br/download',
    locale: 'pt-br',
    siteName: 'Soccer Bolão',
    images: 'https://www.soccerbolao.com.br/images/og.png'
  },
  robots: { index: true, follow: true }
}

export default function Download() {
  return (
    <>
      <Header />
      <HeroDownload />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-5 p-5 border-x border-b rounded-2xl border-gray-1 w-full md:max-w-[220px]">
            <Image
              src={AndroidIcon}
              className="w-10 h-10 object-contain"
              alt="ícone do android"
            />

            <h4 className="font-bold text-green-1">Android</h4>

            <p className="text-gray-p">Disponível para download na Google Play Store. Clique no link abaixo</p>

            <Link
              href="https://play.google.com/store/apps/details?id=com.emanoeledevapps.bolaofutebol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-1 hover:underline text-center"
            >
              Clique aqui para baixar
            </Link>
          </div>

          <div className="flex flex-col gap-5 p-5 border-x border-b rounded-2xl border-gray-1 w-full md:max-w-[220px]">
            <div className="flex items-center gap-3">
              <Image
                src={IosIcon}
                className="w-10 h-10 object-contain"
                alt="ícone do android"
              />

              <Image
                src={InternetIcon}
                className="w-10 h-10 object-contain"
                alt="ícone do android"
              />
            </div>

            <h4 className="font-bold text-green-1">iOS/Navegador</h4>

            <p className="text-gray-p">Estamos trabalhando para disponibilizar uma versão que funcione no navegador e assim também para dispositivos iOS</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
