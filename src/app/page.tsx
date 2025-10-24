import { Play, Home, Shield, Droplet, Paintbrush, Building2, Sun, PhoneCall, Mail, MapPin, Clock, FileText, Wrench, Users, Award } from "lucide-react";

export default function DachtuningSite() {
  const videos = [
    {
      title: "Dachtuning - Moosfreie Dächer",
      thumbnail: "https://ext.same-assets.com/2232344383/1805899985.jpeg",
      duration: "01:33",
      description: "Sven Pannwitt"
    },
    {
      title: "Dachtuning - so wird es gemacht",
      thumbnail: "https://ext.same-assets.com/2232344383/2271555416.jpeg",
      duration: "01:21",
      description: "Sven Pannwitt"
    },
    {
      title: "Dachtuning - häufige Fragen (FAQ)",
      thumbnail: "https://ext.same-assets.com/2232344383/3183666904.jpeg",
      duration: "01:41",
      description: "Sven Pannwitt"
    }
  ];

  const services = [
    {
      title: "Dachsanierung",
      description: "Umfassende Renovierung für Ihr Dach",
      icon: Home,
      content: "Wer einen Altbau kauft oder besitzt, steht irgendwann vor der Frage wann eine Dachsanierung fällig ist. Offensichtliche wie abgefallene oder verrutschte Dachziegel und auch weniger auffällige wie Schimmelbefall sind Anzeichen für notwendige Reparaturen."
    },
    {
      title: "Nanotech-Beschichtung",
      description: "Hochwertige Oberflächenschutzbehandlung",
      icon: Shield,
      content: "Für eine dauerhaft sichere Abdichtung Ihres Daches bietet sich eine Dachbeschichtung aus hochwertigem Flüssigkunststoff an. Das Verfahren ist sowohl für Privathäuser als auch für Industriebauten geeignet."
    },
    {
      title: "Wärmedämmung",
      description: "Energieeffizienz und Kostenersparnis",
      icon: Droplet,
      content: "Eines der wichtigsten Faktoren für die Energiekosteneinsparung ist heutzutage die Fassade eines Hauses. Vor allem bei Altbauten ist der Energieverlust wegen einer schlecht isolierten Fassade erheblich."
    },
    {
      title: "Fassadenbeschichtung",
      description: "Langzeitschutz mit 10 Jahren Garantie",
      icon: Paintbrush,
      content: "Wir verfügen über jahrelange Erfahrungen im Bereich Fassadenbeschichtung. Unsere selbst entwickelten, harzbasierten Spezialmaterialien bieten eine bessere Alternative zu herkömmlichen Lösungen."
    },
    {
      title: "Fassadensanierung",
      description: "Komplette Restauration und Modernisierung",
      icon: Building2,
      content: "Weist eine Hausfassade sichtbare Schäden auf, ist es Zeit für eine komplette Fassadensanierung. Ein einfacher neuer Farbanstrich reicht hier nicht mehr aus."
    },
    {
      title: "Photovoltaik",
      description: "Nachhaltige Energielösungen für die Zukunft",
      icon: Sun,
      content: "Das fossil-nukleare Energiezeitalter gehört in Deutschland immer mehr der Vergangenheit an. Photovoltaik wird in unserer nachhaltigen Energiezukunft immer wichtiger."
    }
  ];

  const locations = [
    { name: "Schwaan", state: "Mecklenburg-Vorpommern" },
    { name: "Leipzig", state: "Sachsen" },
    { name: "Bremen", state: "Bremen" },
    { name: "Paderborn", state: "Nordrhein-Westfalen" }
  ];

  const guarantees = [
    { label: "Nanotechnologie Vorsprung", value: "20 Jahre" },
    { label: "Gewährleistung", value: "10 Jahre" },
    { label: "Referenzen", value: "35.000+" },
    { label: "Erfolgreich seit", value: "1999" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b-4 border-orange-600 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent rounded-full blur-xl" />
                <img
                  src="https://ext.same-assets.com/2232344383/2296446876.png"
                  alt="Dachtuning Logo"
                  className="relative z-10 h-16 w-16"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl text-white font-bold tracking-wide">
                  Dachtuning.de
                </h1>
                <p className="text-zinc-400 text-xs mt-1 font-mono uppercase tracking-widest">
                  Seit 1999 • Professionell • Zuverlässig
                </p>
              </div>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-orange-600 text-white uppercase font-bold tracking-wider hover:bg-orange-700 transition-all rounded">
              <PhoneCall className="w-5 h-5" />
              Kontakt
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-zinc-900 border-b-2 border-zinc-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-0 overflow-x-auto">
            {["Startseite", "Leistungen", "Dachtuning", "Über uns", "Regionen", "Galerie", "Kontakt"].map((item) => (
              <button
                key={item}
                className="px-4 py-4 text-zinc-300 hover:bg-orange-600/20 hover:text-orange-400 transition-colors uppercase text-xs font-bold tracking-wider whitespace-nowrap border-r border-zinc-800 last:border-r-0"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 border-b-4 border-orange-600 bg-gradient-to-b from-zinc-900 to-black">
        <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/2232344383/1486582855.jpeg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl mb-6 text-white font-bold">
              Dachtuning.de
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 uppercase tracking-widest font-bold mb-6">
              Ihr professionelles Dachunternehmen für Bremen, Leipzig, Paderborn und Schwaan
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
              <p className="text-orange-500 font-mono uppercase text-sm tracking-wider">Stark • Professionell • Zuverlässig</p>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
            </div>
          </div>

          {/* Video Section */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, idx) => (
              <div key={idx} className="group relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className="relative aspect-video bg-zinc-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/90 px-3 py-1 rounded text-xs text-white font-mono font-bold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-b from-zinc-800 to-black border-t border-zinc-700">
                  <h3 className="text-white font-bold text-sm leading-snug mb-2">{video.title}</h3>
                  <p className="text-zinc-500 text-xs font-mono">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-12 bg-black border-b-2 border-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-zinc-900 to-black border border-orange-600/20 rounded p-6 text-center hover:border-orange-600/50 transition-colors">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-mono">{item.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-orange-500">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4">Unsere Leistungen</h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-lg p-6 hover:border-orange-600 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-orange-600/20 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-white font-bold mb-1">{service.title}</h3>
                      <p className="text-xs text-orange-500 uppercase tracking-wider font-mono">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.content}</p>
                  <button className="w-full px-4 py-2 bg-orange-600 text-white text-xs uppercase font-bold tracking-wider hover:bg-orange-700 transition-colors rounded">
                    Mehr Erfahren
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 border-t-4 border-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-4">Unsere Betriebsstätten</h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {locations.map((location, idx) => (
              <div key={idx} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-lg p-6 text-center hover:border-orange-600 transition-colors">
                <div className="w-14 h-14 mx-auto mb-4 bg-orange-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl text-white font-bold mb-2">{location.name}</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">{location.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-orange-600">
        <div className="container mx-auto px-4 py-16">
          {/* Footer Links Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Information */}
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" />
                Information
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Nanotechnologie</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dachsanierung Altbau</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Photovoltaik Kosten</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Materialien & Technologie</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-500" />
                Leistungen
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Nanotech-Beschichtung</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dachsanierung</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Fassadenarbeiten</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Wärmedämmung</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                Unternehmen
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Unternehmensgeschichte</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Unser Team</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Auszeichnungen</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Partner & Referenzen</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg text-white mb-6 uppercase font-bold tracking-wider flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                Service & Hilfe
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Häufig gestellte Fragen</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Dokumentation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Impressum</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-gradient-to-r from-orange-600/10 to-transparent rounded-lg border border-orange-600/20">
            <div className="flex items-start gap-3">
              <PhoneCall className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Telefonische Beratung</p>
                <p className="text-white font-bold">Kontakt aufnehmen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">E-Mail</p>
                <p className="text-white font-bold">info@dachtuning.de</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Verfügbarkeit</p>
                <p className="text-white font-bold">Mo-Fr 8:00 - 18:00 Uhr</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                  © 1999 - 2025 Dachtuning.de • Alle Rechte vorbehalten
                </p>
                <p className="text-zinc-500 text-xs mt-2">
                  Familie im Betrieb • 26 Jahre erfolgreiche Handwerkskunst • 10 Jahre Garantie ab Werk
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <a href="#" className="hover:text-orange-500 transition-colors">Datenschutz</a>
                <span>•</span>
                <a href="#" className="hover:text-orange-500 transition-colors">Impressum</a>
                <span>•</span>
                <a href="#" className="hover:text-orange-500 transition-colors">AGB</a>
              </div>
            </div>
            <div className="text-center pt-4 border-t border-zinc-800">
              <p className="text-zinc-600 text-xs font-mono">
                🇩🇪 Made with ❤️ in Germany
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
