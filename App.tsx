import React, { useState } from 'react';
import { BOOKS } from './constants';
import { Book, Review } from './types';

// Helper component for star ratings
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
  return <div className="flex items-center" role="img" aria-label={`${rating} out of 5 stars`}>{stars}</div>;
};

// Header Component
const Header: React.FC<{ activePage: string; onNavigate: (page: string) => void }> = ({ activePage, onNavigate }) => (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Novella</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <button
              onClick={() => onNavigate('browse')}
              className={`font-medium transition-colors ${activePage === 'browse' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              aria-current={activePage === 'browse' ? 'page' : undefined}
            >
              Browse
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('charts')}
              className={`font-medium transition-colors ${activePage === 'charts' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              aria-current={activePage === 'charts' ? 'page' : undefined}
            >
              Charts
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('community')}
              className={`font-medium transition-colors ${activePage === 'community' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              aria-current={activePage === 'community' ? 'page' : undefined}
            >
              Community
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Books & Authors..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 text-sm w-48 transition-all duration-200"
            aria-label="Search books and authors"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="User profile">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
      </div>
    </nav>
  </header>
);

// Hero Section Component
const HeroSection: React.FC = () => {
  const featuredBook = BOOKS[0]; // For simplicity, pick the first book as featured
  const featuredReview = featuredBook.reviews.length > 0 ? featuredBook.reviews.reduce((prev, current) => (prev.rating > current.rating ? prev : current)) : null;

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 to-blue-50 text-gray-900 py-16 md:py-24 px-4 overflow-hidden rounded-lg shadow-inner my-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${featuredBook.coverImage})`, filter: 'blur(8px)' }}></div>
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={featuredBook.coverImage}
            alt={`Cover of ${featuredBook.title}`}
            className="w-full max-w-xs md:max-w-none h-auto rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
            style={{ aspectRatio: '2/3' }}
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/256x384?text=No+Cover'; e.currentTarget.onerror = null; }}
            aria-label={`Featured book cover for ${featuredBook.title}`}
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Featured Review of the Week</p>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-indigo-800 drop-shadow-md">{featuredBook.title}</h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">by {featuredBook.author}</p>
          {featuredReview && (
            <blockquote className="italic text-2xl md:text-3xl font-serif text-gray-800 border-l-4 border-indigo-400 pl-4 py-2">
              "{featuredReview.comment}"
              <p className="mt-4 text-base font-sans font-semibold not-italic">- {featuredReview.reviewerName}</p>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
};


// Book Card component
const BookCard: React.FC<{ book: Book; onReadSampleClick: (book: Book) => void }> = ({ book, onReadSampleClick }) => {
  const [isSynopsisExpanded, setIsSynopsisExpanded] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const averageRating = book.reviews.reduce((acc, review) => acc + review.rating, 0) / (book.reviews.length || 1);
  const formattedAverageRating = averageRating.toFixed(1);

  // Find the highest rated review or just the first one if ratings are equal or no reviews
  const communityTakeReview = book.reviews.length > 0
    ? book.reviews.reduce((prev, current) => (prev.rating > current.rating ? prev : current), book.reviews[0])
    : null;

  const truncateSynopsis = (text: string, limit: number) => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(' ') + '...';
  };

  const synopsisLimit = 40; // Approx number of words for truncation

  const handleReadSample = () => {
    onReadSampleClick(book);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto my-8 border border-gray-100 transition-transform duration-300 hover:scale-[1.005] transform-gpu">
      {/* Book Cover */}
      <div className="lg:w-1/4 flex-shrink-0">
        <img
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          className="w-full h-72 lg:h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-t-none"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/256x384?text=No+Cover'; // Fallback image
            e.currentTarget.onerror = null;
          }}
          style={{ aspectRatio: '2/3' }}
          aria-label={`Book cover for ${book.title}`}
        />
      </div>

      {/* Book Details and Reviews */}
      <div className="lg:w-3/4 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{book.title}</h2>
          <p className="text-lg text-gray-600 mb-3">by <span className="font-semibold">{book.author}</span></p>

          <div className="flex items-center mb-4" aria-label={`Average rating ${formattedAverageRating} out of 5 stars based on ${book.reviews.length} reviews`}>
            <StarRating rating={Math.round(averageRating)} />
            <span className="ml-2 text-gray-700 text-sm">
              {formattedAverageRating} ({book.reviews.length} ratings)
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            {isSynopsisExpanded ? book.synopsis : truncateSynopsis(book.synopsis, synopsisLimit)}
            {book.synopsis.split(' ').length > synopsisLimit && (
              <button
                onClick={() => setIsSynopsisExpanded(!isSynopsisExpanded)}
                className="text-indigo-600 hover:text-indigo-800 font-medium ml-1 inline-flex items-center"
                aria-expanded={isSynopsisExpanded}
                aria-controls={`synopsis-${book.id}`}
              >
                {isSynopsisExpanded ? 'Read Less ▲' : 'Read More ▼'}
              </button>
            )}
          </p>

          {/* The Community Take */}
          {communityTakeReview && (
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-6" aria-label="A top community review">
              <p className="text-sm font-semibold text-indigo-700 mb-2">The Community Take:</p>
              <p className="italic text-gray-800 text-lg leading-relaxed mb-2">
                "{communityTakeReview.comment}"
              </p>
              <div className="flex items-center">
                <StarRating rating={communityTakeReview.rating} />
                <span className="ml-2 text-gray-600 text-sm">- {communityTakeReview.reviewerName}</span>
              </div>
            </div>
          )}
        </div>

        {/* CTAs and Reviews Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-100 gap-3">
          <div className="flex gap-3">
            <button
              onClick={handleReadSample}
              className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-md"
              aria-label={`Read sample of ${book.title}`}
            >
              Read Sample
            </button>
            {book.reviews.length > 0 && (
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="px-5 py-2 border border-indigo-300 text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition-colors shadow-sm"
                aria-expanded={showAllReviews}
                aria-controls={`full-reviews-${book.id}`}
                aria-label={`See all ${book.reviews.length} reviews for ${book.title}`}
              >
                See All {book.reviews.length} Reviews {showAllReviews ? '▲' : '→'}
              </button>
            )}
          </div>
        </div>

        {/* Full Reviews Section (Toggleable) */}
        {showAllReviews && (
          <div id={`full-reviews-${book.id}`} className="mt-6 border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">All Reviews</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar" aria-label="Full list of customer reviews">
              {book.reviews.length > 0 ? (
                book.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <p className="font-medium text-gray-800 mr-2">{review.reviewerName}</p>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-gray-700 text-sm italic leading-snug">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Book Sample Modal Component
const BookSampleModal: React.FC<{ book: Book; onClose: () => void }> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
      aria-describedby="sample-modal-description"
    >
      <div className="relative bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] flex flex-col">
        <h2 id="sample-modal-title" className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h2>
        <p className="text-lg text-gray-600 mb-4">by <span className="font-semibold">{book.author}</span></p>

        <div id="sample-modal-description" className="flex-grow overflow-y-auto pr-2 text-gray-700 leading-relaxed custom-scrollbar text-justify">
          <p className="whitespace-pre-wrap">{book.sampleContent}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-md"
            aria-label="Close book sample"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for navigation
const BrowsePage: React.FC = () => (
  <section className="container mx-auto py-8 px-4 md:px-6">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Browse All Books</h2>
    <p className="text-lg text-gray-700">This section will feature a comprehensive list of all available books, allowing users to filter and sort by various criteria like genre, publication date, and rating.</p>
    <p className="mt-4 text-gray-600 italic">More content and filtering options coming soon!</p>
  </section>
);

const ChartsPage: React.FC = () => (
  <section className="container mx-auto py-8 px-4 md:px-6">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Top Charts</h2>
    <p className="text-lg text-gray-700">Discover the most popular books, highest-rated titles, and trending authors here. Charts will be updated regularly to reflect community favorites.</p>
    <p className="mt-4 text-gray-600 italic">Dynamic charts and leaderboards are under construction!</p>
  </section>
);

const CommunityPage: React.FC = () => (
  <section className="container mx-auto py-8 px-4 md:px-6">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Community Hub</h2>
    <p className="text-lg text-gray-700">Engage with other book lovers! This section will include forums, discussion groups, and personalized recommendations based on your reading history.</p>
    <p className="mt-4 text-gray-600 italic">Join the discussion! Community features are in active development.</p>
  </section>
);


// Main App component
const App: React.FC = () => {
  const [selectedBookForSample, setSelectedBookForSample] = useState<Book | null>(null);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [activePage, setActivePage] = useState<string>('home'); // State for active page

  const handleOpenSampleModal = (book: Book) => {
    setSelectedBookForSample(book);
    setIsSampleModalOpen(true);
  };

  const handleCloseSampleModal = () => {
    setIsSampleModalOpen(false);
    setSelectedBookForSample(null);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'browse':
        return <BrowsePage />;
      case 'charts':
        return <ChartsPage />;
      case 'community':
        return <CommunityPage />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <section aria-labelledby="trending-now-heading" className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 id="trending-now-heading" className="text-3xl font-extrabold text-gray-900">Trending Now</h2>
                <div className="flex space-x-4">
                  <select className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-200" aria-label="Filter books by genre">
                    <option>Filter By: All Genres</option>
                    <option>Fantasy</option>
                    <option>Sci-Fi</option>
                    <option>Romance</option>
                  </select>
                  <select className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-200" aria-label="Sort books by criteria">
                    <option>Sort By: Highest Rated</option>
                    <option>Newest</option>
                    <option>Most Reviewed</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-8">
                {BOOKS.map((book) => (
                  <BookCard key={book.id} book={book} onReadSampleClick={handleOpenSampleModal} />
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage={activePage} onNavigate={(page) => setActivePage(page)} />

      <main className="container mx-auto py-8 px-4 md:px-6">
        {renderPageContent()}
      </main>

      <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-200 mt-16 bg-white">
        <p>&copy; {new Date().getFullYear()} Novella. All rights reserved.</p>
        <p className="mt-1">Designed with <span className="text-red-500" aria-hidden="true">&hearts;</span> by a world-class frontend engineer.</p>
      </footer>

      {isSampleModalOpen && selectedBookForSample && (
        <BookSampleModal book={selectedBookForSample} onClose={handleCloseSampleModal} />
      )}
    </div>
  );
};

export default App;