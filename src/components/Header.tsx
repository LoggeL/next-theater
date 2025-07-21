'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useDarkMode } from '@/lib/contexts/DarkModeContext'

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Über Uns', href: '/about' },
  { name: 'Galerie', href: '/gallery' },
  { name: 'Team', href: '/team' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className='bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 sticky top-0 z-50 transition-colors duration-300'>
      <div className='container-custom'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3'>
            <Image
              src='/logo.png'
              alt='Kolping Theater Logo'
              width={80}
              height={64}
              className='h-12 md:h-16 w-auto object-contain'
            />
            <div className='hidden sm:block'>
              <h1 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white'>
                Kolping Theater
              </h1>
              <p className='text-xs md:text-sm text-gray-600 dark:text-gray-300'>
                Ramsen
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-700 dark:text-gray-200 hover:text-[primary-500] dark:hover:text-[primary-400] font-medium transition-colors duration-200 relative group'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[primary-500] dark:bg-[primary-400] transition-all duration-200 group-hover:w-full'></span>
              </Link>
            ))}
          </nav>

          {/* Social Links and Dark Mode Toggle */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link
              href='/youtube'
              className='text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors'
              aria-label='YouTube'
            >
              <FontAwesomeIcon icon={faYoutube} className='w-5 h-5' />
            </Link>
            <Link
              href='/instagram'
              className='text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
              aria-label={
                isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDarkMode ? (
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
              aria-label={
                isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDarkMode ? (
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </button>

            <button
              type='button'
              className='p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-[primary-500] dark:hover:text-[primary-400] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle mobile menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700'
            >
              <div className='py-4 space-y-2'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-[primary-500] dark:hover:text-[primary-400] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className='flex items-center justify-center space-x-6 px-4 py-2 border-t dark:border-gray-700'>
                  <Link
                    href='/youtube'
                    className='text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors'
                    aria-label='YouTube'
                  >
                    <FontAwesomeIcon icon={faYoutube} className='w-6 h-6' />
                  </Link>
                  <Link
                    href='/instagram'
                    className='text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors'
                    aria-label='Instagram'
                  >
                    <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
