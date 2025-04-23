import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Termos de Uso – Soccer Bolão',
  description: 'Confira os Termos de Uso do app Soccer Bolão. Entenda as regras, responsabilidades e diretrizes para uso da nossa plataforma de entretenimento esportivo.',
  keywords: 'termos de uso Soccer Bolão, regras de uso do app, condições de uso, termos legais, uso do aplicativo, app de bolão, responsabilidade do usuário, direitos e deveres, regras Soccer Bolão',
  openGraph: {
    type: 'website',
    title: 'Termos de Uso – Soccer Bolão',
    description: 'Confira os Termos de Uso do app Soccer Bolão. Entenda as regras, responsabilidades e diretrizes para uso da nossa plataforma de entretenimento esportivo.',
    url: 'https://soccerbolao.com.br/privacy-policy',
    locale: 'pt-br',
    siteName: 'Soccer Bolão',
    images: 'https://soccerbolao.com.br/assets/images/og.png'
  },
  robots: { index: true, follow: true }
}

export default function TermsOfUse() {
  return (
    <>
      <Header />

      <main className="my-20 container mx-auto px-5 md:px-10 lg:px-32">
        <h2 className="font-bold text-white text-center text-4xl">Termos de uso</h2>

        <p className="mt-10">Última atualização: 25 de março de 2025</p>
        <h3 className="mt-10">Estes Termos de Uso regem sua utilização do aplicativo Soccer Bolão. Ao usar o aplicativo, você concorda com estes Termos.</h3>

        <h3 className="font-bold mt-10 mb-3">1. Objetivo do Aplicativo</h3>
        <p className="">O Soccer Bolão é um aplicativo de entretenimento, permitindo que usuários criem bolões e ligas de futebol para fazer palpites e se divertir com amigos ou outros participantes. O aplicativo não é uma plataforma de apostas e não tem como objetivo envolver dinheiro ou apostas financeiras.</p>

        <h3 className="font-bold mt-10 mb-3">2. Cadastro e Conta do Usuário</h3>
        <p className="">Para usar o aplicativo, você precisa criar uma conta com as seguintes informações:</p>
        <p className="ml-5">- Nome completo</p>
        <p className="ml-5">- Email</p>
        <p className="ml-5">- Foto de perfil (opcional)</p>
        <p className="ml-5">- Nome de usuário</p>
        <p className="">É sua responsabilidade manter a segurança e a confidencialidade dos seus dados de login. Não nos responsabilizamos por qualquer uso não autorizado de sua conta.</p>

        <h3 className="font-bold mt-10 mb-3">3. Assinatura Premium</h3>
        <p className="">O Soccer Bolão oferece uma assinatura premium para recursos exclusivos. A gestão de pagamentos e a coleta de informações financeiras, como dados de cartão de crédito, são realizadas exclusivamente através do Google Payments. Não coletamos nem armazenamos informações financeiras de nossos usuários.</p>

        <h3 className="font-bold mt-10 mb-3">4. Exibição de Anúncios</h3>
        <p className="">O aplicativo pode exibir anúncios fornecidos por terceiros. Esses anúncios não são de responsabilidade do Soccer Bolão, e a coleta de dados relacionados à exibição desses anúncios é regida pelas políticas de privacidade e termos de uso dos fornecedores de anúncios terceiros. Não somos responsáveis pelo conteúdo ou pela precisão dos anúncios exibidos.</p>

        <h3 className="font-bold mt-10 mb-3">5. Comportamento do Usuário</h3>
        <p className="">Ao utilizar o aplicativo, você concorda em não:</p>
        <p className="ml-5">- Utilizar o aplicativo para fins ilegais ou fraudulentos;</p>
        <p className="ml-5">- Promover conteúdo ofensivo, abusivo ou prejudicial;</p>
        <p className="ml-5">- Violar os direitos de propriedade intelectual de outros usuários ou de terceiros;</p>
        <p className="">Reservamo-nos o direito de suspender ou banir qualquer usuário que violar estes Termos de Uso.</p>

        <h3 className="font-bold mt-10 mb-3">6. Propriedade Intelectual</h3>
        <p className="">O conteúdo, design, código e funcionalidades do aplicativo Soccer Bolão são de propriedade exclusiva do desenvolvedor e são protegidos por direitos autorais e outras leis de propriedade intelectual.</p>

        <h3 className="font-bold mt-10 mb-3">7. Limitação de Responsabilidade</h3>
        <p className="">Não nos responsabilizamos por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso do aplicativo. O aplicativo é fornecido como está, sem garantias expressas ou implícitas.</p>

        <h3 className="font-bold mt-10 mb-3">8. Alterações nos Termos de Uso</h3>
        <p className="">Podemos atualizar estes Termos de Uso a qualquer momento. Qualquer alteração será publicada nesta página e, caso necessário, será comunicada a você através do seu e-mail ou por meio de notificações no aplicativo.</p>

        <h3 className="font-bold mt-10 mb-3">9. Legislação Aplicável</h3>
        <p className="">Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa será resolvida nos tribunais competentes.</p>
      </main>

      <Footer />
    </>
  )
}
