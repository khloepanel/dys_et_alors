import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Brain } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ComprendrePage() {
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-hello-notie">Comprendre la dyslexie</h1>
        <p className="text-white text-lg mb-8">
          Dans cette page, tu vas découvrir tout ce qu'il faut savoir sur la dyslexie.
        </p>
        <p className="text-white mb-8">
          Pas de blabla médical compliqué mais des explications simples et bienveillantes pour mieux comprendre ce
          trouble et ses particularités.
        </p>
        <p className="text-white text-sm">Tu vas te reconnaître dans ces lignes, tu verras que tu n'es pas seule.</p>
      </section>

      {/* Scrolling Banner */}
      <div className="bg-blue-400 py-2 mb-12 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-white font-bold text-lg mx-8 font-hello-notie">
            DYSLEXIQUE ET ALORS ? • DYSLEXIQUE ET ALORS ? • DYSLEXIQUE ET ALORS ? • DYSLEXIQUE ET ALORS ? • DYSLEXIQUE
            ET ALORS ? •
          </span>
        </div>
      </div>

      {/* What is Dyslexia Section */}
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
              <h2 className="text-2xl font-bold text-purple-600 mb-4 font-hello-notie">La dyslexie c'est quoi ?</h2>
              <p className="text-gray-700 mb-4">
                La dyslexie est un trouble de l'apprentissage qui touche principalement la lecture et l'écriture. Elle
                se caractérise par des difficultés persistantes et significatives dans l'acquisition et l'utilisation
                des compétences de lecture.
              </p>
              <p className="text-gray-700 mb-4">
                Ce n'est pas un manque d'intelligence ou de motivation. C'est une différence neurologique qui affecte la
                façon dont le cerveau traite les informations écrites.
              </p>
              <p className="text-gray-700">
                La dyslexie touche environ 8 à 10% de la population et se transmet souvent de façon héréditaire.
              </p>
            </div>

            <div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="font-bold text-purple-600 mb-4 font-hello-notie">Les principales caractéristiques :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Difficultés de lecture</li>
                  <li>• Problèmes d'orthographe</li>
                  <li>• Lenteur dans les tâches écrites</li>
                  <li>• Difficultés de mémorisation</li>
                  <li>• Problèmes d'organisation</li>
                  <li>• Fatigue cognitive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speech Bubbles Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-500 p-4 rounded-2xl text-white">
              <p className="text-sm">"Comprendre, c'est déjà un premier pas vers l'acceptation"</p>
            </div>
            <div className="bg-blue-400 p-4 rounded-2xl text-white">
              <p className="text-sm">"Ma dyslexie ne me définit pas, elle fait partie de moi"</p>
            </div>
            <div className="bg-purple-600 p-4 rounded-2xl text-white">
              <p className="text-sm">"Ma différence est aussi ma force"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brain Diagram Section */}
      <section className="px-4 mb-12">
        <div className="bg-blue-400 rounded-3xl p-8 max-w-4xl mx-auto text-white">
          <h2 className="text-2xl font-bold mb-8 text-center font-hello-notie">LE CERVEAU</h2>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-48 bg-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-32 h-32 text-white" />
              </div>

              {/* Brain labels */}
              <div className="absolute -left-8 top-8 bg-white text-black px-2 py-1 rounded text-xs">Lecture</div>
              <div className="absolute -right-8 top-8 bg-white text-black px-2 py-1 rounded text-xs">Imagination</div>
              <div className="absolute -left-12 bottom-16 bg-white text-black px-2 py-1 rounded text-xs">Écriture</div>
              <div className="absolute -right-12 bottom-16 bg-white text-black px-2 py-1 rounded text-xs">
                Créativité
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white text-black px-2 py-1 rounded text-xs">
                Langage
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white text-black px-2 py-1 rounded text-xs">
                Mémoire
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4 font-hello-notie">GAUCHE</h3>
              <ul className="space-y-2 text-sm">
                <li>• Lecture</li>
                <li>• Écriture</li>
                <li>• Langage</li>
                <li>• Analyse logique</li>
                <li>• Orthographe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-hello-notie">DROIT</h3>
              <ul className="space-y-2 text-sm">
                <li>• Imagination</li>
                <li>• Créativité</li>
                <li>• Pensée globale</li>
                <li>• Mémoire visuelle</li>
                <li>• Perception spatiale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
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
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 font-hello-notie">Et si on parlait de tes forces ?</h3>
                  <p className="text-sm">
                    Être dyslexique, c'est aussi avoir des capacités particulières et des talents uniques.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-600 font-hello-notie">Créativité</h4>
                  <p className="text-sm text-gray-700">Tu as souvent une imagination débordante</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-600 font-hello-notie">Pensée globale</h4>
                  <p className="text-sm text-gray-700">Tu vois les choses dans leur ensemble</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center">
                <div className="w-16 h-20 bg-purple-400 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Different Forces Section */}
      <section className="px-4 mb-12">
        <div className="bg-blue-400 rounded-3xl p-8 max-w-4xl mx-auto text-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white rounded-full"></div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 font-hello-notie">Les forces cachées dans la différence</h2>
          <p className="mb-6">
            Chaque personne dyslexique a ses propres forces et talents. Voici quelques exemples de ce qui peut te
            caractériser :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white text-blue-400 p-4 rounded-lg">
                <h4 className="font-bold font-hello-notie">Empathie</h4>
                <p className="text-sm">Tu comprends facilement les émotions des autres</p>
              </div>
              <div className="bg-white text-blue-400 p-4 rounded-lg">
                <h4 className="font-bold font-hello-notie">Persévérance</h4>
                <p className="text-sm">Tu ne lâches pas facilement face aux difficultés</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Dyslexia Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-pink-500 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Mécanique</h3>
                <p className="text-sm">
                  La dyslexie mécanique concerne principalement les difficultés de décodage et de reconnaissance des
                  mots.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Interconnecter</h3>
                <p className="text-sm">
                  Il s'agit des difficultés à faire des liens entre les informations et à les organiser.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-400 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Narrative</h3>
                <p className="text-sm">Concerne les difficultés de compréhension des textes et des histoires.</p>
              </CardContent>
            </Card>

            <Card className="bg-pink-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 font-hello-notie">Dynamique</h3>
                <p className="text-sm">Liée aux difficultés d'adaptation et de flexibilité cognitive.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 mb-12">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-8 h-1 bg-pink-400 rounded"></div>
            <div className="w-12 h-1 bg-blue-400 rounded"></div>
            <div className="w-8 h-1 bg-purple-400 rounded"></div>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">Découvrir</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
