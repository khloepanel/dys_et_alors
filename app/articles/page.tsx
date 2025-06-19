import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Star } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 to-pink-500">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <div className="flex justify-center space-x-4 mb-8">
          <Star className="text-yellow-400 w-6 h-6" />
          <Star className="text-yellow-400 w-8 h-8" />
          <Star className="text-yellow-400 w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-hello-notie">NOS ARTICLES</h1>
        <p className="text-white text-lg mb-2">💡 On t'explique tout ce qu'il faut savoir sur la dyslexie à 2-7 ans.</p>
        <p className="text-white mb-8">
          Ce diagnostic tardif a changé ma vie et celle de mes enfants. Laisse-toi inspirer de mes conseils et de mes
          expériences pour t'aider à mieux vivre avec.
        </p>
        <p className="text-white text-sm">Tu peux nous contacter si tu veux qu'on parle d'un sujet en particulier !</p>
      </section>

      {/* Featured Article */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-600 rounded-2xl p-6 text-white text-center mb-8">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-4 text-sm font-bold font-hello-notie">
              Article de la semaine
            </div>
          </div>

          <div className="bg-blue-400 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 font-hello-notie">
              Hypercompensation : quand on donne tout... sans s'en rendre compte
            </h2>
            <p className="mb-6">
              Quand on se sent femme dyslexique, l'hypercompensation devient notre façon de fonctionner. À force
              d'entendre qu'on ne comprend pas assez vite, qu'on fait trop d'erreurs, qu'on oublie tout, on développe
              des stratégies pour compenser nos difficultés. Mais à quel prix ?
            </p>
            <Button className="bg-white text-blue-400 hover:bg-gray-100 px-6 py-2 rounded-full">Lire l'article</Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 mb-12">
        <div className="bg-pink-600 rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white font-hello-notie">Recherche</h2>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input placeholder="Rechercher..." className="pl-10 bg-white" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="bg-white text-pink-600 border-0">
              Vie personnelle
            </Button>
            <Button variant="outline" size="sm" className="bg-pink-500 text-white border-0">
              Vie scolaire
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-400 text-white border-0">
              Enfant
            </Button>
            <Button variant="outline" size="sm" className="bg-white text-pink-600 border-0">
              Outils / Astuces
            </Button>
            <Button variant="outline" size="sm" className="bg-white text-pink-600 border-0">
              Santé mentale
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white font-hello-notie">Articles récents</h2>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-pink-500 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Dyslexie & TDAH chez les femmes</h3>
                <p className="text-sm mb-4">Chez les femmes, la dyslexie et le TDAH passent souvent inaperçus...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Outils numériques pour s'organiser</h3>
                <p className="text-sm mb-4">Des outils concrets pour alléger la charge mentale...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>

            <Card className="bg-blue-400 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Lire pour soi : retrouver le plaisir, sans pression</h3>
                <p className="text-sm mb-4">Dyslexique ou pas, on a le droit d'aimer lire...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-400 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Surmonter sa dyslexie</h3>
                <p className="text-sm mb-4">L'enfant dyslexique a besoin d'être rassuré...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>

            <Card className="bg-pink-500 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">
                  Se reconstruire adulte : quand le diagnostic arrive tard
                </h3>
                <p className="text-sm mb-4">Recevoir un diagnostic de dyslexie à l'âge adulte...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-pink-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">
                  Fatigue, anxiété, surcharge : quand le cerveau tourne en boucle
                </h3>
                <p className="text-sm mb-4">Beaucoup de femmes dyslexiques vivent...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>

            <Card className="bg-blue-400 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Top 10 des logiciels pour nous aider</h3>
                <p className="text-sm mb-4">Voici une liste de logiciels qui peuvent...</p>
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white font-hello-notie">Articles les plus populaires</h2>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-pink-500 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Dyslexique et femme : une double invisibilité</h3>
                <p className="text-sm">Être une femme dyslexique, c'est souvent être invisible...</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">
                  La force de penser autrement : un atout de femme dyslexique ?
                </h3>
                <p className="text-sm">Être une femme dyslexique, c'est avoir une façon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
