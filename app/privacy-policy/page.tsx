import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade – Soccer Bolão',
  description: 'Saiba como o app Soccer Bolão coleta, utiliza e protege suas informações. Nossa prioridade é a sua privacidade e segurança de dados.',
  keywords: 'política de privacidade Soccer Bolão, proteção de dados, privacidade no app, dados pessoais, segurança da informação, coleta de dados, LGPD, confidencialidade, app de bolão seguro',
  openGraph: {
    type: 'website',
    title: 'Política de Privacidade – Soccer Bolão',
    description: 'Saiba como o app Soccer Bolão coleta, utiliza e protege suas informações. Nossa prioridade é a sua privacidade e segurança de dados.',
    url: 'https://soccerbolao.com.br/privacy-policy',
    locale: 'pt-br',
    siteName: 'Soccer Bolão',
    images: 'https://soccerbolao.com.br/assets/images/og.png'
  },
  robots: { index: true, follow: true }
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <h2 className="font-bold text-white text-center text-4xl">Política de privacidade</h2>

        <p className="mt-10">Última atualização: 25 de março de 2025</p>
        <h3 className="mt-10">A sua privacidade é importante para nós. Esta Política de Privacidade tem como objetivo explicar como coletamos, usamos, protegemos e compartilhamos seus dados pessoais ao usar o aplicativo Soccer Bolão.</h3>

        <h3 className="font-bold mt-10 mb-3">1. Informações que Coletamos</h3>
        <p className="">Ao utilizar o aplicativo, coletamos os seguintes dados pessoais:</p>
        <p className="ml-5">- Nome completo: Para identificar você dentro do aplicativo;</p>
        <p className="ml-5">- Email: Para enviar notificações, atualizações e comunicação sobre sua conta;</p>
        <p className="ml-5">- Foto de perfil (opcional): Para personalizar sua conta;</p>
        <p className="ml-5">- Nome de usuário: Criado durante o cadastro, utilizado para sua identificação no aplicativo.</p>
        <p className="">Não coletamos dados financeiros ou de pagamento, como número de cartão de crédito ou dados bancários. Toda a gestão de pagamentos de assinaturas é realizada diretamente pelo Google Payments, que é responsável por processar e gerenciar suas transações financeiras.</p>

        <h3 className="font-bold mt-10 mb-3">2. Uso dos Dados</h3>
        <p className="">Os dados coletados são utilizados para as seguintes finalidades:</p>
        <p className="ml-5">- Cadastro e autenticação: Criar e gerenciar sua conta no aplicativo;</p>
        <p className="ml-5">- Personalização de conteúdo: Ajustar a experiência do usuário com base nas preferências, como foto de perfil e nome de usuário;</p>
        <p className="ml-5">- Notificações e comunicações: Enviar atualizações sobre o aplicativo, como novos recursos, alterações nos termos de uso ou informações relacionadas à sua conta;</p>
        <p className="ml-5">- Melhoria do aplicativo: Analisar dados de uso para aprimorar a funcionalidade e a experiência do aplicativo.</p>

        <h3 className="font-bold mt-10 mb-3">3. Exibição de Anúncios</h3>
        <p className="">O aplicativo pode exibir anúncios de terceiros. Esses anúncios não são de responsabilidade do Soccer Bolão, e a exibição de anúncios está sujeita à política de privacidade e aos termos de uso dos serviços de publicidade de terceiros. O Soccer Bolão não coleta dados relacionados à exibição de anúncios e não tem controle sobre o conteúdo desses anúncios.</p>

        <h3 className="font-bold mt-10 mb-3">4. Compartilhamento de Dados</h3>
        <p className="">Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprir obrigações legais, regulamentares ou quando exigido por autoridades competentes.</p>

        <h3 className="font-bold mt-10 mb-3">5. Segurança dos Dados</h3>
        <p className="">Adotamos medidas de segurança técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, vazamentos, alterações e destruição. No entanto, como qualquer sistema online, não podemos garantir a segurança absoluta.</p>

        <h3 className="font-bold mt-10 mb-3">6. Direitos dos Usuários (LGPD)</h3>
        <p className="">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:</p>
        <p className="ml-5">- Acesso aos dados: Você pode acessar, corrigir ou excluir seus dados pessoais a qualquer momento;</p>
        <p className="ml-5">- Revogação do consentimento: Você pode revogar seu consentimento para o processamento de seus dados pessoais a qualquer momento;</p>
        <p className="ml-5">- Portabilidade de dados: Você pode solicitar a portabilidade dos seus dados pessoais a outro provedor de serviços, se aplicável;</p>
        <p className="">Para exercer seus direitos, entre em contato conosco através do nosso e-mail: contato@soccerbolao.com.br</p>

        <h3 className="font-bold mt-10 mb-3">7. Não é um Aplicativo de Apostas</h3>
        <p className="">O Soccer Bolão não é um aplicativo de apostas esportivas. O objetivo do aplicativo é entretenimento e interação social, permitindo que usuários criem e participem de bolões e ligas de futebol com amigos ou outros usuários, sem envolver questões financeiras ou apostas.</p>

        <h3 className="font-bold mt-10 mb-3">8. Alterações na Política de Privacidade</h3>
        <p className="">Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de dados. Quaisquer alterações serão publicadas nesta página e, se as alterações forem significativas, notificaremos você por e-mail ou por meio de uma notificação no aplicativo.</p>
      </main>

      <Footer />
    </>
  )
}
