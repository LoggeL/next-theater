'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface MasonryGridProps {
  images: Array<{
    src: string
    alt: string
    description: string
  }>
  onImageClick: (index: number) => void
  inView: boolean
}

export default function MasonryGrid({
  images,
  onImageClick,
  inView,
}: MasonryGridProps) {
  // Define different aspect ratios for masonry effect
  const aspectRatios = [
    'aspect-square', // 1:1
    'aspect-[4/3]', // 4:3
    'aspect-[3/4]', // 3:4 (portrait)
    'aspect-[5/4]', // 5:4
    'aspect-[4/5]', // 4:5 (portrait)
    'aspect-[16/9]', // 16:9
    'aspect-[9/16]', // 9:16 (portrait)
  ]

  return (
    <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 sm:gap-6'>
      {images.map((image, index) => {
        // Cycle through aspect ratios for variety
        const aspectRatio = aspectRatios[index % aspectRatios.length]

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className='group cursor-pointer break-inside-avoid mb-4 sm:mb-6'
            onClick={() => onImageClick(index)}
          >
            <div
              className={`relative rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl dark:group-hover:shadow-gray-900/50 ${aspectRatio}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-110'
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 right-4'>
                  <p
                    className='text-white text-sm font-medium overflow-hidden text-ellipsis'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
