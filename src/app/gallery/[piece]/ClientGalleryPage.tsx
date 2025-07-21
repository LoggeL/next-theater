'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import picsData from '@/lib/data/pics.json'
import MasonryGrid from '@/components/MasonryGrid'

interface ClientGalleryPageProps {
  piece: string
  galleryName: string
  imageCount: number
  descriptions: string[]
}

const galleryNames: { [key: string]: string } = {
  hell: 'Eine höllische Herausforderung',
  nexus: 'Nexus',
  sagenhaft: 'Sagenhaft',
  freiheit: 'Traum von Freiheit',
  goldfieber: 'Goldfieber',
  maleficarum: 'Malleus Maleficarum',
  kristall: 'Kristall der Träume',
  dystopia: 'Dystopia',
  bluttribut: 'Bluttribut',
  kloster: 'Verrat im Kloster',
  proben: 'Probenimpressionen',
}

export default function ClientGalleryPage({
  piece,
  galleryName,
  imageCount,
  descriptions,
}: ClientGalleryPageProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [imageLoading, setImageLoading] = useState(false)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    setImageLoading(false)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    setImageLoading(true)
    setCurrentImage((prev) => (prev + 1) % imageCount)
  }, [imageCount])

  const prevImage = useCallback(() => {
    setImageLoading(true)
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount)
  }, [imageCount])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [lightboxOpen, closeLightbox, nextImage, prevImage])

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
              href='/gallery'
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
              Zurück zur Galerie
            </Link>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
              {galleryName}
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              {imageCount} Foto{imageCount > 1 ? 's' : ''}
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
          <MasonryGrid
            images={descriptions.map((description, index) => ({
              src: `/img/gallery_thumbs/${piece}/Bild (${index + 1}).jpg`,
              alt: description,
              description: description,
            }))}
            onImageClick={openLightbox}
            inView={inView}
          />
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
          <div className='relative max-w-7xl max-h-full'>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 text-white hover:text-gray-300 z-10'
              aria-label='Close lightbox'
            >
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10'
              aria-label='Previous image'
            >
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
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10'
              aria-label='Next image'
            >
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
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>

            {/* Main image */}
            <div className='relative'>
              {imageLoading && (
                <div className='flex items-center justify-center w-full h-96 bg-gray-800 rounded-lg'>
                  <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white'></div>
                </div>
              )}
              <Image
                src={`/img/gallery_full/${piece}/Bild (${
                  currentImage + 1
                }).jpg`}
                alt={descriptions[currentImage]}
                width={1200}
                height={800}
                className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-300 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setImageLoading(false)}
                onLoadStart={() => setImageLoading(true)}
              />

              {/* Image info */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                <p className='text-white text-lg font-medium mb-2'>
                  {descriptions[currentImage]}
                </p>
                <p className='text-gray-300 text-sm'>
                  {currentImage + 1} von {imageCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Navigation */}
      <section className='section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300'>
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-center'
          >
            <h2 className='text-2xl font-bold mb-8 text-gray-900 dark:text-white'>
              Weitere Galerien
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
              {Object.keys(picsData)
                .filter((p) => p !== piece)
                .slice(0, 6)
                .map((otherPiece) => (
                  <Link key={otherPiece} href={`/gallery/${otherPiece}`}>
                    <div className='group'>
                      <div className='aspect-portrait relative rounded-lg overflow-hidden shadow-md dark:shadow-gray-900/30 transition-transform duration-300 group-hover:scale-105'>
                        <Image
                          src={`/img/banners/${otherPiece}.jpg`}
                          alt={galleryNames[otherPiece] || otherPiece}
                          fill
                          className='object-cover'
                        />
                        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                          <span className='text-white text-xs font-medium text-center px-2'>
                            {galleryNames[otherPiece] || otherPiece}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className='mt-8'>
              <Link href='/gallery' className='btn-primary'>
                Alle Galerien ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
