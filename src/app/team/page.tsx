'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import teamData from '@/lib/data/team.json'

export default function TeamPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [techRef, techInView] = useInView({
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
              Unser Team
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Lernen Sie die Gesichter hinter unseren Theaterstücken kennen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Team */}
      <section
        ref={ref}
        className='section-padding bg-white dark:bg-gray-900 transition-colors duration-300'
      >
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
              Aktuelles Team
            </h2>

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {teamData.current.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className='group'
                >
                  <Link href={`/team/${encodeURIComponent(member.name)}`}>
                    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6 transition-transform duration-300 hover:scale-105 cursor-pointer'>
                      {member.placeholderAvatar ? (
                        <div className='aspect-portrait relative rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center'>
                          <div className='text-center text-gray-600 dark:text-gray-300'>
                            <svg
                              className='w-16 h-16 mx-auto mb-4'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                              />
                            </svg>
                            <p className='text-sm font-medium'>{member.name}</p>
                          </div>
                        </div>
                      ) : (
                        <div className='aspect-portrait relative rounded-lg overflow-hidden mb-4 shadow-lg'>
                          <Image
                            src={`/img/team/avatar/${member.name}.jpg`}
                            alt={member.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                      )}

                      <h3 className='font-bold text-center text-gray-900 dark:text-white group-hover:text-[primary-600] dark:group-hover:text-[primary-400] transition-colors text-lg'>
                        {member.name}
                      </h3>
                      <p className='text-xs text-[primary-600] dark:text-[primary-400] text-center mt-1 font-medium'>
                        Profil ansehen →
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Team */}
      <section
        ref={techRef}
        className='section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300'
      >
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
              Technik Team
            </h2>

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial='hidden'
              animate={techInView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {teamData.tech.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className='bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6'
                >
                  <Link href={`/team/${encodeURIComponent(member.name)}`}>
                    <div className='cursor-pointer group'>
                      {member.placeholderAvatar ? (
                        <div className='aspect-portrait relative rounded-lg overflow-hidden mb-4 shadow-lg bg-gradient-to-br from-[primary-200] to-[primary-300] dark:from-[primary-800] dark:to-[primary-700] flex items-center justify-center'>
                          <div className='text-center text-[primary-700] dark:text-[primary-300]'>
                            <svg
                              className='w-16 h-16 mx-auto mb-4'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                              />
                            </svg>
                            <p className='text-sm font-medium'>{member.name}</p>
                          </div>
                        </div>
                      ) : (
                        <div className='aspect-portrait relative rounded-lg overflow-hidden mb-4 shadow-lg'>
                          <Image
                            src={`/img/team/avatar/${member.name}.jpg`}
                            alt={member.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                      )}

                      <h3 className='font-bold text-center text-gray-900 dark:text-white mb-2 group-hover:text-[primary-600] dark:group-hover:text-[primary-400] transition-colors'>
                        {member.name}
                      </h3>

                      <div className='space-y-1'>
                        {member.jobs.map((job, jobIndex) => (
                          <p
                            key={jobIndex}
                            className='text-sm text-gray-600 dark:text-gray-300 text-center'
                          >
                            {job.job}
                          </p>
                        ))}
                      </div>

                      <p className='text-xs text-[primary-600] dark:text-[primary-400] text-center mt-2 font-medium'>
                        Profil ansehen →
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
