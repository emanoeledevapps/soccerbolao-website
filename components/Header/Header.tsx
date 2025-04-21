import Image  from "next/image";
import { Button } from "../ui/button";
import Logo from '@/public/images/logo.png'

export function Header() {
  return (
    <header className="h-20 w-screen bg-gray-1">
      <div className="container mx-auto px-10 flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="logo do app soccer bolão"
            className="w-14 h-14 object-contain"
          />

          <h1 className="font-bold text-white">Soccer Bolão</h1>
        </div>

        <Button>
          Download APP
        </Button>
      </div>
    </header>
  )
}
