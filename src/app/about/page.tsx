'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TimelineComponent from '@/components/TimelineComponent'
import Image from 'next/image'

export default function AboutPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-br from-[primary-50] to-[primary-100] dark:from-[primary-900]/20 dark:to-[primary-800]/20 transition-colors duration-300'>
        <div className='container-custom text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
              Über Uns
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Die Geschichte der Theatergruppe der Kolpingsfamilie Ramsen
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section
        ref={ref}
        className='section-padding bg-white dark:bg-gray-900 transition-colors duration-300'
      >
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'
          >
            <div>
              <div className='aspect-video relative rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/30'>
                <Image
                  src='/img/other_images/Gruppenbild.webp'
                  alt='Theatergruppe der Kolpingsfamilie Ramsen'
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>
                Unsere Theatergruppe
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                Wir sind eine kleine Gruppe von Hobbyschauspielern, die
                gemeinsam Theaterprojekte auf die Beine stellen. Unsere Gruppe
                gehört der Kolpingsfamilie Ramsen an. Gemeinsam gelingt es uns
                seit 2016 jährlich ein eigenes Theaterstück auf die Beine zu
                stellen.
              </p>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                Die ganze Arbeit, die damit einhergeht wird komplett von uns
                gestemmt. Wir kümmern uns um Kostüme, Kulissen, Maske, Technik
                und vieles mehr. Dank der Hilfe und der Unterstützung aus dem
                gesamten Verein gelingt es uns jedes Jahr ein kleines Event auf
                die Beine zu stellen, welches von Jahr zu Jahr wächst und
                professioneller wird.
              </p>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                Wir würden uns freuen auch dich einmal auf einer unserer
                Aufführungen begrüßen zu dürfen. 🎭
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineComponent />
    </div>
  )
}
