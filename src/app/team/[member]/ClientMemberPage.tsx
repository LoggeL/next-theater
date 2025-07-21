'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import TeamMemberSlideshow from '@/components/TeamMemberSlideshow'
import { RoleTimelineEntry } from '@/types'

interface ClientMemberPageProps {
  member: any
  memberType: string
  rolesTimeline: RoleTimelineEntry[]
}

export default function ClientMemberPage({
  member,
  memberType,
  rolesTimeline,
}: ClientMemberPageProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className='min-h-screen'>
      {/* Header */}
      <section className='section-padding bg-gradient-to-br from-[primary-50] to-[primary-100] dark:from-[primary-900]/20 dark:to-[primary-800]/20 transition-colors duration-300'>
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8'
          >
            <Link
              href='/team'
              className='inline-flex items-center text-[primary-600] dark:text-[primary-400] hover:text-[primary-700] dark:hover:text-[primary-300] mb-4'
            >
              <svg
                className='w-4 h-4 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Zurück zum Team
            </Link>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
              {member.name}
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              {memberType === 'current' ? 'Schauspieler:in' : 'Technik Team'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Member Details */}
      <section
        ref={ref}
        className='section-padding bg-white dark:bg-gray-900 transition-colors duration-300'
      >
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Photo Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
                Fotos
              </h2>
              {member.placeholderAvatar ? (
                <div className='aspect-portrait bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-xl flex items-center justify-center shadow-lg dark:shadow-gray-900/30'>
                  <div className='text-center text-gray-600 dark:text-gray-300'>
                    <svg
                      className='w-24 h-24 mx-auto mb-4'
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
                    <p className='text-lg font-medium'>{member.name}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Noch keine Fotos verfügbar
                    </p>
                  </div>
                </div>
              ) : (
                <TeamMemberSlideshow
                  memberName={member.name}
                  imageCount={member.images}
                  className='rounded-xl'
                  aspectRatio='portrait'
                />
              )}
            </motion.div>

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
                Informationen
              </h2>

              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    Name
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {member.name}
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    Bereich
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {memberType === 'current' ? 'Schauspiel' : 'Technik'}
                  </p>
                </div>

                {memberType === 'tech' && member.jobs && (
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                      Aufgaben
                    </h3>
                    <div className='space-y-1'>
                      {member.jobs.map((job: any, index: number) => (
                        <p
                          key={index}
                          className='text-gray-600 dark:text-gray-300'
                        >
                          • {job.job}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {memberType === 'current' && (
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                      Produktionen
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      {rolesTimeline.length > 0
                        ? `${rolesTimeline.length} Aufführung${
                            rolesTimeline.length > 1 ? 'en' : ''
                          }`
                        : 'Noch keine Aufführungen'}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles Timeline */}
      {memberType === 'current' && rolesTimeline.length > 0 && (
        <section className='section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300'>
          <div className='container-custom'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
                Rollen & Aufführungen
              </h2>

              <div className='max-w-4xl mx-auto'>
                <div className='relative'>
                  {/* Main timeline line */}
                  <div
                    className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[primary-200] dark:bg-[primary-700]'
                    style={{ height: `${rolesTimeline.length * 180}px` }}
                  ></div>

                  <div className='space-y-8'>
                    {rolesTimeline.reverse().map((entry, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className={`relative flex items-center ${
                          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        {/* Timeline dot */}
                        <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[primary-500] dark:bg-[primary-400] rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10'></div>

                        {/* Content */}
                        <div
                          className={`w-full md:w-5/12 ${
                            index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                          }`}
                        >
                          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 p-6'>
                            <div className='flex items-center mb-3'>
                              <span className='bg-[primary-100] dark:bg-[primary-900]/30 text-[primary-600] dark:text-[primary-400] px-3 py-1 rounded-full text-sm font-medium'>
                                {entry.year}
                              </span>
                            </div>

                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                              {entry.role}
                            </h3>

                            <p className='text-gray-600 dark:text-gray-300 font-medium'>
                              {entry.play
                                .replace(/^\d+\s+/, '')
                                .replace(/"/g, '')}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
