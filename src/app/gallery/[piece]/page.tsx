import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import picsData from '@/lib/data/pics.json'
import MasonryGrid from '@/components/MasonryGrid'
import ClientGalleryPage from './ClientGalleryPage'

interface GalleryPageProps {
  params: Promise<{
    piece: string
  }>
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

// Generate static params for all gallery pieces
export async function generateStaticParams() {
  return Object.keys(picsData).map((piece) => ({
    piece: piece,
  }))
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { piece } = await params
  const descriptions = picsData[piece as keyof typeof picsData]

  if (!descriptions) {
    notFound()
  }

  const galleryName = galleryNames[piece] || piece
  const imageCount = descriptions.length

  return (
    <ClientGalleryPage
      piece={piece}
      galleryName={galleryName}
      imageCount={imageCount}
      descriptions={descriptions}
    />
  )
}
