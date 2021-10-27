export interface PodcastLinkType {
  href: string;
  title: string;
}

export interface PodcastType {
  name: string;
  imgHref: string;
  imgSrc: string;
  imgAlt: string;
  techno: boolean;
  links: PodcastLinkType[];
}

export interface PodcastProps {
  podcastInfo: PodcastType;
}
