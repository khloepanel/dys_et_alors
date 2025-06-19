import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section avec fond dégradé rose */}
      <div className="bg-gradient-to-b from-pink-500 to-pink-600">
        <Header />

        {/* Hero Section */}
        <section className="text-center py-12 px-4">
          <div className="flex items-center justify-center mb-12">
            {/* Étoiles à gauche */}
            <div className="flex flex-col space-y-1 mr-4">
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
              <Star className="text-yellow-400 w-8 h-8 fill-current" />
            </div>

            {/* Titre centré, plus petit et avec marges */}
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center font-hello-notie max-w-3xl mx-4">
              Bienvenue dans l'univers de la dyslexie
            </h1>

            {/* Étoiles à droite */}
            <div className="flex flex-col space-y-1 ml-4">
              <Star className="text-yellow-400 w-8 h-8 fill-current" />
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center space-x-6 mb-12">
            {/* Bouton violet */}
            <Link href="/articles">
              <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all duration-200 shadow-md">
                Découvrir nos articles
              </button>
            </Link>

            {/* Bouton jaune */}
            <Link href="/comprendre">
              <button className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm transition-all duration-200 shadow-md">
                Comprendre la dyslexie
              </button>
            </Link>
          </div>


        </section>

        {/* Blue Info Section with Punched Holes */}
       <section className="px-4 relative -mt-16">
  <div className="section-description flex justify-center">
    <img
      src="/images/illustration_description.png"
      alt="Bienvenue !"
      className="w-auto h-[400px]"
    />
  </div>
