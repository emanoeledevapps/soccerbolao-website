import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="h-16 w-screen bg-gray-1">
      <div className="container mx-auto px-10 flex items-center justify-between h-full">
        <h1 className="font-bold text-white">Soccer Bolão</h1>

        <Button>
          Download APP
        </Button>
      </div>
    </header>
  )
}
