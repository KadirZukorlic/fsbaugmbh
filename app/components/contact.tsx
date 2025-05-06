import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { ContactCard } from "./ui/contactCard";

export function Contact() {
  return (
    <Section
      id="kontakt"
      title="Kontakt"
      description="Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu Ihrem Bauprojekt."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <ContactCard
          icon={<Phone className="h-6 w-6" />}
          title="Telefon"
          content={
            <div className="space-y-1">
              <p>+49 177 3286 159</p>
              <p>+49 173 4523 171</p>
            </div>
          }
        />
        <ContactCard
          icon={<Mail className="h-6 w-6" />}
          title="E-Mail"
          content={
            <a
              href="mailto:bbfsbau@gmail.com"
              className="text-yellow-500 hover:underline"
            >
              bbfsbau@gmail.com
            </a>
          }
        />
        <ContactCard
          icon={<MapPin className="h-6 w-6" />}
          title="Adresse"
          content="Maurener Weg 70, 71034 Böblingen"
        />
        <ContactCard
          icon={<Clock className="h-6 w-6" />}
          title="Öffnungszeiten"
          content={
            <div className="space-y-1">
              <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
              <p>Sa: Nach Vereinbarung</p>
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Schreiben Sie uns</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Betreff
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                required
              ></textarea>
            </div>
            <div>
              <Button
                variant="primary"
                type="submit"
                className="w-full sm:w-auto"
              >
                Nachricht senden
              </Button>
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Unsere Lage</h3>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.0088668054253!2d9.00924!3d48.6851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799f212d6a2b3a7%3A0x3f79e76a87f93c5a!2sMaurener%20Weg%2070%2C%2071034%20B%C3%B6blingen!5e0!3m2!1sde!2sde!4v1651234567890!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-6">
            <p className="text-gray-700 mb-4">
              Besuchen Sie uns in unserem Büro in Böblingen. Wir freuen uns auf
              ein persönliches Gespräch mit Ihnen.
            </p>
            <div className="flex items-center text-gray-700">
              <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
              Maurener Weg 70, 71034 Böblingen
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
