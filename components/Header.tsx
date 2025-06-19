import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-white">
      <Link href="/" className="relative">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <svg width="150" height="80" viewBox="0 0 150 80" className="fill-purple-500">
              <path d="M15,30 C10,18 20,12 30,18 C35,6 50,12 55,24 C65,18 75,24 80,30 C85,24 95,30 100,36 C105,30 110,42 105,48 C110,54 100,60 85,54 C80,60 70,54 65,48 C60,60 45,54 40,42 C35,54 25,48 20,42 C15,48 10,36 15,30 Z" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm font-hello-notie">
              Dys et alors ?
            </div>
          </div>
        </div>
      </Link>

      <nav className="hidden md:flex space-x-6 text-sm">
        <Link href="/articles" className="hover:underline">Article</Link>
        <Link href="/forum" className="hover:underline">Forum</Link>
        <Link href="/livre" className="hover:underline">Notre livre</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/comprendre">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-sm px-4 py-2 rounded-full">
            Comprendre la dyslexie
          </Button>
        </Link>

        {/* Icône panier jaune */}
        <Link href="/panier" className="text-yellow-400 hover:text-yellow-500">
          <ShoppingBag size={24} />
        </Link>
      </div>
    </header>
  )
}
