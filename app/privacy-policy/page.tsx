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
          explica de forma clara como coletamos, usamos, protegemos e
          compartilhamos seus dados pessoais ao usar o aplicativo Soccer Bolão,
          em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº
          13.709/2018 – LGPD).
        </h3>

        <h3 className="font-bold mt-10 mb-3">1. Informações que Coletamos</h3>
        <p>
          Ao utilizar o aplicativo, podemos coletar os seguintes dados pessoais:
        </p>
        <p className="ml-5">
          - Nome completo: Para identificar e personalizar sua participação;
        </p>
        <p className="ml-5">
          - E-mail: Para comunicação sobre sua conta, envio de notificações e
          recuperação de senha;
        </p>
        <p className="ml-5">
          - Foto de perfil (opcional): Para personalizar sua conta; pode ser
          alterada ou excluída a qualquer momento;
        </p>
        <p className="ml-5">
          - Nome de usuário: Criado no cadastro e visível a outros usuários no
          app;
        </p>
        <p className="ml-5">
          - Dados de uso: Informações sobre interações no app, métricas e
          preferências.
        </p>
        <p>
          Importante: Não coletamos dados financeiros ou bancários. Pagamentos
          de assinatura premium (quando disponíveis) são realizados
          exclusivamente por Google Payments no Android. Assinaturas não estão
          disponíveis para iOS.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          2. Base Legal para Tratamento de Dados
        </h3>
        <p>
          Tratamos seus dados pessoais com base nas seguintes hipóteses legais
          da LGPD:
        </p>
        <p className="ml-5">
          - Execução de contrato: Para oferecer os serviços do aplicativo;
        </p>
        <p className="ml-5">
          - Legítimo interesse: Para melhorar recursos, prevenir fraudes e
          garantir segurança;
        </p>
        <p className="ml-5">
          - Consentimento: Quando necessário para funcionalidades opcionais ou
          envio de comunicações promocionais;
        </p>
        <p className="ml-5">
          - Cumprimento de obrigação legal: Para atender determinações legais ou
          de autoridades.
        </p>

        <h3 className="font-bold mt-10 mb-3">3. Finalidade do Uso dos Dados</h3>
        <p>Utilizamos seus dados para:</p>
        <p className="ml-5">- Criar e gerenciar sua conta;</p>
        <p className="ml-5">- Personalizar sua experiência no app;</p>
        <p className="ml-5">
          - Enviar notificações sobre recursos, atualizações e alterações nos
          termos;
        </p>
        <p className="ml-5">
          - Realizar análises de uso e métricas para melhoria do serviço;
        </p>
        <p className="ml-5">
          - Garantir a segurança da plataforma e prevenir fraudes.
        </p>

        <h3 className="font-bold mt-10 mb-3">4. Tecnologias de Rastreamento</h3>
        <p>
          Podemos usar cookies, identificadores de dispositivo e serviços de
          análise como Google Analytics e Firebase.
        </p>
        <p className="ml-5">
          - Essas ferramentas ajudam a entender como o app é utilizado e
          aprimorar recursos;
        </p>
        <p className="ml-5">
          - Você pode gerenciar ou desativar essas tecnologias nas configurações
          do dispositivo;
        </p>
        <p className="ml-5">
          - Para mais informações, consulte as políticas de privacidade do{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>{" "}
          e do{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase
          </a>
          .
        </p>

        <h3 className="font-bold mt-10 mb-3">5. Exibição de Anúncios</h3>
        <p>
          O aplicativo pode exibir anúncios de terceiros (ex.: Google AdMob):
        </p>
        <p className="ml-5">
          - Esses anúncios podem coletar dados conforme a política de
          privacidade do provedor;
        </p>
        <p className="ml-5">
          - Você pode gerenciar anúncios personalizados nas configurações do
          Google:{" "}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Configurações de anúncios
          </a>
          .
        </p>

        <h3 className="font-bold mt-10 mb-3">6. Compartilhamento de Dados</h3>
        <p>
          Não vendemos seus dados a terceiros. Podemos compartilhá-los apenas:
        </p>
        <p className="ml-5">
          - Com prestadores de serviço essenciais (ex.: hospedagem, análise de
          dados, suporte técnico), que seguem padrões de segurança compatíveis
          com a LGPD;
        </p>
        <p className="ml-5">
          - Para cumprir obrigações legais ou atender solicitações de
          autoridades.
        </p>

        <h3 className="font-bold mt-10 mb-3">7. Retenção e Exclusão</h3>
        <p>
          Manteremos seus dados enquanto sua conta estiver ativa ou pelo tempo
          necessário para cumprir obrigações legais.
        </p>
        <p className="ml-5">
          - Você pode solicitar a exclusão a qualquer momento diretamente no app
          ou pelo e-mail contato@soccerbolao.com.br;
        </p>
        <p className="ml-5">
          - As solicitações serão respondidas em até 15 dias após o recebimento.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          8. Armazenamento e Transferência Internacional
        </h3>
        <p>
          Seus dados podem ser armazenados em servidores fora do Brasil (ex.:
          EUA, Google/Firebase):
        </p>
        <p className="ml-5">
          - Garantimos que qualquer transferência internacional seguirá
          mecanismos previstos na LGPD, como cláusulas contratuais padrão e
          certificações de segurança.
        </p>

        <h3 className="font-bold mt-10 mb-3">9. Segurança dos Dados</h3>
        <p>
          Adotamos medidas técnicas e administrativas para proteger seus dados,
          incluindo:
        </p>
        <p className="ml-5">
          - Criptografia de dados em trânsito e em repouso;
        </p>
        <p className="ml-5">- Controle de acesso restrito;</p>
        <p className="ml-5">
          - Monitoramento e prevenção de incidentes de segurança.
        </p>
        <p>
          No entanto, nenhum sistema é 100% seguro, e não podemos garantir
          segurança absoluta contra ataques cibernéticos.
        </p>

        <h3 className="font-bold mt-10 mb-3">10. Direitos dos Titulares</h3>
        <p>Você pode:</p>
        <p className="ml-5">
          - Confirmar se realizamos tratamento de seus dados;
        </p>
        <p className="ml-5">
          - Acessar, corrigir, atualizar ou solicitar a exclusão de informações;
        </p>
        <p className="ml-5">- Solicitar a portabilidade dos dados;</p>
        <p className="ml-5">- Revogar consentimentos;</p>
        <p className="ml-5">
          - Solicitar informações sobre o compartilhamento de dados.
        </p>
        <p>
          Para exercer seus direitos, envie solicitação para
          contato@soccerbolao.com.br. O prazo para resposta é de até 15 dias
          mediante comprovação de identidade.
        </p>

        <h3 className="font-bold mt-10 mb-3">
          11. Não é Aplicativo de Apostas
        </h3>
        <p>
          O Soccer Bolão é destinado exclusivamente a entretenimento social, sem
          apostas com dinheiro real. Não nos responsabilizamos por apostas
          feitas por usuários em outras plataformas.
        </p>

        <h3 className="font-bold mt-10 mb-3">12. Alterações na Política</h3>
        <p>Podemos atualizar esta política periodicamente:</p>
        <p className="ml-5">
          - Alterações relevantes serão notificadas por e-mail e/ou no
          aplicativo antes de entrarem em vigor;
        </p>
        <p className="ml-5">
          - A data da última atualização estará sempre indicada no início deste
          documento.
        </p>
      </main>

      <Footer />
    </>
  );
}
