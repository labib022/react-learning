import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  const handleClear = () => {
    setName('');
    setSubmittedName('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">
          Enter Your Name
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-between space-x-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="flex-1 px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-red-600 transition"
            >
              Clear
            </button>
          </div>
        </form>

        <p className="mt-6 text-lg font-semibold text-gray-800">
          {submittedName
            ? `Hello, ${submittedName}! 👋`
            : 'Your name will appear here...'}
        </p>
      </div>
    </div>
  );
}

export default NameForm;
