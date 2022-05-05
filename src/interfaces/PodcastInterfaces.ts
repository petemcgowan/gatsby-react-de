export interface PodcastLinkType {
  href: string
  title: string
  imgSrc: string
  imgText: string
}

export interface PodcastType {
  name: string
  imgHref: string
  imgSrc: string
  imgAlt: string
  techno: boolean
  links: PodcastLinkType[]
}

export interface PodcastProps {
  podcastInfo: PodcastType
}
