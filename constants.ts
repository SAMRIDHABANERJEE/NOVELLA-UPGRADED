import { Book } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Alchemist\'s Secret',
    author: 'Elara Vance',
    coverImage: 'https://picsum.photos/id/10/256/384', // Changed from Unsplash
    synopsis: 'In a world where magic intertwines with science, a young alchemist discovers a secret that could either save humanity or plunge it into eternal darkness. A journey through ancient ruins and modern marvels awaits.',
    reviews: [
      {
        reviewerName: 'Alice Johnson',
        rating: 5,
        comment: 'Absolutely captivating! The world-building is phenomenal, and the characters are so engaging. A must-read for fantasy lovers.',
      },
      {
        reviewerName: 'Bob Williams',
        rating: 4,
        comment: 'A solid read with a unique blend of genres. The pacing was a bit slow in the middle, but the ending made it all worthwhile.',
      },
      {
        reviewerName: 'Charlie Brown',
        rating: 5,
        comment: 'One of the best books I\'ve read this year! Couldn\'t put it down.',
      },
    ],
  },
  {
    id: '2',
    title: 'Echoes in the Void',
    author: 'Kaelen Thorne',
    coverImage: 'https://picsum.photos/id/20/256/384', // Changed from Unsplash
    synopsis: 'A lone starship captain, haunted by the loss of his crew, picks up a mysterious signal from an uncharted nebula. What he finds there challenges the very fabric of reality and his understanding of the universe.',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        comment: 'Intriguing sci-fi with philosophical depth. Kept me thinking long after I finished it.',
      },
      {
        reviewerName: 'Eve Davis',
        rating: 3,
        comment: 'Good concept, but some parts felt rushed. The alien contact was well-done though.',
      },
      {
        reviewerName: 'Frank White',
        rating: 5,
        comment: 'A true masterpiece of science fiction! The ending was mind-blowing.',
      },
    ],
  },
  {
    id: '3',
    title: 'The Silent Garden',
    author: 'Isabelle Dubois',
    coverImage: 'https://picsum.photos/id/30/256/384', // Changed from Unsplash
    synopsis: 'In a forgotten manor house, a young historian uncovers a hidden garden that blossoms only under the moonlight. As she delves into its secrets, she discovers a tragic love story spanning centuries.',
    reviews: [
      {
        reviewerName: 'Grace Kim',
        rating: 5,
        comment: 'Beautifully written and incredibly moving. A poignant romance with a touch of mystery.',
      },
      {
        reviewerName: 'Henry Wilson',
        rating: 4,
        comment: 'Charming and atmospheric. Perfect for a cozy evening read.',
      },
      {
        reviewerName: 'Ivy Stone',
        rating: 4,
        comment: 'Loved the historical elements and the evocative descriptions. A very touching story.',
      },
    ],
  },
  {
    id: '4',
    title: 'Chronicles of the Ember Coast',
    author: 'Jian Li',
    coverImage: 'https://picsum.photos/id/40/256/384', // Changed from Unsplash
    synopsis: 'An epic fantasy saga about warring kingdoms, ancient prophecies, and a young warrior destined to unite a fractured land. Full of dragons, magic, and political intrigue.',
    reviews: [
      {
        reviewerName: 'Karen Green',
        rating: 5,
        comment: 'Epic! The world-building is rich, and the battles are thrilling. Can\'t wait for the next book!',
      },
      {
        reviewerName: 'Liam Miller',
        rating: 4,
        comment: 'A strong start to a promising series. A bit dense at times, but rewarding.',
      },
      {
        reviewerName: 'Mia Chen',
        rating: 5,
        comment: 'Everything I love in fantasy! Complex characters and a grand adventure.',
      },
    ],
  },
];