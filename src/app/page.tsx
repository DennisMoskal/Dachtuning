'use client';
import { Play, Home, Shield, Droplet, Paintbrush, Building2, Sun, PhoneCall, Mail, MapPin, Clock, Wrench, Users, Award, Sparkles, Droplets, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

export default function DachtuningSite() {
  const [activeService, setActiveService] = useState(0);

  const videos = [
    { title: "Dachtuning - Moosfreie Dächer", thumbnail: "https://ext.same-assets.com/2232344383/1805899985.jpeg", duration: "01:33", description: "Sven Pannwitt" },
    { title: "Dachtuning - so wird es gemacht", thumbnail: "https://ext.same-assets.com/2232344383/2271555416.jpeg", duration: "01:21", description: "Sven Pannwitt" },
    { title: "Dachtuning - häufige Fragen (FAQ)", thumbnail: "https://ext.same-assets.com/2232344383/3183666904.jpeg", duration: "01:41", description: "Sven Pannwitt" }
  ];

  const services = [
    { title: "Dachsanierung", subtitle: "Professionelle Dachrenovierung", icon: Home, content: "Wer einen Altbau kauft oder besitzt, steht irgendwann vor der Frage wann eine Dachsanierung fällig ist. Es gibt einige Anzeichen dafür, wann das der Fall sein sollte. Offensichtliche wie abgefallene oder verrutschte Dachziegel und auch weniger auffällige wie Schimmelbefall, morsche Bestandteile oder nicht fest sitzende Ziegel.", image: "/Dachsanierung.png", benefits: ["Langzeitschutz", "Energieeffizienz", "Wertsteigerung"] },
    { title: "Nanotech-Beschichtung", subtitle: "Hochwertige Oberflächenversiegelung", icon: Shield, content: "Für eine dauerhaft sichere Abdichtung Ihres Daches bietet sich eine Dachbeschichtung aus hochwertigem Flüssigkunststoff an. Das Verfahren ist sowohl für Privathäuser als auch für Industriebauten geeignet und bietet ein Höchstmaß an Sicherheit und Wirtschaftlichkeit.", image: "/Nanotech-Beschichtung.png", benefits: ["20 Jahre Schutz", "Wetterbeständig", "Umweltfreundlich"] },
    { title: "Wärmedämmung", subtitle: "Energiekosten effektiv senken", icon: Droplet, content: "Eines der wichtigsten Faktoren für die Energiekosteneinsparung ist heutzutage die Fassade eines Hauses. Vor allem bei Altbauten ist der Energieverlust wegen einer schlecht isolierten Fassade ca. dreimal so hoch wie bei Neubauten. Moderne Dämmlösungen reduzieren Heizkosten deutlich.", image: "/Wärmedämmung.png", benefits: ["Bis 40% Ersparnis", "Besseres Klima", "Nachhaltigkeit"] },
    { title: "Fassadenbeschichtung", subtitle: "Langzeitschutz mit Garantie", icon: Paintbrush, content: "Wir verfügen über jahrelange Erfahrungen im Bereich Fassadenbeschichtung. Unsere selbst entwickelten, harzbasierten Spezialmaterialien bieten eine bessere Alternative zu Dispersionsfarben und sind für mineralische Untergründe optimal geeignet.", image: "/Fassadenbeschichtung.png", benefits: ["10 Jahre Garantie", "Hochwertige Materialien", "Professionelle Verarbeitung"] },
    { title: "Fassadensanierung", subtitle: "Komplette Restauration", icon: Building2, content: "Weist eine Hausfassade sichtbare Schäden auf, ist es Zeit für eine komplette Fassadensanierung. Ein einfacher neuer Farbanstrich reicht hier nicht mehr aus. Wir beheben die tieferen Probleme nachhaltig.", image: "/Fassadensanierung.png", benefits: ["Schadensbehebung", "Wertsicherung", "Ästhetik"] },
    { title: "Fassadenreinigung", subtitle: "Professionelle Tiefenreinigung", icon: Sparkles, content: "Durch schädigende Einflüsse aus der Atmosphäre verliert die Außenfassade eines Hauses ihr gutes Aussehen. Wir reinigen Ihre Fassade und versiegeln sie mit Profi-Standard für langanhaltende Sauberkeit.", image: "/Fassadenreinigung.png", benefits: ["Tiefenwirkung", "Langzeiteffekt", "Profi-Versiegelung"] },
    { title: "Flüssigkunststoff", subtitle: "Innovative Dachabdichtung", icon: Droplets, content: "Bevor wir die Beschichtung auftragen, schauen wir uns den Untergrund des Daches genau an, denn dieser ist jedes Mal anders. Unsere Beschichtung wird nur auf Untergründe aufgetragen, die diese auch vollständig aufsaugen.", image: "/Fluessigkunststoff.png", benefits: ["Individuell angepasst", "Ohne Fugen", "Jahrzehntehaltbar"] },
    { title: "Dachreinigung", subtitle: "Gründliche Reinigung & Versiegelung", icon: Home, content: "Professionelle Dachreinigung mit modernen Verfahren und anschließender Versiegelung für lange Haltbarkeit und optimalen Schutz vor Verschmutzung und Witterungseinflüssen.", image: "/Dachreinigung.png", benefits: ["Moosfreie Dächer", "Versiegelt", "Langzeitschutz"] },
    { title: "Photovoltaik", subtitle: "Nachhaltige Energielösungen", icon: Sun, content: "Das fossil-nukleare Energiezeitalter gehört in Deutschland immer mehr der Vergangenheit an. Photovoltaik wird in unserer nachhaltigen Energiezukunft immer wichtiger und auch wir möchten unseren Beitrag leisten.", image: "/Photovoltaik.png", benefits: ["Energieunabhängigkeit", "Kostenersparnis", "Zukunftssicher"] }
  ];

  const locations = [
    { name: "Schwaan", state: "Mecklenburg-Vorpommern" },
    { name: "Leipzig", state: "Sachsen" },
    { name: "Bremen", state: "Bremen" },
    { name: "Paderborn", state: "Nordrhein-Westfalen" }
  ];

  const guarantees = [
    { label: "Nanotechnologie", value: "20 Jahre", icon: "🛡️" },
    { label: "Gewährleistung", value: "10 Jahre", icon: "✓" },
    { label: "Referenzen", value: "35.000+", icon: "⭐" },
    { label: "Erfolgreich seit", value: "1999", icon: "📅" }
  ];

  const testimonials = [
    { name: "Familie Petersen, Bremen", rating: 5, text: "Hervorragende Arbeit! Das Dach sieht wie neu aus." },
    { name: "Unternehmen Weber, Leipzig", rating: 5, text: "Professionell, zuverlässig und preiswert. Sehr empfehlenswert!" },
    { name: "Familie Hansen, Paderborn", rating: 5, text: "Schnelle Abwicklung, großartige Ergebnisse. Danke!" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b-4 border-orange-600 bg-gradient-to-b from-black to-zinc-900 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent rounded-full blur-lg" />
                <img src="/Logo.png" alt="Logo" className="relative z-10 h-12 w-12 md:h-16 md:w-16 object-contain drop-shadow-lg" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl md:text-4xl text-white font-bold tracking-wide truncate" style={{ fontFamily: 'var(--font-unifraktur)', fontWeight: '700', letterSpacing: '0.05em' }}>Dachtuning.de</h1>
                <p className="text-zinc-400 text-xs mt-0.5 md:mt-1 font-mono uppercase tracking-widest truncate">Professionelle Dachsanierung seit 1999</p>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white uppercase font-bold text-xs md:text-sm tracking-wider hover:shadow-lg hover:shadow-orange-600/50 transition-all rounded hover:from-orange-700 hover:to-orange-600 flex-shrink-0">
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">0800 3228864</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-zinc-900 border-b-2 border-zinc-800 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start gap-0 overflow-x-auto scrollbar-hide">
            {["Startseite", "Leistungen", "Über uns", "Standorte", "Kontakt"].map((item) => (
              <button key={item} className="px-3 md:px-4 py-3 md:py-4 text-zinc-300 hover:bg-orange-600/20 hover:text-orange-400 transition-colors uppercase text-xs font-bold tracking-wider whitespace-nowrap border-r border-zinc-800 last:border-r-0">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative py-16 md:py-32 border-b-4 border-orange-600 bg-gradient-to-br from-zinc-900 via-black to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 md:mb-20">
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="mb-4 inline-block px-4 py-2 bg-orange-600/20 border border-orange-600/40 rounded-full text-orange-400 text-xs font-bold uppercase tracking-wider">🏆 Seit 26 Jahren Ihre Vertrauensperson</div>
              <h2 className="text-5xl md:text-7xl mb-6 text-white font-bold tracking-tight">Dachtuning</h2>
              <p className="text-xl md:text-2xl text-zinc-300 font-semibold mb-6 max-w-3xl">Professionelle Dachsanierung und Fassadenarbeiten für Bremen, Leipzig, Paderborn und Schwaan</p>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded hover:shadow-lg hover:shadow-orange-600/50 transition-all uppercase text-sm tracking-wider">Mehr erfahren</button>
            </div>
            <div className="hidden lg:flex bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl p-6 md:p-8 shadow-2xl hover:shadow-orange-600/50 transition-all flex-col items-center justify-center text-center sticky top-32 h-fit">
              <p className="text-white text-xs uppercase tracking-wider font-bold mb-3">Deutschlandweit Kostenlos</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <PhoneCall className="w-6 h-6 text-white" />
                <p className="text-white text-2xl font-bold">0800 3228864</p>
              </div>
              <p className="text-white/90 text-xs leading-tight">Anrufen und sofort Angebot erhalten!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {videos.map((video, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-600/50 transition-all hover:scale-105 cursor-pointer border border-orange-600/20">
                <div className="relative aspect-video bg-zinc-900">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-125 transition-transform shadow-2xl">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/90 px-3 py-1 rounded-lg text-xs text-white font-mono font-bold">{video.duration}</div>
                </div>
                <div className="p-4 bg-gradient-to-b from-zinc-800 to-black border-t border-orange-600/20">
                  <h3 className="text-white font-bold text-sm leading-snug mb-2">{video.title}</h3>
                  <p className="text-zinc-400 text-xs">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black border-b-2 border-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-zinc-900 to-black border-2 border-orange-600/30 rounded-lg p-6 text-center hover:border-orange-600 transition-all hover:shadow-lg hover:shadow-orange-600/20">
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2 font-mono">{item.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-orange-500">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4">Unsere Leistungen</h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">Hochwertige Lösungen für Dach- und Fassadenarbeiten mit über 25 Jahren Erfahrung</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-xl overflow-hidden hover:border-orange-600 transition-all hover:shadow-2xl hover:shadow-orange-600/30 flex flex-col cursor-pointer" onMouseEnter={() => setActiveService(idx)}>
                  <div className="h-48 bg-zinc-800 overflow-hidden relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-orange-600/20 rounded-lg flex-shrink-0 group-hover:bg-orange-600/40 transition-colors">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl text-white font-bold mb-1 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                        <p className="text-xs text-orange-500 uppercase tracking-wider font-mono">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">{service.content}</p>
                    <div className="space-y-2 mb-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs uppercase font-bold tracking-wider hover:shadow-lg hover:shadow-orange-600/50 transition-all rounded hover:from-orange-700 hover:to-orange-600">Mehr Erfahren</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-900 border-b-4 border-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4">Was unsere Kunden sagen</h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-zinc-900 to-black border-2 border-orange-600/30 rounded-lg p-6 hover:border-orange-600 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                <p className="text-orange-500 font-bold text-sm">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4">Unsere Standorte</h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {locations.map((location, idx) => (
              <div key={idx} className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-lg p-6 text-center hover:border-orange-600 transition-all hover:shadow-lg hover:shadow-orange-600/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-600/20 rounded-full flex items-center justify-center hover:bg-orange-600/40 transition-colors">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl text-white font-bold mb-2">{location.name}</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">{location.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-500 border-t-4 border-orange-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">Bereit für Ihr Dachprojekt?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Kontaktieren Sie uns noch heute für eine kostenlose Beratung und ein unverbindliches Angebot</p>
          <button className="px-10 py-4 bg-white text-orange-600 font-bold rounded-lg hover:shadow-2xl transition-all uppercase text-sm tracking-wider flex items-center gap-2 mx-auto hover:bg-gray-100">
            Jetzt anrufen <PhoneCall className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="bg-black border-t-4 border-orange-600">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center mb-12 pb-12 border-b border-zinc-800">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent rounded-full blur-lg" />
              <img src="/Logo.png" alt="Logo" className="relative z-10 h-20 w-20 object-contain drop-shadow-lg" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <h3 className="text-3xl text-white font-bold text-center">Dachtuning.de</h3>
            <p className="text-zinc-400 text-sm mt-2 font-mono uppercase tracking-widest text-center">Professionelle Dachsanierung seit 1999 • 26 Jahre Erfahrung</p>
            <div className="mt-8 max-w-2xl text-center">
              <p className="text-zinc-300 text-sm leading-relaxed">
                <span className="text-orange-500 font-bold">Tradition. Vertrauen. Qualität.</span> Seit über 26 Jahren steht Dachtuning für handwerkliche Excellence und persönliche Zuverlässigkeit. Als Familienunternehmen verstehen wir Dachsanierung nicht als kurzfristige Lösung, sondern als langfristige Investition in Ihre Immobilie. Jedes Projekt führen wir mit dem gleichen Engagement durch – mit höchsten Standards, transparenten Preisen und einer ehrlichen Beratung. Ihr Vertrauen ist unser wertvollstes Gut.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-500" />
                Leistungen
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dachsanierung</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Nanotech-Beschichtung</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Fassadenarbeiten</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Wärmedämmung</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dachreinigung</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Photovoltaik</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                Unternehmen
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Unser Team</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Referenzen & Portfolio</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Standorte</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog & Tipps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                Service & Rechtliches
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Häufig gestellte Fragen</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Angebotsanfrage</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Wartungsservice</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 md:p-8 bg-gradient-to-r from-orange-600/10 to-transparent rounded-xl border-2 border-orange-600/30">
            <div className="flex items-start gap-4">
              <PhoneCall className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-bold">Deutschlandweit Kostenlos</p>
                <p className="text-white font-bold text-lg">0800 3228864</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-bold">E-Mail</p>
                <p className="text-white font-bold">info@dachtuning.de</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-bold">Verfügbarkeit</p>
                <p className="text-white font-bold">Mo-Fr 8:00 - 18:00 Uhr</p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">© 1999 - 2025 Dachtuning.de • Alle Rechte vorbehalten</p>
                <p className="text-zinc-500 text-xs mt-2">Familie im Betrieb • 26 Jahre erfolgreiche Handwerkskunst • TÜV zertifiziert</p>
              </div>
              <div className="flex items-center gap-6 text-xs text-zinc-500">
                <a href="#" className="hover:text-orange-500 transition-colors font-bold">Datenschutz</a>
                <span className="text-zinc-700">•</span>
                <a href="#" className="hover:text-orange-500 transition-colors font-bold">Impressum</a>
                <span className="text-zinc-700">•</span>
                <a href="#" className="hover:text-orange-500 transition-colors font-bold">AGB</a>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-zinc-800">
              <p className="text-zinc-600 text-xs font-mono">🇩🇪 Made with ❤️ in Germany • Vertrauenswürdig seit 1999</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
