import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Star, Search } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-700">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <div className="flex justify-center space-x-4 mb-8">
          <Star className="text-yellow-400 w-6 h-6" />
          <Star className="text-yellow-400 w-8 h-8" />
          <Star className="text-yellow-400 w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-hello-notie">Bienvenue sur notre forum</h1>
        <p className="text-white text-lg mb-8">
          Un espace bienveillant pour poser tes questions, partager tes idées et t'entraider avec d'autres personnes
          concernées par la dyslexie.
        </p>
        <p className="text-white text-sm">
          Ici, pas de jugement mais de l'écoute, des témoignages et de vrais discussions.
        </p>

        <div className="flex justify-center space-x-8 mt-8">
          <div className="w-16 h-8 bg-white rounded-full"></div>
          <div className="w-20 h-12 bg-pink-500 rounded-full"></div>
          <div className="w-16 h-8 bg-white rounded-full"></div>
          <div className="w-20 h-12 bg-pink-400 rounded-full"></div>
        </div>
      </section>

      {/* Write Message Section */}
      <section className="px-4 mb-12">
        <div className="bg-pink-500 rounded-3xl p-8 max-w-4xl mx-auto text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-hello-notie">Écrire un message</h2>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>

          <p className="mb-6">
            Tu peux poser toutes tes questions sur la dyslexie. Il n'y a pas de question bête, seulement des réponses
            bienveillantes.
          </p>

          <div className="space-y-4">
            <p className="text-sm">Tu peux parler de :</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Tes difficultés et tes questionnements</li>
              <li>• Tes réussites et tes stratégies</li>
              <li>• Tes outils et tes astuces</li>
              <li>• Tes émotions et ton vécu</li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <Input placeholder="Nom Prénom" className="flex-1 bg-white text-black" />
              <Input placeholder="Email (facultatif)" className="flex-1 bg-white text-black" />
            </div>
            <Textarea placeholder="Écris ton message" className="min-h-[100px] bg-white text-black" />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full">Publier</Button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white rounded-full"></div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 font-hello-notie">Filtres</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            <Button variant="outline" size="sm" className="bg-white text-purple-600 border-0">
              Vie personnelle
            </Button>
            <Button variant="outline" size="sm" className="bg-pink-500 text-white border-0">
              Vie scolaire
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-400 text-white border-0">
              Enfant
            </Button>
            <Button variant="outline" size="sm" className="bg-white text-purple-600 border-0">
              Outils / Astuces
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input placeholder="Rechercher..." className="pl-10 bg-white" />
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 font-hello-notie">Les derniers messages</h2>

          <div className="space-y-6">
            <Card className="bg-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold font-hello-notie">Le dire au travail ?</h3>
                      <span className="text-sm text-gray-500">Charlotte Lebrun</span>
                      <span className="text-sm text-gray-400">Il y a 2 heures</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Bonjour, est-ce que vous en parlez au boulot que vous êtes dyslexiques ? Moi j'hésite car j'ai
                      peur d'être jugée...
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-pink-500">
                        <Heart className="w-4 h-4 mr-1" />
                        12
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        <MessageCircle className="w-4 h-4 mr-1" />5
                      </Button>
                      <span className="text-sm text-gray-400">Répondre à ce message</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold font-hello-notie">Quels outils ?</h3>
                      <span className="text-sm text-gray-500">Marie Durand</span>
                      <span className="text-sm text-gray-400">Il y a 5 heures</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Salut les filles ! Vous utilisez quoi comme outils pour vous organiser dans votre quotidien ? J'ai
                      du mal à m'y retrouver avec tout ce qu'il y a à faire...
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-pink-500">
                        <Heart className="w-4 h-4 mr-1" />8
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        12
                      </Button>
                      <span className="text-sm text-gray-400">Répondre à ce message</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold font-hello-notie">Le dire au travail ?</h3>
                      <span className="text-sm text-gray-500">Mélanie Potron</span>
                      <span className="text-sm text-gray-400">Il y a 1 jour</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Salut à toutes, Je vais déménager et je galère pour me concentrer dans mes cartons et mes affaires
                      pour organiser le déménagement...
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-pink-500">
                        <Heart className="w-4 h-4 mr-1" />
                        15
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        <MessageCircle className="w-4 h-4 mr-1" />8
                      </Button>
                      <span className="text-sm text-gray-400">Répondre à ce message</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold font-hello-notie">Les réunions</h3>
                      <span className="text-sm text-gray-500">Manon Brun</span>
                      <span className="text-sm text-gray-400">Il y a 2 jours</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Coucou ! Vous arrivez à suivre quand vous êtes en réunion que ça parle vite ?
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="text-pink-500">
                        <Heart className="w-4 h-4 mr-1" />6
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        <MessageCircle className="w-4 h-4 mr-1" />3
                      </Button>
                      <span className="text-sm text-gray-400">Répondre à ce message</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full">
              Charger plus de messages
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white font-hello-notie">
              Découvrez nos articles disponibles chaque semaine
            </h2>
            <Star className="text-yellow-400 w-8 h-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-pink-500 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Dyslexie & TDAH chez les femmes</h3>
                <p className="text-sm">Chez les femmes, la dyslexie et le TDAH passent souvent inaperçus...</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Outils numériques pour s'organiser</h3>
                <p className="text-sm">Des outils concrets pour alléger la charge mentale...</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-400 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Lire pour soi : retrouver le plaisir, sans pression</h3>
                <p className="text-sm">Dyslexique ou pas, on a le droit d'aimer lire...</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
              Voir plus d'articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
