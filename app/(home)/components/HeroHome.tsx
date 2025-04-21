import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageHero from '@/public/images/image-hero-home.png'

export function HeroHome() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-32 pt-20 container mx-auto">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-5xl text-white">
          <span className="text-green-1">Diversão de verdade</span>
          <br />
          para quem ama futebol
        </h2>

        <p className="text-gray-p max-w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      
        <Button className="w-[400px] rounded-2xl mt-5">
          Baixe agora nosso APP
        </Button>
      </div>

      <Image
        alt="dois screenshots mostrando o app soccer bolão"
        width={500}
        height={500}
        src={ImageHero}
        className="w-[400px] h-[500px] object-contain"
        quality={100}
      />
    </section>
  )
}