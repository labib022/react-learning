import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Like Button</h1>

        <button
          onClick={() => setLikes(likes + 1)}
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition"
        >
          👍 Like
        </button>

        <p className="mt-4 text-lg font-semibold text-gray-800">
          Likes: {likes}
        </p>
      </div>
    </div>
  );
}

export default LikeButton;
