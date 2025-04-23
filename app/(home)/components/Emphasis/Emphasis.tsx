import { EmphasisCard } from "./EmphasisCard";

export function Emphasis() {
  return (
    <section className="flex flex-col gap-10 mb-20">
      <div className="flex items-center">
        <h3 className="text-white font-bold text-center text-2xl max-w-[400px] md:text-4xl md:text-start">Vem conhecer um pouco do nosso app</h3>
        <div className="md:flex flex-1 h-1 bg-green-1 hidden rounded-xl" />
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:mt-10">
        <EmphasisCard cardName="leaguesAndBoloes" />
        <EmphasisCard cardName="familyAndFriends" />
        <EmphasisCard cardName="ranking" />
        <EmphasisCard cardName="chat" />
      </div>
    </section>
  )
}
