import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Users, Zap, Leaf, ArrowRight, ChevronDown } from 'lucide-react';

const WerenodeACCSite = () => {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const navigation = [
    { key: 'accueil', label: 'Accueil' },
    { key: 'rejoindre', label: 'Rejoignez un collectif' },
    { key: 'faq', label: 'FAQ' },
    { key: 'contact', label: 'Contact' },
    { key: 'qui-sommes-nous', label: 'Qui sommes-nous ?' }
  ];

  const sites = [
    { nom: 'Éco-Quartier Luc-sur-Mer', lat: 45.764, lng: 4.835, participants: 45, production: '250 kWh' },
    { nom: 'Greenwest Montigny', lat: 43.296, lng: 5.370, participants: 32, production: '180 kWh' },
    { nom: 'Collectif Solaire Versailles', lat: 43.604, lng: 1.444, participants: 28, production: '160 kWh' },
    { nom: 'Énergie Partagée Nozay', lat: 44.837, lng: -0.579, participants: 38, production: '210 kWh' }
  ];

  const faqData = [
    {
      question: 'Qu\'est-ce que l\'autoconsommation collective ?',
      answer: 'L\'autoconsommation collective permet à plusieurs consommateurs de partager l\'électricité produite par une ou plusieurs installations de production d\'énergie renouvelable. Les participants peuvent ainsi consommer localement une énergie verte et réduire leur facture énergétique.'
    },
    {
      question: 'Comment rejoindre un collectif d\'autoconsommation ?',
      answer: 'Pour rejoindre un collectif, vous devez être situé dans le périmètre géographique du projet (généralement dans un rayon de 2 km). Nous vous accompagnons dans toutes les démarches administratives et techniques nécessaires.'
    },
    {
      question: 'Quels sont les avantages de l\'autoconsommation collective ?',
      answer: 'Les avantages incluent : réduction de la facture énergétique, consommation d\'énergie locale et verte, contribution à la transition énergétique, création de lien social au sein du collectif, et indépendance énergétique accrue.'
    },
    {
      question: 'Combien coûte l\'adhésion à un collectif ?',
      answer: 'Les coûts varient selon les projets. Nous proposons des solutions adaptées à tous les budgets avec différents niveaux de participation. Un devis personnalisé vous sera fourni lors de notre première rencontre.'
    }
  ];

  const renderAccueil = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Votre énergie,
                <span className="block text-green-300">localement partagée</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Rejoignez la révolution énergétique avec l'autoconsommation collective.
                Consommez une énergie verte produite près de chez vous et réduisez votre facture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('rejoindre')}
                  className="bg-green-500 hover:bg-green-400 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                >
                  Rejoindre un collectif <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white/50 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Découvrir nos solutions
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-300">4+</div>
                    <div className="text-sm text-blue-100">Collectifs actifs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-300">25kW</div>
                    <div className="text-sm text-blue-100">Puissance installée</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-300">-20%</div>
                    <div className="text-sm text-blue-100">Réduction moyenne</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-300">25+</div>
                    <div className="text-sm text-blue-100">Participants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              L'autoconsommation collective simplifiée
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'étude de faisabilité à la gestion quotidienne, nous vous accompagnons
              à chaque étape de votre projet d'autoconsommation collective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production locale</h3>
              <p className="text-gray-600 mb-6">
                Installation et gestion d'unités de production solaire au cœur de votre quartier
                pour une énergie 100% verte et locale.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                En savoir plus <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collectifs solidaires</h3>
              <p className="text-gray-600 mb-6">
                Création et animation de collectifs d'habitants pour partager les bénéfices
                de l'autoconsommation collective.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                Rejoindre <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact environnemental</h3>
              <p className="text-gray-600 mb-6">
                Réduction significative de votre empreinte carbone grâce à une consommation
                d'énergie renouvelable et circuits courts.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                Calculer mon impact <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à rejoindre la transition énergétique ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Découvrez les collectifs près de chez vous et commencez à consommer
            une énergie verte et locale dès maintenant.
          </p>
          <button
            onClick={() => setCurrentPage('rejoindre')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Explorer la carte des collectifs
          </button>
        </div>
      </section>
    </div>
  );

  const renderRejoindre = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rejoignez un collectif d'autoconsommation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les collectifs actifs près de chez vous et rejoignez la communauté
              de l'énergie partagée et durable.
            </p>
          </div>

          {/* Carte simulée */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 h-96 relative">
              <div className="absolute inset-0 bg-blue-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Carte Interactive</h3>
                  <p className="text-lg opacity-90">Explorez les collectifs près de chez vous</p>
                </div>
              </div>

              {/* Points de collectifs */}
              {sites.map((site, index) => (
                <div
                  key={index}
                  className="absolute bg-white rounded-full w-4 h-4 border-2 border-green-500 hover:scale-150 transition-transform cursor-pointer"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 2) * 20}%`
                  }}
                  title={site.nom}
                ></div>
              ))}
            </div>
          </div>

          {/* Liste des collectifs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{site.nom}</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span>{site.participants} participants</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Zap size={16} className="mr-2" />
                    <span>{site.production}/mois</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>Places disponibles</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Rejoindre ce collectif
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Votre collectif n'existe pas encore ?
              </h3>
              <p className="text-gray-600 mb-6">
                Nous pouvons vous aider à créer un nouveau collectif dans votre quartier.
                Contactez-nous pour étudier la faisabilité de votre projet.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Créer un collectif
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur l'autoconsommation collective
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <ChevronDown
                    className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts est là pour répondre à toutes vos questions
                sur l'autoconsommation collective.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600">
              Notre équipe est à votre disposition pour vous accompagner dans votre projet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Prénom</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Sujet</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Rejoindre un collectif</option>
                      <option>Créer un collectif</option>
                      <option>Information générale</option>
                      <option>Support technique</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Décrivez votre projet ou votre question..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Téléphone</div>
                      <div className="text-gray-600">+33 7 77 14 46 43</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">contact@werenode.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Adresse</div>
                      <div className="text-gray-600">
                        123 Avenue de l'Énergie<br />
                        78000 Versailles, France
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiSommesNous = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Werenode ACC est une filiale de Werenode spécialisée dans l'autoconsommation collective,
              créée pour démocratiser l'accès à l'énergie verte et locale.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Nous croyons que l'énergie doit être accessible, durable et produite localement.
                    Notre mission est d'accompagner les collectivités et les citoyens dans la création
                    de collectifs d'autoconsommation pour une transition énergétique inclusive et solidaire.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Grâce à notre expertise technique et notre approche humaine, nous facilitons
                    l'accès à l'énergie solaire partagée et créons des liens durables entre les habitants.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-green-500 p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Leaf size={80} className="mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Transition Énergétique</h3>
                    <p className="text-lg opacity-90">Pour un avenir durable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise collective</h3>
              <p className="text-gray-600">
                Plus de 10 ans d'expérience dans la création et l'animation de collectifs énergétiques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-green-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation technique</h3>
              <p className="text-gray-600">
                Solutions technologiques avancées pour optimiser la production et la consommation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-purple-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact environnemental</h3>
              <p className="text-gray-600">
                Contribution concrète à la réduction des émissions de CO2 et à la préservation de l'environnement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Solidarité</h4>
                <p className="text-gray-600">
                  L'énergie partagée pour créer du lien social et réduire les inégalités énergétiques.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Transparence</h4>
                <p className="text-gray-600">
                  Une communication claire et honnête sur nos processus et nos résultats.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Durabilité</h4>
                <p className="text-gray-600">
                  Des solutions pérennes pour un avenir énergétique respectueux de l'environnement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'accueil': return renderAccueil();
      case 'rejoindre': return renderRejoindre();
      case 'faq': return renderFAQ();
      case 'contact': return renderContact();
      case 'qui-sommes-nous': return renderQuiSommesNous();
      default: return renderAccueil();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900">Werenode ACC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === item.key
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-2 mt-4">
                {navigation.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setCurrentPage(item.key);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg font-medium text-left transition-colors ${
                      currentPage === item.key
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">Werenode ACC</span>
              </div>
              <p className="text-gray-400 text-sm">
                L'autoconsommation collective pour un avenir énergétique durable et solidaire.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Collectifs d'autoconsommation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Installation solaire</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accompagnement</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setCurrentPage('qui-sommes-nous')} className="hover:text-white transition-colors text-left">Qui sommes-nous</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Actualités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+33 1 23 45 67 89</li>
                <li>acc@werenode.com</li>
                <li>123 Avenue de l'Énergie<br />78000 Versailles</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Werenode ACC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WerenodeACCSite;
