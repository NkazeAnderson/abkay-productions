export type BlogMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
};

export type BlogSection = {
  id: string;
  heading?: string;
  paragraphs?: string[];
  media?: BlogMediaItem[];
  sections?: BlogSection[];
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
};
