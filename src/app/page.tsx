'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import FAQSection from '@/components/FAQSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function HomePage() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-gray-900 to-[primary-900] pb-16'
      >
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_transparent_50%,_rgba(0,0,0,0.3)_100%)]'></div>
        </div>

        <div className='container-custom relative z-10 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'>
              <span className='text-[#d4af37]'>Anno</span> 1146
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto'>
              Alles hat eine Geschichte
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-20 px-4 sm:px-6 lg:px-8'
          >
            <div className='mx-auto max-w-sm sm:max-w-md lg:max-w-lg relative rounded-2xl shadow-2xl overflow-hidden'>
              <Image
                src='/img/banners/anno.jpg'
                alt='Sommerstück 2025 - Anno 1146'
                width={600}
                height={800}
                className='w-full h-auto object-contain'
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='space-y-6 mt-12'
          >
            <p className='text-lg md:text-xl max-w-4xl mx-auto leading-relaxed'>
              Taucht ein in das Jahr 1146! Unser großes Sommerstück{' '}
              <strong>"Anno 1146"</strong> entführt euch in eine Zeit voller
              Geheimnisse, Intrigen und mittelalterlicher Abenteuer. Lasst euch
              von einer fesselnden Geschichte in vergangene Zeiten versetzen.
            </p>

            <div className='bg-black/30 rounded-xl p-6 max-w-2xl mx-auto'>
              <h3 className='text-xl font-bold mb-3 text-[#d4af37]'>
                Aufführungstermine
              </h3>
              <p className='text-lg'>
                Erlebt "Anno 1146" an den folgenden Terminen:
                <br />
                <strong>23., 24., 30. und 31. August 2025</strong>
              </p>
              <p className='text-sm mt-2 opacity-80'>
                Die Vorbereitungen laufen bereits auf Hochtouren. Weitere
                Details folgen in Kürze.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='/youtube'
                className='btn-primary flex items-center space-x-2'
              >
                <FontAwesomeIcon icon={faYoutube} className='w-5 h-5' />
                <span>YouTube</span>
              </Link>
              <Link
                href='/instagram'
                className='bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2'
              >
                <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
                <span>Instagram</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <div className='animate-bounce'>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section
        ref={aboutRef}
        className='py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300'
      >
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='text-center mb-20'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
              Über unsere Theatergruppe
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Wir sind eine kleine Gruppe von Hobbyschauspielerinnen und
              -schauspielern, die gemeinsam Theaterprojekte auf die Beine
              stellen. Unsere Gruppe gehört der Kolpingsfamilie Ramsen an.
              Gemeinsam gelingt es uns seit 2016 jährlich ein eigenes
              Theaterstück zu entwickeln und aufzuführen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'
          >
            <div className='text-center'>
              <div className='w-16 h-16 bg-[primary-100] dark:bg-[primary-900]/30 text-[primary-600] dark:text-[primary-400] rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Seit 2016
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Jährliche Eigenproduktionen mit wachsender Professionalität
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-[primary-100] dark:bg-[primary-900]/30 text-[primary-600] dark:text-[primary-400] rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Open-Air Theater
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Atmosphärische Aufführungen auf der Kolpingwiese
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-[primary-100] dark:bg-[primary-900]/30 text-[primary-600] dark:text-[primary-400] rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Kostenlos
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Freier Eintritt für alle - Kultur für jeden zugänglich
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-center'
          >
            <Link href='/about' className='btn-primary'>
              Mehr über uns erfahren
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
