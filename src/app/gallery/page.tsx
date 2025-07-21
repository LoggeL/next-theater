'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import picsData from '@/lib/data/pics.json'

export default function GalleryPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const galleries = [
    'hell',
    'nexus',
    'sagenhaft',
    'freiheit',
    'goldfieber',
    'maleficarum',
    'kristall',
    'dystopia',
    'bluttribut',
    'kloster',
    'proben',
  ]

  const galleryNames = [
    'Eine höllische Herausforderung',
    'Nexus',
    'Sagenhaft',
    'Traum von Freiheit',
    'Goldfieber',
    'Malleus Maleficarum',
    'Kristall der Träume',
    'Dystopia',
    'Bluttribut',
    'Verrat im Kloster',
    'Probenimpressionen',
  ]

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
              Galerie
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Impressionen aus unseren Theaterstücken von 2017 bis heute
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        ref={ref}
        className='section-padding bg-white dark:bg-gray-900 transition-colors duration-300'
      >
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {galleries.map((gallery, index) => (
              <Link key={gallery} href={`/gallery/${gallery}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group cursor-pointer'
                >
                  <div className='aspect-portrait relative rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/30 transition-transform duration-300 group-hover:scale-105'>
                    <Image
                      src={`/img/banners/${gallery}.jpg`}
                      alt={galleryNames[index]}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <h3 className='text-white font-bold text-lg mb-2'>
                          {galleryNames[index]}
                        </h3>
                        <p className='text-gray-200 text-sm'>
                          Galerie ansehen →
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-[primary-600] dark:group-hover:text-[primary-400] transition-colors'>
                      {galleryNames[index]}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 mt-1'>
                      {picsData[gallery as keyof typeof picsData]?.length || 0}{' '}
                      Foto
                      {(picsData[gallery as keyof typeof picsData]?.length ||
                        0) > 1
                        ? 's'
                        : ''}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
