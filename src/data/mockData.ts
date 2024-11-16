import type { Review, Stats } from '../types';

export const mockStats: Stats = {
  totalReviews: 1284,
  averageRating: 4.2,
  responseRate: 92,
  pendingResponses: 15,
  weeklyTrend: 5.7
};

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: 'p1',
    rating: 5,
    title: 'Excellent product!',
    content: 'This product exceeded my expectations. The quality is outstanding and delivery was quick.',
    reviewerName: 'John Doe',
    date: '2024-03-10',
    sentiment: 'positive',
    status: 'responded',
    verified: true
  },
  {
    id: '2',
    productId: 'p2',
    rating: 2,
    title: 'Disappointing quality',
    content: 'The product arrived damaged and did not meet the description provided.',
    reviewerName: 'Jane Smith',
    date: '2024-03-09',
    sentiment: 'negative',
    status: 'pending',
    verified: true
  },
  {
    id: '3',
    productId: 'p1',
    rating: 4,
    title: 'Good but could be better',
    content: 'Overall satisfied with the purchase but there is room for improvement.',
    reviewerName: 'Mike Johnson',
    date: '2024-03-08',
    sentiment: 'neutral',
    status: 'published',
    verified: false
  }
];