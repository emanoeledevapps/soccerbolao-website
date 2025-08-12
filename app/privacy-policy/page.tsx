import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade – Soccer Bolão",
  description:
    "Saiba como o app Soccer Bolão coleta, utiliza e protege suas informações. Nossa prioridade é a sua privacidade e segurança de dados.",
  keywords:
    "política de privacidade Soccer Bolão, proteção de dados, privacidade no app, dados pessoais, segurança da informação, coleta de dados, LGPD, confidencialidade, app de bolão seguro",
  openGraph: {
    type: "website",
    title: "Política de Privacidade – Soccer Bolão",
    description:
      "Saiba como o app Soccer Bolão coleta, utiliza e protege suas informações. Nossa prioridade é a sua privacidade e segurança de dados.",
    url: "https://soccerbolao.com.br/privacy-policy",
    locale: "pt-br",
    siteName: "Soccer Bolão",
    images: "https://www.soccerbolao.com.br/images/og.png",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <h2 className="font-bold text-white text-center text-4xl">
          Política de Privacidade
        </h2>
        <p className="mt-10">Última atualização: 12 de agosto de 2025</p>

        <h3 className="mt-10">
          A sua privacidade é fundamental para nós. Esta Política de Privacidade
          explica como coletamos, usamos, protegemos e compartilhamos seus dados
          pessoais ao usar o aplicativo Soccer Bolão.
        </h3>

        <h3 className="font-bold mt-10 mb-3">1. Informações que Coletamos</h3>
        <p>Ao utilizar o aplicativo, coletamos os seguintes dados pessoais:</p>
        <p className="ml-5">
          - Nome completo: Para identificar e personalizar sua participação;
        </p>
        <p className="ml-5">
          - E-mail: Para comunicação sobre sua conta e envio de notificações;
        </p>
        <p className="ml-5">
          - Foto de perfil (opcional): Para personalizar sua conta;
        </p>
        <p className="ml-5">
          - Nome de usuário: Criado no cadastro, utilizado para identificar você
          no app.
        </p>
        <p>
          Não coletamos dados financeiros ou bancários. Pagamentos de assinatura
          premium são realizados apenas pelo Google Payments (Android).
          Assinaturas não disponíveis para iOS.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          2. Base Legal para Tratamento de Dados
        </h3>
        <p>
          Tratamos seus dados pessoais com base nas seguintes hipóteses legais
          da LGPD:
        </p>
        <p className="ml-5">
          - Execução de contrato (prestação do serviço do app);
        </p>
        <p className="ml-5">- Legítimo interesse (melhoria do serviço);</p>
        <p className="ml-5">
          - Consentimento (quando necessário para funcionalidades ou
          comunicações específicas);
        </p>
        <p className="ml-5">- Cumprimento de obrigação legal.</p>

        <h3 className="font-bold mt-10 mb-3">3. Uso dos Dados</h3>
        <p>Seus dados são utilizados para:</p>
        <p className="ml-5">- Criar e gerenciar sua conta;</p>
        <p className="ml-5">- Personalizar sua experiência;</p>
        <p className="ml-5">
          - Enviar notificações sobre recursos, atualizações e alterações dos
          termos;
        </p>
        <p className="ml-5">
          - Melhorar funcionamento e segurança do aplicativo.
        </p>

        <h3 className="font-bold mt-10 mb-3">4. Tecnologias de Rastreamento</h3>
        <p>
          O Soccer Bolão pode usar cookies, identificadores de dispositivo ou
          serviços de análise, como Google Analytics ou Firebase, para entender
          o uso do app e aprimorar recursos. Você pode desativar estas opções
          nas configurações do seu dispositivo ou navegador.
        </p>

        <h3 className="font-bold mt-10 mb-3">5. Exibição de Anúncios</h3>
        <p>
          O aplicativo pode exibir anúncios de terceiros (ex: Google AdMob).
          Estes são regidos pela política de privacidade dos próprios
          fornecedores. O Soccer Bolão não coleta dados relativos à exibição dos
          anúncios, nem se responsabiliza pelo conteúdo, precisão ou segurança
          desses anúncios. Consulte a política de privacidade do provedor de
          anúncios para mais informações.
        </p>

        <h3 className="font-bold mt-10 mb-3">6. Compartilhamento de Dados</h3>
        <p>
          Não compartilhamos seus dados pessoais com terceiros, exceto quando
          necessário para cumprir obrigação legal ou mediante ordem de
          autoridades competentes.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          7. Retenção e Exclusão dos Dados
        </h3>
        <p>
          Seus dados serão mantidos enquanto sua conta estiver ativa ou pelo
          período necessário para cumprir exigências legais. Você pode solicitar
          a exclusão direta no app ou pelo e-mail contato@soccerbolao.com.br.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          8. Local de Armazenamento e Transferência Internacional
        </h3>
        <p>
          Os dados podem ser armazenados em servidores fora do Brasil (por
          exemplo, EUA, Google/Firebase), sempre com mecanismos de proteção
          compatíveis com a LGPD.
        </p>

        <h3 className="font-bold mt-10 mb-3">9. Segurança dos Dados</h3>
        <p>
          Adotamos medidas técnicas e administrativas para proteger seus dados,
          mas não podemos garantir segurança absoluta contra falhas, acessos não
          autorizados ou ataques.
        </p>

        <h3 className="font-bold mt-10 mb-3">10. Direitos dos Titulares</h3>
        <p>
          Você pode acessar, corrigir, portabilizar ou excluir seus dados, assim
          como revogar o consentimento, conforme a LGPD. Solicitações podem ser
          feitas pelo e-mail contato@soccerbolao.com.br.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          11. Não É Aplicativo de Apostas
        </h3>
        <p>
          O Soccer Bolão não é um aplicativo de apostas esportivas. Nosso
          objetivo é entretenimento social, sem dinheiro ou apostas financeiras.
          A empresa não se responsabiliza por apostas realizadas por usuários em
          outros meios ou plataformas externas.
        </p>

        <h3 className="font-bold mt-10 mb-3">12. Alterações na Política</h3>
        <p>
          Podemos atualizar esta política periodicamente. Caso ocorram mudanças
          relevantes, notificaremos você por e-mail ou aviso no aplicativo.
        </p>
      </main>

      <Footer />
    </>
  );
}
