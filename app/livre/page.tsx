import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LivrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700">
      <Header />

      {/* Book Presentation */}
      <section className="px-4 py-12">
        <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-purple-500 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-pink-500 mb-4 font-hello-notie">
                Livre illustré pour les petites filles dyslexiques
              </h1>
              <p className="text-gray-700 mb-6">
                Un livre pensé spécialement pour les petites filles dyslexiques et leurs parents. Il contient des
                conseils, des témoignages, des outils et plein de contenu pour t'aider à mieux vivre ta dyslexie et
                surtout, à en faire une force !
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
                Acheter sur Amazon
              </Button>
            </div>

            <div className="ml-8">
              <div className="w-48 h-64 bg-pink-200 rounded-lg flex items-center justify-center">
                <div className="w-32 h-40 bg-pink-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 mb-12">
        <div className="bg-pink-500 rounded-3xl p-8 max-w-4xl mx-auto text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg"></div>
                <div>
                  <h3 className="font-bold font-hello-notie">Ludique</h3>
                  <p className="text-sm">Participatif</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg"></div>
                <div>
                  <h3 className="font-bold font-hello-notie">Interactif</h3>
                  <p className="text-sm">Compréhension</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg"></div>
                <div>
                  <h3 className="font-bold font-hello-notie">Confiance en soi</h3>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-48 h-32 bg-white rounded-lg mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white font-hello-notie">Ce que tu trouveras dans ce livre :</h2>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-yellow-400 p-4 rounded-2xl text-black text-center">
              <p className="text-sm">Des conseils pour mieux te comprendre et t'accepter</p>
            </div>
            <div className="bg-purple-600 p-4 rounded-2xl text-white text-center">
              <p className="text-sm">Des outils pour mieux t'organiser et gérer ton quotidien</p>
            </div>
            <div className="bg-yellow-400 p-4 rounded-2xl text-black text-center">
              <p className="text-sm">Des explications claires sur la dyslexie, ses causes et ses effets</p>
            </div>
            <div className="bg-blue-400 p-4 rounded-2xl text-white text-center">
              <p className="text-sm">Des témoignages inspirants de femmes dyslexiques qui ont réussi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Version Section */}
      <section className="px-4 mb-12">
        <div className="bg-pink-500 rounded-3xl p-8 max-w-4xl mx-auto text-white">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <Star className="text-yellow-400 w-8 h-8" />
                <Star className="text-yellow-400 w-6 h-6" />
              </div>

              <h2 className="text-2xl font-bold mb-4 font-hello-notie">
                Dans le livre tu trouveras 210 en version mini
              </h2>
              <p className="mb-6">
                Tu peux découvrir quelques pages du livre en version mini pour te faire une idée du contenu. Ces
                extraits te donneront un aperçu des conseils, des témoignages et des outils que tu trouveras dans le
                livre complet.
              </p>
              <p className="mb-6">
                Une version numérique interactive est aussi disponible avec des liens cliquables et des exercices
                interactifs pour une expérience encore plus enrichissante.
              </p>
            </div>

            <div className="ml-8 flex space-x-4">
              <div className="w-16 h-20 bg-white rounded"></div>
              <div className="w-16 h-20 bg-white rounded"></div>
              <div className="w-16 h-20 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mb-12">
        <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-purple-500 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="bg-pink-500 text-white border-0 mb-4">
                <CardContent className="p-4">
                  <p className="text-sm">À partir de quel âge peut-on lire ce livre ?</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-400 text-white border-0 mb-4">
                <CardContent className="p-4">
                  <p className="text-sm">Le livre traite-t-il d'autres troubles que la dyslexie ?</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-600 text-white border-0">
                <CardContent className="p-4">
                  <p className="text-sm">Y a-t-il des exercices pratiques dans le livre ?</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-bold text-purple-600 mb-4 font-hello-notie">Pour qui faire ?</h3>
              <p className="text-gray-700 mb-4">
                Pour les enfants de 6 à 12 ans qui commencent à se questionner, tout comme leurs parents qui cherchent
                des réponses.
              </p>

              <h3 className="font-bold text-purple-600 mb-4 font-hello-notie">Ce livre t'aide à :</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Mieux comprendre la dyslexie</li>
                <li>• Accepter tes différences et en faire des forces</li>
                <li>• Trouver des outils pour mieux t'organiser</li>
                <li>• Gagner en confiance en toi</li>
                <li>• Te sentir moins seule</li>
              </ul>

              <div className="mt-6">
                <div className="w-16 h-16 bg-purple-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="px-4 mb-12">
        <div className="bg-blue-400 rounded-3xl p-8 max-w-4xl mx-auto text-white flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 font-hello-notie">Notre instagram</h2>
            <p className="mb-4">
              Tu y trouveras des conseils, des témoignages, des boosts de confiance et plein de contenu pour t'aider à
              mieux vivre ta dyslexie et surtout, à en faire une force !
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
