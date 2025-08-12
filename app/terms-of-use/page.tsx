import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso – Soccer Bolão",
  description:
    "Confira os Termos de Uso do app Soccer Bolão. Entenda as regras, responsabilidades e diretrizes para uso da nossa plataforma de entretenimento esportivo.",
  keywords:
    "termos de uso Soccer Bolão, regras de uso do app, condições de uso, termos legais, uso do aplicativo, app de bolão, responsabilidade do usuário, direitos e deveres, regras Soccer Bolão",
  openGraph: {
    type: "website",
    title: "Termos de Uso – Soccer Bolão",
    description:
      "Confira os Termos de Uso do app Soccer Bolão. Entenda as regras, responsabilidades e diretrizes para uso da nossa plataforma de entretenimento esportivo.",
    url: "https://soccerbolao.com.br/terms-of-use",
    locale: "pt-br",
    siteName: "Soccer Bolão",
    images: "https://www.soccerbolao.com.br/images/og.png",
  },
  robots: { index: true, follow: true },
};

export default function TermsOfUse() {
  return (
    <>
      <Header />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <h2 className="font-bold text-white text-center text-4xl">
          Termos de Uso
        </h2>
        <p className="mt-10">Última atualização: 12 de agosto de 2025</p>

        <h3 className="font-bold mt-10 mb-3">1. Definições</h3>
        <p>"Usuário": pessoa cadastrada no aplicativo;</p>
        <p>"Conta": perfil criado com informações pessoais;</p>
        <p>
          "Conteúdo do Usuário": conteúdo publicado no app, como palpites, nomes
          de ligas, fotos, etc;
        </p>
        <p>
          "Soccer Bolão": aplicativo de entretenimento social, sem relação com
          apostas esportivas ou jogos de azar.
        </p>

        <h3 className="font-bold mt-10 mb-3">2. Objetivo do Aplicativo</h3>
        <p>
          O Soccer Bolão é um aplicativo de entretenimento, permitindo criar
          bolões e ligas para palpites e interação social. Não é um aplicativo
          de apostas esportivas, não envolve dinheiro ou pagamento de prêmios e
          não incentiva jogos de azar.
        </p>

        <h3 className="font-bold mt-10 mb-3">3. Idade Mínima</h3>
        <p>O uso do app é permitido a partir de 18 anos.</p>

        <h3 className="font-bold mt-10 mb-3">4. Cadastro e Conta do Usuário</h3>
        <p>
          O cadastro exige nome completo, e-mail, foto de perfil (opcional) e
          nome de usuário.
        </p>
        <p>
          Você é responsável por manter a confidencialidade dos dados de login.
          O Soccer Bolão não se responsabiliza por acessos não autorizados por
          negligência do usuário.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          5. Assinatura Premium e Pagamentos
        </h3>
        <p>
          Pagamentos são processados exclusivamente pelo Google Payments
          (android). O Soccer Bolão não coleta ou armazena dados financeiros.
          Pagamentos e assinaturas não estão disponíveis para iOS.
        </p>

        <h3 className="font-bold mt-10 mb-3">6. Exibição de Anúncios</h3>
        <p>
          O app pode exibir anúncios de terceiros, regidos pelas políticas dos
          fornecedores. O Soccer Bolão não é responsável pelo conteúdo, precisão
          ou segurança desses anúncios, nem pela coleta de dados feita por
          terceiros.
        </p>

        <h3 className="font-bold mt-10 mb-3">7. Conteúdo do Usuário</h3>
        <p>
          Você é responsável por todo conteúdo que publica e garante que não
          viola leis ou direitos de terceiros. O app pode remover conteúdo
          ofensivo, ilegal ou que incentive apostas esportivas. Ao publicar,
          você concede licença não exclusiva ao Soccer Bolão para uso e exibição
          no contexto da plataforma.
        </p>

        <h3 className="font-bold mt-10 mb-3">8. Comportamento do Usuário</h3>
        <p>É proibido:</p>
        <p className="ml-5">
          - Usar o app para fins ilegais, fraudulentos ou promover apostas
          esportivas;
        </p>
        <p className="ml-5">- Publicar conteúdo ofensivo ou prejudicial;</p>
        <p className="ml-5">
          - Violar direitos de propriedade intelectual ou privacidade.
        </p>
        <p>
          O Soccer Bolão pode suspender ou excluir contas sem aviso se houver
          violação dos termos.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          9. Falhas, Interrupções e Limitação de Responsabilidade
        </h3>
        <p>
          O app é fornecido "no estado em que se encontra", sem garantia de
          funcionamento contínuo ou livre de falhas. O Soccer Bolão não se
          responsabiliza por danos diretos, indiretos, perdas de dados, lucros
          cessantes ou interrupções. Não nos responsabilizamos por apostas
          feitas fora do app.
        </p>

        <h3 className="font-bold mt-10 mb-3">10. Propriedade Intelectual</h3>
        <p>
          Todo o conteúdo, design e funcionalidades do Soccer Bolão são
          protegidos por direitos autorais e pertencem ao desenvolvedor.
        </p>

        <h3 className="font-bold mt-10 mb-3">11. Alterações e Encerramento</h3>
        <p>
          O app pode ser suspenso, alterado ou encerrado a qualquer momento, com
          ou sem aviso prévio.
        </p>

        <h3 className="font-bold mt-10 mb-3">12. Política de Privacidade</h3>
        <p>O uso do app também está sujeito à nossa Política de Privacidade.</p>

        <h3 className="font-bold mt-10 mb-3">13. Legislação e Foro</h3>
        <p>
          Estes Termos são regidos pelas leis do Brasil. O foro competente será
          o da Comarca de [cidade/UF].
        </p>

        <h3 className="font-bold mt-10 mb-3">14. Disposições Gerais</h3>
        <p>
          Se qualquer cláusula destes Termos for considerada inválida, as demais
          continuam válidas e aplicáveis.
        </p>
      </main>

      <Footer />
    </>
  );
}
