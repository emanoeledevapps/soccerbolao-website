export function WarningBets() {
  return (
    <section className="w-full p-5 rounded-2xl bg-gray-800 gap-2 flex flex-col mt-20">
      <h5 className="font-bold text-3xl text-green-1">Atenção!</h5>
      <p className="text-gray-p">
        O Soccer Bolão é um aplicativo de entretenimento, permitindo que
        usuários criem bolões e ligas de futebol para fazer palpites e se
        divertir com amigos ou outros participantes. O aplicativo 
        <span className="text-red-500 uppercase"> não é uma plataforma de apostas </span>
        e não tem como objetivo envolver dinheiro ou
        apostas financeiras.
      </p>
    </section>
  );
}
