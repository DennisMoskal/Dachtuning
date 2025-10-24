import Image from "next/image";
import { Play, Home as HomeIcon, Settings, Shield, Droplet, Wrench, Paintbrush, Building2, Sun, PhoneCall } from "lucide-react";

export default function Home() {
  const videos = [
    {
      title: "Dachtuning - Moosfreie Dächer.",
      thumbnail: "https://ext.same-assets.com/2232344383/1805899985.jpeg",
      duration: "01:33"
    },
    {
      title: "Dachtuning - so wird es gemacht.",
      thumbnail: "https://ext.same-assets.com/2232344383/2271555416.jpeg",
      duration: "01:21"
    },
    {
      title: "Dachtuning - häufige Fragen (FAQ)",
      thumbnail: "https://ext.same-assets.com/2232344383/3183666904.jpeg",
      duration: "01:41"
    }
  ];

  const services = [
    {
      title: "Dachsanierung",
      description: "Eine Dachsanierung die sich sehen lassen kann",
      icon: HomeIcon,
      content: "Wer einen Altbau kauft oder besitzt, steht irgendwann vor der Frage wann eine Dachsanierung fällig ist. Offensichtliche wie abgefallene oder verrutschte Dachziegel und auch weniger auffällige wie Schimmelbefall."
    },
    {
      title: "Nanotech-Beschichtung",
      description: "Nanotechnik als Beschichtung für Ihr Dach",
      icon: Shield,
      content: "Für eine dauerhaft sichere Abdichtung Ihres Daches bietet sich eine Dachbeschichtung aus hochwertigem Flüssigkunststoff an. Das Verfahren ist sowohl für Privathäuser als auch für Industriebauten geeignet."
    },
    {
      title: "Wärmedämmung",
      description: "Energiekosten sparen und den Geldbeutel entlasten",
      icon: Droplet,
      content: "Eines der wichtigsten Faktoren für die Energiekosteneinsparung ist heutzutage die Fassade eines Hauses. Vor allem bei Altbauten ist der Energieverlust wegen einer schlecht isolierten Fassade erheblich."
    },
    {
      title: "Fassadenbeschichtung",
      description: "10 Jahre Garantie von Ihrem professionellen Partner",
      icon: Paintbrush,
      content: "Wir von dachtuning.de verfügen über jahrelange Erfahrungen im Bereich Fassadenbeschichtung. Unsere selbst entwickelten, harzbasierten Spezialmaterialien bieten eine bessere Alternative."
    },
    {
      title: "Fassadensanierung",
      description: "Wir peppen Ihre Fassade wieder auf",
      icon: Building2,
      content: "Weist eine Hausfassade sichtbare Schäden auf, ist es Zeit für eine komplette Fassadensanierung. Ein einfacher neuer Farbanstrich reicht hier nicht mehr."
    },
    {
      title: "Photovoltaik",
      description: "Nach dem Dachtuning noch etwas für die Umwelt tun",
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
    { label: "Vorsprung durch", value: "20 Jahre Nanotechnologie" },
    { label: "Garantie", value: "10 Jahre" },
    { label: "Referenzen", value: "Über 35.000" },
    { label: "Made with ❤️ in", value: "Germany" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b-4 border-[hsl(var(--metal))] bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent rounded-full blur-xl" />
                <Image
                  src="https://ext.same-assets.com/2232344383/2296446876.png"
                  alt="Dachtuning Logo"
                  width={80}
                  height={80}
                  className="relative z-10"
                />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl text-white text-shadow-metal tracking-wide">
                  Dachtuning.de
                </h1>
                <p className="text-zinc-400 text-sm mt-1 font-mono uppercase tracking-widest">
                  Est. 1999 • Professionell • Zuverlässig
                </p>
              </div>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 patch-style stitching text-white uppercase font-bold tracking-wider hover:brightness-110 transition-all">
              <PhoneCall className="w-5 h-5" />
              Kontakt
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-zinc-900 border-b-2 border-[hsl(var(--metal-dark))]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1 overflow-x-auto">
            {["Informationen", "Leistungen", "Dachtuning", "Top Themen", "Betriebsstätten", "Galerien", "Kontakt"].map((item) => (
              <button
                key={item}
                className="px-4 py-4 text-zinc-300 hover:bg-[hsl(var(--metal-dark))] hover:text-white transition-colors uppercase text-xs font-bold tracking-wider whitespace-nowrap border-l border-zinc-800 first:border-l-0"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 border-b-4 border-[hsl(var(--metal))]">
        <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/2232344383/1486582855.jpeg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl mb-4 text-white text-shadow-metal">
              Dachtuning.de
            </h2>
            <p className="text-2xl text-zinc-300 uppercase tracking-widest font-bold">
              Ihr Dachunternehmen in Paderborn
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
              <p className="text-orange-500 font-mono uppercase text-sm tracking-wider">Hart • Professionell • Zuverlässig</p>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, idx) => (
              <div key={idx} className="group relative patch-style overflow-hidden hover:brightness-110 transition-all cursor-pointer">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-mono">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-b from-zinc-900 to-black">
                  <h3 className="text-white font-bold text-sm">{video.title}</h3>
                  <p className="text-zinc-500 text-xs mt-1 font-mono">Sven Pannwitt</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-12 bg-gradient-to-b from-zinc-900 to-black border-b-4 border-[hsl(var(--metal))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="patch-style stitching p-6 text-center">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-mono">{item.label}</p>
                <p className="text-xl md:text-2xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl text-white text-shadow-metal mb-4">Leistungen</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group patch-style stitching p-6 hover:brightness-110 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-orange-600/20 rounded">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                      <p className="text-xs text-orange-500 uppercase tracking-wider font-mono">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.content}</p>
                  <button className="mt-4 px-4 py-2 bg-orange-600 text-white text-xs uppercase font-bold tracking-wider hover:bg-orange-700 transition-colors w-full">
                    Mehr Erfahren
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gradient-to-b from-black to-zinc-900 border-t-4 border-[hsl(var(--metal))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl text-white text-shadow-metal mb-4">Betriebsstätten</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-orange-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {locations.map((location, idx) => (
              <div key={idx} className="patch-style stitching p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-600/20 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl text-white mb-2">{location.name}</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">{location.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-[hsl(var(--metal))] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl text-white mb-4 uppercase tracking-wider">Informationen</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Nanotechnologie</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Dachsanierung Altbau</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Photovoltaik Kosten</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-white mb-4 uppercase tracking-wider">Leistungen</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Nanotech-Beschichtung</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Dachsanierung</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Fassadenarbeiten</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-white mb-4 uppercase tracking-wider">Dachtuning</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Chronik</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Entstehung</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Schriftart</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-white mb-4 uppercase tracking-wider">Kontakt</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Familie im Betrieb</li>
                <li>26 Jahre erfolgreich</li>
                <li>Markenrechtlich geschützt</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[hsl(var(--metal-dark))] pt-8 text-center">
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
              Copyright Dachtuning 2013 - Alle Rechte vorbehalten
            </p>
            <p className="text-zinc-600 text-xs mt-2 font-mono">
              Made with ❤️ in Germany • Familie im Betrieb • 10 Jahre Garantie ab Werk
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
