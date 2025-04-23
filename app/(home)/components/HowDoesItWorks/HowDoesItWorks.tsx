import Image from "next/image";
import { CircleDot } from "lucide-react";
import Image1 from '@/public/images/how-do-it-works-1.png'
import Image2 from '@/public/images/how-do-it-works-2.png'
import Image3 from '@/public/images/how-do-it-works-3.png'

export function HowDoesItWorks() {
  return (
    <section className="flex flex-col gap-10 my-20">
      <div className="flex items-center gap-5">
        <div className="md:flex flex-1 h-1 bg-green-1 hidden rounded-xl" />
        <h3 className="text-white text-center font-bold text-2xl max-w-[400px] md:text-start md:text-4xl">Uma forma simples de jogar</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:mt-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-semibold text-green-1">1°) Crie seus bolões ou ligas</h4>
              <Image
                src={Image1}
                alt="exemplo de ligas ou bolões criados"
                className="w-[320px] object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <h4 className="font-semibold text-green-1">2°) Veja as partidas disponíveis</h4>
              <Image
                src={Image2}
                alt="exemplo de uma partida"
                className="w-[320px] object-contain"
              />
            </div>
          </div>

          <div className="hidden lg:flex">
            <MoreInformations />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h4 className="font-semibold text-green-1">3°) Envie seu palpite</h4>
          <Image
            src={Image3}
            alt="exemplo de um envio de palpite"
            className="w-[320px] object-contain"
          />
        </div>
      </div>

      <div className="lg:hidden">
        <MoreInformations />
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-[80%] h-[1px] bg-green-1/50" />
      </div>
    </section>
  )
}

function MoreInformations() {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex items-center gap-5">
        <h5 className="text-white font-semibold text-xl max-w-[400px]">E muito mais</h5>
        <div className="md:flex flex-1 h-[1px] bg-green-1/40 hidden" />
      </div>

      <InformationItem text="Dois tipos de palpites: Simples ou Exato" />
      <InformationItem text="Partidas e ranking atualizados em tempo real" />
      <InformationItem text="Crie bolões públicos ou privados" />
      <InformationItem text="Ligas no formato pontos corridos, onde você enfrenta seus amigos" />
    </div>
  )
}

interface InformationItemProps {
  text: string
}
function InformationItem({ text }: InformationItemProps) {
  return (
    <div className="flex ites-center gap-3">
      <CircleDot className="text-green-1 min-w-3 min-h-3" />
      <p className="text-gray-p max-w-[80%] lg:max-w-full">{text}</p>
    </div>
  )
}
