import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo.png"
              alt="FS Bauunternehmer Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6">
              Ihr zuverlässiger Partner für alle Bauvorhaben in Böblingen und
              Umgebung.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fsbaubb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p>+49 177 3286 159</p>
                  <p>+49 173 4523 171</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:bbfsbau@gmail.com"
                  className="hover:text-yellow-500 transition-colors"
                >
                  bbfsbau@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p>Maurener Weg 70, 71034 Böblingen</p>
              </li>
              <li className="flex items-start">
                <Instagram className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/fsbaubb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors"
                >
                  @fsbaubb
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Renovierung
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sanierung
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Abbrucharbeiten
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mauerarbeiten
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Außenanlagen
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gartenarbeiten
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="#ueber-uns"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="#projekte"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} FS Bauunternehmer. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
