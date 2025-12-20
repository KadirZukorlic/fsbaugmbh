"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className='relative bg-gray-900 overflow-hidden'>
      <motion.div
        className='absolute inset-0'
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src='/images/hero.jpg'
          alt='Bauarbeiten'
          className='w-full h-full object-cover opacity-40'
        />
      </motion.div>
      <div className='relative container mx-auto px-4 py-24 sm:py-32'>
        <div className='max-w-3xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className='text-yellow-500 font-bold text-3xl sm:text-4xl block mb-8'>
              FS Bauunternehmen
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
          >
            Professionelle Baudienstleistungen für Ihr Zuhause
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-xl text-gray-200 mb-8 leading-relaxed'
          >
            Renovierung, Sanierung, Abbrucharbeiten, Mauerarbeiten, Außenanlagen
            und Gartenarbeiten - alles aus einer Hand.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-wrap gap-4'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant='primary' size='lg' href='#leistungen'>
                Unsere Leistungen
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant='outline'
                size='lg'
                href='#kontakt'
                className='text-white border-white hover:bg-white/10'
              >
                Kontakt aufnehmen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
