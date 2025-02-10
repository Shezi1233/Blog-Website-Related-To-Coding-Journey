import React from 'react';
import { Star } from 'lucide-react';

interface CommentProps {
  comments: {
    name: string;
    picture: string;
    comment: string;
    rating: number; // Rating out of 5
  }[];
}

const Comments: React.FC<CommentProps> = ({ comments }) => {
  return (
    <div className="bg-gray-900 text-gray-300 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">User Feedback</h2>

      {/* User Pictures Section */}
      <div className="flex overflow-x-auto space-x-4 mb-8 p-4 bg-gray-800 rounded-lg">
        {comments.map((comment, index) => (
          <img
            key={index}
            src={comment.picture}
            alt={comment.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
          />
        ))}
      </div>

      {/* Comments Section */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg"
          >
            {/* User Picture */}
            <img
              src={comment.picture}
              alt={comment.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
            />

            {/* Comment Content */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white">{comment.name}</h3>
              <p className="text-sm mt-2">{comment.comment}</p>

              {/* Rating Section */}
              <div className="flex items-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < comment.rating ? 'text-yellow-500' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
