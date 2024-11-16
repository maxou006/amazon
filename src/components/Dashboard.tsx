import React from 'react';
import { 
  Star, 
  MessageCircle, 
  TrendingUp, 
  AlertTriangle,
  Users,
  BarChart3,
  Mail,
  Clock
} from 'lucide-react';
import StatsCard from './StatsCard';
import ReviewsList from './ReviewsList';
import TrendChart from './TrendChart';
import { mockStats, mockReviews } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Review Management Dashboard</h1>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Send Review Requests
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Generate Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Average Rating"
            value={mockStats.averageRating.toFixed(1)}
            icon={<Star className="w-6 h-6 text-yellow-500" />}
            trend={+5}
          />
          <StatsCard
            title="Total Reviews"
            value={mockStats.totalReviews.toString()}
            icon={<MessageCircle className="w-6 h-6 text-blue-500" />}
            trend={+12}
          />
          <StatsCard
            title="Response Rate"
            value={`${mockStats.responseRate}%`}
            icon={<Clock className="w-6 h-6 text-green-500" />}
            trend={-2}
          />
          <StatsCard
            title="Pending Responses"
            value={mockStats.pendingResponses.toString()}
            icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
            trend={+3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Review Trends</h2>
              <TrendChart />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Reviewers</h2>
              <div className="space-y-4">
                {/* Top reviewers list would go here */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="font-medium text-gray-900">John D.</p>
                      <p className="text-sm text-gray-500">12 reviews</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Reviews</h2>
            <ReviewsList reviews={mockReviews} />
          </div>
        </div>
      </div>
    </div>
  );
}