import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Counter App</h1>
        <p className="text-xl font-semibold mb-6">Count: {count}</p>

        <div className="flex justify-between space-x-3">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
