import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../src/components/Header";
import { useCopyToClipboard } from 'usehooks-ts';

const code = 'FAQ7IW'

const RodadaPremiada: NextPage = () => {
    const [value, copy] = useCopyToClipboard();
    return(
        <div className='flex flex-col w-screen bg-white'>
            <Head>
                <title>Rodada Premiada - Soccer Bolão</title>
                <meta name='description' content='Crie bolões das principais competições nacionais e internacionais, e convide seus amigos e familiares para entrar na resenha!' />
                <link rel='icon' href='/favicon2.png' />
            </Head>
            <Header/>

            <section className='flex flex-col w-full items-center py-10'>
                <div className='flex flex-col items-center lg:w-[1000px]'>
                    <h2 className="font-bold text-black text-3xl mx-2 text-center">
                        11ª Rodada do Brasileirão 2023
                    </h2>
                    <span className="text-[#1eb76f] font-bold text-5xl text-center">Rodada Premiada</span>

                    <div className="lg:w-[1000px] flex flex-col lg:flex-row items-center gap-5 mt-10">
                        <div className="lg:w-[500px] w-full flex justify-center px-2">
                            <Image
                                alt=''
                                src={require('../src/assets/rodada-premiada-1.png')}
                                className="lg:w-[400px] w-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col lg:w-[500px] px-2">
                            <p className="text-black font-bold">Regras:</p>
                            <p className="text-black">- Ser maior de idade;</p>
                            <p className="text-black">- O pagamento somente será realizado via PIX na conta do titular;</p>
                            <p className="text-black">- O contato será através do email cadastrado em nosso app;</p>
                            <p className="text-black">- Se o participante não nos responder em até 24 horas, a partir do envio do nosso email de comunicação, o prêmio passará para o 2º colocado;</p>
                            <p className="text-black">- Caso haja empate de pontuação na primeira colocação, o prêmio será dividido igualmente;</p>
                            <p className="text-black">- Caso ninguém pontue na rodada, o prêmio passa a valer para a rodada seguinte;</p>
                            <p className="text-black">- O usuário deve autorizar o compartilhamento do comprovante de pagamento (Apenas com seu primeiro nome visível, e valor transferido)</p>
                        </div>
                    </div>

                    <p className="text-[#1eb76f] text-5xl font-bold text-center mt-14">{code}</p>
                    <p className="text-gray-400 font-bold text-center mt-1">Código do bolão</p>

                    <div className="flex items-center gap-3 mt-5">
                        <button
                            className="px-3 py-2 bg-white font-bold text-[#1eb76f] rounded-md border-2 border-[#1eb76f]"
                            onClick={() => {
                                copy(code)
                                alert('Código copiado para a área de transferência!')
                            }}
                        >
                            Copiar Código
                        </button>
                        <Link
                            className="px-3 py-2 bg-[#1eb76f] font-bold text-white rounded-md border-2 border-[#1eb76f]"
                            href='https://play.google.com/store/apps/details?id=com.emanoeledevapps.bolaofutebol'
                            target="_blank"
                        >
                            Download APP
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RodadaPremiada