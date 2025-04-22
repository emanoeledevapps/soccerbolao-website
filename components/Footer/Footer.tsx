import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-20 w-screen">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full px-5 flex items-center justify-between h-full lg:px-40">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="logo do app soccer bolão"
              className="w-10 h-10 object-contain md:w-14 md:h-14"
            />
            <p className="font-bold max-w-[50%] text-white text-sm md:text-base md:max-w-full">Soccer Bolão</p>
          </div>

          <Link
            className="px-10 h-10 text-sm rounded-2xl bg-green-1 text-white font-semibold flex items-center hover:bg-green-1/90 duration-200 md:text-base"
            href="/download"
          >
            Baixar APP
          </Link>
        </div>

        <div className="h-[1px] w-[80%] mt-5 bg-gray-1"/>

        <div className="w-full px-5 flex flex-col items-center justify-between h-full mt-5 gap-5 lg:px-40 md:flex-row">
          <p className="text-gray-p text-sm text-center">Soccer Bolão - Todos os direitos reservados</p>

          <div className="flex items-center gap-5">
            <Link
              href="/terms-of-use"
              className="text-sm text-gray-p hover:underline"
            >
              Termos de uso
            </Link>

            <div className="h-4 w-[1px] bg-gray-p"/>

            <Link
              href="/privacy-policy"
              className="text-sm text-gray-p hover:underline"
            >
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}