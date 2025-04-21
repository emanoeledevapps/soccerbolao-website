import { getGuessesCount } from "@/services/getGuessesCount";
import { StatsCard } from "./StatsCard";
import { getBoloesCount } from "@/services/getBoloesCount";
import { getUsersCount } from "@/services/getUsersCount";

export async function CommunityStats() {
	const guessesCount = await getGuessesCount()
	const boloesCount = await getBoloesCount()
	const usersCount = await getUsersCount()

	return (
		<section className="flex flex-col my-20">
			<h3 className="text-4xl font-bold text-white text-center">
				Uma comunidade que não para de
				<span className="text-green-1"> crescer</span>
			</h3>
			<p className="text-gray-p text-center mt-2">Já são mais de</p>

			<div className="flex justify-center mt-20">
				<div className="flex flex-col max-w-[700px] flex-1">
					<StatsCard 
						label="Bolões criados"
						value={boloesCount}
					/>
					<StatsCard
						label="Palpites enviados"
						value={guessesCount}
						suffix="Mil"
						alignRight
					/>
					<StatsCard 
						label="Usuários cadastrados"
						value={usersCount}
						suffix="Mil"
					/>
					<StatsCard
						label="Downloads na Google Play"
						value={2000}
						suffix="Mil"
						alignRight
					/>
				</div>
			</div>
		</section>
	)
}
