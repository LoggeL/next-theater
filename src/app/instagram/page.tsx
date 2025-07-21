'use client'

import { useEffect } from 'react'

export default function InstagramPage() {
  useEffect(() => {
    // Redirect to Instagram
    window.location.href = 'https://www.instagram.com/kolpingjugend_ramsen/'
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4'></div>
        <p className='text-lg'>Weiterleitung zu unserem Instagram-Profil...</p>
        <a
          href='https://www.instagram.com/kolpingjugend_ramsen/'
          className='inline-block mt-4 text-pink-200 hover:text-white underline'
        >
          Direkt zu Instagram
        </a>
      </div>
    </div>
  )
}
