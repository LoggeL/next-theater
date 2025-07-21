'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface TeamMemberSlideshowProps {
  memberName: string
  imageCount: number
  className?: string
  aspectRatio?: 'square' | 'portrait'
}

export default function TeamMemberSlideshow({
  memberName,
  imageCount,
  className = '',
  aspectRatio = 'portrait',
}: TeamMemberSlideshowProps) {
  const [currentImage, setCurrentImage] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying || imageCount <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev >= imageCount ? 1 : prev + 1))
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [imageCount, isAutoPlaying])

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentImage((prev) => (prev >= imageCount ? 1 : prev + 1))
  }

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentImage((prev) => (prev <= 1 ? imageCount : prev - 1))
  }

  const goToImage = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentImage(index)
  }

  if (imageCount <= 1) {
    // Single image - no slideshow needed
    return (
      <div
        className={`relative overflow-hidden shadow-lg dark:shadow-gray-900/30 ${
          aspectRatio === 'square' ? 'aspect-square' : 'aspect-portrait'
        } ${className}`}
      >
        <Image
          src={`/img/team/avatar/${memberName}.jpg`}
          alt={memberName}
          fill
          className='object-cover'
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden shadow-lg dark:shadow-gray-900/30 group ${
        aspectRatio === 'square' ? 'aspect-square' : 'aspect-portrait'
      } ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Images */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='absolute inset-0'
        >
          <Image
            src={`/img/team/avatar/${memberName}${
              currentImage === 1 ? '' : currentImage
            }.jpg`}
            alt={`${memberName} - Photo ${currentImage}`}
            fill
            className='object-cover'
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className='absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <button
          onClick={(e) => prevImage(e)}
          className='bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-10'
          aria-label='Previous image'
        >
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
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button
          onClick={(e) => nextImage(e)}
          className='bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-10'
          aria-label='Next image'
        >
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
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
        {Array.from({ length: imageCount }, (_, index) => (
          <button
            key={index + 1}
            onClick={(e) => goToImage(index + 1, e)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentImage === index + 1 ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className='absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none'>
        {currentImage}/{imageCount}
      </div>
    </div>
  )
}
