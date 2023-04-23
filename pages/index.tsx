import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className='flex flex-col w-screen bg-white'>
            <div className='flex items-center w-full border-b-2 h-20 px-2 lg:px-16'>
                <Image
                    alt='Logo soccer bolão'
                    src={require('../src/assets/logo.png')}
                    className='w-40 object-contain'
                />
            </div>

            <div className='flex flex-col w-full items-center mt-10'>
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

                            <a href='https://play.google.com/store/apps/details?id=com.emanoeledevapps.bolaofutebol' target="_blank">
                                <button
                                    className='bg-[#1eb76f] w-52 h-12 rounded-md font-bold'
                                >
                                    Clique aqui para baixar
                                </button>
                            </a>
                        </div>
                    </div>

                    <p className='text-black text-center text-xl mt-5'>
                        Crie bolões com seus amigos ou familiares, podendo escolher entre os principais campeonatos nacionais e internacionais.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
