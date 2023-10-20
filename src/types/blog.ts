type ContentExcerpt = {
  rendered: string;
  protected: boolean;
};

type LinkItem = {
  href: string;
  embeddable?: boolean;
  taxonomy?: string;
  count?: number;
  id?: number;
  name?: string;
  templated?: boolean;
};

type adjacentPost = {
  title: string;
  id: number;
};

export type Post = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: ContentExcerpt;
  excerpt: ContentExcerpt;
  author?: string;
  featured_media?: string;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: any[];
  _links: {
    self: LinkItem[];
    collection: LinkItem[];
    about: LinkItem[];
    author: LinkItem[];
    replies: LinkItem[];
    "version-history": LinkItem[];
    "predecessor-version": LinkItem[];
    "wp:featuredmedia": LinkItem[];
    "wp:attachment": LinkItem[];
    "wp:term": LinkItem[];
    curies: LinkItem[];
  };
  prevPost?: adjacentPost;
  nextPost?: adjacentPost;
};
