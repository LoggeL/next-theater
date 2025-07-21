import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='bg-[#1a1a1a] dark:bg-gray-950 text-white transition-colors duration-300'>
      <div className='container-custom section-padding'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-[#d4af37] dark:text-[primary-400]'>
              Kolpingsfamilie Ramsen
            </h3>
            <p className='text-gray-300 dark:text-gray-300 mb-4'>
              Theatergruppe der Kolpingsfamilie Ramsen. Seit 2016 bringen wir
              eigene Produktionen mit mittelalterlichen, Fantasy- und
              dystopischen Themen auf die Bühne.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='/youtube'
                className='text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors'
                aria-label='YouTube'
              >
                <FontAwesomeIcon icon={faYoutube} className='w-6 h-6' />
              </Link>
              <Link
                href='/instagram'
                className='text-gray-400 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors'
                aria-label='Instagram'
              >
                <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-[#d4af37] dark:text-[primary-400]'>
              Navigation
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors'
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors'
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors'
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href='/team'
                  className='text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors'
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-[#d4af37] dark:text-[primary-400]'>
              Veranstaltungsort
            </h3>
            <div className='text-gray-300 dark:text-gray-300 space-y-2'>
              <p>Kolpingwiese Ramsen</p>
              <p>Klosterhof 7</p>
              <p>67317 Ramsen</p>
              <Link
                href='https://maps.app.goo.gl/4crMgUbbeFeVaHkj7'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-2 text-[primary-400] dark:text-[primary-400] hover:text-[primary-300] dark:hover:text-[primary-300] transition-colors'
              >
                → Google Maps
              </Link>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-400'>
          <p>
            © {new Date().getFullYear()} Kolpingsfamilie Ramsen. Alle Rechte
            vorbehalten.
          </p>
          <p className='mt-2 text-sm'>
            Eintritt frei • Freiwillige Spenden willkommen
          </p>
        </div>
      </div>
    </footer>
  )
}
