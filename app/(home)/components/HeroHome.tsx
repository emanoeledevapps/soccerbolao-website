import { Button } from "@/components/ui/button";

export function HeroHome() {
  return (
    <section className="flex flex-col items-center gap-5 pt-20 container mx-auto">
      <h2 className="font-bold text-5xl text-white text-center">
        <span className="text-green-1">Diversão de verdade</span>
        <br/>
        para quem ama futebol
      </h2>

      <p className="text-center text-gray-p max-w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    
      <div className="w-[80%] h-[300px] bg-red-500 mt-5"/>

      <Button className="w-[400px] rounded-2xl mt-5">
        Baixe agora nosso APP
      </Button>
    </section>
  )
}