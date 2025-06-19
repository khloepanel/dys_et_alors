import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700">
      <Header />

      {/* Contact Form Section */}
      <section className="px-4 py-12">
        <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-purple-500 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-purple-600 mb-4 font-hello-notie">Nous contacter</h1>
              <p className="text-gray-700 mb-4">
                Tu peux nous écrire à tout moment, que tu sois une lectrice, un parent, un enseignant ou un
                professionnel.
              </p>
              <p className="text-purple-600 mb-6">Nous serons ravis de te lire et de te répondre avec bienveillance</p>
              <p className="text-gray-700 mb-8">
                → Écris-nous à : <span className="font-bold">contact@dysetalors.fr</span>
              </p>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Input placeholder="Nom Prénom" className="flex-1" />
                  <Input placeholder="Email" className="flex-1" />
                </div>
                <Textarea placeholder="Écrire votre message" className="min-h-[100px]" />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full">Envoyer</Button>
              </div>
            </div>

            <div className="ml-8">
              <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="px-4 pb-12">
        <div className="bg-blue-400 rounded-3xl p-8 max-w-4xl mx-auto text-white flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 font-hello-notie">Notre instagram</h2>
            <p className="mb-4">
              Un espace pensé pour les filles ado dyslexiques ✨ Tu y trouveras des conseils, des témoignages, des
              boosts de confiance et plein de contenu pour t'aider à mieux vivre ta dyslexie et surtout, à en faire une
              force !
            </p>
            <p className="mb-6">→ Viens partager, t'inspirer et te sentir moins seule 💕</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
              Aller sur instagram
            </Button>
          </div>
          <div className="flex space-x-4 ml-8">
            <div className="w-24 h-40 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black text-xs">mockup insta</span>
            </div>
            <div className="w-24 h-40 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black text-xs">mockup insta</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
