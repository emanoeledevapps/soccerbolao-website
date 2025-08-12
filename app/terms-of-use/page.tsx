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
        <p>"Usuário": pessoa física cadastrada no aplicativo;</p>
        <p>
          "Conta": perfil criado com informações pessoais e credenciais de
          acesso;
        </p>
        <p>
          "Conteúdo do Usuário": conteúdo publicado no app (palpites, nomes de
          ligas, fotos, textos);
        </p>
        <p>
          "Soccer Bolão": aplicativo de entretenimento social, sem relação com
          apostas esportivas ou jogos de azar.
        </p>

        <h3 className="font-bold mt-10 mb-3">2. Objetivo do Aplicativo</h3>
        <p>
          O Soccer Bolão permite criar bolões e ligas para palpites e interação
          social. Não é um aplicativo de apostas, não envolve dinheiro ou
          pagamento de prêmios e não incentiva jogos de azar.
        </p>

        <h3 className="font-bold mt-10 mb-3">3. Idade Mínima</h3>
        <p>O uso do app é permitido a maiores de 18 anos.</p>
        <p>
          Podemos solicitar comprovação de idade a qualquer momento. Contas que
          não comprovarem quando solicitado poderão ser suspensas ou excluídas.
        </p>

        <h3 className="font-bold mt-10 mb-3">4. Cadastro e Conta do Usuário</h3>
        <p>
          O cadastro exige nome completo, e-mail, nome de usuário e,
          opcionalmente, foto de perfil.
        </p>
        <p>
          Você deve manter a confidencialidade das credenciais. Adotamos medidas
          técnicas e administrativas de segurança, mas não respondemos por
          acessos decorrentes de negligência do usuário.
        </p>
        <p>
          É proibido criar conta falsa, com dados de terceiros ou informações
          inverídicas.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          5. Assinatura Premium e Pagamentos
        </h3>
        <p>
          Pagamentos e assinaturas (quando disponíveis) são processados
          exclusivamente pelo Google Payments (Android). Não coletamos nem
          armazenamos dados financeiros.
        </p>
        <p>
          Cancelamento, renovação e reembolso seguem as regras do Google
          Payments; verifique os termos do provedor antes da contratação.
        </p>
        <p>
          Assinaturas e pagamentos não estão disponíveis para iOS no momento.
        </p>

        <h3 className="font-bold mt-10 mb-3">6. Exibição de Anúncios</h3>
        <p>
          O app pode exibir anúncios de terceiros (ex.: Google AdMob), regidos
          pelas políticas dos próprios fornecedores.
        </p>
        <p>
          O Soccer Bolão não se responsabiliza por conteúdo, precisão ou
          segurança dos anúncios, nem pela coleta de dados por terceiros,
          conforme descrito na Política de Privacidade.
        </p>

        <h3 className="font-bold mt-10 mb-3">7. Conteúdo do Usuário</h3>
        <p>
          Você é responsável por todo conteúdo que publica e garante que não
          viola leis, direitos de terceiros ou estes Termos.
        </p>
        <p>
          Ao publicar, você concede ao Soccer Bolão licença não exclusiva,
          gratuita, limitada, revogável e restrita à exibição do conteúdo dentro
          do app.
        </p>
        <p>
          Conteúdo ofensivo, ilegal, que viole direitos ou incentive apostas
          esportivas poderá ser removido. Quando possível, informaremos a
          justificativa da moderação.
        </p>

        <h3 className="font-bold mt-10 mb-3">8. Comportamento do Usuário</h3>
        <p>
          É proibido usar o app para fins ilegais ou fraudulentos, promover
          apostas esportivas, publicar conteúdo ofensivo ou que viole
          propriedade intelectual, privacidade ou segurança.
        </p>
        <p>
          Violações podem levar à suspensão ou exclusão de contas. Em casos
          graves, o bloqueio pode ser imediato.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          9. Falhas, Interrupções e Limitação de Responsabilidade
        </h3>
        <p>
          O app é fornecido “no estado em que se encontra”, sem garantia de
          funcionamento contínuo, ininterrupto ou livre de erros.
        </p>
        <p>
          Não nos responsabilizamos por danos indiretos, lucros cessantes, perda
          de dados ou interrupções, exceto quando decorrentes de dolo ou culpa
          grave do Soccer Bolão.
        </p>
        <p>Não nos responsabilizamos por apostas realizadas fora do app.</p>

        <h3 className="font-bold mt-10 mb-3">10. Propriedade Intelectual</h3>
        <p>
          Todo conteúdo, design, software e marca do Soccer Bolão pertencem ao
          desenvolvedor e são protegidos por direitos autorais e demais leis
          aplicáveis.
        </p>
        <p>
          É proibido copiar, modificar, distribuir ou explorar o app sem
          autorização prévia e por escrito.
        </p>

        <h3 className="font-bold mt-10 mb-3">11. Alterações e Encerramento</h3>
        <p>
          Podemos alterar funcionalidades, suspender ou encerrar o app a
          qualquer momento.
        </p>
        <p>
          Alterações relevantes destes Termos serão comunicadas com antecedência
          mínima de 15 dias. Se você não concordar, poderá encerrar sua conta
          sem custos.
        </p>

        <h3 className="font-bold mt-10 mb-3">12. Política de Privacidade</h3>
        <p>
          O uso do app também está sujeito à Política de Privacidade, que
          descreve o tratamento de dados pessoais.
        </p>

        <h3 className="font-bold mt-10 mb-3">13. Legislação e Foro</h3>
        <p>Estes Termos são regidos pelas leis do Brasil.</p>
        <p>
          Para usuários-consumidores, fica eleito o foro do domicílio do
          consumidor, conforme o Código de Defesa do Consumidor.
        </p>

        <h3 className="font-bold mt-10 mb-3">14. Disposições Gerais</h3>
        <p>
          Se qualquer cláusula destes Termos for considerada inválida ou
          inexequível, as demais permanecem válidas e aplicáveis.
        </p>
        <p>
          A tolerância quanto ao descumprimento de quaisquer obrigações não
          importará em renúncia de direitos.
        </p>
      </main>

      <Footer />
    </>
  );
}
