import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.png'

export function Header() {
  return (
    <header className="h-20 w-screen bg-gray-1">
      <div className="container mx-auto px-5 flex items-center justify-between h-full md:px-10">
        <Link 
          className="flex items-center gap-3"
          href="/"
        >
          <Image
            src={Logo}
            alt="logo do app soccer bolão"
            className="w-10 h-10 object-contain md:w-14 md:h-14"
          />

          <h1 className="font-bold max-w-[50%] text-white text-sm md:text-base md:max-w-full">Soccer Bolão</h1>
        </Link>

        <Link
          className="px-10 h-10 text-sm rounded-2xl bg-green-1 text-white font-semibold flex items-center hover:bg-green-1/90 duration-200 md:text-base"
          href="/download"
        >
          Baixar APP
        </Link>
      </div>
    </header>
  )
}
