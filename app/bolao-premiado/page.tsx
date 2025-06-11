import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import ImagePromo from "@/public/images/bolao-premiado.png";
import { CopyCode } from "./components/CopyCode";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bolão do Mundial de Clubes 2025 – Participe e Concorra a Prêmios!",
  description:
    "Participe do Bolão do Mundial de Clubes 2025! É gratuito e os 3 melhores colocados ganham prêmios em dinheiro via PIX. Faça seu palpite e concorra!",
  keywords:
    "bolão mundial 2025, bolão futebol, palpites mundial de clubes, bolão grátis, premiação PIX, campeonato de futebol",
  openGraph: {
    type: "website",
    title: "Bolão do Mundial de Clubes 2025 – Participe e Concorra a Prêmios!",
    description:
      "Participe do Bolão do Mundial de Clubes 2025! É gratuito e os 3 melhores colocados ganham prêmios em dinheiro via PIX. Faça seu palpite e concorra!",
    url: "https://soccerbolao.com.br/bolao-premiado",
    locale: "pt-br",
    siteName: "Soccer Bolão",
    images: "https://www.soccerbolao.com.br/images/bolao-premiado.png",
  },
  robots: { index: true, follow: true },
};

export default function BolaoPremiado() {
  const bolaoCode = "KNZMAF";
  return (
    <>
      <Header />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <div className="flex justify-center">
          <Image
            alt="promoção bolao premiado"
            src={ImagePromo}
            width={720}
            height={400}
            className="w-full lg:w-[720px] object-contain rounded-2xl overflow-hidden"
          />
        </div>

        <h3 className="font-bold mt-10 mb-3">🏆 Premiação</h3>
        <p>
          Serão distribuídos <strong>R$ 150 em prêmios</strong> entre os três
          primeiros colocados:
        </p>
        <ul className="list-disc ml-8 mt-2">
          <li>
            <strong>1º lugar:</strong> R$ 80
          </li>
          <li>
            <strong>2º lugar:</strong> R$ 50
          </li>
          <li>
            <strong>3º lugar:</strong> R$ 20
          </li>
        </ul>

        <h3 className="font-bold mt-10 mb-3">💰 Pagamento</h3>
        <p>
          Os prêmios serão pagos via <strong>PIX</strong>, utilizando o email
          cadastrado no nosso app para contato.
        </p>
        <p className="text-yellow-500 mt-2">
          ⚠️ Atenção: nunca solicitaremos códigos ou ligações. Apenas pediremos
          a sua chave PIX cadastrada em seu nome.
        </p>
        <p className="text-yellow-500 mt-2">
          ⚠️ Caso seja um dos ganhadores, entraremos em contato com o email <strong>contato@soccerbolao.com.br</strong>. Os ganhadores terão um prazo de 48 horas para responder, caso contrário será eliminado e sua posição será herdada.
        </p>

        <h3 className="font-bold mt-10 mb-3">📜 Regras</h3>
        <ul className="list-disc ml-8 mt-2 space-y-1">
          <li>
            O bolão é de <strong>palpites exatos</strong> sobre o{" "}
            <strong>Mundial de Clubes 2025</strong>.
          </li>
          <li>Encerramento ao final do campeonato.</li>
          <li>
            Em caso de empate em pontos, o valor da premiação será dividido
            igualmente entre os empatados.
          </li>
        </ul>

        <h3 className="font-bold mt-10 mb-3">🔐 Código do Bolão</h3>
        <p>Para participar é fácil e gratuito:</p>
        <ol className="list-decimal ml-8 mt-2 space-y-1">
          <li>Baixe nosso app.</li>
          <li>Crie sua conta (se ainda não tiver).</li>
          <li>
            Toque em <strong>Novo Bolão</strong>.
          </li>
          <li>
            Escolha a opção <strong>Entrar com Código</strong>.
          </li>
          <li>Digite o código abaixo:</li>
        </ol>
        <div className="flex gap-5 items-center mt-5">
          <p className="font-bold text-green-1 text-5xl">{bolaoCode}</p>
          <CopyCode code={bolaoCode} />
        </div>

        <Link
          className="w-fit mt-10 px-10 h-10 text-sm rounded-2xl bg-green-1 text-white font-semibold flex items-center hover:bg-green-1/90 duration-200 md:text-base"
          href="/download"
        >
          Baixar APP
        </Link>
      </main>

      <Footer />
    </>
  );
}
