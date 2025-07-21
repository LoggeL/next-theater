'use client'

import { useEffect } from 'react'

export default function YouTubePage() {
  useEffect(() => {
    // Redirect to YouTube channel
    window.location.href =
      'https://www.youtube.com/channel/UCA1pyTuhsday0yKmwVmlOcw'
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-red-600 text-white'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4'></div>
        <p className='text-lg'>Weiterleitung zu unserem YouTube-Kanal...</p>
        <a
          href='https://www.youtube.com/channel/UCA1pyTuhsday0yKmwVmlOcw'
          className='inline-block mt-4 text-red-200 hover:text-white underline'
        >
          Direkt zum YouTube-Kanal
        </a>
      </div>
    </div>
  )
}
