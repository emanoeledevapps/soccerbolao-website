import { EmphasisCard } from "./EmphasisCard";

export function Emphasis() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center">
        <h3 className="text-white font-bold text-4xl max-w-[400px]">Vem conhecer um pouco do nosso app</h3>
        <div className="md:flex flex-1 h-1 bg-green-1 hidden" />
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <EmphasisCard cardName="leaguesAndBoloes" />
        <EmphasisCard cardName="familyAndFriends" />
        <EmphasisCard cardName="ranking" />
        <EmphasisCard cardName="chat" />
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-[80%] h-[1px] bg-green-1/50"/>
      </div>
    </section>
  )
}