</section>



        {/* Scrolling Banner */}
        <div
          className="py-3 overflow-hidden"
          style={{ backgroundColor: "#8339E5" }}
        >
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-white font-bold text-lg mx-8 font-hello-notie">
              DYSLEXIQUE ET ALORS ? <span className="text-yellow-400">★</span> DYSLEXIQUE ET ALORS ? <span className="text-yellow-400">★</span> DYSLEXIQUE ET ALORS ? <span className="text-yellow-400">★</span> DYSLEXIQUE ET ALORS ? <span className="text-yellow-400">★</span> DYSLEXIQUE ET ALORS ? <span className="text-yellow-400">★</span>
            </span>
          </div>
        </div>



        {/* White Section with Punched Holes - Nouveau design */}
        <section className="px-4 pb-12 pt-12" style={{ backgroundColor: "#46A8F8" }}>
          <div className="bg-white rounded-3xl p-8 max-w-6xl mx-auto relative">
            {/* Punched holes on top - bleus */}
            <div className="absolute top-6 left-0 right-0 flex justify-evenly">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-blue-400 rounded-full -mt-2"></div>
              ))}
            </div>

            <div className="pt-8 grid grid-cols-12 gap-6">
              {/* Première ligne */}
              <div className="col-span-12 md:col-span-5">
                <div className="bg-pink-500 text-white p-6 rounded-2xl">
                  <p className="font-bold mb-4 font-hello-notie">
                    Ici, on parle de dyslexie. Mais surtout, on parle de{" "}
                    femmes dyslexiques.
                  </p>
                  <p className="text-sm">
                    Celles qu'on oublie, qu'on prend moins au sérieux, qu'on diagnostique trop tard.
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4">
                <div className="bg-white border-4 border-purple-500 text-purple-600 p-6 rounded-2xl">
                  <p className="text-sm leading-relaxed">
                    Ce site est pensé pour toi. Pour t'aider à mieux te comprendre, à poser des mots sur ce que tu vis,
                    et surtout à te rappeler que tu n'es pas seule.
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 flex justify-center">
                <img
                  src="/images/nuage-bienvenue.png"
                  alt="Bienvenue !"
                  className="w-auto h-40 transform -rotate-12"
                />
              </div>



              {/* Deuxième ligne */}
              <div className="col-span-12 md:col-span-8">
                <div className="bg-purple-600 text-white p-6 rounded-2xl relative">
                  {/* Bordure décorative en haut */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-white rounded-full -mt-2 mx-1"></div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <h3 className="text-2xl font-bold mb-4 font-hello-notie">Tu y trouveras :</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• des ressources claires pour comprendre la dyslexie à l'âge adulte ;</li>
                      <li>• des outils et conseils pour mieux vivre avec au quotidien ;</li>
                      <li>• un espace de dialogue, de partage, de soutien.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4">
                <div className="bg-pink-500 text-white p-6 rounded-2xl min-h-[300px] max-w-[250px] mx-auto flex flex-col justify-between relative overflow-visible">
                  <div className="mb-4">
                    <p className="font-bold font-hello-notie mb-2">Hello, moi c'est Flo,</p>
                    <p className="text-sm">je suis là pour t'accompagner !</p>
                  </div>
                  <div className="flex justify-center relative">
                    <img
                      src="/images/illustration-fille.png"
                      alt="Illustration de Flo qui fait coucou"
                      className="w-40 h-40 object-contain absolute bottom-0 translate-y-12"
                    />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </div>

      {/* Section avec fond blanc à partir de "Pourquoi parler de dyslexie au féminin ?" */}
      <div className="bg-white">
        {/* Purple Section with Left Holes */}
        <section className="px-4 mb-12 pt-12">
          <div className="bg-purple-600 rounded-3xl p-8 max-w-4xl mx-auto text-white relative">
            {/* Punched holes on the left */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-evenly">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-7 h-4 bg-white rounded-full -ml-4"></div>
              ))}
            </div>

            <div className="ml-6">
              <h2 className="text-2xl font-bold mb-6 font-hello-notie">Pourquoi parler de dyslexie au féminin ?</h2>
              <p className="mb-4">
                La dyslexie touche autant les femmes que les hommes. Pourtant, les femmes sont souvent moins bien
                diagnostiquées et accompagnées.
              </p>
              <p className="mb-4">
                Elles développent des stratégies de compensation qui masquent leurs difficultés. Résultat : elles
                passent souvent inaperçues et ne reçoivent pas l'aide dont elles ont besoin.
              </p>
              <p className="mb-6">
                C'est en découvrant ma propre dyslexie que j'ai pu enfin comprendre mes difficultés et celles de mes
                enfants. Aujourd'hui, je veux partager cette expérience pour aider d'autres femmes à se reconnaître et à
                s'accepter.
              </p>

              <div className="bg-pink-500 p-4 rounded-lg">
                <h3 className="font-bold mb-2 font-hello-notie">Après que nos enfants soient diagnostiqués,</h3>
                <p className="text-sm">Complices et respectées.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Un espace pour comprendre Section - Maintenant à la bonne place */}
        <section className="px-4 mb-12 relative">
          <div className="py-16 px-8 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative">
              {/* Titre */}
              <h2 className="text-center text-2xl md:text-3xl font-bold text-purple-600 mb-12 font-hello-notie">
                Un espace pour comprendre, questionner, partager !
              </h2>

              {/* Image avec les bulles de dialogue */}
              <div className="relative mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nuages-xnkKVjLfVv4oyjsmws3diIGjtRPAzW.png"
                  alt=""
                  className="w-full h-auto max-w-4xl mx-auto block"
                />
              </div>

              {/* Section avec les flèches et le bouton */}
              <div className="relative max-w-2xl mx-auto h-64">
                {/* Flèches en arrière-plan - plus petites */}
                <img
                  src="/images/fleches-decoratives.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain opacity-60 pointer-events-none"
                />

                {/* Bouton central au milieu des flèches */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <Link href="/forum">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-base font-bold shadow-xl border-2 border-white">
                      Aller au forum
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Section - Recréée selon l'image */}
        <section className="px-4 mb-12">
          <div className="bg-pink-500 rounded-3xl p-12 max-w-6xl mx-auto text-white relative overflow-visible">
            {/* Étoiles décoratives */}
            <div className="absolute top-8 right-8">
              <Star className="text-yellow-400 w-8 h-8 fill-current" />
            </div>
            <div className="absolute top-16 right-24">
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
            </div>
            <div className="absolute top-20 left-8">
              <Star className="text-yellow-400 w-8 h-8 fill-current" />
            </div>
            <div className="absolute bottom-32 left-16">
              <Star className="text-yellow-400 w-6 h-6 fill-current" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-hello-notie leading-tight">
                  Découvre mon livre illustré pour les petites filles dyslexiques
                </h2>

                <p className="mb-4 text-base">
                  Un petit guide illustré pour aider les jeunes filles à comprendre leur dyslexie, s'accepter telles
                  qu'elles sont, et être fières de leur manière unique de penser.
                </p>

                <p className="mb-6 text-base">
                  C'est un petit guide pour apprendre à s'accepter et à s'aimer, dès le plus jeune âge.
                </p>

                <div className="flex items-center gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg">
                    Voir le livre
                  </Button>
                  <img src="/images/fleche-violette.png" alt="Flèche décorative" className="w-16 h-8" />
                </div>
              </div>

              <div className="flex justify-center relative">
                <div className="transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <img
                    src="/images/illustration-livres2.png"
                    alt="Illustration des livres dyslexie"
                    className="w-full max-w-2xl h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section avec effet carnet */}
        <section className="px-4 mb-12">
          <div className="max-w-4xl mx-auto relative">
            {/* Image nuage en haut à gauche */}
            <div className="relative mb-8">
              <img src="/images/nuage-article.png" alt="Découvrer nos articles" className="w-64 h-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8 ml-8">
              <Card className="bg-pink-500 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 font-hello-notie">Dyslexie & TDAH chez les femmes</h3>
                  <p className="text-sm mb-4">
                    Chez les femmes, la dyslexie et le TDAH passent souvent inaperçus. On t'explique pourquoi et comment
                    mieux les reconnaître à l'âge adulte.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 font-hello-notie">Outils numériques pour s'organiser</h3>
                  <p className="text-sm mb-4">
                    Des outils concrets pour alléger la charge mentale, faciliter la lecture et gagner en autonomie.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-400 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 font-hello-notie">
                    Lire pour soi : retrouver le plaisir, sans pression
                  </h3>
                  <p className="text-sm mb-4">
                    Dyslexique ou pas, on a le droit d'aimer lire... à sa manière. Livres audio, BD, lecture lente ou
                    par morceaux : il existe mille façons de lire pour soi.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center ml-8">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                Voir plus d'articles
              </Button>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="px-4 mb-12">
          <div className="bg-blue-400 rounded-3xl p-8 max-w-4xl mx-auto text-white flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 font-hello-notie">Notre instagram</h2>
              <p className="mb-4">
                Un espace pensé pour les filles ado dyslexiques ✨ Tu y trouveras des conseils, des témoignages, des
                boosts de confiance et plein de contenu pour t'aider à mieux vivre ta dyslexie et surtout, à en faire
                une force !
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
    </div>
  )
}
