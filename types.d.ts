type Headline = {
  source: [Object];
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: string;
  content: null;
};

type Article = {
  source: { id: null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
