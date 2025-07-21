'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { FAQItem } from '@/types'

// Import FAQ data
import faqData from '@/lib/data/faq.json'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={ref}
      className='section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='container-custom'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
            Häufig gestellte Fragen
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Alle wichtigen Informationen zu unseren Aufführungen auf einen
            Blick.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='max-w-3xl mx-auto'
        >
          <div className='space-y-4'>
            {faqData.map((faq: FAQItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 overflow-hidden transition-colors duration-300'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
                >
                  <h3 className='font-semibold text-gray-900 dark:text-white pr-4'>
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className='flex-shrink-0'
                  >
                    <svg
                      className='w-5 h-5 text-gray-500 dark:text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-4'>
                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>
                          {faq.a}
                        </p>
                        {faq.button && faq.link && (
                          <Link
                            href={faq.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center space-x-2 text-[primary-600] dark:text-[primary-400] hover:text-[primary-700] dark:hover:text-[primary-300] font-medium transition-colors'
                          >
                            <span>{faq.button}</span>
                            <svg
                              className='w-4 h-4'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
