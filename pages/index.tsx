import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../src/components/Header';

const Home: NextPage = () => {
    return (
        <div className='flex flex-col w-screen bg-white'>
            <Head>
                <title>Soccer Bolão - Aqui a resenha é garantida</title>
                <meta name='description' content='Crie bolões das principais competições nacionais e internacionais, e convide seus amigos e familiares para entrar na resenha!' />
                <link rel='icon' href='/favicon2.png' />
            </Head>
            
            <Header/>

            <section className='flex flex-col w-full items-center py-10'>
                <div className='flex flex-col items-center lg:w-[1000px]'>
                    <h1 className='font-bold text-center text-xl lg:text-4xl text-black'>Chama os parças e começa a resenha com o</h1>
                    <h2 className='font-bold text-center text-4xl lg:text-6xl text-[#1eb76f]'>SoccerBolão</h2>

                    <div className='flex flex-col items-center gap-5 lg:flex-row mt-10'>
                        <Image
                            alt='Imagem de um celular com o aplicativo aberto'
                            src={require('../src/assets/splash-6.png')}
                            className='object-contain h-[500px]'
                        />

                        <div className='flex flex-col items-center gap-5 px-2'>
                            <h3 className='font-bold text-3xl text-center text-black'>Baixe agora mesmo, é gratuito!</h3>
                            <Image
                                alt='Selo de disponível na google play'
                                src={require('../src/assets/disponivel_google_play.png')}
                                className='object-contain w-52'
                            />

                            <Link
                                className='bg-[#1eb76f] w-52 h-12 rounded-md font-bold flex items-center justify-center'
                                href='https://play.google.com/store/apps/details?id=com.emanoeledevapps.bolaofutebol' 
                                target="_blank"
                            >
                                Clique aqui para baixar
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <section className='flex flex-col w-full bg-[#1eb76f] items-center'>
                <div className='flex flex-col lg:w-[1000px] py-10'>
                    <p className='text-white text-center text-3xl font-bold'>
                        Crie bolões com seus amigos ou familiares, podendo escolher entre os principais campeonatos nacionais e internacionais.
                    </p>

                    <div className='flex flex-wrap justify-center gap-5 mt-10'>
                        <Image
                            alt='Imagem do campeonato brasileiro'
                            src={require('../src/assets/brasileirao.png')}
                            className='object-contain w-52'
                        />
                        <Image
                            alt='Imagem do campeonato libertadores'
                            src={require('../src/assets/libertadores.png')}
                            className='object-contain w-52'
                        />
                        <Image
                            alt='Imagem do campeonato copa do brasil'
                            src={require('../src/assets/copa-do-brasil.png')}
                            className='object-contain w-52'
                        />
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-full bg-white items-center'>
                <div className='flex flex-col lg:w-[1000px] py-10'>
                    <p className='text-black text-center text-3xl font-bold'>
                        Crie do seu jeito!
                    </p>

                    <p className='text-black text-center'>
                        Varios tipos de bolões e palpites, para que você escolha o que for melhor para você
                    </p>

                    <div className='flex flex-col justify-around mt-10 lg:flex-row'>

                        <div className='flex flex-col items-center lg:w-[400px]'>
                            <p className='font-bold text-3xl text-[#1eb76f] mb-1'>Palpite Simples</p>
                            <p className='text-center text-black mb-5'>No palpite simples, você pode escolher entre 3 opções disponíveis: Vitória da equipe da casa, empate ou vitória da equipe visitante</p>
                            <Image
                                alt=''
                                src={require('../src/assets/simple-guess.jpg')}
                                className='object-contain w-60'
                            />
                        </div>

                        <div className='flex flex-col items-center lg:w-[400px] mt-10 lg:mt-0'>
                            <p className='font-bold text-3xl text-[#1eb76f] mb-1'>Palpite Exato</p>
                            <p className='text-center text-black mb-5'>No palpite exato, você precisa acertar exatamente o placar final da partida</p>
                            <Image
                                alt=''
                                src={require('../src/assets/exact-guess.jpg')}
                                className='object-contain w-60'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
