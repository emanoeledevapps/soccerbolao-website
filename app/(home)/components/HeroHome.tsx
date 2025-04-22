import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageHero from '@/public/images/image-hero-home.png'
import Link from "next/link";

export function HeroHome() {
  return (
    <section className="flex flex-wrap items-center justify-center px-5 pt-20 md:pt-10 md:gap-20 lg:gap-32 container mx-auto">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl text-white text-center md:text-left md:text-5xl">
          <span className="text-green-1">Diversão de verdade</span>
          <br />
          para quem ama futebol
        </h2>

        <p className="text-gray-p max-w-[500px] text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        <Link
          className="hidden w-fit mt-5 px-10 h-10 text-sm rounded-2xl bg-green-1 text-white font-semibold items-center justify-center hover:bg-green-1/90 duration-200 md:text-base md:flex"
          href="/download"
        >
          Baixe agora nosso APP
        </Link>
      </div>

      <Image
        alt="dois screenshots mostrando o app soccer bolão"
        width={500}
        height={500}
        src={ImageHero}
        className="w-full ml-10 h-[400px] md:ml-0 md:w-[400px] md:h-[500px] object-contain"
        quality={100}
      />

      <Link
        className="w-full flex mt-5 px-10 h-10 text-sm rounded-2xl bg-green-1 text-white font-semibold items-center justify-center hover:bg-green-1/90 duration-200 md:text-base md:hidden"
        href="/download"
      >
        Baixe agora nosso APP
      </Link>
    </section>
  )
}