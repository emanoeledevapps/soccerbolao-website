import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageHero from '@/public/images/image-hero-home.png'

export function HeroHome() {
  return (
    <section className="flex flex-wrap items-center justify-center px-5 pt-20 md:pt-10 md:gap-20 lg:gap-32 container mx-auto">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl text-white text-center md:text-left md:text-3xl">
          <span className="text-green-1">Diversão de verdade</span>
          <br />
          para quem ama futebol
        </h2>

        <p className="text-gray-p max-w-[500px] text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        <Button className="hidden md:flex w-[400px] rounded-2xl mt-5">
          Baixe agora nosso APP
        </Button>
      </div>

      <Image
        alt="dois screenshots mostrando o app soccer bolão"
        width={500}
        height={500}
        src={ImageHero}
        className="w-full ml-10 h-[400px] md:ml-0 md:w-[400px] md:h-[500px] object-contain"
        quality={100}
      />

      <Button className="md:hidden w-full rounded-2xl">
        Baixe agora nosso APP
      </Button>
    </section>
  )
}