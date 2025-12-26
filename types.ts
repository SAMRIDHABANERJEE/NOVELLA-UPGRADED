export interface Review {
  reviewerName: string;
  rating: number; // 1-5 stars
  comment: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  synopsis: string;
  sampleContent: string; // Added sampleContent field
  reviews: Review[];
}