export interface FactsType {
  source: string;
  name: string;
  height: number;
}

export interface PagesType {
  name: string;
  src: string;
  remixDownloads: boolean;
  djMixDownloads: boolean;
  techno: boolean;
  facts: FactsType[];
}

export interface RoutesProps {
  pages: PagesType[];
}
