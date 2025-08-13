import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Suporte – Soccer Bolão",
  description: "Está precisando de ajuda com o app? Nós podemos te ajudar.",
  keywords: "ajuda, suporte soccer bolão, dúvidas",
  openGraph: {
    type: "website",
    title: "Suporte – Soccer Bolão",
    description: "Está precisando de ajuda com o app? Nós podemos te ajudar.",
    url: "https://soccerbolao.com.br/support",
    locale: "pt-br",
    siteName: "Soccer Bolão",
    images: "https://www.soccerbolao.com.br/images/og.png",
  },
  robots: { index: true, follow: true },
};

export default function Suporte() {
  return (
    <>
      <Header />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <h2 className="font-bold text-white text-center text-4xl">
          Suporte - Soccer bolão
        </h2>

        <p className="mt-20">
          Precisa de ajuda ou quer tirar dúvidas sobre o uso do{" "}
          <b>Soccer Bolão</b>? Nossa equipe está pronta para auxiliar você.
        </p>

        <h3 className="font-bold mt-10 mb-3">Contato de Suporte</h3>
        <p>
          <b>E-mail:</b> contato@soccerbolao.com.br
        </p>

        <p className="mt-10">
          Normalmente respondemos em até 2 dias úteis. Obrigado por usar o{" "}
          <b>Soccer bolão</b>!
        </p>
      </main>

      <Footer />
    </>
  );
}
