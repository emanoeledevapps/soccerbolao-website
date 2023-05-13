import Image from "next/image";
import Link from "next/link";

export function Header(){
    return(
        <div className='flex items-center justify-between w-full border-b-2 h-36 px-2 lg:px-16'>
            <Link href='/'>
                <Image
                    alt='Logo soccer bolão'
                    src={require('../assets/new-logo-branco.png')}
                    className='w-40 h-32 object-contain ml-[-20px] lg:ml-0'
                />
            </Link>

            <nav className='flex items-center gap-10'>
                <Link
                    className='font-bold text-lg text-black hover:text-[#1eb76f] duration-300 hidden lg:flex'
                    href='/rodada-premiada'
                >
                    Rodada Premiada
                </Link>
                <Link
                    target='_blank'
                    href='https://play.google.com/store/apps/details?id=com.emanoeledevapps.bolaofutebol'
                    className='px-3 py-2 bg-[#1eb76f] font-bold text-white rounded-md hover:bg-[#138550] duration-700'
                >
                    Download APP
                </Link>
            </nav>
        </div>
    )
}