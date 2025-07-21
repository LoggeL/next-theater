'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { TimelineEntry } from '@/types'
import timelineData from '@/lib/data/timeline.json'

export default function TimelineComponent() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  // Process timeline data to add year markers
  const reversedTimeline = [...timelineData].reverse()
  const processedTimeline = reversedTimeline.map((entry, index) => {
    const year = entry.date.split(' ')[1] || entry.date.split(' ')[0]
    const prevYear =
      index > 0
        ? reversedTimeline[index - 1].date.split(' ')[1] ||
          reversedTimeline[index - 1].date.split(' ')[0]
        : null

    return {
      ...entry,
      newYear: year !== prevYear,
      year,
    }
  })

  return (
    <section
      ref={ref}
      className='section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='container-custom'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
            Unsere Chronik
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Von den ersten Ideen bis zu unseren neuesten Produktionen - die
            Geschichte unserer Theatergruppe.
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          {processedTimeline.map((entry, index) => {
            const [itemRef, itemInView] = useInView({
              threshold: 0.2,
              triggerOnce: true,
              rootMargin: '50px 0px',
            })

            return (
              <motion.div
                key={index}
                ref={itemRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  itemInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: 0.1 }}
                className='relative'
              >
                {/* Year Header */}
                {entry.newYear && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                      itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-center mb-8'
                  >
                    <div className='inline-block bg-[primary-500] dark:bg-[primary-600] text-white px-6 py-2 rounded-full font-bold text-lg'>
                      {entry.year}
                    </div>
                  </motion.div>
                )}

                <div
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline line */}
                  <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[primary-200] dark:bg-[primary-700]'></div>

                  {/* Timeline dot */}
                  <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[primary-500] dark:bg-[primary-400] rounded-full border-4 border-white dark:border-gray-800 shadow-lg'></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <motion.div
                      className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 md:p-8 transition-colors duration-300'
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        itemInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className='flex items-center mb-4'>
                        <div className='bg-[primary-100] dark:bg-[primary-900]/30 text-[primary-600] dark:text-[primary-400] px-3 py-1 rounded-full text-sm font-medium'>
                          {entry.date}
                        </div>
                      </div>

                      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                        {entry.header}
                      </h3>

                      <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>
                        {entry.text}
                      </p>

                      {entry.image && (
                        <motion.div
                          className='mt-4'
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={
                            itemInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.95 }
                          }
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {entry.galleryHash ? (
                            <Link href={`/gallery/${entry.galleryHash}`}>
                              <div className='aspect-video relative rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/30 cursor-pointer transition-transform duration-300 hover:scale-105 group'>
                                <Image
                                  src={`/img/${entry.image}`}
                                  alt={entry.header}
                                  fill
                                  className='object-cover'
                                />
                                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium'>
                                    Galerie ansehen →
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <div className='aspect-video relative rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/30'>
                              <Image
                                src={`/img/${entry.image}`}
                                alt={entry.header}
                                fill
                                className='object-cover'
                              />
                            </div>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
