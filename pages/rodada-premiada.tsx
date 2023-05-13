import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../src/components/Header";

const RodadaPremiada: NextPage = () => {
    return(
        <div className='flex flex-col w-screen bg-white lg:h-screen'>
            <Head>
                <title>Rodada Premiada - Soccer Bolão</title>
                <meta name='description' content='Crie bolões das principais competições nacionais e internacionais, e convide seus amigos e familiares para entrar na resenha!' />
                <link rel='icon' href='/favicon2.png' />
            </Head>
            <Header/>

            <section className='flex flex-col w-full items-center py-10'>
                <div className='flex flex-col items-center lg:w-[1000px]'>
                    <h2 className="font-bold text-black text-3xl mx-2 text-center">
                        Está chegando no Soccer Bolão em breve
                    </h2>
                    <span className="text-[#1eb76f] font-bold text-5xl text-center">Rodada Premiada</span>

                    <p className="text-black text-center mx-2 mt-10 lg:mt-20 lg:w-[800px] text-lg">A rodada premiada vai funcionar em algumas rodadas do Campeonato Brasileiro Série A</p>

                    <Image
                        alt='Imagem do campeonato brasileiro'
                        src={require('../src/assets/brasileirao.png')}
                        className='object-contain w-60 mt-5'
                    />
                    
                    <p className='text-black text-center mx-2 mt-5 lg:w-[800px] text-lg'>Vai ser criado um bolão e disponibilizado o código aqui no site. Ao final da rodada será premiado o primeiro colocado da rodada!</p>

                    <p className='text-black text-center mx-2 mt-5 lg:w-[800px] text-lg'>Fique de olho no APP, que em breve publicaremos as demais regras</p>
                </div>
            </section>
        </div>
    )
}

export default RodadaPremiada