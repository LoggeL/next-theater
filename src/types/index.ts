export interface TimelineEntry {
  date: string
  header: string
  text: string
  image?: string
  galleryHash?: string
  newYear?: boolean
}

export interface TeamMember {
  name: string
  roles: (string | null)[]
  images: number
  placeholderAvatar?: boolean
}

export interface TechMember {
  name: string
  jobs: {
    job: string
    icon: string
  }[]
  images: number
  placeholderAvatar?: boolean
}

export interface TeamData {
  plays: string[]
  current: TeamMember[]
  former: TeamMember[]
  tech: TechMember[]
}

export interface FAQItem {
  q: string
  a: string
  button?: string
  link?: string
}

export interface GalleryImage {
  width: number
  height: number
  alt: string
  index: number
  blurhash?: string
}

export interface Gallery {
  [key: string]: GalleryImage[]
}

export interface RoleTimelineEntry {
  year: string
  play: string
  role: string
}
