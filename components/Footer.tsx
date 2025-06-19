import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-12 px-4 relative">
      {/* Fond du footer */}
      {/* Punched holes on top */}
      <div className="absolute top-1 left-0 right-0 flex justify-evenly">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-6 h-6 bg-white rounded-full -mt-2"></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <svg width="120" height="60" viewBox="0 0 120 60" className="fill-pink-500">
                <path d="M15,30 C10,18 20,12 30,18 C35,6 50,12 55,24 C65,18 75,24 80,30 C85,24 95,30 100,36 C105,30 110,42 105,48 C110,54 100,60 85,54 C80,60 70,54 65,48 C60,60 45,54 40,42 C35,54 25,48 20,42 C15,48 10,36 15,30 Z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm font-hello-notie">
                Dys et alors ?
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/articles" className="hover:underline">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:underline">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/livre" className="hover:underline">
                  Notre livre
                </Link>
              </li>
              <li>
                <Link href="/comprendre" className="hover:underline">
                  Comprendre la dyslexie
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram & Contact */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-purple-700" />
              </div>
              <p className="text-sm">Nous contacté</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <p className="text-sm mb-3">S'inscrire à la newsletter :</p>
            <div className="flex flex-col space-y-2">
              <Input
                placeholder="Votre email"
                className="bg-transparent border-b border-white text-white placeholder-gray-300 rounded-none px-0"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm w-fit">
                Valider
              </Button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <ul className="space-y-3 text-xs text-gray-300">
              <li>
                <Link href="/terms" className="hover:underline">
                  Termes et conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Politique relative aux cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-6">
          <p className="text-sm">© 2025</p>
        </div>
      </div>
    </footer>
  )
}
