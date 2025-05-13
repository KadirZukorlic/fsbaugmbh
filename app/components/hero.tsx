import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className='relative bg-gray-900 overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src='/images/hero.jpg'
          alt='Bauarbeiten'
          className='w-full h-full object-cover opacity-40'
        />
      </div>
      <div className='relative container mx-auto px-4 py-24 sm:py-32'>
        <div className='max-w-3xl'>
          <img
            src='/logo.png'
            alt='FS Bauunternehmer Logo'
            className='h-24 w-auto mb-8'
          />
          <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
            Professionelle Baudienstleistungen für Ihr Zuhause
          </h1>
          <p className='text-xl text-gray-200 mb-8'>
            Renovierung, Sanierung, Abbrucharbeiten, Mauerarbeiten, Außenanlagen
            und Gartenarbeiten - alles aus einer Hand.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button variant='primary' size='lg' href='#leistungen'>
              Unsere Leistungen
            </Button>
            <Button
              variant='outline'
              size='lg'
              href='#kontakt'
              className='text-white border-white hover:bg-white/10'
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
