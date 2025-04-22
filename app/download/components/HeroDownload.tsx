import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageHero from '@/public/images/image-hero-home.png'

export function HeroDownload() {
  return (
    <section className="flex flex-col items-center px-5 pt-20 md:gap-20 lg:gap-32 container mx-auto">
      <h2 className="font-bold text-3xl text-white text-center md:text-left md:text-6xl">
        Baixar o APP
        <br />
        <span className="text-green-1">Soccer Bolão</span>
      </h2>
    </section>
  )
}