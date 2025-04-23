import { Trophy, Users, ListOrdered, MessageCircleMore } from "lucide-react"

interface Props {
  cardName: CardName
}

export function EmphasisCard({ cardName }: Props) {
  const cardData = cardsData[cardName]
  const Icon = cardData.icon

  return (
    <div className="flex flex-col gap-5 p-5 border-x border-b rounded-2xl border-gray-1 w-full md:max-w-[220px]">
      <Icon className="text-green-1 w-10 h-10"/>

      <p className="font-bold text-green-1">{cardData?.title}</p>
      <p className="text-white">{cardData?.description}</p>
    </div>       
  )
}

const cardsData = {
  leaguesAndBoloes: {
    title: 'Ligas e bolões',
    description: 'Crie ligas e bolões das principais ligas nacionais e internacionais',
    icon: Trophy
  },
  familyAndFriends: {
    title: 'Junte a Família e amigos',
    description: 'Convide seus amigos e familiares para se enfretarem entre si',
    icon: Users
  },
  ranking: {
    title: 'Ranking comparativo',
    description: 'Compare seu desempenho em tempo real com outros participantes',
    icon: ListOrdered
  },
  chat: {
    title: 'Resenha',
    description: 'Chats dedicados para cada liga ou bolão, para fazer a resenha',
    icon: MessageCircleMore
  }
}

type CardName = keyof typeof cardsData
